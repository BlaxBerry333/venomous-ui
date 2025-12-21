import type { CSSProperties, HTMLAttributes } from "react";

import type { ITheme } from "@/core/theme";

export type ProgressScrollIndicatorElement = HTMLDivElement;

export interface ProgressScrollIndicatorProps extends Omit<HTMLAttributes<ProgressScrollIndicatorElement>, "style"> {
  /** Target element to track scroll progress. If not provided, tracks window scroll. */
  target?: HTMLElement | null;
  /** Custom class name */
  className?: string;
  /** Custom styles, supports object or theme callback function */
  style?: CSSProperties | ((theme: ITheme) => CSSProperties);
}
