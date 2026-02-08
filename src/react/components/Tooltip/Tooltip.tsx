import { cloneElement, useCallback, useId, useRef, useState } from "react";

import { COMPONENT_NAMES, CSS_CLASSES } from "@/core/constants";
import { useDelayedToggle, useFloatingPosition, useMergeRefs } from "@/react/hooks";
import { Portal } from "../Portal";
import type { TTooltipProps } from "./Tooltip.types";

const classes = CSS_CLASSES.tooltip;

/**
 * Tooltip component for React
 *
 * Shows a text tooltip on hover/focus of the trigger element
 */
export function Tooltip({
  content,
  placement = "top",
  delay = 200,
  disabled = false,
  className = "",
  children,
}: TTooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  const triggerRef = useRef<HTMLElement | null>(null);
  const tooltipRef = useRef<HTMLDivElement | null>(null);

  const tooltipId = useId();

  // Delayed show/hide
  const { show, hide } = useDelayedToggle(
    useCallback(() => setIsVisible(true), []),
    useCallback(() => setIsVisible(false), []),
    delay,
    100,
    disabled,
  );

  // Floating position management
  const { position } = useFloatingPosition(triggerRef, tooltipRef, placement, isVisible);

  // Merge internal ref with child's ref
  const childRef = (children as { ref?: React.Ref<HTMLElement> }).ref;
  const mergedRef = useMergeRefs(triggerRef, childRef);

  // Get child props with proper typing
  const childProps = children.props as Record<string, unknown>;

  // Clone child element with event handlers and ref
  // eslint-disable-next-line react-x/no-clone-element -- intentional: need to inject ref and event handlers to trigger element
  const trigger = cloneElement(children, {
    ref: mergedRef,
    onMouseEnter: (e: React.MouseEvent) => {
      show();
      (childProps.onMouseEnter as ((e: React.MouseEvent) => void) | undefined)?.(e);
    },
    onMouseLeave: (e: React.MouseEvent) => {
      hide();
      (childProps.onMouseLeave as ((e: React.MouseEvent) => void) | undefined)?.(e);
    },
    onFocus: (e: React.FocusEvent) => {
      show();
      (childProps.onFocus as ((e: React.FocusEvent) => void) | undefined)?.(e);
    },
    onBlur: (e: React.FocusEvent) => {
      hide();
      (childProps.onBlur as ((e: React.FocusEvent) => void) | undefined)?.(e);
    },
    "aria-describedby": isVisible ? tooltipId : undefined,
  } as Record<string, unknown>);

  const tooltipClassNames = [classes.root, classes.placements[placement], className].filter(Boolean).join(" ");

  return (
    <>
      {trigger}
      {isVisible && (
        <Portal>
          <div
            ref={tooltipRef}
            id={tooltipId}
            role="tooltip"
            className={tooltipClassNames}
            style={{ top: position.top, left: position.left }}
          >
            {content}
            <div className={classes.arrow} />
          </div>
        </Portal>
      )}
    </>
  );
}

Tooltip.displayName = COMPONENT_NAMES.Tooltip;
