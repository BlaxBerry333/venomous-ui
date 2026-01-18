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