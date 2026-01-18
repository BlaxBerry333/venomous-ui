import React from "react";
import type { TabsTabProps } from "./Tabs.types";
/**
 * Tabs.Tab component
 * Individual tab button
 *
 * Performance optimizations:
 * - Uses split contexts to minimize re-renders
 * - useTabsValue: re-renders only when active tab changes
 * - useTabsApi: stable reference, rarely causes re-renders
 * - useTabsConfig: re-renders only when config changes
 * - React.memo with proper deps prevents unnecessary re-renders
 */
declare const TabsTab: React.NamedExoticComponent<TabsTabProps & React.RefAttributes<HTMLButtonElement>>;
export default TabsTab;
//# sourceMappingURL=TabsTab.d.ts.map