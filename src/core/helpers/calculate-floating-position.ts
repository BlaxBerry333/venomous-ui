import type { TPopoverPlacement } from "@/core/types";

/**
 * Calculate floating element position based on trigger element and placement
 * Used by Tooltip, Popover, and other floating components
 * Uses fixed positioning relative to viewport (no scroll offset needed)
 */
export function calculateFloatingPosition(
  triggerRect: DOMRect,
  floatingSize: { width: number; height: number },
  placement: TPopoverPlacement,
  gap: number,
): { top: number; left: number } {
  const { top, left, width, height } = triggerRect;

  switch (placement) {
    case "top":
      return {
        top: top - floatingSize.height - gap,
        left: left + width / 2,
      };
    case "bottom":
      return {
        top: top + height + gap,
        left: left + width / 2,
      };
    case "left":
      return {
        top: top + height / 2,
        left: left - floatingSize.width - gap,
      };
    case "right":
      return {
        top: top + height / 2,
        left: left + width + gap,
      };
    /* v8 ignore next -- @preserve TypeScript ensures valid placement */
    default:
      return {
        top: 0,
        left: 0,
      };
  }
}
