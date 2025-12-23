"use client";

import React from "react";

import clsx from "clsx";

import { BUTTON_CSS_CLASS_NAMES, COMPONENT_NAMES } from "@/core/constants";
import { generateButtonCSS } from "@/core/css";
import { Icon } from "@/react/components/Icon";
import { useComputedStyle, useStyleInjection } from "@/react/hooks";
import type { ButtonElement, ButtonProps } from "./Button.types";

const Button = React.memo(
  React.forwardRef<ButtonElement, ButtonProps>(
    (
      {
        variant = "contained",
        size = "medium",
        color = "primary",
        disabled = false,
        loading = false,
        fullWidth = false,
        text,
        StartElement,
        EndElement,
        children,
        className,
        style,
        type = "button",
        ...restProps
      },
      ref,
    ) => {
      const isDisabled: boolean = disabled || loading;

      /**
       * inject component css
       */
      const BUTTON_CSS: string = generateButtonCSS();
      useStyleInjection(COMPONENT_NAMES.Button, BUTTON_CSS);

      /**
       * get component style
       */
      const computedStyle = useComputedStyle(style);

      /**
       * get component className
       */
      const buttonClassName: string = clsx(
        BUTTON_CSS_CLASS_NAMES.base.className,
        disabled && BUTTON_CSS_CLASS_NAMES.disabled.className,
        loading && BUTTON_CSS_CLASS_NAMES.loading.className,
        fullWidth && BUTTON_CSS_CLASS_NAMES.fullWidth.className,
        variant === "contained" && BUTTON_CSS_CLASS_NAMES.variantContained.className,
        variant === "outlined" && BUTTON_CSS_CLASS_NAMES.variantOutlined.className,
        variant === "text" && BUTTON_CSS_CLASS_NAMES.variantText.className,
        size === "small" && BUTTON_CSS_CLASS_NAMES.sizeSmall.className,
        size === "medium" && BUTTON_CSS_CLASS_NAMES.sizeMedium.className,
        size === "large" && BUTTON_CSS_CLASS_NAMES.sizeLarge.className,
        color === "default" && BUTTON_CSS_CLASS_NAMES.colorDefault.className,
        color === "primary" && BUTTON_CSS_CLASS_NAMES.colorPrimary.className,
        color === "success" && BUTTON_CSS_CLASS_NAMES.colorSuccess.className,
        color === "error" && BUTTON_CSS_CLASS_NAMES.colorError.className,
        color === "warning" && BUTTON_CSS_CLASS_NAMES.colorWarning.className,
        color === "info" && BUTTON_CSS_CLASS_NAMES.colorInfo.className,
        className,
      );

      return (
        <button
          ref={ref}
          type={type}
          className={buttonClassName}
          style={computedStyle}
          disabled={isDisabled}
          aria-disabled={isDisabled || undefined}
          aria-busy={loading || undefined}
          {...restProps}
        >
          {loading && (
            <span className={BUTTON_CSS_CLASS_NAMES.loadingIcon.className}>
              <Icon name="svg-spinners:ring-resize" />
            </span>
          )}
          <span className={BUTTON_CSS_CLASS_NAMES.content.className}>
            {children || (
              <>
                {StartElement}
                {text}
                {EndElement}
              </>
            )}
          </span>
        </button>
      );
    },
  ),
);

Button.displayName = COMPONENT_NAMES.Button;

export default Button;
