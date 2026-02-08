import { useEffect } from "react";

/**
 * Lock body scroll when enabled
 * Used by Modal, Drawer, and other overlay components
 */
export function useBodyScrollLock(enabled: boolean): void {
  useEffect(() => {
    if (enabled) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [enabled]);
}
