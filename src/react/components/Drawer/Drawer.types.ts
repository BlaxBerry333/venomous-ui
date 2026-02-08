import type { TDrawerBaseProps } from "@/core/types";
import type { HTMLAttributes, ReactNode } from "react";

export interface TDrawerProps
  extends TDrawerBaseProps, Omit<HTMLAttributes<HTMLDivElement>, keyof TDrawerBaseProps | "children" | "title"> {
  /** Callback when drawer requests to close */
  onClose: () => void;
  /** Footer content - when provided, renders a footer section */
  footer?: ReactNode;
  /** Custom close icon - replaces the default × icon */
  closeIcon?: ReactNode;
  /** Drawer content */
  children?: ReactNode;
}
