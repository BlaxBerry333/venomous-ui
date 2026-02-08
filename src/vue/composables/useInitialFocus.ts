import { nextTick, watch, type Ref } from "vue";

import { FOCUSABLE_SELECTOR } from "@/core/constants";

/**
 * Focus first focusable element in container when enabled
 * Used by Modal, Drawer, and other overlay components
 */
// eslint-disable-next-line react-x/no-unnecessary-use-prefix -- Vue composable, not React hook
export function useInitialFocus(containerRef: Ref<HTMLElement | null>, enabled: () => boolean): void {
  watch(
    enabled,
    (isEnabled) => {
      if (isEnabled) {
        nextTick(() => {
          if (containerRef.value) {
            const focusableElements = containerRef.value.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
            if (focusableElements.length > 0) {
              focusableElements[0].focus();
            }
          }
        });
      }
    },
    { immediate: true },
  );
}
