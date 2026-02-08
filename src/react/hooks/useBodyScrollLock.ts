import { useEffect } from "react";

// Module-level ref counting to handle multiple concurrent scroll locks
let lockCount = 0;
let savedOverflow = "";

/**
 * Lock body scroll when enabled
 * Uses reference counting so multiple Modal/Drawer instances
 * can safely lock/unlock without interfering with each other.
 */
export function useBodyScrollLock(enabled: boolean): void {
  useEffect(() => {
    if (enabled) {
      if (lockCount === 0) {
        savedOverflow = document.body.style.overflow;
      }
      lockCount++;
      document.body.style.overflow = "hidden";
      return () => {
        lockCount--;
        if (lockCount === 0) {
          document.body.style.overflow = savedOverflow;
        }
      };
    }
  }, [enabled]);
}
