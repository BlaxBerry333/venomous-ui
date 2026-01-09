import React from "react";
import type { ListCollapseProps } from "./List.types";
/**
 * List.Collapse component
 * Collapsible container for nested list items with smooth height animation
 *
 * Uses CSS Grid-based animation (grid-template-rows: 0fr -> 1fr) for
 * smooth height transitions without JavaScript.
 *
 * @example
 * ```tsx
 * const [open, setOpen] = useState(false);
 *
 * <List>
 *   <List.Item
 *     onClick={() => setOpen(!open)}
 *     EndElement={<ChevronIcon rotate={open ? 180 : 0} />}
 *   >
 *     <List.ItemText primary="Parent Item" />
 *   </List.Item>
 *   <List.Collapse open={open}>
 *     <List.Item indent={1}>
 *       <List.ItemText primary="Child Item 1" />
 *     </List.Item>
 *     <List.Item indent={1}>
 *       <List.ItemText primary="Child Item 2" />
 *     </List.Item>
 *   </List.Collapse>
 * </List>
 * ```
 */
declare const ListCollapse: React.NamedExoticComponent<ListCollapseProps & React.RefAttributes<HTMLDivElement>>;
export default ListCollapse;
//# sourceMappingURL=ListCollapse.d.ts.map