import type { CSSProperties, HTMLAttributes, ReactNode } from "react";

import type { ITheme } from "@/core/theme";

/**
 * Supported HTML elements for the Box component
 */
export type BoxRenderElement =
  | "div"
  | "span"
  | "section"
  | "main"
  | "aside"
  | "header"
  | "footer"
  | "nav"
  | "figure"
  | "figcaption";

export type BoxElement = HTMLDivElement | HTMLElement;

export interface BoxProps extends Omit<HTMLAttributes<BoxElement>, "style"> {
  /** Render as different HTML element */
  as?: BoxRenderElement;
  /** Children */
  children?: ReactNode;
  /** Custom class name */
  className?: string;
  /** Custom styles, supports object or theme callback function */
  style?: CSSProperties | ((theme: ITheme) => CSSProperties);
}
