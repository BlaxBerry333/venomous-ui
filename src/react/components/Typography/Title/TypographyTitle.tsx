"use client";

import React from "react";

import clsx from "clsx";

import { COMPONENT_NAMES, TYPOGRAPHY_TITLE_CSS_CLASS_NAMES } from "@/core/constants";
import { generateTypographyTitleCSS } from "@/core/css";
import { useComputedStyle, useStyleInjection } from "@/react/hooks";
import type { TypographyTitleElement, TypographyTitleProps } from "./TypographyTitle.types";

const TypographyTitle = React.memo(
  React.forwardRef<TypographyTitleElement, TypographyTitleProps>(
    ({ as: _as = "h3", className, style, children, ...restProps }, ref) => {
      const Element = _as as React.ElementType;

      /**
       * Inject component CSS
       */
      const TITLE_CSS: string = generateTypographyTitleCSS();
      useStyleInjection(COMPONENT_NAMES.TypographyTitle, TITLE_CSS);

      /**
       * Get computed style from theme callback
       */
      const computedStyle = useComputedStyle(style);

      /**
       * Get component className
       */
      const titleClassName: string = clsx(
        TYPOGRAPHY_TITLE_CSS_CLASS_NAMES.base.className,
        _as === "h1" && TYPOGRAPHY_TITLE_CSS_CLASS_NAMES.levelH1.className,
        _as === "h2" && TYPOGRAPHY_TITLE_CSS_CLASS_NAMES.levelH2.className,
        _as === "h3" && TYPOGRAPHY_TITLE_CSS_CLASS_NAMES.levelH3.className,
        _as === "h4" && TYPOGRAPHY_TITLE_CSS_CLASS_NAMES.levelH4.className,
        _as === "h5" && TYPOGRAPHY_TITLE_CSS_CLASS_NAMES.levelH5.className,
        _as === "h6" && TYPOGRAPHY_TITLE_CSS_CLASS_NAMES.levelH6.className,
        className,
      );

      return (
        <Element ref={ref} className={titleClassName} style={computedStyle} {...restProps}>
          {children}
        </Element>
      );
    },
  ),
);

TypographyTitle.displayName = COMPONENT_NAMES.TypographyTitle;

export default TypographyTitle;
