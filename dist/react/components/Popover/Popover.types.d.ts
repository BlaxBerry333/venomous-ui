import type { PropsWithChildren, ReactNode } from "react";
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
}
//# sourceMappingURL=Popover.types.d.ts.map