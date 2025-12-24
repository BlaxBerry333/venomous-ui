"use client";

import React, { useCallback, useRef } from "react";

import clsx from "clsx";

import { TABS_CSS_CLASS_NAMES } from "@/core/constants";
import { useComputedStyle } from "@/react/hooks";

import type { TabsListProps } from "./Tabs.types";
import { useTabsConfig } from "./TabsContext";

/**
 * Tabs.List component
 * Container for tab buttons with keyboard navigation support
 *
 * Performance: Only subscribes to ConfigContext (orientation),
 * does not re-render when tab value changes.
 */
const TabsList = React.memo(
  React.forwardRef<HTMLDivElement, TabsListProps>(({ children, className, style, ...restProps }, ref) => {
    // Only subscribe to config - doesn't need value
    const { orientation } = useTabsConfig();
    const computedStyle = useComputedStyle(style);
    const listRef = useRef<HTMLDivElement>(null);

    /**
     * Handle keyboard navigation
     */
    const handleKeyDown = useCallback(
      (event: React.KeyboardEvent) => {
        const list = listRef.current;
        if (!list) return;

        const tabs = Array.from(list.querySelectorAll<HTMLButtonElement>(`button:not([disabled])`));
        const currentIndex = tabs.findIndex((tab) => tab === document.activeElement);

        if (currentIndex === -1) return;

        let nextIndex: number | null = null;

        const isHorizontal = orientation === "horizontal";
        const prevKey = isHorizontal ? "ArrowLeft" : "ArrowUp";
        const nextKey = isHorizontal ? "ArrowRight" : "ArrowDown";

        switch (event.key) {
          case prevKey:
            nextIndex = currentIndex > 0 ? currentIndex - 1 : tabs.length - 1;
            break;
          case nextKey:
            nextIndex = currentIndex < tabs.length - 1 ? currentIndex + 1 : 0;
            break;
          case "Home":
            nextIndex = 0;
            break;
          case "End":
            nextIndex = tabs.length - 1;
            break;
        }

        if (nextIndex !== null) {
          event.preventDefault();
          tabs[nextIndex]?.focus();
        }
      },
      [orientation],
    );

    const listClassName = clsx(TABS_CSS_CLASS_NAMES.list.className, className);

    return (
      <div
        ref={(node) => {
          // Handle both refs
          (listRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
          if (typeof ref === "function") {
            ref(node);
          } else if (ref) {
            ref.current = node;
          }
        }}
        role="tablist"
        aria-orientation={orientation}
        className={listClassName}
        style={computedStyle}
        onKeyDown={handleKeyDown}
        {...restProps}
      >
        {children}
      </div>
    );
  }),
);

TabsList.displayName = "TabsList";

export default TabsList;
