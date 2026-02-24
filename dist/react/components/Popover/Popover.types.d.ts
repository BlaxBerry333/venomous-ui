import type { TPopoverBaseProps } from "../../../core/types";
import type { ReactElement, ReactNode } from "react";
export interface TPopoverProps extends TPopoverBaseProps {
    /** Popover content */
    content: ReactNode;
    /** Callback when open state changes */
    onOpenChange?: (open: boolean) => void;
    /** Trigger element (must be a single React element) */
    children: ReactElement;
}
//# sourceMappingURL=Popover.types.d.ts.map