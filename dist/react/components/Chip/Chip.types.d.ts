import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import type { ITheme } from "../../../core/theme";
import { ChipColor, ChipSize, ChipVariant } from "../../../core/types";
export type ChipElement = HTMLDivElement;
export interface ChipProps extends Omit<HTMLAttributes<ChipElement>, "style"> {
    /** Visual variant/style */
    variant?: ChipVariant;
    /** Size of the chip */
    size?: ChipSize;
    /** Color theme */
    color?: ChipColor;
    /** Whether chip is disabled */
    disabled?: boolean;
    /** Whether chip is selected/active */
    selected?: boolean;
    /** Whether chip is clickable (affects cursor and hover effect) */
    clickable?: boolean;
    /** Whether to show delete icon */
    deletable?: boolean;
    /** Callback when delete icon is clicked */
    onDelete?: () => void;
    /** Element to display on the left (icon, avatar, etc.) */
    Icon?: ReactNode;
    /** Custom delete icon element */
    DeleteIcon?: ReactNode;
    /** Custom class name */
    className?: string;
    /** Custom styles, supports object or theme callback function */
    style?: CSSProperties | ((theme: ITheme) => CSSProperties);
    /** Children content (label text) */
    children?: ReactNode;
}
//# sourceMappingURL=Chip.types.d.ts.map