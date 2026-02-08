import { useCallback, useEffect, useRef } from "react";

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
export function useDelayedToggle(
  onShow: () => void,
  onHide: () => void,
  showDelay: number,
  hideDelay: number,
  disabled: boolean = false,
): UseDelayedToggleReturn {
  const showTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hideTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimers = useCallback(() => {
    if (showTimeoutRef.current) {
      clearTimeout(showTimeoutRef.current);
      showTimeoutRef.current = null;
    }
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
  }, []);

  const cancelHide = useCallback(() => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
  }, []);

  const show = useCallback(() => {
    if (disabled) return;
    clearTimers();
    showTimeoutRef.current = setTimeout(() => {
      onShow();
    }, showDelay);
  }, [disabled, showDelay, clearTimers, onShow]);

  const hide = useCallback(() => {
    clearTimers();
    hideTimeoutRef.current = setTimeout(() => {
      onHide();
    }, hideDelay);
  }, [hideDelay, clearTimers, onHide]);

  // Cleanup timers on unmount
  useEffect(() => {
    return () => {
      clearTimers();
    };
  }, [clearTimers]);

  return { show, hide, cancelHide, clearTimers };
}
