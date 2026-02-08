import { useEffect, useRef, useState } from "react";

import { CSS_VAR_NAMES } from "@/core/constants";
import { getCssVar } from "@/core/helpers";

export interface UseOverlayStateReturn {
  isVisible: boolean;
  isClosing: boolean;
}

/**
 * Manages overlay open/close state with animation support
 * Handles:
 * - Visibility state with closing animation delay
 * - Focus save/restore on open/close
 * - Timer cleanup
 */
export function useOverlayState(open: boolean): UseOverlayStateReturn {
  const [isVisible, setIsVisible] = useState(open);
  const [isClosing, setIsClosing] = useState(false);
  const closingTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const triggerRef = useRef<Element | null>(null);

  useEffect(() => {
    if (open) {
      // Store the currently focused element before opening
      triggerRef.current = document.activeElement;
      // Clear any pending close timer
      if (closingTimerRef.current) {
        clearTimeout(closingTimerRef.current);
        closingTimerRef.current = null;
      }
      setIsClosing(false);
      setIsVisible(true);
    } else if (!open && isVisible) {
      // Start closing animation
      setIsClosing(true);
      closingTimerRef.current = setTimeout(() => {
        setIsVisible(false);
        setIsClosing(false);
        closingTimerRef.current = null;
        // Restore focus to the trigger element
        if (triggerRef.current instanceof HTMLElement) {
          triggerRef.current.focus();
        }
      }, getCssVar(CSS_VAR_NAMES.durationNormal));
    }

    return () => {
      if (closingTimerRef.current) {
        clearTimeout(closingTimerRef.current);
      }
    };
  }, [open]); // eslint-disable-line react-hooks/exhaustive-deps

  return { isVisible, isClosing };
}
