import React from "react";
import type { TabsProps } from "./Tabs.types";
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
declare const TabsRoot: React.NamedExoticComponent<TabsProps & React.RefAttributes<HTMLDivElement>>;
export default TabsRoot;
//# sourceMappingURL=Tabs.d.ts.map