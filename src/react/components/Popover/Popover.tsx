"use client";

import React from "react";

import clsx from "clsx";

import { COMPONENT_NAMES, POPOVER_CSS_CLASS_NAMES } from "@/core/constants";
import { generatePopoverCSS } from "@/core/css";
import { calculateFloatingPosition, getElementRect } from "@/core/tools";
import { Portal } from "@/react/components/Portal";
import { useComputedStyle, useStyleInjection } from "@/react/hooks";
import type { PopoverProps } from "./Popover.types";

const Popover = React.memo<PopoverProps>(
  ({ trigger, placement = "bottom", offset = 8, onOpen, onClose, className, style, children }) => {
    /**
     * Inject component CSS
     */
    const POPOVER_CSS: string = generatePopoverCSS();
    useStyleInjection(COMPONENT_NAMES.Popover, POPOVER_CSS);

    /**
     * Generate unique ID for ARIA attributes
     */
    const popoverId = React.useId();

    /**
     * Compute style from theme callback or static object
     */
    const computedStyle = useComputedStyle(style);

    /**
     * Internal state
     */
    const [isOpen, setIsOpen] = React.useState(false);

    /**
     * Position state - null means not yet positioned
     */
    const [position, setPosition] = React.useState<{ x: number; y: number } | null>(null);
    const [, setActualPlacement] = React.useState<PopoverProps["placement"]>(placement);

    /**
     * Compute content style with position
     */
    const contentStyle = React.useMemo(
      () => ({
        ...computedStyle,
        left: position ? `${position.x}px` : 0,
        top: position ? `${position.y}px` : 0,
        visibility: position ? ("visible" as const) : ("hidden" as const),
      }),
      [position, computedStyle],
    );

    /**
     * Refs
     */
    const triggerRef = React.useRef<HTMLDivElement>(null);
    const contentRef = React.useRef<HTMLDivElement>(null);

    /**
     * Open handler
     */
    const handleOpen = React.useCallback(() => {
      setIsOpen(true);
      onOpen?.();
    }, [onOpen]);

    /**
     * Close handler
     */
    const handleClose = React.useCallback(() => {
      setIsOpen(false);
      onClose?.();
    }, [onClose]);

    /**
     * Toggle handler for click
     */
    const handleToggle = React.useCallback(() => {
      if (isOpen) {
        handleClose();
      } else {
        handleOpen();
      }
    }, [isOpen, handleOpen, handleClose]);

    /**
     * Reset position when closed
     */
    React.useEffect(() => {
      if (!isOpen) {
        setPosition(null);
      }
    }, [isOpen]);

    /**
     * Update position function
     */
    const updatePosition = React.useCallback(() => {
      if (!triggerRef.current || !contentRef.current) return;

      const triggerRect = getElementRect(triggerRef.current);
      const contentRect = contentRef.current.getBoundingClientRect();

      // Skip if content has no dimensions yet
      if (contentRect.width === 0 || contentRect.height === 0) return;

      const result = calculateFloatingPosition({
        triggerRect,
        floatingRect: { width: contentRect.width, height: contentRect.height },
        placement,
        offset,
      });

      setPosition(result.position);
      setActualPlacement(result.actualPlacement);
    }, [placement, offset]);

    /**
     * Update position when open - use useEffect to run after Portal renders
     */
    React.useEffect(() => {
      if (!isOpen) return;

      // Use RAF to ensure Portal has mounted and content is rendered
      let rafId: number;
      let attempts = 0;
      const maxAttempts = 10;

      const tryUpdatePosition = () => {
        if (contentRef.current && contentRef.current.getBoundingClientRect().width > 0) {
          updatePosition();
        } else if (attempts < maxAttempts) {
          attempts++;
          rafId = requestAnimationFrame(tryUpdatePosition);
        }
      };

      rafId = requestAnimationFrame(tryUpdatePosition);

      // Update on scroll/resize
      window.addEventListener("scroll", updatePosition, true);
      window.addEventListener("resize", updatePosition);

      return () => {
        cancelAnimationFrame(rafId);
        window.removeEventListener("scroll", updatePosition, true);
        window.removeEventListener("resize", updatePosition);
      };
    }, [isOpen, updatePosition]);

    /**
     * Close on outside click
     */
    React.useEffect(() => {
      if (!isOpen) return;

      const handleClickOutside = (e: MouseEvent) => {
        const target = e.target as Node;

        if (
          triggerRef.current &&
          !triggerRef.current.contains(target) &&
          contentRef.current &&
          !contentRef.current.contains(target)
        ) {
          handleClose();
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [isOpen, handleClose]);

    /**
     * Close on Escape key
     */
    React.useEffect(() => {
      if (!isOpen) return;

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          handleClose();
        }
      };

      document.addEventListener("keydown", handleKeyDown);
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }, [isOpen, handleClose]);

    return (
      <>
        <div
          ref={triggerRef}
          className={POPOVER_CSS_CLASS_NAMES.trigger.className}
          onClick={handleToggle}
          aria-expanded={isOpen}
          aria-haspopup="dialog"
          aria-controls={`popover-${popoverId}`}
        >
          {trigger}
        </div>

        {isOpen && (
          <Portal>
            <div
              ref={contentRef}
              id={`popover-${popoverId}`}
              role="dialog"
              className={clsx(POPOVER_CSS_CLASS_NAMES.base.className, className)}
              style={contentStyle}
            >
              {children}
            </div>
          </Portal>
        )}
      </>
    );
  },
);

Popover.displayName = COMPONENT_NAMES.Popover;

export default Popover;
