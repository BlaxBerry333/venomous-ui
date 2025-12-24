"use client";

import React, { useCallback } from "react";

import clsx from "clsx";

import { TABS_CSS_CLASS_NAMES } from "@/core/constants";
import { useComputedStyle } from "@/react/hooks";

import type { TabsTabProps } from "./Tabs.types";
import { useTabsApi, useTabsConfig, useTabsValue } from "./TabsContext";

/**
 * Tabs.Tab component
 * Individual tab button
 *
 * Performance optimizations:
 * - Uses split contexts to minimize re-renders
 * - useTabsValue: re-renders only when active tab changes
 * - useTabsApi: stable reference, rarely causes re-renders
 * - useTabsConfig: re-renders only when config changes
 * - React.memo with proper deps prevents unnecessary re-renders
 */
const TabsTab = React.memo(
  React.forwardRef<HTMLButtonElement, TabsTabProps>(
    ({ value, disabled = false, StartIcon, EndIcon, children, className, style, onClick, ...restProps }, ref) => {
      const activeValue = useTabsValue();
      const { onChange, getTabId, getPanelId } = useTabsApi();
      const { disabled: rootDisabled } = useTabsConfig();
      const computedStyle = useComputedStyle(style);

      const isActive = activeValue === value;
      const isDisabled = disabled || rootDisabled;

      /**
       * Handle tab click
       * Uses useCallback to prevent unnecessary re-renders
       */
      const handleClick = useCallback(
        (event: React.MouseEvent<HTMLButtonElement>) => {
          if (!isDisabled) {
            onChange(value);
            onClick?.(event);
          }
        },
        [isDisabled, onChange, value, onClick],
      );

      const tabClassName = clsx(
        TABS_CSS_CLASS_NAMES.tab.className,
        isActive && TABS_CSS_CLASS_NAMES.tabActive.className,
        isDisabled && TABS_CSS_CLASS_NAMES.tabDisabled.className,
        className,
      );

      return (
        <button
          ref={ref}
          type="button"
          role="tab"
          id={getTabId(value)}
          aria-selected={isActive}
          aria-controls={getPanelId(value)}
          aria-disabled={isDisabled || undefined}
          tabIndex={isActive ? 0 : -1}
          disabled={isDisabled}
          className={tabClassName}
          style={computedStyle}
          onClick={handleClick}
          {...restProps}
        >
          {StartIcon && <span className={TABS_CSS_CLASS_NAMES.tabIcon.className}>{StartIcon}</span>}
          {children}
          {EndIcon && <span className={TABS_CSS_CLASS_NAMES.tabIcon.className}>{EndIcon}</span>}
        </button>
      );
    },
  ),
);

TabsTab.displayName = "TabsTab";

export default TabsTab;
