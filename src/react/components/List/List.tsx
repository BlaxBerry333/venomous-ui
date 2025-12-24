"use client";

import React from "react";

import clsx from "clsx";

import { COMPONENT_NAMES, LIST_CSS_CLASS_NAMES } from "@/core/constants";
import { generateListCSS } from "@/core/css";
import { useComputedStyle, useStyleInjection } from "@/react/hooks";

import type { ListElement, ListProps } from "./List.types";

/**
 * List component
 * Container for list items with optional dividers and spacing
 */
const List = React.memo(
  React.forwardRef(
    <E extends React.ElementType = "ul">(
      { as, spacing = "none", divider = false, children, className, style, ...restProps }: ListProps<E>,
      ref: React.ForwardedRef<ListElement>,
    ) => {
      const Element = (as || "ul") as React.ElementType;

      /**
       * Inject component CSS
       */
      const LIST_CSS: string = generateListCSS();
      useStyleInjection(COMPONENT_NAMES.List, LIST_CSS);

      /**
       * Get computed style from theme callback
       */
      const computedStyle = useComputedStyle(style);

      /**
       * Get component className
       */
      const listClassName: string = clsx(
        LIST_CSS_CLASS_NAMES.root.className,
        divider && LIST_CSS_CLASS_NAMES.divider.className,
        spacing === "none" && LIST_CSS_CLASS_NAMES.spacingNone.className,
        spacing === "small" && LIST_CSS_CLASS_NAMES.spacingSmall.className,
        spacing === "medium" && LIST_CSS_CLASS_NAMES.spacingMedium.className,
        spacing === "large" && LIST_CSS_CLASS_NAMES.spacingLarge.className,
        className,
      );

      return (
        <Element ref={ref} className={listClassName} style={computedStyle} {...restProps}>
          {children}
        </Element>
      );
    },
  ),
) as <E extends React.ElementType = "ul">(
  props: ListProps<E> & { ref?: React.ForwardedRef<ListElement> },
) => React.ReactElement | null;

(List as React.FC).displayName = "List";

export default List;
