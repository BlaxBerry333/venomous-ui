"use client";

import React from "react";

import clsx from "clsx";

import { COMPONENT_NAMES, FORM_LABEL_CSS_CLASS_NAMES } from "@/core/constants";
import { generateFormLabelCSS } from "@/core/css";
import { Tooltip } from "@/react/components/Tooltip";
import { useComputedStyle, useStyleInjection } from "@/react/hooks";
import type { FormLabelElement, FormLabelProps } from "./FormLabel.types";

const FormLabel = React.memo(
  React.forwardRef<FormLabelElement, FormLabelProps>(
    ({ children, required = false, size = "medium", tooltip, className, style, ...restProps }, ref) => {
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
          {tooltip && (
            <Tooltip title={tooltip}>
              <span className={FORM_LABEL_CSS_CLASS_NAMES.tooltip.className}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                  <path d="M12 17h.01" />
                </svg>
              </span>
            </Tooltip>
          )}
        </label>
      );
    },
  ),
);

FormLabel.displayName = COMPONENT_NAMES.FormLabel;

export default FormLabel;
