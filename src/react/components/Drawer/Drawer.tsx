"use client";

import React from "react";

import clsx from "clsx";

import { COMPONENT_NAMES, DRAWER_CSS_CLASS_NAMES } from "@/core/constants";
import { generateDrawerCSS } from "@/core/css";
import { Backdrop } from "@/react/components/Backdrop";
import { useComputedStyle, useStyleInjection } from "@/react/hooks";
import type { DrawerProps } from "./Drawer.types";

const anchorClassMap = {
  left: DRAWER_CSS_CLASS_NAMES.anchorLeft.className,
  right: DRAWER_CSS_CLASS_NAMES.anchorRight.className,
  top: DRAWER_CSS_CLASS_NAMES.anchorTop.className,
  bottom: DRAWER_CSS_CLASS_NAMES.anchorBottom.className,
} as const;

const Drawer = React.memo<DrawerProps>(
  ({
    isOpen,
    onClose,
    anchor = "left",
    closeOnBackdropClick = true,
    closeOnEscape = true,
    style,
    className,
    DrawerHeader,
    DrawerFooter,
    children,
  }) => {
    /**
     * Inject component CSS
     */
    const DRAWER_CSS: string = generateDrawerCSS();
    useStyleInjection(COMPONENT_NAMES.Drawer, DRAWER_CSS);

    /**
     * Get component style
     */
    const computedStyle = useComputedStyle(style);

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
     * Stop propagation to prevent backdrop click when clicking on drawer content
     */
    const handleContentClick: React.MouseEventHandler<HTMLDivElement> = React.useCallback((e) => {
      e.stopPropagation();
    }, []);

    return (
      <Backdrop isOpen={isOpen} onClick={handleBackdropClick}>
        <div
          className={clsx(DRAWER_CSS_CLASS_NAMES.base.className, anchorClassMap[anchor], className)}
          style={computedStyle}
          data-open={isOpen}
          onClick={handleContentClick}
          role="dialog"
          aria-modal="true"
        >
          {DrawerHeader}
          {children}
          {DrawerFooter}
        </div>
      </Backdrop>
    );
  },
);

Drawer.displayName = COMPONENT_NAMES.Drawer;

export default Drawer;
