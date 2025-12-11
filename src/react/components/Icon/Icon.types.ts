import type { CSSProperties } from "react";

import type { IconProps as IconifyIconProps } from "@iconify/react";

import type { ITheme } from "@/core/theme";

export type IconElement = SVGSVGElement;

export interface IconProps extends Omit<IconifyIconProps, "style"> {
  /** Icon width and height, defaults to 20 */
  width?: IconifyIconProps["width"];
  /** Custom styles, supports object or theme callback function */
  style?: CSSProperties | ((theme: ITheme) => CSSProperties);
}
