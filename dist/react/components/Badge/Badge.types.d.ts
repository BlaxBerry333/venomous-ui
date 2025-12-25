import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import type { ITheme } from "../../../core/theme";
import type { BadgeAnchorOrigin, BadgeColor, BadgeSize, BadgeVariant } from "../../../core/types";
export type BadgeElement = HTMLSpanElement;
export interface BadgeProps extends Omit<HTMLAttributes<BadgeElement>, "style" | "content"> {
    /** Badge content (number, text, or custom element) */
    content?: ReactNode;
    /** Visual variant */
    variant?: BadgeVariant;
    /** Size of the badge */
    size?: BadgeSize;
    /** Color theme */
    color?: BadgeColor;
    /** Maximum count to display (shows max+ when exceeded) */
    max?: number;
    /** Whether to show badge when content is 0 */
    showZero?: boolean;
    /** Whether to hide the badge */
    invisible?: boolean;
    /** Position of the badge relative to children */
    anchorOrigin?: BadgeAnchorOrigin;
    /** Custom class name */
    className?: string;
    /** Custom styles, supports object or theme callback function */
    style?: CSSProperties | ((theme: ITheme) => CSSProperties);
    /** The element the badge is attached to */
    children?: ReactNode;
}
//# sourceMappingURL=Badge.types.d.ts.map