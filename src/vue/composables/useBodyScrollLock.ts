import { onUnmounted, watch } from "vue";

// Module-level ref counting to handle multiple concurrent scroll locks
let lockCount = 0;
let savedOverflow = "";

/**
 * Lock body scroll when enabled
 * Uses reference counting so multiple Modal/Drawer instances
 * can safely lock/unlock without interfering with each other.
 */
// eslint-disable-next-line react-x/no-unnecessary-use-prefix -- Vue composable, not React hook
export function useBodyScrollLock(enabled: () => boolean): void {
  let hasLock = false;

  function lock() {
    if (typeof document === "undefined" || hasLock) return;
    if (lockCount === 0) {
      savedOverflow = document.body.style.overflow;
    }
    lockCount++;
    hasLock = true;
    document.body.style.overflow = "hidden";
  }

  function unlock() {
    if (typeof document === "undefined" || !hasLock) return;
    hasLock = false;
    lockCount--;
    if (lockCount === 0) {
      document.body.style.overflow = savedOverflow;
    }
  }

  watch(
    enabled,
    (isEnabled) => {
      if (isEnabled) {
        lock();
      } else {
        unlock();
      }
    },
    { immediate: true },
  );

  onUnmounted(() => {
    unlock();
  });
}
