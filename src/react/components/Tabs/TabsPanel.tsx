"use client";

import React from "react";

import clsx from "clsx";

import { TABS_CSS_CLASS_NAMES } from "@/core/constants";
import { useComputedStyle } from "@/react/hooks";

import type { TabsPanelProps } from "./Tabs.types";
import { useTabsApi, useTabsValue } from "./TabsContext";

/**
 * Tabs.Panel component
 * Content panel for each tab
 *
 * Performance optimizations:
 * - Uses split contexts to minimize re-renders
 * - useTabsValue: re-renders only when active tab changes
 * - useTabsApi: stable reference for ID generation
 * - Unmounts inactive panels by default for memory efficiency
 * - keepMounted option for preserving state (uses CSS visibility)
 */
const TabsPanel = React.memo(
  React.forwardRef<HTMLDivElement, TabsPanelProps>(
    ({ value, keepMounted = false, children, className, style, ...restProps }, ref) => {
      const activeValue = useTabsValue();
      const { getTabId, getPanelId } = useTabsApi();
      const computedStyle = useComputedStyle(style);

      const isActive = activeValue === value;

      // Don't render if not active and not keepMounted
      if (!isActive && !keepMounted) {
        return null;
      }

      const panelClassName = clsx(
        TABS_CSS_CLASS_NAMES.panel.className,
        !isActive && TABS_CSS_CLASS_NAMES.panelHidden.className,
        className,
      );

      return (
        <div
          ref={ref}
          role="tabpanel"
          id={getPanelId(value)}
          aria-labelledby={getTabId(value)}
          hidden={!isActive}
          tabIndex={0}
          className={panelClassName}
          style={computedStyle}
          {...restProps}
        >
          {children}
        </div>
      );
    },
  ),
);

TabsPanel.displayName = "TabsPanel";

export default TabsPanel;
