"use client";

import React from "react";

import clsx from "clsx";

import { COMPONENT_NAMES, FORM_CONTROL_CSS_CLASS_NAMES } from "@/core/constants";
import { generateFormControlCSS } from "@/core/css";
import { FormLabel } from "@/react/components/FormLabel";
import { Typography } from "@/react/components/Typography";
import { useComputedStyle, useStyleInjection } from "@/react/hooks";
import type { FormControlElement, FormControlProps } from "./FormControl.types";
import { FormControlContext } from "./FormControlContext";

const FormControl = React.memo(
  React.forwardRef<FormControlElement, FormControlProps>(
    (
      {
        children,
        label,
        row = false,
        labelWidth,
        labelAlign = "right",
        labelTooltip,
        required = false,
        helperText,
        error = false,
        errorMessage,
        size = "medium",
        className,
        style,
        ...restProps
      },
      ref,
    ) => {
      /**
       * Inject component CSS
       */
      const FORM_CONTROL_CSS: string = generateFormControlCSS();
      useStyleInjection(COMPONENT_NAMES.FormControl, FORM_CONTROL_CSS);

      /**
       * Generate unique ID for helper text (used for aria-describedby)
       */
      const helperId = React.useId();

      /**
       * Get computed style
       */
      const computedStyle = useComputedStyle(style);

      /**
       * Get component className
       */
      const controlClassName: string = clsx(
        FORM_CONTROL_CSS_CLASS_NAMES.base.className,
        row && FORM_CONTROL_CSS_CLASS_NAMES.row.className,
        error && FORM_CONTROL_CSS_CLASS_NAMES.error.className,
        size === "small" && FORM_CONTROL_CSS_CLASS_NAMES.sizeSmall.className,
        size === "medium" && FORM_CONTROL_CSS_CLASS_NAMES.sizeMedium.className,
        size === "large" && FORM_CONTROL_CSS_CLASS_NAMES.sizeLarge.className,
        className,
      );

      /**
       * Helper/error text to display
       */
      const displayText = error && errorMessage ? errorMessage : helperText;

      /**
       * Helper text ID for aria-describedby (only if there's helper text)
       */
      const helperTextId = displayText ? `helper-${helperId}` : undefined;

      /**
       * Context value for child form fields
       */
      const contextValue = React.useMemo(() => ({ helperTextId, error }), [helperTextId, error]);

      /**
       * Label style for row layout
       */
      const labelStyle: React.CSSProperties | undefined = row
        ? {
            width: typeof labelWidth === "number" ? `${labelWidth}px` : labelWidth,
            textAlign: labelAlign,
          }
        : undefined;

      /**
       * Render label element
       */
      const renderLabel = () => {
        if (!label) return null;

        return (
          <div className={FORM_CONTROL_CSS_CLASS_NAMES.labelWrapper.className} style={labelStyle}>
            <FormLabel required={required} size={size} tooltip={labelTooltip}>
              {label}
            </FormLabel>
          </div>
        );
      };

      /**
       * Render helper text
       */
      const renderHelperText = () => {
        if (!displayText) return null;

        return (
          <Typography.Text
            as="small"
            id={helperTextId}
            aria-live="polite"
            className={FORM_CONTROL_CSS_CLASS_NAMES.helperText.className}
          >
            {displayText}
          </Typography.Text>
        );
      };

      /**
       * Render field wrapper with context
       */
      const renderField = () => (
        <FormControlContext.Provider value={contextValue}>
          <div className={FORM_CONTROL_CSS_CLASS_NAMES.field.className}>{children}</div>
        </FormControlContext.Provider>
      );

      /**
       * Vertical layout (default)
       */
      if (!row) {
        return (
          <div ref={ref} className={controlClassName} style={computedStyle} {...restProps}>
            {renderLabel()}
            {renderField()}
            {renderHelperText()}
          </div>
        );
      }

      /**
       * Horizontal (row) layout
       */
      return (
        <div ref={ref} className={controlClassName} style={computedStyle} {...restProps}>
          {renderLabel()}
          <div className={FORM_CONTROL_CSS_CLASS_NAMES.content.className}>
            {renderField()}
            {renderHelperText()}
          </div>
        </div>
      );
    },
  ),
);

FormControl.displayName = COMPONENT_NAMES.FormControl;

export default FormControl;
