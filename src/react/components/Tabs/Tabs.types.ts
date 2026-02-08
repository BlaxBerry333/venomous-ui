import type {
  TOrientation,
  TTabsBaseProps,
  TTabsListBaseProps,
  TTabsPanelBaseProps,
  TTabsTabBaseProps,
  TTabsUnmountStrategy,
  TTabsVariant,
} from "@/core/types";
import type { HTMLAttributes, ReactNode } from "react";

/**
 * Props for Tabs root component
 */
export interface TTabsProps extends TTabsBaseProps, Omit<HTMLAttributes<HTMLDivElement>, "defaultValue"> {
  /** Value change callback (controlled mode) */
  onValueChange?: (value: string) => void;
  /** Tab content */
  children: ReactNode;
}

/**
 * Props for Tabs.List component
 */
export interface TTabsListProps extends TTabsListBaseProps, Omit<HTMLAttributes<HTMLDivElement>, "className"> {
  /** Tab buttons */
  children: ReactNode;
}

/**
 * Props for Tabs.Tab component
 */
export interface TTabsTabProps
  extends TTabsTabBaseProps, Omit<HTMLAttributes<HTMLButtonElement>, "value" | "disabled" | "className"> {
  /** Tab label */
  children: ReactNode;
}

/**
 * Props for Tabs.Panel component
 */
export interface TTabsPanelProps extends TTabsPanelBaseProps, Omit<HTMLAttributes<HTMLDivElement>, "className"> {
  /** Panel content */
  children: ReactNode;
}

/**
 * Context value shared between Tabs components
 */
export interface TTabsContextValue {
  /** Current active tab value */
  value: string;
  /** Update active tab */
  onValueChange: (value: string) => void;
  /** Tabs orientation */
  orientation: TOrientation;
  /** Visual variant */
  variant: TTabsVariant;
  /** Panel unmount strategy */
  unmountStrategy: TTabsUnmountStrategy;
  /** Register a tab for keyboard navigation */
  registerTab: (value: string, disabled: boolean) => void;
  /** Unregister a tab */
  unregisterTab: (value: string) => void;
  /** Get all registered tabs for keyboard navigation */
  getTabs: () => Array<{ value: string; disabled: boolean }>;
}
