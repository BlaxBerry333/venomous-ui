import React from "react";
import type { ListItemElement, ListItemProps } from "./List.types";
/**
 * List.Item component
 * Individual list item with optional start/end elements
 */
declare const ListItem: <E extends React.ElementType = "li">(props: ListItemProps<E> & {
    ref?: React.ForwardedRef<ListItemElement>;
}) => React.ReactElement | null;
export default ListItem;
//# sourceMappingURL=ListItem.d.ts.map