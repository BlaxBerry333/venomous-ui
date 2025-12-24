"use client";

import React from "react";

import clsx from "clsx";

import { COMPONENT_NAMES, TABS_CSS_CLASS_NAMES } from "@/core/constants";
import { generateTabsCSS } from "@/core/css";
import { useComputedStyle, useStyleInjection } from "@/react/hooks";

import type { TabsProps } from "./Tabs.types";
import { TabsProvider } from "./TabsContext";

/**
 * Tabs component
 *
 * A compound component for creating tabbed interfaces.
 * Supports controlled and uncontrolled modes, multiple variants,
 * sizes, and orientations.
 *
 * @example
 * ```tsx
 * // Uncontrolled
 * <Tabs defaultValue="tab1">
 *   <Tabs.List>
 *     <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
 *     <Tabs.Tab value="tab2">Tab 2</Tabs.Tab>
 *   </Tabs.List>
 *   <Tabs.Panel value="tab1">Content 1</Tabs.Panel>
 *   <Tabs.Panel value="tab2">Content 2</Tabs.Panel>
 * </Tabs>
 *
 * // Controlled
 * const [value, setValue] = useState("tab1");
 * <Tabs value={value} onChange={setValue}>
 *   ...
 * </Tabs>
 * ```
 */
const TabsRoot = React.memo(
  React.forwardRef<HTMLDivElement, TabsProps>(
    (
      {
        value: controlledValue,
        defaultValue,
        onChange,
        variant = "underline",
        size = "medium",
        orientation = "horizontal",
        fullWidth = false,
        disabled = false,
        children,
        className,
        style,
        ...restProps
      },
      ref,
    ) => {
      // Generate unique ID for ARIA relationships
      const generatedId = React.useId();
      const tabsId = restProps.id || generatedId;

      /**
       * inject component css
       */
      const TABS_CSS = generateTabsCSS();
      useStyleInjection(COMPONENT_NAMES.Tabs, TABS_CSS);

      /**
       * get component style
       */
      const computedStyle = useComputedStyle(style);

      /**
       * get component className
       */
      const rootClassName = clsx(
        TABS_CSS_CLASS_NAMES.root.className,
        variant === "underline" && TABS_CSS_CLASS_NAMES.variantUnderline.className,
        variant === "enclosed" && TABS_CSS_CLASS_NAMES.variantEnclosed.className,
        variant === "pills" && TABS_CSS_CLASS_NAMES.variantPills.className,
        size === "small" && TABS_CSS_CLASS_NAMES.sizeSmall.className,
        size === "medium" && TABS_CSS_CLASS_NAMES.sizeMedium.className,
        size === "large" && TABS_CSS_CLASS_NAMES.sizeLarge.className,
        orientation === "horizontal" && TABS_CSS_CLASS_NAMES.horizontal.className,
        orientation === "vertical" && TABS_CSS_CLASS_NAMES.vertical.className,
        fullWidth && TABS_CSS_CLASS_NAMES.fullWidth.className,
        disabled && TABS_CSS_CLASS_NAMES.disabled.className,
        className,
      );

      // Internal state for uncontrolled mode
      const [internalValue, setInternalValue] = React.useState<string | null>(defaultValue ?? null);

      // Determine if controlled
      const isControlled = controlledValue !== undefined;
      const activeValue = isControlled ? controlledValue : internalValue;

      /**
       * Handle tab change
       * Memoized to prevent unnecessary re-renders of context consumers
       */
      const handleChange = React.useCallback(
        (newValue: string) => {
          if (!isControlled) {
            setInternalValue(newValue);
          }
          onChange?.(newValue);
        },
        [isControlled, onChange],
      );

      return (
        <TabsProvider
          value={activeValue}
          onChange={handleChange}
          variant={variant}
          size={size}
          orientation={orientation}
          disabled={disabled}
          id={tabsId}
        >
          <div ref={ref} id={tabsId} className={rootClassName} style={computedStyle} {...restProps}>
            {children}
          </div>
        </TabsProvider>
      );
    },
  ),
);

TabsRoot.displayName = COMPONENT_NAMES.Tabs;

export default TabsRoot;
