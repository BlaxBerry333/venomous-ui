import type { TButtonBaseProps } from "@/core/types";
import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface TButtonProps
  extends TButtonBaseProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof TButtonBaseProps> {
  /** Button content */
  children?: ReactNode;
}
