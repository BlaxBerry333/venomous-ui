import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import type { ITheme } from "../../../../core/theme";
import type { ProgressColor, ProgressSize } from "../../../../core/types";
export type ProgressCircleElement = HTMLDivElement;
export interface ProgressCircleProps extends Omit<HTMLAttributes<ProgressCircleElement>, "style"> {
    /** Progress value (0-100). Ignored when animated is true. */
    value?: number;
    /** Progress circle size */
    size?: ProgressSize;
    /** Progress circle color */
    color?: ProgressColor;
    /** Whether to show animated indeterminate state (for loading) */
    animated?: boolean;
    /** Whether to show the percentage label in the center */
    showLabel?: boolean;
    /** Custom label content. Overrides default percentage display. */
    label?: ReactNode;
    /** Accessible label for screen readers */
    ariaLabel?: string;
    /** Human-readable text for current value (e.g., "50%", "Loading...") */
    ariaValueText?: string;
    /** Custom class name */
    className?: string;
    /** Custom styles, supports object or theme callback function */
    style?: CSSProperties | ((theme: ITheme) => CSSProperties);
}
//# sourceMappingURL=Circle.types.d.ts.map