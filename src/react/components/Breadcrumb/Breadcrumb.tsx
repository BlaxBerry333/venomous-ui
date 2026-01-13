"use client";

import React, { useCallback, useMemo, useState } from "react";

import clsx from "clsx";

import { BREADCRUMB_CSS_CLASS_NAMES, COMPONENT_NAMES } from "@/core/constants";
import { generateBreadcrumbCSS } from "@/core/css";
import { useComputedStyle, useStyleInjection } from "@/react/hooks";
import BreadcrumbSeparator from "./BreadcrumbSeparator";

import type { BreadcrumbElement, BreadcrumbProps } from "./Breadcrumb.types";

interface VisibleItem {
  key: string;
  element: React.ReactNode;
  isCollapsed: boolean;
}

const BreadcrumbRoot = React.memo(
  React.forwardRef(
    <E extends React.ElementType = "nav">(
      {
        as: __as,
        separator = "/",
        maxItems,
        itemsBeforeCollapse = 1,
        itemsAfterCollapse = 1,
        children,
        className,
        style,
        ...restProps
      }: BreadcrumbProps<E>,
      ref: React.ForwardedRef<BreadcrumbElement>,
    ) => {
      /**
       * Determine the element to render
       */
      const Element = (__as || "nav") as React.ElementType;

      /**
       * Inject CSS
       */
      const BREADCRUMB_CSS = generateBreadcrumbCSS();
      useStyleInjection(COMPONENT_NAMES.Breadcrumb, BREADCRUMB_CSS);

      /**
       * Get computed style from theme callback
       */
      const computedStyle = useComputedStyle(style);

      /**
       * Build class names
       */
      const breadcrumbClassName = clsx(BREADCRUMB_CSS_CLASS_NAMES.root.className, className);

      /**
       * State for expanded collapsed items
       */
      const [isExpanded, setIsExpanded] = useState(false);

      /**
       * Handle expand click
       */
      const handleExpandClick = useCallback(() => {
        setIsExpanded(true);
      }, []);

      /**
       * Build visible items with stable keys
       */
      const visibleItems = useMemo((): VisibleItem[] => {
        // Flatten children array (handles fragments and arrays)
        const flatChildren = Array.isArray(children) ? children.flat() : [children];

        // Convert to items with keys
        const items: VisibleItem[] = flatChildren
          .filter((child): child is React.ReactNode => child != null && child !== false && child !== true)
          .map((child, index) => {
            const key = React.isValidElement(child) && child.key != null ? String(child.key) : `item-${index}`;
            return { key, element: child, isCollapsed: false };
          });

        // Check if we need to collapse
        const shouldCollapse = maxItems && !isExpanded && items.length > maxItems;

        if (!shouldCollapse) {
          return items;
        }

        const beforeItems = items.slice(0, itemsBeforeCollapse);
        const afterItems = items.slice(-itemsAfterCollapse);

        return [...beforeItems, { key: "collapsed", element: null, isCollapsed: true }, ...afterItems];
      }, [children, maxItems, isExpanded, itemsBeforeCollapse, itemsAfterCollapse]);

      /**
       * Render items with separators
       */
      const renderItems = () => {
        return visibleItems.map((item, index) => {
          const isLast = index === visibleItems.length - 1;

          if (item.isCollapsed) {
            return (
              <React.Fragment key={item.key}>
                <li>
                  <button
                    type="button"
                    className={BREADCRUMB_CSS_CLASS_NAMES.collapsed.className}
                    onClick={handleExpandClick}
                    aria-label="Show more breadcrumbs"
                  >
                    ...
                  </button>
                </li>
                {!isLast && <BreadcrumbSeparator>{separator}</BreadcrumbSeparator>}
              </React.Fragment>
            );
          }

          return (
            <React.Fragment key={item.key}>
              {item.element}
              {!isLast && <BreadcrumbSeparator>{separator}</BreadcrumbSeparator>}
            </React.Fragment>
          );
        });
      };

      return (
        <Element ref={ref} className={breadcrumbClassName} style={computedStyle} aria-label="Breadcrumb" {...restProps}>
          <ol className={BREADCRUMB_CSS_CLASS_NAMES.list.className}>{renderItems()}</ol>
        </Element>
      );
    },
  ),
) as <E extends React.ElementType = "nav">(
  props: BreadcrumbProps<E> & { ref?: React.ForwardedRef<BreadcrumbElement> },
) => React.ReactElement | null;

(BreadcrumbRoot as React.FC).displayName = COMPONENT_NAMES.Breadcrumb;

export default BreadcrumbRoot;
