import React from "react";
import type { FadeElement, FadeProps } from "./Fade.types";
/**
 * Transition.Fade component
 * Pure fade animation container with smooth opacity transition.
 *
 * Uses CSS opacity transition for smooth fade in/out animations.
 *
 * @example
 * ```tsx
 * // Basic usage
 * const [open, setOpen] = useState(false);
 *
 * <button onClick={() => setOpen(!open)}>Toggle</button>
 * <Transition.Fade open={open}>
 *   <div>Fading content here</div>
 * </Transition.Fade>
 * ```
 *
 * @example
 * ```tsx
 * // With Modal content
 * <Backdrop isOpen={isOpen}>
 *   <Transition.Fade open={isOpen}>
 *     <Card>Modal content</Card>
 *   </Transition.Fade>
 * </Backdrop>
 * ```
 */
declare const Fade: <E extends React.ElementType = "div">(props: FadeProps<E> & {
    ref?: React.ForwardedRef<FadeElement>;
}) => React.ReactElement | null;
export default Fade;
//# sourceMappingURL=Fade.d.ts.map