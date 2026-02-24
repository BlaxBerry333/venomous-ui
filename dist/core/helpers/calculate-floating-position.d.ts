import type { TPopoverPlacement } from "../../core/types";
/**
 * Calculate floating element position based on trigger element and placement
 * Used by Tooltip, Popover, and other floating components
 * Uses fixed positioning relative to viewport (no scroll offset needed)
 */
export declare function calculateFloatingPosition(triggerRect: DOMRect, floatingSize: {
    width: number;
    height: number;
}, placement: TPopoverPlacement, gap: number): {
    top: number;
    left: number;
};
//# sourceMappingURL=calculate-floating-position.d.ts.map