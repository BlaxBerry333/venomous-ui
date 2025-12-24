"use client";

import React, { createContext, useContext, useMemo, useRef } from "react";

import type { TabsOrientation, TabsSize, TabsVariant } from "@/core/types";

// ============================================================================
// Context 1: Value Context (frequently changing - only value)
// ============================================================================
interface TabsValueContextValue {
  value: string | null;
}

const TabsValueContext = createContext<TabsValueContextValue | null>(null);

// ============================================================================
// Context 2: API Context (rarely changes - onChange and ID generators)
// ============================================================================
interface TabsApiContextValue {
  onChange: (value: string) => void;
  getTabId: (value: string) => string;
  getPanelId: (value: string) => string;
}

const TabsApiContext = createContext<TabsApiContextValue | null>(null);

// ============================================================================
// Context 3: Config Context (infrequently changes - configuration options)
// ============================================================================
interface TabsConfigContextValue {
  variant: TabsVariant;
  size: TabsSize;
  orientation: TabsOrientation;
  disabled: boolean;
}

const TabsConfigContext = createContext<TabsConfigContextValue | null>(null);

// ============================================================================
// Hooks
// ============================================================================

/**
 * Hook to access current tab value
 * Only re-renders when value changes
 */
// eslint-disable-next-line react-refresh/only-export-components
export function useTabsValue(): string | null {
  const context = useContext(TabsValueContext);
  if (context === null) {
    throw new Error("Tabs compound components must be used within <Tabs>");
  }
  return context.value;
}

/**
 * Hook to access Tabs API (onChange, getTabId, getPanelId)
 * Stable reference - rarely causes re-renders
 */
// eslint-disable-next-line react-refresh/only-export-components
export function useTabsApi(): TabsApiContextValue {
  const context = useContext(TabsApiContext);
  if (!context) {
    throw new Error("Tabs compound components must be used within <Tabs>");
  }
  return context;
}

/**
 * Hook to access Tabs config (variant, size, orientation, disabled)
 * Only re-renders when config changes
 */
// eslint-disable-next-line react-refresh/only-export-components
export function useTabsConfig(): TabsConfigContextValue {
  const context = useContext(TabsConfigContext);
  if (!context) {
    throw new Error("Tabs compound components must be used within <Tabs>");
  }
  return context;
}

/**
 * Combined hook for backwards compatibility
 * @deprecated Use useTabsValue, useTabsApi, useTabsConfig separately for better performance
 */
// eslint-disable-next-line react-refresh/only-export-components
export function useTabsContext() {
  const value = useTabsValue();
  const api = useTabsApi();
  const config = useTabsConfig();

  return {
    value,
    ...api,
    ...config,
  };
}

// ============================================================================
// Provider
// ============================================================================

interface TabsProviderProps {
  value: string | null;
  onChange: (value: string) => void;
  variant: TabsVariant;
  size: TabsSize;
  orientation: TabsOrientation;
  disabled: boolean;
  id: string;
  children: React.ReactNode;
}

/**
 * Tabs context provider with split contexts for optimal performance
 *
 * Performance optimization:
 * - ValueContext: Only contains `value`, updates frequently
 * - ApiContext: Contains stable callbacks, rarely updates
 * - ConfigContext: Contains config props, updates only when props change
 *
 * This split ensures that:
 * - TabsList only subscribes to ConfigContext (orientation)
 * - TabsTab subscribes to ValueContext + ApiContext
 * - TabsPanel subscribes to ValueContext + ApiContext
 *
 * When value changes, only components using ValueContext re-render,
 * not all context consumers.
 */
export function TabsProvider({
  value,
  onChange,
  variant,
  size,
  orientation,
  disabled,
  id,
  children,
}: TabsProviderProps) {
  // Use ref to keep stable reference to id for callback functions
  const idRef = useRef(id);
  idRef.current = id;

  // Value context - only value, changes frequently
  const valueContextValue = useMemo<TabsValueContextValue>(() => ({ value }), [value]);

  // API context - stable callbacks using refs
  const apiContextValue = useMemo<TabsApiContextValue>(
    () => ({
      onChange,
      getTabId: (tabValue: string) => `${idRef.current}-tab-${tabValue}`,
      getPanelId: (tabValue: string) => `${idRef.current}-panel-${tabValue}`,
    }),
    [onChange],
  );

  // Config context - configuration options
  const configContextValue = useMemo<TabsConfigContextValue>(
    () => ({ variant, size, orientation, disabled }),
    [variant, size, orientation, disabled],
  );

  return (
    <TabsConfigContext.Provider value={configContextValue}>
      <TabsApiContext.Provider value={apiContextValue}>
        <TabsValueContext.Provider value={valueContextValue}>{children}</TabsValueContext.Provider>
      </TabsApiContext.Provider>
    </TabsConfigContext.Provider>
  );
}
