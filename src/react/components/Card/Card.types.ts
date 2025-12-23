import type { CSSProperties, HTMLAttributes, ReactNode } from "react";

import type { ITheme } from "@/core/theme";
import type { CardVariant } from "@/core/types";

export type CardElement = HTMLDivElement;

export interface CardProps extends Omit<HTMLAttributes<HTMLElement>, "style"> {
  /** Card visual variant */
  variant?: CardVariant;
  /** Padding size */
  padding?: "none" | "small" | "medium" | "large";
  /** Border radius */
  radius?: "none" | "small" | "medium" | "large";
  /** Show loading overlay */
  loading?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Enable clickable styles (hover/active effects) */
  clickable?: boolean;
  /** Children */
  children?: ReactNode;
  /** Custom class name */
  className?: string;
  /** Custom styles, supports object or theme callback function */
  style?: CSSProperties | ((theme: ITheme) => CSSProperties);
}
