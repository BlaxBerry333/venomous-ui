"use client";

import React from "react";

import clsx from "clsx";

import { BREADCRUMB_CSS_CLASS_NAMES, COMPONENT_NAMES } from "@/core/constants";
import { useComputedStyle } from "@/react/hooks";

import type { BreadcrumbSeparatorProps } from "./Breadcrumb.types";

const BreadcrumbSeparator = React.memo(
  React.forwardRef<HTMLSpanElement, BreadcrumbSeparatorProps>(
    ({ children = "/", className, style, ...restProps }, ref) => {
      /**
       * Get computed style from theme callback
       */
      const computedStyle = useComputedStyle(style);

      /**
       * Build class names
       */
      const separatorClassName = clsx(BREADCRUMB_CSS_CLASS_NAMES.separator.className, className);

      return (
        <span ref={ref} className={separatorClassName} style={computedStyle} aria-hidden="true" {...restProps}>
          {children}
        </span>
      );
    },
  ),
);

BreadcrumbSeparator.displayName = COMPONENT_NAMES.BreadcrumbSeparator;

export default BreadcrumbSeparator;
