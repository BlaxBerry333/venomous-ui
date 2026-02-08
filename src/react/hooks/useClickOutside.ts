import { useEffect, type RefObject } from "react";

/**
 * Handle click outside of specified elements
 * Used by Popover for closing on outside click
 *
 * @param refs - Array of refs to check if click is inside
 * @param onClickOutside - Callback when click is outside all refs
 * @param enabled - Whether to listen for outside clicks
 */
export function useClickOutside(
  refs: RefObject<HTMLElement | null>[],
  onClickOutside: () => void,
  enabled: boolean,
): void {
  useEffect(() => {
    if (!enabled) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      // Check if click is inside any of the refs
      const isInside = refs.some((ref) => ref.current?.contains(target));
      if (isInside) return;

      onClickOutside();
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [refs, onClickOutside, enabled]);
}
