/**
 * Transition compound component with Collapse sub-component
 *
 * @example
 * // Basic collapse usage
 * const [open, setOpen] = useState(false);
 *
 * <button onClick={() => setOpen(!open)}>Toggle</button>
 * <Transition.Collapse open={open}>
 *   <div>Collapsible content</div>
 * </Transition.Collapse>
 *
 * @example
 * // With List component
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
declare const Transition: {
    Collapse: <E extends React.ElementType = "div">(props: import("./Collapse.types").CollapseProps<E> & {
        ref?: React.ForwardedRef<import("./Collapse.types").CollapseElement>;
    }) => React.ReactElement | null;
};
export type { CollapseElement, CollapseProps } from "./Collapse.types";
export { Transition };
//# sourceMappingURL=index.d.ts.map