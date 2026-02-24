/**
 * Popover component base types
 * Extended by React and Vue implementations
 */
export type TPopoverPlacement = "top" | "bottom" | "left" | "right";
export type TPopoverTrigger = "click" | "hover";
export interface TPopoverBaseProps {
    /** Popover placement relative to trigger element */
    placement?: TPopoverPlacement;
    /** How to trigger the popover */
    trigger?: TPopoverTrigger;
    /** Controlled open state */
    open?: boolean;
    /** Close when clicking outside */
    closeOnClickOutside?: boolean;
    /** Close when pressing Escape key */
    closeOnEsc?: boolean;
    /** Whether popover is disabled */
    disabled?: boolean;
    /** Additional CSS class names for popover */
    className?: string;
}
//# sourceMappingURL=popover.d.ts.map