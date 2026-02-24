import { type RefObject } from "react";
import type { TPopoverPlacement } from "../../core/types";
export interface UseFloatingPositionReturn {
    position: {
        top: number;
        left: number;
    };
    updatePosition: () => void;
}
/**
 * Manages floating element position relative to trigger
 * Handles:
 * - Position calculation using placement
 * - Auto-update on scroll/resize when visible
 * - Double rAF for accurate measurement after layout
 */
export declare function useFloatingPosition(triggerRef: RefObject<HTMLElement | null>, floatingRef: RefObject<HTMLElement | null>, placement: TPopoverPlacement, isVisible: boolean): UseFloatingPositionReturn;
//# sourceMappingURL=useFloatingPosition.d.ts.map