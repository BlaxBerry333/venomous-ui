"use client";

import React from "react";

import clsx from "clsx";

import { COMPONENT_NAMES, FORM_LABEL_CSS_CLASS_NAMES } from "@/core/constants";
import { generateFormLabelCSS } from "@/core/css";
import { useComputedStyle, useStyleInjection } from "@/react/hooks";
import type { FormLabelElement, FormLabelProps } from "./FormLabel.types";

const FormLabel = React.memo(
  React.forwardRef<FormLabelElement, FormLabelProps>(
    ({ children, required = false, size = "medium", className, style, ...restProps }, ref) => {
      /**
       * Inject component CSS
       */
      const FORM_LABEL_CSS: string = generateFormLabelCSS();
      useStyleInjection(COMPONENT_NAMES.FormLabel, FORM_LABEL_CSS);

      /**
       * Get computed style
       */
      const computedStyle = useComputedStyle(style);

      /**
       * Get component className
       */
      const labelClassName: string = clsx(
        FORM_LABEL_CSS_CLASS_NAMES.base.className,
        required && FORM_LABEL_CSS_CLASS_NAMES.required.className,
        size === "small" && FORM_LABEL_CSS_CLASS_NAMES.sizeSmall.className,
        size === "medium" && FORM_LABEL_CSS_CLASS_NAMES.sizeMedium.className,
        size === "large" && FORM_LABEL_CSS_CLASS_NAMES.sizeLarge.className,
        className,
      );

      return (
        <label ref={ref} className={labelClassName} style={computedStyle} {...restProps}>
          {children}
        </label>
      );
    },
  ),
);

FormLabel.displayName = COMPONENT_NAMES.FormLabel;

export default FormLabel;
