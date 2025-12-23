import type { PropsWithChildren, ReactNode } from "react";

import type { ToastPlacement, ToastVariant } from "@/core/types";

/**
 * Toast options for creating a toast
 */
export interface ToastOptions {
  /** Toast variant/type */
  variant?: ToastVariant;
  /** Toast title */
  title?: ReactNode;
  /** Toast description */
  description?: ReactNode;
  /** Auto-dismiss duration in milliseconds, 0 means no auto-dismiss */
  duration?: number;
  /** Whether to show close button */
  closable?: boolean;
  /** Whether to show icon */
  showIcon?: boolean;
  /** Custom icon (overrides default) */
  icon?: ReactNode;
  /** Action area content */
  action?: ReactNode;
  /** Callback when toast is closed */
  onClose?: () => void;
}

/**
 * Internal toast instance with ID and metadata
 */
export interface ToastInstance extends ToastOptions {
  /** Unique toast ID */
  id: string;
  /** Toast variant (required internally) */
  variant: ToastVariant;
  /** Creation timestamp */
  createdAt: number;
  /** Animation state */
  state: "entering" | "visible" | "exiting";
  /** Promise resolve function (called when toast closes) */
  resolve?: () => void;
}

/**
 * Toast Provider props
 */
export interface ToastProviderProps extends PropsWithChildren {
  /** Default toast placement */
  placement?: ToastPlacement;
  /** Default auto-dismiss duration in milliseconds */
  duration?: number;
  /** Maximum number of toasts to display at once */
  maxCount?: number;
  /** Gap between toasts in pixels */
  gap?: number;
  /** Offset from viewport edge */
  offset?: number | { x?: number; y?: number };
}

/**
 * Toast promise type - a Promise with an id property
 */
export interface ToastPromise extends Promise<void> {
  /** Toast ID for updating or closing */
  id: string;
}

/**
 * Toast API returned by useToast hook
 */
export interface ToastAPI {
  /** Show a success toast */
  success: (title: ReactNode, options?: Omit<ToastOptions, "variant" | "title">) => ToastPromise;
  /** Show an error toast */
  error: (title: ReactNode, options?: Omit<ToastOptions, "variant" | "title">) => ToastPromise;
  /** Show a warning toast */
  warning: (title: ReactNode, options?: Omit<ToastOptions, "variant" | "title">) => ToastPromise;
  /** Show an info toast */
  info: (title: ReactNode, options?: Omit<ToastOptions, "variant" | "title">) => ToastPromise;
  /** Show a loading toast (default: no auto-dismiss, no close button) */
  loading: (title: ReactNode, options?: Omit<ToastOptions, "variant" | "title">) => ToastPromise;
  /** Show a toast with custom options */
  open: (options: ToastOptions & { title: ReactNode }) => ToastPromise;
  /** Update an existing toast */
  set: (id: string, options: Partial<ToastOptions>) => void;
  /** Close a specific toast */
  close: (id: string) => void;
  /** Close all toasts */
  closeAll: () => void;
}

/**
 * Internal toast state for reducer
 */
export interface ToastState {
  toasts: ToastInstance[];
}

/**
 * Internal toast actions for reducer
 */
export type ToastAction =
  | { type: "ADD"; toast: ToastInstance }
  | { type: "SET"; id: string; options: Partial<ToastOptions> }
  | { type: "SET_STATE"; id: string; state: ToastInstance["state"] }
  | { type: "REMOVE"; id: string }
  | { type: "REMOVE_ALL" };

/**
 * Toast API context value (stable - used by useToast)
 * This context is separate to prevent child re-renders when toasts change
 */
export interface ToastAPIContextValue {
  /** Dispatch action to modify toasts */
  dispatch: React.Dispatch<ToastAction>;
  /** Provider configuration */
  config: Required<Omit<ToastProviderProps, "children">>;
}

/**
 * Toast context value (legacy - for backwards compatibility)
 * @deprecated Use ToastAPIContextValue instead
 */
export interface ToastContextValue extends ToastAPIContextValue {
  /** Current toast instances */
  toasts: ToastInstance[];
}

/**
 * Single Toast component props (internal)
 */
export interface ToastItemProps {
  /** Toast instance data */
  toast: ToastInstance;
  /** Callback to close this toast */
  onClose: () => void;
  /** Callback when mouse enters (pause timer) */
  onMouseEnter?: () => void;
  /** Callback when mouse leaves (resume timer) */
  onMouseLeave?: () => void;
}
