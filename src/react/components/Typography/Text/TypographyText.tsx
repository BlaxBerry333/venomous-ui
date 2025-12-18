"use client";

import React from "react";

import clsx from "clsx";

import { COMPONENT_NAMES, TYPOGRAPHY_TEXT_CSS_CLASS_NAMES } from "@/core/constants";
import { generateTypographyTextCSS } from "@/core/css";
import { useComputedStyle, useStyleInjection } from "@/react/hooks";
import type { TypographyTextHTMLElement, TypographyTextProps } from "./TypographyText.types";

const TypographyText = React.memo(
  React.forwardRef<TypographyTextHTMLElement, TypographyTextProps>(
    ({ as: _as = "span", className, style, children, ...restProps }, ref) => {
      const Element = _as as React.ElementType;

      /**
       * Inject component CSS
       */
      const TYPOGRAPHY_TEXT_CSS: string = generateTypographyTextCSS();
      useStyleInjection(COMPONENT_NAMES.TypographyText, TYPOGRAPHY_TEXT_CSS);

      /**
       * Get computed style from theme callback
       */
      const computedStyle = useComputedStyle(style);

      /**
       * Get component className
       */
      const textClassName: string = clsx(
        TYPOGRAPHY_TEXT_CSS_CLASS_NAMES.base.className,
        _as === "span" && undefined,
        _as === "code" && TYPOGRAPHY_TEXT_CSS_CLASS_NAMES.asCode.className,
        _as === "kbd" && TYPOGRAPHY_TEXT_CSS_CLASS_NAMES.asKbd.className,
        _as === "mark" && TYPOGRAPHY_TEXT_CSS_CLASS_NAMES.asMark.className,
        _as === "del" && TYPOGRAPHY_TEXT_CSS_CLASS_NAMES.asDel.className,
        _as === "ins" && TYPOGRAPHY_TEXT_CSS_CLASS_NAMES.asIns.className,
        _as === "small" && TYPOGRAPHY_TEXT_CSS_CLASS_NAMES.asSmall.className,
        _as === "strong" && TYPOGRAPHY_TEXT_CSS_CLASS_NAMES.asStrong.className,
        _as === "em" && TYPOGRAPHY_TEXT_CSS_CLASS_NAMES.asEm.className,
        _as === "sub" && TYPOGRAPHY_TEXT_CSS_CLASS_NAMES.asSub.className,
        _as === "sup" && TYPOGRAPHY_TEXT_CSS_CLASS_NAMES.asSup.className,
        className,
      );

      return (
        <Element ref={ref} className={textClassName} style={computedStyle} {...restProps}>
          {children}
        </Element>
      );
    },
  ),
);

TypographyText.displayName = COMPONENT_NAMES.TypographyText;

export default TypographyText;
