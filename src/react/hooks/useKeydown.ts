import { useEffect, useRef } from "react";

/**
 * Handle specific key press to trigger callback
 * Used by Modal, Drawer, Popover, etc.
 *
 * @param key - Key to listen for (e.g., "Escape", "Enter", "ArrowDown")
 * @param onKeydown - Callback when key is pressed
 * @param enabled - Whether to listen for key events
 */
export function useKeydown(key: string, onKeydown: () => void, enabled: boolean): void {
  // Store latest callback in ref to avoid re-registering listeners on every render
  const callbackRef = useRef(onKeydown);
  callbackRef.current = onKeydown;

  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === key) {
        callbackRef.current();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [enabled, key]);
}
