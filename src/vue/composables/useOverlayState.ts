import { onUnmounted, ref, watch } from "vue";

import { CSS_VAR_NAMES } from "@/core/constants";
import { getCssVar } from "@/core/helpers";

export interface UseOverlayStateReturn {
  isVisible: Readonly<import("vue").Ref<boolean>>;
  isClosing: Readonly<import("vue").Ref<boolean>>;
}

/**
 * Manages overlay open/close state with animation support
 * Handles:
 * - Visibility state with closing animation delay
 * - Focus save/restore on open/close
 * - Timer cleanup on unmount
 */
// eslint-disable-next-line react-x/no-unnecessary-use-prefix -- Vue composable, not React hook
export function useOverlayState(open: () => boolean): UseOverlayStateReturn {
  const isVisible = ref(false);
  const isClosing = ref(false);
  let triggerElement: Element | null = null;
  let closingTimer: ReturnType<typeof setTimeout> | null = null;

  watch(
    open,
    (isOpen) => {
      if (typeof document === "undefined") return;
      if (isOpen) {
        // Store the currently focused element before opening
        triggerElement = document.activeElement;
        // Clear any pending close timer
        if (closingTimer) {
          clearTimeout(closingTimer);
          closingTimer = null;
        }
        isClosing.value = false;
        isVisible.value = true;
      } else if (isVisible.value && !isClosing.value) {
        // Start closing animation
        isClosing.value = true;
        closingTimer = setTimeout(() => {
          isVisible.value = false;
          isClosing.value = false;
          closingTimer = null;
          // Restore focus to the trigger element
          if (triggerElement instanceof HTMLElement) {
            triggerElement.focus();
          }
        }, getCssVar(CSS_VAR_NAMES.durationNormal));
      }
    },
    { immediate: true },
  );

  onUnmounted(() => {
    if (closingTimer) {
      clearTimeout(closingTimer);
    }
  });

  return { isVisible, isClosing };
}
