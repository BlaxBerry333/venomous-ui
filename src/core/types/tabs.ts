/**
 * Tabs component types
 */

import type { TOrientation } from "./common";

export type TTabsVariant = "line" | "pill";

export type TTabsUnmountStrategy = "keepMounted" | "unmountOnHide";

/**
 * Base props for Tabs root component
 */
export interface TTabsBaseProps {
  /** Default active tab value (uncontrolled mode) */
  defaultValue?: string;
  /** Current active tab value (controlled mode) */
  value?: string;
  /** Tabs orientation */
  orientation?: TOrientation;
  /** Visual variant */
  variant?: TTabsVariant;
  /**
   * Panel unmount strategy
   * - "keepMounted": All panels stay in DOM (default, preserves form state)
   * - "unmountOnHide": Unmount when switching away (no state preservation)
   */
  unmountStrategy?: TTabsUnmountStrategy;
}

/**
 * Base props for Tabs.List component
 */
export interface TTabsListBaseProps {
  /** Additional CSS class name */
  className?: string;
}

/**
 * Base props for Tabs.Tab component
 */
export interface TTabsTabBaseProps {
  /** Unique value identifying this tab */
  value: string;
  /** Whether the tab is disabled */
  disabled?: boolean;
  /** Additional CSS class name */
  className?: string;
}

/**
 * Base props for Tabs.Panel component
 */
export interface TTabsPanelBaseProps {
  /** Value of the corresponding tab */
  value: string;
  /** Additional CSS class name */
  className?: string;
}
