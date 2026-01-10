"use client";

import React from "react";

import clsx from "clsx";

import { COMPONENT_NAMES, TRANSITION_COLLAPSE_CSS_CLASS_NAMES } from "@/core/constants";
import { generateTransitionCollapseCSS } from "@/core/css";
import { useComputedStyle, useStyleInjection } from "@/react/hooks";

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
const Collapse = React.memo(
  React.forwardRef(
    <E extends React.ElementType = "div">(
      { as: __as, open = false, children, className, style, ...restProps }: CollapseProps<E>,
      ref: React.ForwardedRef<CollapseElement>,
    ) => {
      /**
       * Determine element (default: div for generic usage)
       */
      const Element = (__as || "div") as React.ElementType;

      /**
       * Inject component CSS
       */
      const COLLAPSE_CSS: string = generateTransitionCollapseCSS();
      useStyleInjection(COMPONENT_NAMES.TransitionCollapse, COLLAPSE_CSS);

      /**
       * Get computed style from theme callback
       */
      const computedStyle = useComputedStyle(style);

      /**
       * Get className (handles animation and overflow)
       */
      const collapseClassName: string = clsx(
        TRANSITION_COLLAPSE_CSS_CLASS_NAMES.base.className,
        open && TRANSITION_COLLAPSE_CSS_CLASS_NAMES.open.className,
        className,
      );

      return (
        <Element ref={ref} className={collapseClassName} style={computedStyle} aria-hidden={!open} {...restProps}>
          <div className={TRANSITION_COLLAPSE_CSS_CLASS_NAMES.content.className}>{children}</div>
        </Element>
      );
    },
  ),
) as <E extends React.ElementType = "div">(
  props: CollapseProps<E> & { ref?: React.ForwardedRef<CollapseElement> },
) => React.ReactElement | null;

(Collapse as React.FC).displayName = "Collapse";

export default Collapse;
