import React from "react";
import type { TabsOrientation, TabsSize, TabsVariant } from "../../../core/types";
interface TabsApiContextValue {
    onChange: (value: string) => void;
    getTabId: (value: string) => string;
    getPanelId: (value: string) => string;
}
interface TabsConfigContextValue {
    variant: TabsVariant;
    size: TabsSize;
    orientation: TabsOrientation;
    disabled: boolean;
}
/**
 * Hook to access current tab value
 * Only re-renders when value changes
 */
export declare function useTabsValue(): string | null;
/**
 * Hook to access Tabs API (onChange, getTabId, getPanelId)
 * Stable reference - rarely causes re-renders
 */
export declare function useTabsApi(): TabsApiContextValue;
/**
 * Hook to access Tabs config (variant, size, orientation, disabled)
 * Only re-renders when config changes
 */
export declare function useTabsConfig(): TabsConfigContextValue;
/**
 * Combined hook for backwards compatibility
 * @deprecated Use useTabsValue, useTabsApi, useTabsConfig separately for better performance
 */
export declare function useTabsContext(): {
    variant: TabsVariant;
    size: TabsSize;
    orientation: TabsOrientation;
    disabled: boolean;
    onChange: (value: string) => void;
    getTabId: (value: string) => string;
    getPanelId: (value: string) => string;
    value: string | null;
};
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
export declare function TabsProvider({ value, onChange, variant, size, orientation, disabled, id, children, }: TabsProviderProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=TabsContext.d.ts.map