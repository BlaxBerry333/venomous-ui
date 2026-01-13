import React from "react";
import type { CollapseElement, CollapseProps } from "./Collapse.types";
/**
 * Transition.Collapse component
 * Pure collapse animation container with smooth CSS Grid-based height transition.
 *
 * Uses CSS Grid-based animation (grid-template-rows: 0fr -> 1fr) for
 * smooth height transitions without JavaScript.
 *
 * @example
 * ```tsx
 * // Basic usage
 * const [open, setOpen] = useState(false);
 *
 * <button onClick={() => setOpen(!open)}>Toggle</button>
 * <Transition.Collapse open={open}>
 *   <div>Collapsible content here</div>
 * </Transition.Collapse>
 * ```
 *
 * @example
 * ```tsx
 * // With nested List
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
 * ```
 */
declare const Collapse: <E extends React.ElementType = "div">(props: CollapseProps<E> & {
    ref?: React.ForwardedRef<CollapseElement>;
}) => React.ReactElement | null;
export default Collapse;
//# sourceMappingURL=Collapse.d.ts.map