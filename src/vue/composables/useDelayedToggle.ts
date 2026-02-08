import { onUnmounted } from "vue";

export interface UseDelayedToggleReturn {
  show: () => void;
  hide: () => void;
  cancelHide: () => void;
  clearTimers: () => void;
}

/**
 * Manages delayed show/hide with timer cleanup
 * Used by Tooltip, Popover for hover interactions
 */
// eslint-disable-next-line react-x/no-unnecessary-use-prefix -- Vue composable, not React hook
export function useDelayedToggle(
  onShow: () => void,
  onHide: () => void,
  showDelay: number,
  hideDelay: number,
  disabled: () => boolean = () => false,
): UseDelayedToggleReturn {
  let showTimeout: ReturnType<typeof setTimeout> | null = null;
  let hideTimeout: ReturnType<typeof setTimeout> | null = null;

  function clearTimers() {
    if (showTimeout) {
      clearTimeout(showTimeout);
      showTimeout = null;
    }
    if (hideTimeout) {
      clearTimeout(hideTimeout);
      hideTimeout = null;
    }
  }

  function cancelHide() {
    if (hideTimeout) {
      clearTimeout(hideTimeout);
      hideTimeout = null;
    }
  }

  function show() {
    if (disabled()) return;
    clearTimers();
    showTimeout = setTimeout(() => {
      onShow();
    }, showDelay);
  }

  function hide() {
    clearTimers();
    hideTimeout = setTimeout(() => {
      onHide();
    }, hideDelay);
  }

  onUnmounted(() => {
    clearTimers();
  });

  return { show, hide, cancelHide, clearTimers };
}
