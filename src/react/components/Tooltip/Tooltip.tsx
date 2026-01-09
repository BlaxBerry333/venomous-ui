"use client";

import React from "react";

import clsx from "clsx";

import { COMPONENT_NAMES, TOOLTIP_CSS_CLASS_NAMES } from "@/core/constants";
import { generateTooltipCSS } from "@/core/css";
import { calculateFloatingPosition, getArrowDirection, getElementRect } from "@/core/tools";
import { Arrow } from "@/react/components/Arrow";
import { Portal } from "@/react/components/Portal";
import { useComputedStyle, useStyleInjection } from "@/react/hooks";
import type { TooltipProps } from "./Tooltip.types";

const Tooltip = React.memo<TooltipProps>(({ children, title, placement = "top", offset = 8, style, className }) => {
  /**
   * Inject component CSS
   */
  const TOOLTIP_CSS: string = generateTooltipCSS();
  useStyleInjection(COMPONENT_NAMES.Tooltip, TOOLTIP_CSS);

  /**
   * Generate unique ID for tooltip (used for aria-describedby)
   */
  const tooltipId = React.useId();

  /**
   * Get computed style
   */
  const computedStyle = useComputedStyle(style);

  /**
   * Visibility state
   */
  const [isOpen, setIsOpen] = React.useState(false);

  /**
   * Position state - null means not yet positioned
   */
  const [position, setPosition] = React.useState<{ x: number; y: number } | null>(null);
  const [actualPlacement, setActualPlacement] = React.useState<TooltipProps["placement"]>(placement);

  /**
   * Refs
   */
  const triggerRef = React.useRef<HTMLElement>(null);
  const contentRef = React.useRef<HTMLDivElement>(null);

  /**
   * Event handlers
   */
  const handleMouseEnter = React.useCallback(() => setIsOpen(true), []);
  const handleMouseLeave = React.useCallback(() => setIsOpen(false), []);
  const handleFocus = React.useCallback(() => setIsOpen(true), []);
  const handleBlur = React.useCallback(() => setIsOpen(false), []);

  /**
   * Reset position when closed
   */
  React.useEffect(() => {
    if (!isOpen) {
      setPosition(null);
    }
  }, [isOpen]);

  /**
   * Arrow offset (always show arrow)
   */
  const ARROW_OFFSET = 8;

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
      offset: offset + ARROW_OFFSET,
    });

    setPosition(result.position);
    setActualPlacement(result.actualPlacement as TooltipProps["placement"]);
  }, [placement, offset]);

  /**
   * Update position when open
   */
  React.useEffect(() => {
    if (!isOpen) return;

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

    window.addEventListener("scroll", updatePosition, true);
    window.addEventListener("resize", updatePosition);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", updatePosition, true);
      window.removeEventListener("resize", updatePosition);
    };
  }, [isOpen, updatePosition]);

  /**
   * Compute content style with position
   */
  const contentStyle = React.useMemo(
    () => ({
      left: position ? `${position.x}px` : 0,
      top: position ? `${position.y}px` : 0,
      visibility: position ? ("visible" as const) : ("hidden" as const),
      ...computedStyle,
    }),
    [position, computedStyle],
  );

  /**
   * Get arrow direction based on actual placement
   */
  const arrowDirection = getArrowDirection(actualPlacement ?? placement);

  // Don't render tooltip if no title - return children as-is
  if (!title) {
    return <>{children}</>;
  }

  /**
   * Clone child element to attach ref and event handlers
   * Using cloneElement to avoid wrapper elements that could break layouts
   */
  type ChildProps = {
    ref?: React.Ref<HTMLElement>;
    onMouseEnter?: React.MouseEventHandler;
    onMouseLeave?: React.MouseEventHandler;
    onFocus?: React.FocusEventHandler;
    onBlur?: React.FocusEventHandler;
    "aria-describedby"?: string;
  };

  // eslint-disable-next-line react-x/no-children-only -- intentional: tooltip requires single child element as trigger
  const child = React.Children.only(children) as React.ReactElement<ChildProps>;

  // eslint-disable-next-line react-x/no-clone-element -- intentional: merging ref and event handlers with child element
  const triggerElement = React.cloneElement(child, {
    ref: triggerRef as React.Ref<HTMLElement>,
    "aria-describedby": isOpen ? `tooltip-${tooltipId}` : undefined,
    onMouseEnter: (e: React.MouseEvent) => {
      handleMouseEnter();
      child.props.onMouseEnter?.(e);
    },
    onMouseLeave: (e: React.MouseEvent) => {
      handleMouseLeave();
      child.props.onMouseLeave?.(e);
    },
    onFocus: (e: React.FocusEvent) => {
      handleFocus();
      child.props.onFocus?.(e);
    },
    onBlur: (e: React.FocusEvent) => {
      handleBlur();
      child.props.onBlur?.(e);
    },
  });

  return (
    <>
      {triggerElement}

      {isOpen && (
        <Portal>
          <div
            ref={contentRef}
            id={`tooltip-${tooltipId}`}
            className={clsx(TOOLTIP_CSS_CLASS_NAMES.base.className, className)}
            style={contentStyle}
            role="tooltip"
          >
            <Arrow direction={arrowDirection} />
            {title}
          </div>
        </Portal>
      )}
    </>
  );
});

Tooltip.displayName = COMPONENT_NAMES.Tooltip;

export default Tooltip;
