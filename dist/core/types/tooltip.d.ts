/**
 * Tooltip component base types
 * Extended by React and Vue implementations
 */
export type TTooltipPlacement = "top" | "bottom" | "left" | "right";
export interface TTooltipBaseProps {
    /** Tooltip content text (optional in Vue when using #content slot) */
    content?: string;
    /** Tooltip placement relative to trigger element */
    placement?: TTooltipPlacement;
    /** Delay before showing tooltip (ms) */
    delay?: number;
    /** Whether tooltip is disabled */
    disabled?: boolean;
    /** Additional CSS class names for tooltip */
    className?: string;
}
//# sourceMappingURL=tooltip.d.ts.map