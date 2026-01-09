"use client";

import React from "react";

import clsx from "clsx";

import { BREADCRUMB_CSS_CLASS_NAMES, COMPONENT_NAMES } from "@/core/constants";
import { useComputedStyle } from "@/react/hooks";

import type { BreadcrumbItemElement, BreadcrumbItemProps } from "./Breadcrumb.types";

// const { item, link, itemActive, itemDisabled, icon: iconClassName } = BREADCRUMB_CSS_CLASS_NAMES;

const BreadcrumbItem = React.memo(
  React.forwardRef(
    <E extends React.ElementType = "a">(
      {
        as: _as,
        active = false,
        disabled = false,
        icon,
        children,
        className,
        style,
        ...restProps
      }: BreadcrumbItemProps<E>,
      ref: React.ForwardedRef<BreadcrumbItemElement>,
    ) => {
      /**
       * Determine the element to render
       */
      const Element = (_as || (active ? "span" : "a")) as React.ElementType;

      /**
       * Check if element is interactive (supports aria-disabled)
       * span has role="generic" which does not support aria-disabled
       */
      const isInteractiveElement = Element !== "span";

      /**
       * Get computed style from theme callback
       */
      const computedStyle = useComputedStyle(style);

      /**
       * Build class names for the wrapper (li)
       */
      const itemClassName = clsx(
        BREADCRUMB_CSS_CLASS_NAMES.item.className,
        active && BREADCRUMB_CSS_CLASS_NAMES.itemActive.className,
        disabled && BREADCRUMB_CSS_CLASS_NAMES.itemDisabled.className,
      );

      /**
       * Build class names for the link element
       */
      const linkClassName = clsx(BREADCRUMB_CSS_CLASS_NAMES.link.className, className);

      return (
        <li className={itemClassName}>
          <Element
            ref={ref}
            className={linkClassName}
            style={computedStyle}
            aria-current={active ? "page" : undefined}
            aria-disabled={isInteractiveElement && disabled ? true : undefined}
            {...restProps}
          >
            {icon && <span className={BREADCRUMB_CSS_CLASS_NAMES.icon.className}>{icon}</span>}
            {children}
          </Element>
        </li>
      );
    },
  ),
) as <E extends React.ElementType = "a">(
  props: BreadcrumbItemProps<E> & { ref?: React.ForwardedRef<BreadcrumbItemElement> },
) => React.ReactElement | null;

(BreadcrumbItem as React.FC).displayName = COMPONENT_NAMES.BreadcrumbItem;

export default BreadcrumbItem;
