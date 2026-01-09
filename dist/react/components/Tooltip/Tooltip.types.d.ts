import type { CSSProperties, ReactElement, ReactNode } from "react";
import type { ITheme } from "../../../core/theme";
import type { TooltipPlacement } from "../../../core/types/components";
export interface TooltipProps {
    /**
     * Trigger element - must be a single React element
     */
    children: ReactElement;
    /**
     * Tooltip content
     */
    title: ReactNode;
    /**
     * Position of the tooltip relative to the trigger
     * @default "top"
     */
    placement?: TooltipPlacement;
    /**
     * Distance between the tooltip and the trigger in pixels
     * @default 8
     */
    offset?: number;
    /**
     * Custom styles for the tooltip content
     */
    style?: CSSProperties | ((theme: ITheme) => CSSProperties);
    /**
     * Additional CSS class names for the tooltip content
     */
    className?: string;
}
//# sourceMappingURL=Tooltip.types.d.ts.map