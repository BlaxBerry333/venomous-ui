/**
 * Modal component base types
 * Extended by React and Vue implementations
 */

export type TModalSize = "sm" | "md" | "lg" | "xl" | "full";

export interface TModalBaseProps {
  /** Whether the modal is open */
  open: boolean;
  /** Modal size */
  size?: TModalSize;
  /** Modal title - when provided, renders a header with title */
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
