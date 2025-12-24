import TabsRoot from "./Tabs";
import TabsList from "./TabsList";
import TabsPanel from "./TabsPanel";
import TabsTab from "./TabsTab";

/**
 * Tabs compound component with List, Tab, and Panel sub-components
 */
const Tabs = Object.assign(TabsRoot, {
  List: TabsList,
  Tab: TabsTab,
  Panel: TabsPanel,
});

export type { TabsListProps, TabsPanelProps, TabsProps, TabsTabProps } from "./Tabs.types";
export { Tabs };
