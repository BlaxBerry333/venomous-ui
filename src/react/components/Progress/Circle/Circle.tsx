"use client";

import React from "react";

import clsx from "clsx";

import { COMPONENT_NAMES, PROGRESS_CIRCLE_CSS_CLASS_NAMES } from "@/core/constants";
import { generateProgressCircleCSS } from "@/core/css";
import type { ProgressPresetColor } from "@/core/types";
import { useComputedStyle, useStyleInjection } from "@/react/hooks";
import type { ProgressCircleElement, ProgressCircleProps } from "./Circle.types";

/**
 * Size configurations for the circle
 */
const SIZE_CONFIG = {
  small: { size: 40, strokeWidth: 3 },
  medium: { size: 64, strokeWidth: 4 },
  large: { size: 96, strokeWidth: 5 },
} as const;

const PRESET_COLORS: ProgressPresetColor[] = ["primary", "success", "error", "warning", "info"];

const Circle = React.memo(
  React.forwardRef<ProgressCircleElement, ProgressCircleProps>(
    (
      {
        value = 0,
        size = "medium",
        color = "primary",
        animated = false,
        showLabel = false,
        label,
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
      useStyleInjection(COMPONENT_NAMES.ProgressCircle, generateProgressCircleCSS());

      /**
       * Get component style
       */
      const computedStyle = useComputedStyle(style);

      /**
       * Calculate SVG properties
       */
      const config = SIZE_CONFIG[size];
      const svgSize = config.size;
      const strokeWidth = config.strokeWidth;
      const radius = (svgSize - strokeWidth) / 2;
      const circumference = 2 * Math.PI * radius;
      const strokeDashoffset = circumference - (clampedValue / 100) * circumference;

      /**
       * Get component className
       */
      const circleClassName = clsx(
        PROGRESS_CIRCLE_CSS_CLASS_NAMES.base.className,
        animated && PROGRESS_CIRCLE_CSS_CLASS_NAMES.animated.className,
        size === "small" && PROGRESS_CIRCLE_CSS_CLASS_NAMES.sizeSmall.className,
        size === "medium" && PROGRESS_CIRCLE_CSS_CLASS_NAMES.sizeMedium.className,
        size === "large" && PROGRESS_CIRCLE_CSS_CLASS_NAMES.sizeLarge.className,
        isPresetColor && color === "primary" && PROGRESS_CIRCLE_CSS_CLASS_NAMES.colorPrimary.className,
        isPresetColor && color === "success" && PROGRESS_CIRCLE_CSS_CLASS_NAMES.colorSuccess.className,
        isPresetColor && color === "error" && PROGRESS_CIRCLE_CSS_CLASS_NAMES.colorError.className,
        isPresetColor && color === "warning" && PROGRESS_CIRCLE_CSS_CLASS_NAMES.colorWarning.className,
        isPresetColor && color === "info" && PROGRESS_CIRCLE_CSS_CLASS_NAMES.colorInfo.className,
        className,
      );

      /**
       * Get fill style for custom color
       */
      const fillStyle: React.CSSProperties | undefined = isPresetColor ? undefined : { stroke: color };

      return (
        <div
          ref={ref}
          className={circleClassName}
          style={computedStyle}
          role="progressbar"
          aria-label={ariaLabel}
          aria-valuenow={animated ? undefined : clampedValue}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuetext={ariaValueText}
          {...restProps}
        >
          <svg
            className={PROGRESS_CIRCLE_CSS_CLASS_NAMES.svg.className}
            width={svgSize}
            height={svgSize}
            viewBox={`0 0 ${svgSize} ${svgSize}`}
          >
            <circle
              className={PROGRESS_CIRCLE_CSS_CLASS_NAMES.track.className}
              cx={svgSize / 2}
              cy={svgSize / 2}
              r={radius}
              strokeWidth={strokeWidth}
            />
            <circle
              className={PROGRESS_CIRCLE_CSS_CLASS_NAMES.fill.className}
              cx={svgSize / 2}
              cy={svgSize / 2}
              r={radius}
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
              strokeDashoffset={animated ? undefined : strokeDashoffset}
              style={fillStyle}
            />
          </svg>
          {showLabel && (
            <div className={PROGRESS_CIRCLE_CSS_CLASS_NAMES.label.className}>
              {label ?? (animated ? "" : `${Math.round(clampedValue)}%`)}
            </div>
          )}
        </div>
      );
    },
  ),
);

Circle.displayName = COMPONENT_NAMES.ProgressCircle;

export default Circle;
