import { cloneElement, useCallback, useId, useRef, useState } from "react";

import { COMPONENT_NAMES, CSS_CLASSES } from "@/core/constants";
import { useClickOutside, useDelayedToggle, useFloatingPosition, useKeydown, useMergeRefs } from "@/react/hooks";
import { Portal } from "../Portal";
import type { TPopoverProps } from "./Popover.types";

const classes = CSS_CLASSES.popover;

/**
 * Popover component for React
 *
 * Shows a popover with custom content on click or hover of the trigger element
 */
export function Popover({
  content,
  placement = "bottom",
  trigger = "click",
  open: controlledOpen,
  onOpenChange,
  closeOnClickOutside = true,
  closeOnEsc = true,
  disabled = false,
  className = "",
  children,
}: TPopoverProps) {
  // Internal state for uncontrolled mode
  const [internalOpen, setInternalOpen] = useState(false);

  // Use controlled or uncontrolled state
  const isControlled = controlledOpen !== undefined;
  const isOpen = isControlled ? controlledOpen : internalOpen;

  const triggerRef = useRef<HTMLElement | null>(null);
  const popoverRef = useRef<HTMLDivElement | null>(null);

  const popoverId = useId();

  // Set open state
  const setOpen = useCallback(
    (value: boolean) => {
      if (!isControlled) {
        setInternalOpen(value);
      }
      onOpenChange?.(value);
    },
    [isControlled, onOpenChange],
  );

  // Delayed show/hide for hover mode
  const { show, hide, cancelHide } = useDelayedToggle(
    useCallback(() => setOpen(true), [setOpen]),
    useCallback(() => setOpen(false), [setOpen]),
    100,
    150,
    disabled,
  );

  // Toggle popover (for click trigger)
  const toggle = useCallback(() => {
    if (disabled) return;
    setOpen(!isOpen);
  }, [disabled, isOpen, setOpen]);

  // Floating position management
  const { position } = useFloatingPosition(triggerRef, popoverRef, placement, isOpen);

  // ESC key handling
  useKeydown(
    "Escape",
    useCallback(() => setOpen(false), [setOpen]),
    isOpen && closeOnEsc,
  );

  // Handle click outside
  useClickOutside(
    [triggerRef, popoverRef],
    useCallback(() => setOpen(false), [setOpen]),
    isOpen && closeOnClickOutside,
  );

  // Merge internal ref with child's ref
  const childRef = (children as { ref?: React.Ref<HTMLElement> }).ref;
  const mergedRef = useMergeRefs(triggerRef, childRef);

  // Get child props with proper typing
  const childProps = children.props as Record<string, unknown>;

  // Build event handlers based on trigger type
  const triggerEvents: Record<string, unknown> = {};

  if (trigger === "click") {
    triggerEvents.onClick = (e: React.MouseEvent) => {
      toggle();
      (childProps.onClick as ((e: React.MouseEvent) => void) | undefined)?.(e);
    };
  } else if (trigger === "hover") {
    triggerEvents.onMouseEnter = (e: React.MouseEvent) => {
      show();
      (childProps.onMouseEnter as ((e: React.MouseEvent) => void) | undefined)?.(e);
    };
    triggerEvents.onMouseLeave = (e: React.MouseEvent) => {
      hide();
      (childProps.onMouseLeave as ((e: React.MouseEvent) => void) | undefined)?.(e);
    };
  }

  // Clone child element with event handlers and ref
  // eslint-disable-next-line react-x/no-clone-element -- intentional: need to inject ref and event handlers to trigger element
  const triggerElement = cloneElement(children, {
    ref: mergedRef,
    ...triggerEvents,
    "aria-expanded": isOpen,
    "aria-haspopup": "dialog",
    "aria-controls": isOpen ? popoverId : undefined,
  } as Record<string, unknown>);

  const popoverClassNames = [classes.root, classes.placements[placement], className].filter(Boolean).join(" ");

  return (
    <>
      {triggerElement}
      {isOpen && (
        <Portal>
          <div
            ref={popoverRef}
            id={popoverId}
            role="dialog"
            className={popoverClassNames}
            style={{ top: position.top, left: position.left }}
            onMouseEnter={trigger === "hover" ? cancelHide : undefined}
            onMouseLeave={trigger === "hover" ? hide : undefined}
          >
            {content}
            <div className={classes.arrow} />
          </div>
        </Portal>
      )}
    </>
  );
}

Popover.displayName = COMPONENT_NAMES.Popover;
