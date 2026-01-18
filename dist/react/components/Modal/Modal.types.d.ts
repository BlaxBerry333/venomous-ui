import type { CSSProperties, PropsWithChildren, ReactNode } from "react";
import type { IBreakpoints } from "../../../core/designs";
import type { ITheme } from "../../../core/theme";
export interface ModalProps extends PropsWithChildren {
    /**
     * Whether the modal is visible (controlled mode)
     */
    isOpen: boolean;
    /**
     * Callback fired when the modal requests to close
     * (via backdrop click or escape key, depending on settings)
     */
    onClose?: () => void;
    /**
     * Whether clicking the backdrop closes the modal
     * @default true
     */
    closeOnBackdropClick?: boolean;
    /**
     * Whether pressing Escape key closes the modal
     * @default true
     */
    closeOnEscape?: boolean;
    /**
     * Maximum width of the modal content
     * Uses breakpoint keys from design tokens (xs, sm, md, lg, xl)
     * @default "xs" (639px)
     */
    maxWidth?: keyof IBreakpoints;
    /**
     * Maximum height of the modal content
     * @default "80vh"
     */
    maxHeight?: CSSProperties["maxHeight"];
    /**
     * Custom styles for the modal content container
     * Supports object or theme callback function
     */
    style?: CSSProperties | ((theme: ITheme) => CSSProperties);
    /**
     * Additional CSS class name for the modal content container
     */
    className?: string;
    /**
     * Content to render in the modal header section
     * If not provided, no header section will be rendered
     */
    ModalHeader?: ReactNode;
    /**
     * Content to render in the modal footer section
     * If not provided, no footer section will be rendered
     */
    ModalFooter?: ReactNode;
}
//# sourceMappingURL=Modal.types.d.ts.map