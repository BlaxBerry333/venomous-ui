import type { CSSProperties, PropsWithChildren, ReactNode } from "react";
import type { ITheme } from "../../../core/theme";
export type DrawerAnchor = "left" | "right" | "top" | "bottom";
export interface DrawerProps extends PropsWithChildren {
    /**
     * Whether the drawer is visible (controlled mode)
     */
    isOpen: boolean;
    /**
     * Callback fired when the drawer requests to close
     * (via backdrop click or escape key, depending on settings)
     */
    onClose?: () => void;
    /**
     * Which edge of the screen the drawer slides from
     * @default "left"
     */
    anchor?: DrawerAnchor;
    /**
     * Whether clicking the backdrop closes the drawer
     * @default true
     */
    closeOnBackdropClick?: boolean;
    /**
     * Whether pressing Escape key closes the drawer
     * @default true
     */
    closeOnEscape?: boolean;
    /**
     * Custom styles for the drawer container
     * Use this to set width (for left/right) or height (for top/bottom)
     * Supports object or theme callback function
     */
    style?: CSSProperties | ((theme: ITheme) => CSSProperties);
    /**
     * Additional CSS class name for the drawer container
     */
    className?: string;
    /**
     * Content to render in the drawer header section
     * If not provided, no header section will be rendered
     */
    DrawerHeader?: ReactNode;
    /**
     * Content to render in the drawer footer section
     * If not provided, no footer section will be rendered
     */
    DrawerFooter?: ReactNode;
}
//# sourceMappingURL=Drawer.types.d.ts.map