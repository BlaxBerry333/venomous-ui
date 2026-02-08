import { forwardRef, useCallback, useId, useRef } from "react";

import { COMPONENT_NAMES, CSS_CLASSES } from "@/core/constants";
import {
  useBodyScrollLock,
  useFocusTrap,
  useInitialFocus,
  useKeydown,
  useMergeRefs,
  useOverlayState,
} from "@/react/hooks";
import { Portal } from "../Portal";
import type { TDrawerProps } from "./Drawer.types";

const classes = CSS_CLASSES.drawer;

/**
 * Drawer component for React
 *
 * Two usage modes:
 * 1. Simple mode: Use title/footer props for quick setup
 * 2. Custom mode: Pass children directly for full control
 */
export const Drawer = forwardRef<HTMLDivElement, TDrawerProps>(function Drawer(
  {
    open,
    onClose,
    placement = "right",
    size = "md",
    title,
    footer,
    showCloseButton = true,
    closeIcon,
    closeOnBackdrop = true,
    closeOnEsc = true,
    className = "",
    children,
    ...rest
  },
  ref,
) {
  const titleId = useId();
  const drawerRef = useRef<HTMLDivElement | null>(null);

  // Overlay state management (visibility, closing animation, focus restore)
  const { isVisible, isClosing } = useOverlayState(open);

  // Overlay behavior hooks
  useInitialFocus(drawerRef, isVisible && !isClosing);
  useBodyScrollLock(isVisible);
  useFocusTrap(drawerRef, isVisible);
  useKeydown("Escape", onClose, isVisible && closeOnEsc);

  // Handle backdrop click
  const handleBackdropClick = useCallback(() => {
    if (closeOnBackdrop) {
      onClose();
    }
  }, [closeOnBackdrop, onClose]);

  // Merge internal ref with forwarded ref
  const mergedRef = useMergeRefs(drawerRef, ref);

  if (!isVisible) {
    return null;
  }

  const backdropClassNames = [classes.backdrop, isClosing ? classes.backdropClosing : ""].filter(Boolean).join(" ");

  const drawerClassNames = [
    classes.root,
    classes.placements[placement],
    classes.sizes[size],
    isClosing ? classes.closing : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  // Render content based on mode
  const renderContent = () => {
    // Simple mode: title prop provided
    if (title) {
      return (
        <>
          <div className={classes.header}>
            <h2 id={titleId} className={classes.title}>
              {title}
            </h2>
            {showCloseButton && (
              <button type="button" className={classes.close} aria-label="Close" onClick={onClose}>
                {closeIcon}
              </button>
            )}
          </div>
          <div className={classes.body}>{children}</div>
          {footer && <div className={classes.footer}>{footer}</div>}
        </>
      );
    }

    // Custom mode: render children directly
    return children;
  };

  return (
    <Portal>
      {/* Backdrop */}
      <div className={backdropClassNames} onClick={handleBackdropClick} role="presentation" aria-hidden="true" />
      {/* Drawer */}
      <div
        ref={mergedRef}
        className={drawerClassNames}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? titleId : undefined}
        {...rest}
      >
        {renderContent()}
      </div>
    </Portal>
  );
});

Drawer.displayName = COMPONENT_NAMES.Drawer;
