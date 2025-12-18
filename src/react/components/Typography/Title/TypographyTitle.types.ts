import type { CSSProperties, HTMLAttributes, ReactNode } from "react";

import type { ITheme } from "@/core/theme";
import { TypographyTitleRenderElement } from "@/core/types";

export type TypographyTitleElement = HTMLHeadingElement;

export interface TypographyTitleProps extends Omit<HTMLAttributes<TypographyTitleElement>, "style"> {
  /** Render as h1-h6 (required) */
  as: TypographyTitleRenderElement;
  /** Children content */
  children?: ReactNode;
  /** Custom class name */
  className?: string;
  /** Custom styles, supports object or theme callback function */
  style?: CSSProperties | ((theme: ITheme) => CSSProperties);
}
