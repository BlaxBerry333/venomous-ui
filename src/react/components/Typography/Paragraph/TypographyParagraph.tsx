"use client";

import React from "react";

import clsx from "clsx";

import { COMPONENT_NAMES, TYPOGRAPHY_PARAGRAPH_CSS_CLASS_NAMES } from "@/core/constants";
import { generateTypographyParagraphCSS } from "@/core/css";
import { useComputedStyle, useStyleInjection } from "@/react/hooks";
import { TypographyParagraphElement, TypographyParagraphProps } from "./TypographyParagraph.types";

const TypographyParagraph = React.memo(
  React.forwardRef<TypographyParagraphElement, TypographyParagraphProps>(
    ({ className, style, ellipsis = 0, children, ...restProps }, ref) => {
      /**
       * Inject component CSS
       */
      const TYPOGRAPHY_PARAGRAPH_CSS: string = generateTypographyParagraphCSS();
      useStyleInjection(COMPONENT_NAMES.TypographyParagraph, TYPOGRAPHY_PARAGRAPH_CSS);

      /**
       * Get computed style from theme callback
       */
      const computedStyle = useComputedStyle(style);

      /**
       * Merge ellipsis style if needed
       */
      const finalStyle = React.useMemo(() => {
        if (ellipsis <= 0) return computedStyle;

        return {
          ...computedStyle,
          display: "-webkit-box",
          WebkitLineClamp: ellipsis,
          WebkitBoxOrient: "vertical" as const,
          overflow: "hidden",
        };
      }, [computedStyle, ellipsis]);

      /**
       * Get component className
       */
      const paragraphClassName = clsx(
        TYPOGRAPHY_PARAGRAPH_CSS_CLASS_NAMES.base.className,
        ellipsis > 0 && TYPOGRAPHY_PARAGRAPH_CSS_CLASS_NAMES.ellipsis.className,
        className,
      );

      return (
        <p ref={ref} className={paragraphClassName} style={finalStyle} {...restProps}>
          {children}
        </p>
      );
    },
  ),
);

TypographyParagraph.displayName = COMPONENT_NAMES.TypographyParagraph;

export default TypographyParagraph;
