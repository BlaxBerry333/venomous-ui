/**
 * List compound component with Item and ItemText sub-components
 */
declare const List: (<E extends React.ElementType = "ul">(props: import("./List.types").ListProps<E> & {
    ref?: React.ForwardedRef<import("./List.types").ListElement>;
}) => React.ReactElement | null) & {
    Item: <E extends React.ElementType = "li">(props: import("./List.types").ListItemProps<E> & {
        ref?: React.ForwardedRef<import("./List.types").ListItemElement>;
    }) => React.ReactElement | null;
    ItemText: import("react").NamedExoticComponent<import("./List.types").ListItemTextProps & import("react").RefAttributes<HTMLDivElement>>;
};
export type { ListItemProps, ListItemTextProps, ListProps } from "./List.types";
export { List };
//# sourceMappingURL=index.d.ts.map