import type { CSSProperties } from "react";
import type { IconProps as IconifyIconProps } from "@iconify/react";
import type { ITheme } from "../../../core/theme";
import type { IconColor } from "../../../core/types";
export type IconElement = SVGSVGElement;
export interface IconProps extends Omit<IconifyIconProps, "icon" | "style" | "color"> {
    /** Icon name from Iconify (e.g., "mdi:home", "solar:sun-bold") */
    name: string;
    /** Icon width and height, defaults to 20 */
    width?: IconifyIconProps["width"];
    /** Icon color. Supports preset colors or any valid CSS color value */
    color?: IconColor;
    /** Custom styles, supports object or theme callback function */
    style?: CSSProperties | ((theme: ITheme) => CSSProperties);
}
//# sourceMappingURL=Icon.types.d.ts.map