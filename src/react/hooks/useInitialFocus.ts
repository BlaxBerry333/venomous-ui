import { useEffect, type RefObject } from "react";

import { FOCUSABLE_SELECTOR } from "@/core/constants";

/**
 * Focus first focusable element in container when enabled
 * Used by Modal, Drawer, and other overlay components
 */
export function useInitialFocus(containerRef: RefObject<HTMLElement | null>, enabled: boolean): void {
  useEffect(() => {
    if (enabled && containerRef.current) {
      const focusableElements = containerRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
      if (focusableElements.length > 0) {
        // Delay focus to ensure animation has started
        const rafId = requestAnimationFrame(() => {
          focusableElements[0].focus();
        });
        return () => cancelAnimationFrame(rafId);
      }
    }
  }, [enabled, containerRef]);
}
