import { onUnmounted, watch, type Ref } from "vue";

/**
 * Handle click outside of specified elements
 * Used by Popover for closing on outside click
 *
 * @param refs - Array of refs to check if click is inside
 * @param onClickOutside - Callback when click is outside all refs
 * @param enabled - Getter function returning whether to listen
 */
// eslint-disable-next-line react-x/no-unnecessary-use-prefix -- Vue composable, not React hook
export function useClickOutside(
  refs: Ref<HTMLElement | null | undefined>[],
  onClickOutside: () => void,
  enabled: () => boolean,
): void {
  function handleClickOutside(event: MouseEvent) {
    const target = event.target as Node;

    // Check if click is inside any of the refs
    const isInside = refs.some((ref) => ref.value?.contains(target));
    if (isInside) return;

    onClickOutside();
  }

  watch(
    enabled,
    (isEnabled) => {
      if (typeof document === "undefined") return;
      if (isEnabled) {
        document.addEventListener("mousedown", handleClickOutside);
      } else {
        document.removeEventListener("mousedown", handleClickOutside);
      }
    },
    { immediate: true },
  );

  onUnmounted(() => {
    if (typeof document === "undefined") return;
    document.removeEventListener("mousedown", handleClickOutside);
  });
}
