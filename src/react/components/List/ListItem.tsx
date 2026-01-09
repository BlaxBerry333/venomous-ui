"use client";

import React from "react";

import clsx from "clsx";

import { LIST_CSS_CLASS_NAMES } from "@/core/constants";
import { useComputedStyle } from "@/react/hooks";

import type { ListItemElement, ListItemProps } from "./List.types";

/**
 * List.Item component
 * Individual list item with optional start/end elements
 */
const ListItem = React.memo(
  React.forwardRef(
    <E extends React.ElementType = "li">(
      {
        as,
        selected = false,
        disabled = false,
        onClick,
        StartElement,
        EndElement,
        children,
        className,
        style,
        ...restProps
      }: ListItemProps<E>,
      ref: React.ForwardedRef<ListItemElement>,
    ) => {
      const Element = (as || "li") as React.ElementType;

      /**
       * Get computed style from theme callback
       */
      const computedStyle = useComputedStyle(style);

      /**
       * Determine if item is interactive
       */
      const isInteractive = Boolean(onClick) && !disabled;

      /**
       * Get component className
       */
      const itemClassName: string = clsx(
        LIST_CSS_CLASS_NAMES.item.className,
        isInteractive && LIST_CSS_CLASS_NAMES.itemInteractive.className,
        selected && LIST_CSS_CLASS_NAMES.itemSelected.className,
        disabled && LIST_CSS_CLASS_NAMES.itemDisabled.className,
        className,
      );

      /**
       * Handle click
       */
      const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        if (!disabled && onClick) {
          onClick(event);
        }
      };

      return (
        <Element
          ref={ref}
          className={itemClassName}
          style={computedStyle}
          onClick={onClick ? handleClick : undefined}
          tabIndex={isInteractive ? 0 : undefined}
          aria-disabled={disabled || undefined}
          {...restProps}
        >
          {StartElement && <span className={LIST_CSS_CLASS_NAMES.itemStartElement.className}>{StartElement}</span>}
          <span className={LIST_CSS_CLASS_NAMES.itemContent.className}>{children}</span>
          {EndElement && <span className={LIST_CSS_CLASS_NAMES.itemEndElement.className}>{EndElement}</span>}
        </Element>
      );
    },
  ),
) as <E extends React.ElementType = "li">(
  props: ListItemProps<E> & { ref?: React.ForwardedRef<ListItemElement> },
) => React.ReactElement | null;

(ListItem as React.FC).displayName = "ListItem";

export default ListItem;
