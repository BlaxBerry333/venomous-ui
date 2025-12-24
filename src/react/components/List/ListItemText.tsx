"use client";

import React, { useMemo } from "react";

import clsx from "clsx";

import { LIST_CSS_CLASS_NAMES } from "@/core/constants";
import { useComputedStyle } from "@/react/hooks";

import type { ListItemTextElement, ListItemTextProps } from "./List.types";

/**
 * List.ItemText component
 * Text content for list items with primary and secondary text support
 */
const ListItemText = React.memo(
  React.forwardRef<ListItemTextElement, ListItemTextProps>(
    ({ primary, secondary, ellipsis = 0, children, className, style, ...restProps }, ref) => {
      /**
       * Get computed style from theme callback
       */
      const computedStyle = useComputedStyle(style);

      /**
       * Determine if ellipsis is enabled
       */
      const hasEllipsis = ellipsis > 0;

      /**
       * Get primary text styles (ellipsis + color inheritance)
       */
      const primaryStyle = useMemo(() => {
        const styles: React.CSSProperties = {};
        if (hasEllipsis) {
          styles.WebkitLineClamp = ellipsis;
        }
        if (computedStyle?.color) {
          styles.color = "inherit";
        }
        return Object.keys(styles).length > 0 ? styles : undefined;
      }, [hasEllipsis, ellipsis, computedStyle?.color]);

      /**
       * Get secondary text styles (ellipsis only, keeps its own color)
       */
      const secondaryStyle = useMemo(() => {
        if (!hasEllipsis) return undefined;
        return {
          WebkitLineClamp: ellipsis,
        } as React.CSSProperties;
      }, [hasEllipsis, ellipsis]);

      /**
       * Get component className
       */
      const textClassName: string = clsx(
        LIST_CSS_CLASS_NAMES.itemText.className,
        hasEllipsis && LIST_CSS_CLASS_NAMES.itemTextEllipsis.className,
        className,
      );

      /**
       * Render primary content (use children if primary is not provided)
       */
      const primaryContent = primary ?? children;

      return (
        <div ref={ref} className={textClassName} style={computedStyle} {...restProps}>
          {primaryContent && (
            <span className={LIST_CSS_CLASS_NAMES.itemTextPrimary.className} style={primaryStyle}>
              {primaryContent}
            </span>
          )}
          {secondary && (
            <span className={LIST_CSS_CLASS_NAMES.itemTextSecondary.className} style={secondaryStyle}>
              {secondary}
            </span>
          )}
        </div>
      );
    },
  ),
);

ListItemText.displayName = "ListItemText";

export default ListItemText;
