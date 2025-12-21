"use client";

import React from "react";

import clsx from "clsx";

import { COMPONENT_NAMES, FORM_FIELD_TEXT_CSS_CLASS_NAMES } from "@/core/constants";
import { generateFormFieldTextCSS } from "@/core/css";
import { useComputedStyle, useFormFieldFocus, useStyleInjection } from "@/react/hooks";
import type { FormFieldTextElement, FormFieldTextProps } from "./Text.types";

const Text = React.memo(
  React.forwardRef<FormFieldTextElement, FormFieldTextProps>(
    (
      {
        variant = "outlined",
        size = "medium",
        error = false,
        disabled = false,
        fullWidth = true,
        prefix,
        suffix,
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
      useStyleInjection(COMPONENT_NAMES.FormFieldText, generateFormFieldTextCSS());

      /**
       * get component style
       */
      const computedStyle = useComputedStyle(style);

      /**
       * get component status
       */
      const { isFocused, handleFocus, handleBlur } = useFormFieldFocus({ onFocus, onBlur });

      /**
       * get component className
       */
      const wrapperClassName = clsx(
        FORM_FIELD_TEXT_CSS_CLASS_NAMES.base.className,
        disabled && FORM_FIELD_TEXT_CSS_CLASS_NAMES.disabled.className,
        isFocused && FORM_FIELD_TEXT_CSS_CLASS_NAMES.focused.className,
        error && FORM_FIELD_TEXT_CSS_CLASS_NAMES.error.className,
        variant === "outlined" && FORM_FIELD_TEXT_CSS_CLASS_NAMES.variantOutlined.className,
        variant === "filled" && FORM_FIELD_TEXT_CSS_CLASS_NAMES.variantFilled.className,
        size === "small" && FORM_FIELD_TEXT_CSS_CLASS_NAMES.sizeSmall.className,
        size === "medium" && FORM_FIELD_TEXT_CSS_CLASS_NAMES.sizeMedium.className,
        size === "large" && FORM_FIELD_TEXT_CSS_CLASS_NAMES.sizeLarge.className,
        fullWidth && FORM_FIELD_TEXT_CSS_CLASS_NAMES.fullWidth.className,
        className,
      );

      return (
        <div className={wrapperClassName} style={computedStyle}>
          {prefix && <span className={FORM_FIELD_TEXT_CSS_CLASS_NAMES.prefix.className}>{prefix}</span>}
          <input
            ref={ref}
            type="text"
            className={FORM_FIELD_TEXT_CSS_CLASS_NAMES.input.className}
            disabled={disabled}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...restProps}
          />
          {suffix && <span className={FORM_FIELD_TEXT_CSS_CLASS_NAMES.suffix.className}>{suffix}</span>}
        </div>
      );
    },
  ),
);

Text.displayName = COMPONENT_NAMES.FormFieldText;

export default Text;
