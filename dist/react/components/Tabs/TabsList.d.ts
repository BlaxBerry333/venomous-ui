import React from "react";
import type { TabsListProps } from "./Tabs.types";
/**
 * Tabs.List component
 * Container for tab buttons with keyboard navigation support
 *
 * Performance: Only subscribes to ConfigContext (orientation),
 * does not re-render when tab value changes.
 */
declare const TabsList: React.NamedExoticComponent<TabsListProps & React.RefAttributes<HTMLDivElement>>;
export default TabsList;
//# sourceMappingURL=TabsList.d.ts.map