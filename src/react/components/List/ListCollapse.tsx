"use client";

import React from "react";

import clsx from "clsx";

import { LIST_CSS_CLASS_NAMES } from "@/core/constants";
import { useComputedStyle } from "@/react/hooks";

import type { ListCollapseElement, ListCollapseProps } from "./List.types";

/**
 * List.Collapse component
 * Collapsible container for nested list items with smooth height animation
 *
 * Uses CSS Grid-based animation (grid-template-rows: 0fr -> 1fr) for
 * smooth height transitions without JavaScript.
 *
 * @example
 * ```tsx
 * const [open, setOpen] = useState(false);
 *
 * <List>
 *   <List.Item
 *     onClick={() => setOpen(!open)}
 *     EndElement={<ChevronIcon rotate={open ? 180 : 0} />}
 *   >
 *     <List.ItemText primary="Parent Item" />
 *   </List.Item>
 *   <List.Collapse open={open}>
 *     <List.Item indent={1}>
 *       <List.ItemText primary="Child Item 1" />
 *     </List.Item>
 *     <List.Item indent={1}>
 *       <List.ItemText primary="Child Item 2" />
 *     </List.Item>
 *   </List.Collapse>
 * </List>
 * ```
 */
const ListCollapse = React.memo(
  React.forwardRef<ListCollapseElement, ListCollapseProps>(
    ({ open = false, children, className, style, ...restProps }, ref) => {
      /**
       * Get computed style from theme callback
       */
      const computedStyle = useComputedStyle(style);

      /**
       * Get component className
       */
      const collapseClassName: string = clsx(
        LIST_CSS_CLASS_NAMES.collapse.className,
        open && LIST_CSS_CLASS_NAMES.collapseOpen.className,
        className,
      );

      return (
        <div ref={ref} className={collapseClassName} style={computedStyle} {...restProps}>
          <div className={LIST_CSS_CLASS_NAMES.collapseContent.className}>{children}</div>
        </div>
      );
    },
  ),
);

ListCollapse.displayName = "ListCollapse";

export default ListCollapse;
