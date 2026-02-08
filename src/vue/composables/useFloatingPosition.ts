import { onUnmounted, ref, watch, type Ref } from "vue";

import { CSS_VAR_NAMES } from "@/core/constants";
import { calculateFloatingPosition, getCssVar } from "@/core/helpers";
import type { TPopoverPlacement } from "@/core/types";

export interface UseFloatingPositionReturn {
  position: Ref<{ top: number; left: number }>;
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
// eslint-disable-next-line react-x/no-unnecessary-use-prefix -- Vue composable, not React hook
export function useFloatingPosition(
  triggerRef: Ref<HTMLElement | null>,
  floatingRef: Ref<HTMLElement | null>,
  placement: () => TPopoverPlacement,
  isVisible: () => boolean,
): UseFloatingPositionReturn {
  const position = ref({ top: 0, left: 0 });

  let scrollResizeCleanup: (() => void) | null = null;
  let rafId1 = 0;
  let rafId2 = 0;

  function updatePosition() {
    if (!triggerRef.value || !floatingRef.value) return;

    // With display: contents, use firstElementChild for accurate positioning
    const triggerElement = triggerRef.value.firstElementChild as HTMLElement | null;
    if (!triggerElement) return;

    const triggerRect = triggerElement.getBoundingClientRect();
    const floatingSize = {
      width: floatingRef.value.offsetWidth,
      height: floatingRef.value.offsetHeight,
    };
    const gap = getCssVar(CSS_VAR_NAMES.spacingSm, 8);
    position.value = calculateFloatingPosition(triggerRect, floatingSize, placement(), gap);
  }

  watch(
    isVisible,
    (visible) => {
      if (typeof window === "undefined") return;
      if (visible) {
        // Double rAF to ensure element has been laid out before measuring
        rafId1 = requestAnimationFrame(() => {
          rafId2 = requestAnimationFrame(() => {
            updatePosition();
          });
        });

        // Update position on scroll and resize
        const handleScrollOrResize = () => {
          updatePosition();
        };

        window.addEventListener("scroll", handleScrollOrResize, true);
        window.addEventListener("resize", handleScrollOrResize);

        scrollResizeCleanup = () => {
          window.removeEventListener("scroll", handleScrollOrResize, true);
          window.removeEventListener("resize", handleScrollOrResize);
        };
      } else {
        cancelAnimationFrame(rafId1);
        cancelAnimationFrame(rafId2);
        if (scrollResizeCleanup) {
          scrollResizeCleanup();
          scrollResizeCleanup = null;
        }
      }
    },
    { immediate: true },
  );

  onUnmounted(() => {
    cancelAnimationFrame(rafId1);
    cancelAnimationFrame(rafId2);
    if (scrollResizeCleanup) {
      scrollResizeCleanup();
    }
  });

  return { position, updatePosition };
}
