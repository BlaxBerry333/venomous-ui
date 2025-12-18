import type { CSSProperties, HTMLAttributes, ReactNode } from "react";

import type { ITheme } from "@/core/theme";
import { TypographyTextRenderElement } from "@/core/types";

export type TypographyTextHTMLElement = HTMLSpanElement | HTMLElement;

export interface TypographyTextProps extends Omit<HTMLAttributes<TypographyTextHTMLElement>, "style"> {
  /** Render as different inline element (default: span) */
  as?: TypographyTextRenderElement;
  /** Children content */
  children?: ReactNode;
  /** Custom class name */
  className?: string;
  /** Custom styles, supports object or theme callback function */
  style?: CSSProperties | ((theme: ITheme) => CSSProperties);
}
