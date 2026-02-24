import type { TTabsListProps, TTabsPanelProps, TTabsProps, TTabsTabProps } from "./Tabs.types";
/**
 * Tabs root component
 */
export declare const Tabs: import("react").ForwardRefExoticComponent<TTabsProps & import("react").RefAttributes<HTMLDivElement>>;
/**
 * Tabs.List component - contains tab buttons
 */
export declare const TabsList: import("react").ForwardRefExoticComponent<TTabsListProps & import("react").RefAttributes<HTMLDivElement>>;
/**
 * Tabs.Tab component - individual tab button
 */
export declare const TabsTab: import("react").ForwardRefExoticComponent<TTabsTabProps & import("react").RefAttributes<HTMLButtonElement>>;
/**
 * Tabs.Panel component - tab content panel
 */
export declare const TabsPanel: import("react").ForwardRefExoticComponent<TTabsPanelProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const TabsCompound: import("react").ForwardRefExoticComponent<TTabsProps & import("react").RefAttributes<HTMLDivElement>> & {
    List: import("react").ForwardRefExoticComponent<TTabsListProps & import("react").RefAttributes<HTMLDivElement>>;
    Tab: import("react").ForwardRefExoticComponent<TTabsTabProps & import("react").RefAttributes<HTMLButtonElement>>;
    Panel: import("react").ForwardRefExoticComponent<TTabsPanelProps & import("react").RefAttributes<HTMLDivElement>>;
};
//# sourceMappingURL=Tabs.d.ts.map