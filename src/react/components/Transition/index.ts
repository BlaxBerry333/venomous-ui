import Collapse from "./Collapse";
import Fade from "./Fade";

/**
 * Transition compound component with animation sub-components
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
 * // Basic fade usage
 * const [open, setOpen] = useState(false);
 *
 * <button onClick={() => setOpen(!open)}>Toggle</button>
 * <Transition.Fade open={open}>
 *   <div>Fading content</div>
 * </Transition.Fade>
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
const Transition = {
  Collapse,
  Fade,
};

export type { CollapseElement, CollapseProps } from "./Collapse.types";
export type { FadeElement, FadeProps } from "./Fade.types";
export { Transition };
