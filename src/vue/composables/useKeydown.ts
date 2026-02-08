import { onUnmounted, watch } from "vue";

/**
 * Handle specific key press to trigger callback
 * Used by Modal, Drawer, Popover, etc.
 *
 * @param key - Key to listen for (e.g., "Escape", "Enter", "ArrowDown")
 * @param onKeydown - Callback when key is pressed
 * @param enabled - Getter function returning whether to listen for key events
 */
// eslint-disable-next-line react-x/no-unnecessary-use-prefix -- Vue composable, not React hook
export function useKeydown(key: string, onKeydown: () => void, enabled: () => boolean): void {
  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === key) {
      onKeydown();
    }
  }

  watch(
    enabled,
    (isEnabled) => {
      if (typeof document === "undefined") return;
      if (isEnabled) {
        document.addEventListener("keydown", handleKeyDown);
      } else {
        document.removeEventListener("keydown", handleKeyDown);
      }
    },
    { immediate: true },
  );

  onUnmounted(() => {
    if (typeof document === "undefined") return;
    document.removeEventListener("keydown", handleKeyDown);
  });
}
