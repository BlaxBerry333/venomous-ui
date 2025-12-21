"use client";

import React from "react";

import clsx from "clsx";

import { COMPONENT_NAMES, FORM_FIELD_TEXTAREA_CSS_CLASS_NAMES } from "@/core/constants";
import { generateFormFieldTextareaCSS } from "@/core/css";
import { useComputedStyle, useFormFieldFocus, useStyleInjection } from "@/react/hooks";
import type { FormFieldTextareaElement, FormFieldTextareaProps } from "./Textarea.types";

const Textarea = React.memo(
  React.forwardRef<FormFieldTextareaElement, FormFieldTextareaProps>(
    (
      {
        variant = "outlined",
        size = "medium",
        error = false,
        disabled = false,
        fullWidth = true,
        resize = "vertical",
        minRows = 3,
        maxRows,
        autoHeight = false,
        rows,
        className,
        style,
        onFocus,
        onBlur,
        onChange,
        ...restProps
      },
      ref,
    ) => {
      /**
       * inject component css
       */
      useStyleInjection(COMPONENT_NAMES.FormFieldTextarea, generateFormFieldTextareaCSS());

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
        FORM_FIELD_TEXTAREA_CSS_CLASS_NAMES.base.className,
        disabled && FORM_FIELD_TEXTAREA_CSS_CLASS_NAMES.disabled.className,
        isFocused && FORM_FIELD_TEXTAREA_CSS_CLASS_NAMES.focused.className,
        error && FORM_FIELD_TEXTAREA_CSS_CLASS_NAMES.error.className,
        variant === "outlined" && FORM_FIELD_TEXTAREA_CSS_CLASS_NAMES.variantOutlined.className,
        variant === "filled" && FORM_FIELD_TEXTAREA_CSS_CLASS_NAMES.variantFilled.className,
        size === "small" && FORM_FIELD_TEXTAREA_CSS_CLASS_NAMES.sizeSmall.className,
        size === "medium" && FORM_FIELD_TEXTAREA_CSS_CLASS_NAMES.sizeMedium.className,
        size === "large" && FORM_FIELD_TEXTAREA_CSS_CLASS_NAMES.sizeLarge.className,
        fullWidth && FORM_FIELD_TEXTAREA_CSS_CLASS_NAMES.fullWidth.className,
        resize === "none" && FORM_FIELD_TEXTAREA_CSS_CLASS_NAMES.resizeNone.className,
        resize === "vertical" && FORM_FIELD_TEXTAREA_CSS_CLASS_NAMES.resizeVertical.className,
        resize === "horizontal" && FORM_FIELD_TEXTAREA_CSS_CLASS_NAMES.resizeHorizontal.className,
        resize === "both" && FORM_FIELD_TEXTAREA_CSS_CLASS_NAMES.resizeBoth.className,
        className,
      );

      const textareaRef = React.useRef<HTMLTextAreaElement>(null);

      React.useImperativeHandle(ref, () => textareaRef.current as HTMLTextAreaElement);

      const lineHeight = size === "small" ? 18 : size === "large" ? 24 : 21;

      const adjustHeight = React.useCallback(() => {
        if (!autoHeight || !textareaRef.current) return;

        const textarea = textareaRef.current;
        textarea.style.height = "auto";

        const minHeight = minRows * lineHeight;
        const maxHeight = maxRows ? maxRows * lineHeight : Infinity;
        const scrollHeight = textarea.scrollHeight;

        const newHeight = Math.min(Math.max(scrollHeight, minHeight), maxHeight);
        textarea.style.height = `${newHeight}px`;
      }, [autoHeight, minRows, maxRows, lineHeight]);

      React.useEffect(() => {
        adjustHeight();
      }, [adjustHeight]);

      const handleChange = React.useCallback(
        (e: React.ChangeEvent<FormFieldTextareaElement>) => {
          onChange?.(e);
          adjustHeight();
        },
        [onChange, adjustHeight],
      );

      return (
        <div className={wrapperClassName} style={computedStyle}>
          <textarea
            ref={textareaRef}
            className={FORM_FIELD_TEXTAREA_CSS_CLASS_NAMES.textarea.className}
            disabled={disabled}
            rows={rows ?? minRows}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            {...restProps}
          />
        </div>
      );
    },
  ),
);

Textarea.displayName = COMPONENT_NAMES.FormFieldTextarea;

export default Textarea;
