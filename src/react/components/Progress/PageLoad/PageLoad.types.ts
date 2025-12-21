import type { CSSProperties, HTMLAttributes } from "react";

import type { ITheme } from "@/core/theme";

export type ProgressPageLoadElement = HTMLDivElement;

export interface ProgressPageLoadProps extends Omit<HTMLAttributes<ProgressPageLoadElement>, "style"> {
  /** Whether the loading indicator is active/visible */
  isLoading?: boolean;
  /** Progress value (0-100). When provided, shows determinate progress. */
  value?: number;
  /** Custom class name */
  className?: string;
  /** Custom styles, supports object or theme callback function */
  style?: CSSProperties | ((theme: ITheme) => CSSProperties);
}
