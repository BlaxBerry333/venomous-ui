import { type Ref } from "vue";
import type { TPopoverPlacement } from "../../core/types";
export interface UseFloatingPositionReturn {
    position: Ref<{
        top: number;
        left: number;
    }>;
    updatePosition: () => void;
}
/**
 * Manages floating element position relative to trigger
 * Handles:
 * - Position calculation using placement
 * - Auto-update on scroll/resize when visible
 * - Double rAF for accurate measurement after layout
 *
 * @param triggerRef - Ref to the trigger element (may use display:contents, will use firstElementChild)
 * @param floatingRef - Ref to the floating element
 * @param placement - Getter function returning placement direction
 * @param isVisible - Getter function returning visibility state
 */
export declare function useFloatingPosition(triggerRef: Ref<HTMLElement | null>, floatingRef: Ref<HTMLElement | null>, placement: () => TPopoverPlacement, isVisible: () => boolean): UseFloatingPositionReturn;
//# sourceMappingURL=useFloatingPosition.d.ts.map