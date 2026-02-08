/**
 * Drawer component base types
 * Extended by React and Vue implementations
 */

export type TDrawerPlacement = "left" | "right" | "top" | "bottom";

export type TDrawerSize = "sm" | "md" | "lg" | "xl" | "full";

export interface TDrawerBaseProps {
  /** Whether the drawer is open */
  open: boolean;
  /** Drawer placement */
  placement?: TDrawerPlacement;
  /** Drawer size (width for left/right, height for top/bottom) */
  size?: TDrawerSize;
  /** Drawer title - when provided, renders a header with title */
  title?: string;
  /** Whether to show close button in header (only when title is provided) */
  showCloseButton?: boolean;
  /** Close when clicking the backdrop */
  closeOnBackdrop?: boolean;
  /** Close when pressing Escape key */
  closeOnEsc?: boolean;
  /** Additional CSS class names */
  className?: string;
}
