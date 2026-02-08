import { createContext, forwardRef, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";

import { COMPONENT_NAMES, CSS_CLASSES } from "@/core/constants";
import { useMergeRefs } from "@/react/hooks";
import type { TTabsContextValue, TTabsListProps, TTabsPanelProps, TTabsProps, TTabsTabProps } from "./Tabs.types";

const classes = CSS_CLASSES.tabs;

// Context for sharing state between Tabs components
const TabsContext = createContext<TTabsContextValue | null>(null);

function useTabsContext() {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("Tabs compound components must be used within a Tabs component");
  }
  return context;
}

/**
 * Tabs root component
 */
export const Tabs = forwardRef<HTMLDivElement, TTabsProps>(function Tabs(
  {
    defaultValue,
    value: controlledValue,
    onValueChange,
    orientation = "horizontal",
    variant = "line",
    unmountStrategy = "keepMounted",
    className = "",
    children,
    ...rest
  },
  ref,
) {
  // Internal state for uncontrolled mode
  const [internalValue, setInternalValue] = useState(defaultValue ?? "");

  // Determine if controlled or uncontrolled
  const isControlled = controlledValue !== undefined;
  const currentValue = isControlled ? controlledValue : internalValue;

  // Tab registry for keyboard navigation
  const tabsRef = useRef<Map<string, { disabled: boolean }>>(new Map());

  const handleValueChange = useCallback(
    (newValue: string) => {
      if (!isControlled) {
        setInternalValue(newValue);
      }
      onValueChange?.(newValue);
    },
    [isControlled, onValueChange],
  );

  const registerTab = useCallback((value: string, disabled: boolean) => {
    tabsRef.current.set(value, { disabled });
  }, []);

  const unregisterTab = useCallback((value: string) => {
    tabsRef.current.delete(value);
  }, []);

  const getTabs = useCallback(() => {
    return Array.from(tabsRef.current.entries()).map(([value, { disabled }]) => ({
      value,
      disabled,
    }));
  }, []);

  const contextValue = useMemo<TTabsContextValue>(
    () => ({
      value: currentValue,
      onValueChange: handleValueChange,
      orientation,
      variant,
      unmountStrategy,
      registerTab,
      unregisterTab,
      getTabs,
    }),
    [currentValue, handleValueChange, orientation, variant, unmountStrategy, registerTab, unregisterTab, getTabs],
  );

  const rootClassNames = [classes.root, classes.orientations[orientation], classes.variants[variant], className]
    .filter(Boolean)
    .join(" ");

  return (
    <TabsContext.Provider value={contextValue}>
      <div ref={ref} className={rootClassNames} {...rest}>
        {children}
      </div>
    </TabsContext.Provider>
  );
});

Tabs.displayName = COMPONENT_NAMES.Tabs;

/**
 * Tabs.List component - contains tab buttons
 */
export const TabsList = forwardRef<HTMLDivElement, TTabsListProps>(function TabsList(
  { className = "", children, ...rest },
  ref,
) {
  const { orientation, getTabs, onValueChange, value } = useTabsContext();
  const internalRef = useRef<HTMLDivElement>(null);
  const mergedRef = useMergeRefs(internalRef, ref);

  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      const tabs = getTabs();
      const enabledTabs = tabs.filter((t) => !t.disabled);
      if (enabledTabs.length === 0) return;

      const currentIndex = enabledTabs.findIndex((t) => t.value === value);
      let nextIndex = currentIndex;

      const isHorizontal = orientation === "horizontal";
      const prevKey = isHorizontal ? "ArrowLeft" : "ArrowUp";
      const nextKey = isHorizontal ? "ArrowRight" : "ArrowDown";

      switch (event.key) {
        case prevKey:
          event.preventDefault();
          nextIndex = currentIndex <= 0 ? enabledTabs.length - 1 : currentIndex - 1;
          break;
        case nextKey:
          event.preventDefault();
          nextIndex = currentIndex >= enabledTabs.length - 1 ? 0 : currentIndex + 1;
          break;
        case "Home":
          event.preventDefault();
          nextIndex = 0;
          break;
        case "End":
          event.preventDefault();
          nextIndex = enabledTabs.length - 1;
          break;
        default:
          return;
      }

      if (nextIndex !== currentIndex && enabledTabs[nextIndex]) {
        onValueChange(enabledTabs[nextIndex].value);
        // Focus the new tab button within this tablist (scoped to avoid cross-instance conflicts)
        const tabButton = internalRef.current?.querySelector(
          `[data-tabs-value="${CSS.escape(enabledTabs[nextIndex].value)}"]`,
        ) as HTMLElement | null;
        tabButton?.focus();
      }
    },
    [getTabs, value, orientation, onValueChange],
  );

  const listClassNames = [classes.list, className].filter(Boolean).join(" ");

  return (
    <div
      ref={mergedRef}
      className={listClassNames}
      role="tablist"
      aria-orientation={orientation}
      onKeyDown={handleKeyDown}
      {...rest}
    >
      {children}
    </div>
  );
});

TabsList.displayName = `${COMPONENT_NAMES.Tabs}.List`;

/**
 * Tabs.Tab component - individual tab button
 */
export const TabsTab = forwardRef<HTMLButtonElement, TTabsTabProps>(function TabsTab(
  { value: tabValue, disabled = false, className = "", children, ...rest },
  ref,
) {
  const { value, onValueChange, registerTab, unregisterTab } = useTabsContext();
  const panelId = `tabs-panel-${tabValue}`;
  const tabId = `tabs-tab-${tabValue}`;

  const isActive = value === tabValue;

  // Register/unregister tab for keyboard navigation
  useEffect(() => {
    registerTab(tabValue, disabled);
    return () => unregisterTab(tabValue);
  }, [tabValue, disabled, registerTab, unregisterTab]);

  const handleClick = useCallback(() => {
    /* v8 ignore next -- defensive: disabled buttons don't fire click events */
    if (!disabled) {
      onValueChange(tabValue);
    }
  }, [disabled, onValueChange, tabValue]);

  const tabClassNames = [
    classes.tab,
    isActive ? classes.tabStates.active : "",
    disabled ? classes.tabStates.disabled : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      ref={ref}
      type="button"
      id={tabId}
      className={tabClassNames}
      role="tab"
      aria-selected={isActive}
      aria-controls={panelId}
      tabIndex={isActive ? 0 : -1}
      disabled={disabled}
      data-tabs-value={tabValue}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </button>
  );
});

TabsTab.displayName = `${COMPONENT_NAMES.Tabs}.Tab`;

/**
 * Tabs.Panel component - tab content panel
 */
export const TabsPanel = forwardRef<HTMLDivElement, TTabsPanelProps>(function TabsPanel(
  { value: panelValue, className = "", children, ...rest },
  ref,
) {
  const { value, unmountStrategy } = useTabsContext();
  const panelId = `tabs-panel-${panelValue}`;
  const tabId = `tabs-tab-${panelValue}`;

  const isActive = value === panelValue;

  // Determine if panel should be rendered based on unmount strategy
  const shouldRender = unmountStrategy === "unmountOnHide" ? isActive : true;

  if (!shouldRender) {
    return null;
  }

  const panelClassNames = [classes.panel, className].filter(Boolean).join(" ");

  return (
    <div
      ref={ref}
      id={panelId}
      className={panelClassNames}
      role="tabpanel"
      aria-labelledby={tabId}
      hidden={!isActive}
      tabIndex={0}
      {...rest}
    >
      {children}
    </div>
  );
});

TabsPanel.displayName = `${COMPONENT_NAMES.Tabs}.Panel`;

// Compound component exports
export const TabsCompound = Object.assign(Tabs, {
  List: TabsList,
  Tab: TabsTab,
  Panel: TabsPanel,
});
