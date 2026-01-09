import type { ArrowDirection, Placement } from "../../types/components";
export interface Rect {
    x: number;
    y: number;
    width: number;
    height: number;
}
export interface Position {
    x: number;
    y: number;
}
export interface CalculatePositionOptions {
    triggerRect: Rect;
    floatingRect: Pick<Rect, "width" | "height">;
    placement: Placement;
    offset?: number;
}
export interface CalculatePositionResult {
    position: Position;
    actualPlacement: Placement;
}
/**
 * Calculate floating element position with automatic boundary flipping
 *
 * @param options - Configuration for position calculation
 * @returns Position and the actual placement used (may differ if flipped)
 */
export declare function calculateFloatingPosition(options: CalculatePositionOptions): CalculatePositionResult;
/**
 * Get arrow direction based on placement
 * Arrow points toward the trigger element
 *
 * @param placement - Current placement of floating element
 * @returns Direction the arrow should point
 */
export declare function getArrowDirection(placement: Placement): ArrowDirection;
/**
 * Get element rect relative to viewport
 *
 * @param element - DOM element
 * @returns Element rect with x, y, width, height
 */
export declare function getElementRect(element: Element): Rect;
//# sourceMappingURL=index.d.ts.map