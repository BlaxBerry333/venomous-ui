"use client";

import React from "react";

import clsx from "clsx";

import { BADGE_CSS_CLASS_NAMES, COMPONENT_NAMES } from "@/core/constants";
import { generateBadgeCSS } from "@/core/css";
import { useComputedStyle, useStyleInjection } from "@/react/hooks";
import type { BadgeElement, BadgeProps } from "./Badge.types";

const Badge = React.memo(
  React.forwardRef<BadgeElement, BadgeProps>(
    (
      {
        content,
        variant = "standard",
        size = "medium",
        color = "error",
        max = 99,
        showZero = false,
        invisible: invisibleProp = false,
        anchorOrigin = "top-right",
        ariaLabel,
        className,
        style,
        children,
        ...restProps
      },
      ref,
    ) => {
      /**
       * Inject component CSS
       */
      const BADGE_CSS: string = generateBadgeCSS();
      useStyleInjection(COMPONENT_NAMES.Badge, BADGE_CSS);

      /**
       * Compute style (supports theme callback)
       */
      const computedStyle = useComputedStyle(style);

      /**
       * Compute display content
       */
      const displayContent = React.useMemo(() => {
        if (variant === "dot") {
          return null;
        }

        if (typeof content === "number") {
          if (content > max) {
            return `${max}+`;
          }
          return content;
        }

        return content;
      }, [content, max, variant]);

      /**
       * Compute invisible state
       */
      const invisible = React.useMemo(() => {
        if (invisibleProp) {
          return true;
        }

        // For standard variant, hide if content is 0 and showZero is false
        if (variant === "standard" && !showZero) {
          if (content === 0 || content === "0") {
            return true;
          }
          // Hide if no content at all
          if (content === null || content === undefined || content === "") {
            return true;
          }
        }

        return false;
      }, [invisibleProp, variant, content, showZero]);

      /**
       * Build root className
       */
      const rootClassName: string = clsx(
        BADGE_CSS_CLASS_NAMES.root.className,
        invisible && BADGE_CSS_CLASS_NAMES.invisible.className,
        variant === "standard" && BADGE_CSS_CLASS_NAMES.variantStandard.className,
        variant === "dot" && BADGE_CSS_CLASS_NAMES.variantDot.className,
        size === "small" && BADGE_CSS_CLASS_NAMES.sizeSmall.className,
        size === "medium" && BADGE_CSS_CLASS_NAMES.sizeMedium.className,
        size === "large" && BADGE_CSS_CLASS_NAMES.sizeLarge.className,
        color === "default" && BADGE_CSS_CLASS_NAMES.colorDefault.className,
        color === "primary" && BADGE_CSS_CLASS_NAMES.colorPrimary.className,
        color === "success" && BADGE_CSS_CLASS_NAMES.colorSuccess.className,
        color === "error" && BADGE_CSS_CLASS_NAMES.colorError.className,
        color === "warning" && BADGE_CSS_CLASS_NAMES.colorWarning.className,
        color === "info" && BADGE_CSS_CLASS_NAMES.colorInfo.className,
        anchorOrigin === "top-right" && BADGE_CSS_CLASS_NAMES.anchorTopRight.className,
        anchorOrigin === "top-left" && BADGE_CSS_CLASS_NAMES.anchorTopLeft.className,
        anchorOrigin === "bottom-right" && BADGE_CSS_CLASS_NAMES.anchorBottomRight.className,
        anchorOrigin === "bottom-left" && BADGE_CSS_CLASS_NAMES.anchorBottomLeft.className,
        className,
      );

      return (
        <span ref={ref} className={rootClassName} style={computedStyle} {...restProps}>
          {children}
          <span
            className={BADGE_CSS_CLASS_NAMES.badge.className}
            role="status"
            aria-label={ariaLabel}
            aria-hidden={invisible || undefined}
          >
            {displayContent}
          </span>
        </span>
      );
    },
  ),
);

Badge.displayName = COMPONENT_NAMES.Badge;

export default Badge;
