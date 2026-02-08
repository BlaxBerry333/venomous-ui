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
import type { TModalProps } from "./Modal.types";

const classes = CSS_CLASSES.modal;

/**
 * Modal component for React
 *
 * Two usage modes:
 * 1. Simple mode: Use title/footer props for quick setup
 * 2. Custom mode: Pass children directly for full control
 */
export const Modal = forwardRef<HTMLDivElement, TModalProps>(function Modal(
  {
    open,
    onClose,
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
  const modalRef = useRef<HTMLDivElement | null>(null);

  // Overlay state management (visibility, closing animation, focus restore)
  const { isVisible, isClosing } = useOverlayState(open);

  // Overlay behavior hooks
  useInitialFocus(modalRef, isVisible && !isClosing);
  useBodyScrollLock(isVisible);
  useFocusTrap(modalRef, isVisible);
  useKeydown("Escape", onClose, isVisible && closeOnEsc);

  // Handle backdrop click
  const handleBackdropClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (closeOnBackdrop && event.target === event.currentTarget) {
        onClose();
      }
    },
    [closeOnBackdrop, onClose],
  );

  // Merge internal ref with forwarded ref
  const mergedRef = useMergeRefs(modalRef, ref);

  if (!isVisible) {
    return null;
  }

  const backdropClassNames = [classes.backdrop, isClosing ? classes.backdropClosing : ""].filter(Boolean).join(" ");

  const modalClassNames = [classes.root, classes.sizes[size], isClosing ? classes.closing : "", className]
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
      <div className={backdropClassNames} onClick={handleBackdropClick} role="presentation">
        <div
          ref={mergedRef}
          className={modalClassNames}
          role="dialog"
          aria-modal="true"
          aria-labelledby={title ? titleId : undefined}
          {...rest}
        >
          {renderContent()}
        </div>
      </div>
    </Portal>
  );
});

Modal.displayName = COMPONENT_NAMES.Modal;
