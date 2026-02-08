import { useCallback, useEffect, useState, type RefObject } from "react";

import { CSS_VAR_NAMES } from "@/core/constants";
import { calculateFloatingPosition, getCssVar } from "@/core/helpers";
import type { TPopoverPlacement } from "@/core/types";

export interface UseFloatingPositionReturn {
  position: { top: number; left: number };
  updatePosition: () => void;
}

/**
 * Manages floating element position relative to trigger
 * Handles:
 * - Position calculation using placement
 * - Auto-update on scroll/resize when visible
 * - Double rAF for accurate measurement after layout
 */
export function useFloatingPosition(
  triggerRef: RefObject<HTMLElement | null>,
  floatingRef: RefObject<HTMLElement | null>,
  placement: TPopoverPlacement,
  isVisible: boolean,
): UseFloatingPositionReturn {
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const updatePosition = useCallback(() => {
    if (!triggerRef.current || !floatingRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const floatingSize = {
      width: floatingRef.current.offsetWidth,
      height: floatingRef.current.offsetHeight,
    };
    const gap = getCssVar(CSS_VAR_NAMES.spacingSm, 8);
    const newPosition = calculateFloatingPosition(triggerRect, floatingSize, placement, gap);

    setPosition(newPosition);
  }, [triggerRef, floatingRef, placement]);

  // Update position when visible and on scroll/resize
  useEffect(() => {
    if (isVisible) {
      // Double rAF to ensure element has been laid out before measuring
      let rafId2: number;
      const rafId1 = requestAnimationFrame(() => {
        rafId2 = requestAnimationFrame(() => {
          updatePosition();
        });
      });

      const handleScrollOrResize = () => {
        updatePosition();
      };

      window.addEventListener("scroll", handleScrollOrResize, true);
      window.addEventListener("resize", handleScrollOrResize);

      return () => {
        cancelAnimationFrame(rafId1);
        cancelAnimationFrame(rafId2);
        window.removeEventListener("scroll", handleScrollOrResize, true);
        window.removeEventListener("resize", handleScrollOrResize);
      };
    }
  }, [isVisible, updatePosition]);

  return { position, updatePosition };
}
