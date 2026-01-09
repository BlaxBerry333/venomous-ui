import ListRoot from "./List";
import ListCollapse from "./ListCollapse";
import ListItem from "./ListItem";
import ListItemText from "./ListItemText";

/**
 * List compound component with Item, ItemText and Collapse sub-components
 *
 * @example
 * // Basic usage
 * <List>
 *   <List.Item>
 *     <List.ItemText primary="Item 1" />
 *   </List.Item>
 * </List>
 *
 * @example
 * // Collapsible nested list
 * const [open, setOpen] = useState(false);
 * <List>
 *   <List.Item onClick={() => setOpen(!open)}>
 *     <List.ItemText primary="Parent" />
 *   </List.Item>
 *   <List.Collapse open={open}>
 *     <List.Item depth={1}>
 *       <List.ItemText primary="Child" />
 *     </List.Item>
 *   </List.Collapse>
 * </List>
 */
const List = Object.assign(ListRoot, {
  Item: ListItem,
  ItemText: ListItemText,
  Collapse: ListCollapse,
});

export type { ListCollapseProps, ListItemDepthLevel, ListItemProps, ListItemTextProps, ListProps } from "./List.types";
export { List };
