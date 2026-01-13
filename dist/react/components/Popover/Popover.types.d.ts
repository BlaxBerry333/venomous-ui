import type { CSSProperties, PropsWithChildren, ReactNode } from "react";
import type { ITheme } from "../../../core/theme";
import type { PopoverPlacement } from "../../../core/types/components";
export interface PopoverProps extends PropsWithChildren {
    /**
     * Trigger element that activates the popover
     */
    trigger: ReactNode;
    /**
     * Position of the popover relative to the trigger
     * @default "bottom"
     */
    placement?: PopoverPlacement;
    /**
     * Distance between the popover and the trigger in pixels
     * @default 8
     */
    offset?: number;
    /**
     * Callback when popover opens
     */
    onOpen?: () => void;
    /**
     * Callback when popover closes
     */
    onClose?: () => void;
    /**
     * Additional CSS class names for the popover content
     */
    className?: string;
    /**
     * Custom styles for the popover content.
     * Can be a CSSProperties object or a function that receives the theme and returns CSSProperties.
     */
    style?: CSSProperties | ((theme: ITheme) => CSSProperties);
}
//# sourceMappingURL=Popover.types.d.ts.map