"use client";

import React from "react";

import clsx from "clsx";

import { COMPONENT_NAMES, TRANSITION_FADE_CSS_CLASS_NAMES } from "@/core/constants";
import { generateTransitionFadeCSS } from "@/core/css";
import { useComputedStyle, useStyleInjection } from "@/react/hooks";

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
const Fade = React.memo(
  React.forwardRef(
    <E extends React.ElementType = "div">(
      { as: __as, open = false, children, className, style, ...restProps }: FadeProps<E>,
      ref: React.ForwardedRef<FadeElement>,
    ) => {
      /**
       * Determine element (default: div for generic usage)
       */
      const Element = (__as || "div") as React.ElementType;

      /**
       * Inject component CSS
       */
      const FADE_CSS: string = generateTransitionFadeCSS();
      useStyleInjection(COMPONENT_NAMES.TransitionFade, FADE_CSS);

      /**
       * Get computed style from theme callback
       */
      const computedStyle = useComputedStyle(style);

      /**
       * Get className (handles animation)
       */
      const fadeClassName: string = clsx(
        TRANSITION_FADE_CSS_CLASS_NAMES.base.className,
        open && TRANSITION_FADE_CSS_CLASS_NAMES.open.className,
        className,
      );

      return (
        <Element ref={ref} className={fadeClassName} style={computedStyle} aria-hidden={!open} {...restProps}>
          {children}
        </Element>
      );
    },
  ),
) as <E extends React.ElementType = "div">(
  props: FadeProps<E> & { ref?: React.ForwardedRef<FadeElement> },
) => React.ReactElement | null;

(Fade as React.FC).displayName = "Fade";

export default Fade;
