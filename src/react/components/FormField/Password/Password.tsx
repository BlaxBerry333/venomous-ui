"use client";

import React from "react";

import clsx from "clsx";

import { COMPONENT_NAMES, FORM_FIELD_PASSWORD_CSS_CLASS_NAMES } from "@/core/constants";
import { generateFormFieldPasswordCSS } from "@/core/css";
import { Icon } from "@/react/components/Icon";
import { useComputedStyle, useFormFieldFocus, useStyleInjection } from "@/react/hooks";
import type { FormFieldPasswordElement, FormFieldPasswordProps } from "./Password.types";

const Password = React.memo(
  React.forwardRef<FormFieldPasswordElement, FormFieldPasswordProps>(
    (
      {
        variant = "outlined",
        size = "medium",
        error = false,
        disabled = false,
        fullWidth = true,
        className,
        style,
        onFocus,
        onBlur,
        ...restProps
      },
      ref,
    ) => {
      /**
       * inject component css
       */
      useStyleInjection(COMPONENT_NAMES.FormFieldPassword, generateFormFieldPasswordCSS());

      /**
       * get component style
       */
      const computedStyle = useComputedStyle(style);

      /**
       * get component status
       */
      const { isFocused, handleFocus, handleBlur } = useFormFieldFocus({ onFocus, onBlur });
      const [isVisible, setIsVisible] = React.useState(false);

      /**
       * get component className
       */
      const wrapperClassName = clsx(
        FORM_FIELD_PASSWORD_CSS_CLASS_NAMES.base.className,
        disabled && FORM_FIELD_PASSWORD_CSS_CLASS_NAMES.disabled.className,
        isFocused && FORM_FIELD_PASSWORD_CSS_CLASS_NAMES.focused.className,
        error && FORM_FIELD_PASSWORD_CSS_CLASS_NAMES.error.className,
        variant === "outlined" && FORM_FIELD_PASSWORD_CSS_CLASS_NAMES.variantOutlined.className,
        variant === "filled" && FORM_FIELD_PASSWORD_CSS_CLASS_NAMES.variantFilled.className,
        size === "small" && FORM_FIELD_PASSWORD_CSS_CLASS_NAMES.sizeSmall.className,
        size === "medium" && FORM_FIELD_PASSWORD_CSS_CLASS_NAMES.sizeMedium.className,
        size === "large" && FORM_FIELD_PASSWORD_CSS_CLASS_NAMES.sizeLarge.className,
        fullWidth && FORM_FIELD_PASSWORD_CSS_CLASS_NAMES.fullWidth.className,
        className,
      );

      const handleToggleVisibility = React.useCallback(() => {
        setIsVisible((prev) => !prev);
      }, []);

      return (
        <div className={wrapperClassName} style={computedStyle}>
          <input
            ref={ref}
            type={isVisible ? "text" : "password"}
            className={FORM_FIELD_PASSWORD_CSS_CLASS_NAMES.input.className}
            disabled={disabled}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...restProps}
          />
          <button
            type="button"
            className={FORM_FIELD_PASSWORD_CSS_CLASS_NAMES.toggle.className}
            onClick={handleToggleVisibility}
            disabled={disabled}
            tabIndex={-1}
            aria-label={isVisible ? "Hide password" : "Show password"}
          >
            <Icon name={isVisible ? "mdi:eye-off" : "mdi:eye"} />
          </button>
        </div>
      );
    },
  ),
);

Password.displayName = COMPONENT_NAMES.FormFieldPassword;

export default Password;
