import type { CSSProperties, HTMLAttributes } from "react";

import type { ITheme } from "@/core/theme";
import type { ProgressColor, ProgressSize } from "@/core/types";

export type ProgressBarElement = HTMLDivElement;

export interface ProgressBarProps extends Omit<HTMLAttributes<ProgressBarElement>, "style"> {
  /** Progress value (0-100). Ignored when animated is true. */
  value?: number;
  /** Progress bar size */
  size?: ProgressSize;
  /** Progress bar color */
  color?: ProgressColor;
  /** Whether to show animated indeterminate state (for loading) */
  animated?: boolean;
  /** Custom class name */
  className?: string;
  /** Custom styles, supports object or theme callback function */
  style?: CSSProperties | ((theme: ITheme) => CSSProperties);
}
