import ListRoot from "./List";
import ListItem from "./ListItem";
import ListItemText from "./ListItemText";

/**
 * List compound component with Item and ItemText sub-components
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
 * // Collapsible nested list (use Transition.Collapse)
 * const [open, setOpen] = useState(false);
 * <List>
 *   <List.Item onClick={() => setOpen(!open)}>
 *     <List.ItemText primary="Parent" />
 *   </List.Item>
 *   <Transition.Collapse as="li" open={open}>
 *     <List spacing="small">
 *       <List.Item style={{ paddingLeft: 32 }}>
 *         <List.ItemText primary="Child" />
 *       </List.Item>
 *     </List>
 *   </Transition.Collapse>
 * </List>
 */
const List = Object.assign(ListRoot, {
  Item: ListItem,
  ItemText: ListItemText,
});

export type { ListItemProps, ListItemTextProps, ListProps } from "./List.types";
export { List };
