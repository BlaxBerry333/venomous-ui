"use client";

import React from "react";

import clsx from "clsx";

import { CHIP_CSS_CLASS_NAMES, COMPONENT_NAMES } from "@/core/constants";
import { generateChipCSS } from "@/core/css";
import { useComputedStyle, useStyleInjection } from "@/react/hooks";
import type { ChipElement, ChipProps } from "./Chip.types";

/**
 * Default delete icon (X)
 */
const DefaultDeleteIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
  </svg>
);

const Chip = React.memo(
  React.forwardRef<ChipElement, ChipProps>(
    (
      {
        variant = "filled",
        size = "medium",
        color = "default",
        disabled = false,
        selected = false,
        clickable = false,
        deletable = false,
        onDelete,
        Icon,
        DeleteIcon,
        className,
        style,
        children,
        onClick,
        ...restProps
      },
      ref,
    ) => {
      /**
       * Inject component CSS
       */
      const CHIP_CSS: string = generateChipCSS();
      useStyleInjection(COMPONENT_NAMES.Chip, CHIP_CSS);

      /**
       * Compute style (supports theme callback)
       */
      const computedStyle = useComputedStyle(style);

      /**
       * Build className with clsx
       */
      const chipClassName: string = clsx(
        CHIP_CSS_CLASS_NAMES.base.className,
        disabled && CHIP_CSS_CLASS_NAMES.disabled.className,
        selected && CHIP_CSS_CLASS_NAMES.selected.className,
        (clickable || onClick) && CHIP_CSS_CLASS_NAMES.clickable.className,
        variant === "filled" && CHIP_CSS_CLASS_NAMES.variantFilled.className,
        variant === "outlined" && CHIP_CSS_CLASS_NAMES.variantOutlined.className,
        size === "small" && CHIP_CSS_CLASS_NAMES.sizeSmall.className,
        size === "medium" && CHIP_CSS_CLASS_NAMES.sizeMedium.className,
        size === "large" && CHIP_CSS_CLASS_NAMES.sizeLarge.className,
        color === "default" && CHIP_CSS_CLASS_NAMES.colorDefault.className,
        color === "primary" && CHIP_CSS_CLASS_NAMES.colorPrimary.className,
        color === "success" && CHIP_CSS_CLASS_NAMES.colorSuccess.className,
        color === "error" && CHIP_CSS_CLASS_NAMES.colorError.className,
        color === "warning" && CHIP_CSS_CLASS_NAMES.colorWarning.className,
        color === "info" && CHIP_CSS_CLASS_NAMES.colorInfo.className,
        className,
      );

      /**
       * Handle delete click - stop propagation to prevent chip click
       */
      const handleDeleteClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!disabled && onDelete) {
          onDelete();
        }
      };

      /**
       * Handle chip click
       */
      const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!disabled && onClick) {
          onClick(e);
        }
      };

      return (
        <div
          ref={ref}
          className={chipClassName}
          style={computedStyle}
          onClick={handleClick}
          aria-disabled={disabled || undefined}
          role={clickable || onClick ? "button" : undefined}
          tabIndex={clickable || onClick ? (disabled ? -1 : 0) : undefined}
          {...restProps}
        >
          {Icon}
          {children && <span className={CHIP_CSS_CLASS_NAMES.label.className}>{children}</span>}
          {deletable && (
            <span
              className={CHIP_CSS_CLASS_NAMES.deleteIcon.className}
              onClick={handleDeleteClick}
              role="button"
              aria-label="Remove"
              tabIndex={disabled ? -1 : 0}
            >
              {DeleteIcon || <DefaultDeleteIcon />}
            </span>
          )}
        </div>
      );
    },
  ),
);

Chip.displayName = COMPONENT_NAMES.Chip;

export default Chip;
