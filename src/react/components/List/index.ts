import ListRoot from "./List";
import ListItem from "./ListItem";
import ListItemText from "./ListItemText";

/**
 * List compound component with Item and ItemText sub-components
 */
const List = Object.assign(ListRoot, {
  Item: ListItem,
  ItemText: ListItemText,
});

export type { ListItemProps, ListItemTextProps, ListProps } from "./List.types";
export { List };
