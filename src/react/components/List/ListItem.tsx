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
        depth,
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
       * Get depth class name based on level
       */
      const getDepthClassName = () => {
        switch (depth) {
          case 1:
            return LIST_CSS_CLASS_NAMES.itemDepth1.className;
          case 2:
            return LIST_CSS_CLASS_NAMES.itemDepth2.className;
          case 3:
            return LIST_CSS_CLASS_NAMES.itemDepth3.className;
          case 4:
            return LIST_CSS_CLASS_NAMES.itemDepth4.className;
          default:
            return undefined;
        }
      };

      /**
       * Get component className
       */
      const itemClassName: string = clsx(
        LIST_CSS_CLASS_NAMES.item.className,
        isInteractive && LIST_CSS_CLASS_NAMES.itemInteractive.className,
        selected && LIST_CSS_CLASS_NAMES.itemSelected.className,
        disabled && LIST_CSS_CLASS_NAMES.itemDisabled.className,
        getDepthClassName(),
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

      /**
       * Handle keyboard interaction
       */
      const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
        if (isInteractive && (event.key === "Enter" || event.key === " ")) {
          event.preventDefault();
          onClick?.(event as unknown as React.MouseEvent<HTMLElement>);
        }
      };

      return (
        <Element
          ref={ref}
          className={itemClassName}
          style={computedStyle}
          onClick={onClick ? handleClick : undefined}
          onKeyDown={isInteractive ? handleKeyDown : undefined}
          tabIndex={isInteractive ? 0 : undefined}
          aria-selected={selected || undefined}
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
