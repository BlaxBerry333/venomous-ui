import React from "react";
import type { ListElement, ListProps } from "./List.types";
/**
 * List component
 * Container for list items with optional dividers and spacing
 */
declare const List: <E extends React.ElementType = "ul">(props: ListProps<E> & {
    ref?: React.ForwardedRef<ListElement>;
}) => React.ReactElement | null;
export default List;
//# sourceMappingURL=List.d.ts.map