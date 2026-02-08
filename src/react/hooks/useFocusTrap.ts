import { useCallback, useEffect, type RefObject } from "react";

import { FOCUSABLE_SELECTOR } from "@/core/constants";

/**
 * Focus trap hook for modal/drawer components
 * Traps focus within the container using Tab/Shift+Tab cycling
 */
export function useFocusTrap(containerRef: RefObject<HTMLElement | null>, enabled: boolean): void {
  const handleFocusTrap = useCallback(
    (event: KeyboardEvent) => {
      if (event.key !== "Tab" || !containerRef.current) return;

      const focusableElements = containerRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
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
    },
    [containerRef],
  );

  useEffect(() => {
    if (enabled) {
      document.addEventListener("keydown", handleFocusTrap);
      return () => {
        document.removeEventListener("keydown", handleFocusTrap);
      };
    }
  }, [enabled, handleFocusTrap]);
}
