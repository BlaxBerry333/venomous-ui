import type { TModalBaseProps } from "../../../core/types";
import type { HTMLAttributes, ReactNode } from "react";
export interface TModalProps extends TModalBaseProps, Omit<HTMLAttributes<HTMLDivElement>, keyof TModalBaseProps | "children" | "title"> {
    /** Callback when modal requests to close */
    onClose: () => void;
    /** Footer content - when provided, renders a footer section */
    footer?: ReactNode;
    /** Custom close icon - replaces the default × icon */
    closeIcon?: ReactNode;
    /** Modal content */
    children?: ReactNode;
}
//# sourceMappingURL=Modal.types.d.ts.map