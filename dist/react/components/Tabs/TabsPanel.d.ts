import React from "react";
import type { TabsPanelProps } from "./Tabs.types";
/**
 * Tabs.Panel component
 * Content panel for each tab
 *
 * Performance optimizations:
 * - Uses split contexts to minimize re-renders
 * - useTabsValue: re-renders only when active tab changes
 * - useTabsApi: stable reference for ID generation
 * - Unmounts inactive panels by default for memory efficiency
 * - keepMounted option for preserving state (uses CSS visibility)
 */
declare const TabsPanel: React.NamedExoticComponent<TabsPanelProps & React.RefAttributes<HTMLDivElement>>;
export default TabsPanel;
//# sourceMappingURL=TabsPanel.d.ts.map