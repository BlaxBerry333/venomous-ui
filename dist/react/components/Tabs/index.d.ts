/**
 * Tabs compound component with List, Tab, and Panel sub-components
 */
declare const Tabs: import("react").NamedExoticComponent<import("./Tabs.types").TabsProps & import("react").RefAttributes<HTMLDivElement>> & {
    List: import("react").NamedExoticComponent<import("./Tabs.types").TabsListProps & import("react").RefAttributes<HTMLDivElement>>;
    Tab: import("react").NamedExoticComponent<import("./Tabs.types").TabsTabProps & import("react").RefAttributes<HTMLButtonElement>>;
    Panel: import("react").NamedExoticComponent<import("./Tabs.types").TabsPanelProps & import("react").RefAttributes<HTMLDivElement>>;
};
export type { TabsListProps, TabsPanelProps, TabsProps, TabsTabProps } from "./Tabs.types";
export { Tabs };
//# sourceMappingURL=index.d.ts.map