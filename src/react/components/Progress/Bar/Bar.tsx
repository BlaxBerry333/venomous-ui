"use client";

import React from "react";

import clsx from "clsx";

import { COMPONENT_NAMES, PROGRESS_BAR_CSS_CLASS_NAMES } from "@/core/constants";
import { generateProgressBarCSS } from "@/core/css";
import type { ProgressPresetColor } from "@/core/types";
import { useComputedStyle, useStyleInjection } from "@/react/hooks";
import type { ProgressBarElement, ProgressBarProps } from "./Bar.types";

const PRESET_COLORS: ProgressPresetColor[] = ["primary", "success", "error", "warning", "info"];

const Bar = React.memo(
  React.forwardRef<ProgressBarElement, ProgressBarProps>(
    (
      {
        value = 0,
        size = "medium",
        color = "primary",
        animated = false,
        ariaLabel,
        ariaValueText,
        className,
        style,
        ...restProps
      },
      ref,
    ) => {
      /**
       * Clamp value between 0-100
       */
      const clampedValue = Math.min(Math.max(value, 0), 100);

      /**
       * Check if color is a preset color
       */
      const isPresetColor = PRESET_COLORS.includes(color as ProgressPresetColor);

      /**
       * Inject component CSS
       */
      useStyleInjection(COMPONENT_NAMES.ProgressBar, generateProgressBarCSS());

      /**
       * Get component style
       */
      const computedStyle = useComputedStyle(style);

      /**
       * Get component className
       */
      const barClassName = clsx(
        PROGRESS_BAR_CSS_CLASS_NAMES.base.className,
        animated && PROGRESS_BAR_CSS_CLASS_NAMES.animated.className,
        size === "small" && PROGRESS_BAR_CSS_CLASS_NAMES.sizeSmall.className,
        size === "medium" && PROGRESS_BAR_CSS_CLASS_NAMES.sizeMedium.className,
        size === "large" && PROGRESS_BAR_CSS_CLASS_NAMES.sizeLarge.className,
        color === "primary" && PROGRESS_BAR_CSS_CLASS_NAMES.colorPrimary.className,
        color === "success" && PROGRESS_BAR_CSS_CLASS_NAMES.colorSuccess.className,
        color === "error" && PROGRESS_BAR_CSS_CLASS_NAMES.colorError.className,
        color === "warning" && PROGRESS_BAR_CSS_CLASS_NAMES.colorWarning.className,
        color === "info" && PROGRESS_BAR_CSS_CLASS_NAMES.colorInfo.className,
        className,
      );

      /**
       * Get fill style for custom color
       */
      const fillStyle: React.CSSProperties | undefined = animated
        ? undefined
        : {
            width: `${clampedValue}%`,
            ...(isPresetColor ? {} : { backgroundColor: color }),
          };

      return (
        <div
          ref={ref}
          className={barClassName}
          style={computedStyle}
          role="progressbar"
          aria-label={ariaLabel}
          aria-valuenow={animated ? undefined : clampedValue}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuetext={ariaValueText}
          {...restProps}
        >
          <div className={PROGRESS_BAR_CSS_CLASS_NAMES.track.className}>
            <div className={PROGRESS_BAR_CSS_CLASS_NAMES.fill.className} style={fillStyle} />
          </div>
        </div>
      );
    },
  ),
);

Bar.displayName = COMPONENT_NAMES.ProgressBar;

export default Bar;
