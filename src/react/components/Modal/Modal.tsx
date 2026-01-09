"use client";

import React from "react";

import clsx from "clsx";

import { COMPONENT_NAMES, MODAL_CSS_CLASS_NAMES } from "@/core/constants";
import { generateModalCSS } from "@/core/css";
import { DESIGN_TOKENS } from "@/core/designs";
import { Backdrop } from "@/react/components/Backdrop";
import { Card } from "@/react/components/Card";
import { useComputedStyle, useFocusTrap, useStyleInjection } from "@/react/hooks";
import type { ModalProps } from "./Modal.types";

const Modal = React.memo<ModalProps>(
  ({
    isOpen,
    onClose,
    closeOnBackdropClick = true,
    closeOnEscape = true,
    maxWidth = "sm",
    maxHeight = "80vh",
    style,
    className,
    ModalHeader,
    ModalFooter,
    children,
  }) => {
    /**
     * Inject component CSS
     */
    const MODAL_CSS: string = generateModalCSS();
    useStyleInjection(COMPONENT_NAMES.Modal, MODAL_CSS);

    /**
     * Ref for focus trap
     */
    const modalRef = React.useRef<HTMLDivElement>(null);

    /**
     * Focus trap: traps focus within modal and restores on close
     */
    useFocusTrap(modalRef, isOpen);

    /**
     * Get component style with CSS variables for sizing
     */
    const computedStyle = useComputedStyle(style);
    const modalStyle: React.CSSProperties = React.useMemo(
      () => ({
        "--modal-max-width": DESIGN_TOKENS.breakpoints[maxWidth].max,
        "--modal-max-height": typeof maxHeight === "number" ? `${maxHeight}px` : maxHeight,
        ...computedStyle,
      }),
      [maxWidth, maxHeight, computedStyle],
    );

    /**
     * Handle backdrop click
     */
    const handleBackdropClick = React.useCallback(() => {
      if (closeOnBackdropClick && onClose) {
        onClose();
      }
    }, [closeOnBackdropClick, onClose]);

    /**
     * Handle escape key press
     */
    React.useEffect(() => {
      if (!isOpen || !closeOnEscape || !onClose) {
        return;
      }

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          onClose();
        }
      };

      document.addEventListener("keydown", handleKeyDown);
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }, [isOpen, closeOnEscape, onClose]);

    /**
     * Stop propagation to prevent backdrop click when clicking on modal content
     */
    const handleContentClick: React.MouseEventHandler<HTMLDivElement> = React.useCallback((e) => {
      e.stopPropagation();
    }, []);

    return (
      <Backdrop isOpen={isOpen} onClick={handleBackdropClick}>
        {/* Wrapper div to stop propagation without triggering Card's clickable state */}
        <div ref={modalRef} onClick={handleContentClick}>
          <Card
            className={clsx(MODAL_CSS_CLASS_NAMES.base.className, className)}
            style={modalStyle as React.CSSProperties}
            role="dialog"
            aria-modal="true"
          >
            {ModalHeader}
            {children}
            {ModalFooter}
          </Card>
        </div>
      </Backdrop>
    );
  },
);

Modal.displayName = COMPONENT_NAMES.Modal;

export default Modal;
