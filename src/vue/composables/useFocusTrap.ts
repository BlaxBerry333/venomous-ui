import { onUnmounted, watch, type Ref } from "vue";

import { FOCUSABLE_SELECTOR } from "@/core/constants";

/**
 * Focus trap composable for modal/drawer components
 * Traps focus within the container using Tab/Shift+Tab cycling
 */
// eslint-disable-next-line react-x/no-unnecessary-use-prefix -- Vue composable, not React hook
export function useFocusTrap(containerRef: Ref<HTMLElement | null>, enabled: () => boolean): void {
  function handleFocusTrap(event: KeyboardEvent) {
    if (event.key !== "Tab" || !containerRef.value) return;

    const focusableElements = containerRef.value.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.shiftKey) {
      // Shift + Tab: if on first element, go to last
      if (document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      }
    } else {
      // Tab: if on last element, go to first
      if (document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }
  }

  watch(
    enabled,
    (isEnabled) => {
      if (typeof document === "undefined") return;
      if (isEnabled) {
        document.addEventListener("keydown", handleFocusTrap);
      } else {
        document.removeEventListener("keydown", handleFocusTrap);
      }
    },
    { immediate: true },
  );

  onUnmounted(() => {
    if (typeof document === "undefined") return;
    document.removeEventListener("keydown", handleFocusTrap);
  });
}
