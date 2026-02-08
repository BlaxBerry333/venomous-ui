import { useCallback, useEffect } from "react";

/**
 * Handle specific key press to trigger callback
 * Used by Modal, Drawer, Popover, etc.
 *
 * @param key - Key to listen for (e.g., "Escape", "Enter", "ArrowDown")
 * @param onKeydown - Callback when key is pressed
 * @param enabled - Whether to listen for key events
 */
export function useKeydown(key: string, onKeydown: () => void, enabled: boolean): void {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === key) {
        onKeydown();
      }
    },
    [key, onKeydown],
  );

  useEffect(() => {
    if (enabled) {
      document.addEventListener("keydown", handleKeyDown);
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [enabled, handleKeyDown]);
}
