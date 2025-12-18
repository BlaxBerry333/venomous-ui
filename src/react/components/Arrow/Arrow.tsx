"use client";

import React from "react";

import clsx from "clsx";

import { ARROW_CSS_CLASS_NAMES, COMPONENT_NAMES } from "@/core/constants";
import { generateArrowCSS } from "@/core/css";
import { useStyleInjection } from "@/react/hooks";
import type { ArrowProps } from "./Arrow.types";

const directionClassMap = {
  top: ARROW_CSS_CLASS_NAMES.directionTop.className,
  bottom: ARROW_CSS_CLASS_NAMES.directionBottom.className,
  left: ARROW_CSS_CLASS_NAMES.directionLeft.className,
  right: ARROW_CSS_CLASS_NAMES.directionRight.className,
} as const;

const Arrow = React.memo<ArrowProps>(({ direction, color, size = 8, className, style }) => {
  /**
   * Inject component CSS
   */
  const ARROW_CSS: string = generateArrowCSS();
  useStyleInjection(COMPONENT_NAMES.Arrow, ARROW_CSS);

  /**
   * Compute style with CSS variables
   */
  const computedStyle = React.useMemo(
    () => ({
      "--arrow-color": color,
      "--arrow-size": `${size}px`,
      ...style,
    }),
    [color, size, style],
  );

  return (
    <span
      className={clsx(ARROW_CSS_CLASS_NAMES.base.className, directionClassMap[direction], className)}
      style={computedStyle as React.CSSProperties}
      aria-hidden="true"
    />
  );
});

Arrow.displayName = COMPONENT_NAMES.Arrow;

export default Arrow;
