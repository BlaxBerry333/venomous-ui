import { onUnmounted, watch } from "vue";

/**
 * Lock body scroll when enabled
 * Used by Modal, Drawer, and other overlay components
 */
// eslint-disable-next-line react-x/no-unnecessary-use-prefix -- Vue composable, not React hook
export function useBodyScrollLock(enabled: () => boolean): void {
  let originalOverflow = "";

  watch(
    enabled,
    (isEnabled) => {
      if (isEnabled) {
        originalOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = originalOverflow;
      }
    },
    { immediate: true },
  );

  onUnmounted(() => {
    document.body.style.overflow = originalOverflow || "";
  });
}
