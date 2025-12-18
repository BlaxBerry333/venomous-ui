"use client";

import React from "react";

import clsx from "clsx";

import { BACKDROP_CSS_CLASS_NAMES, COMPONENT_NAMES } from "@/core/constants";
import { generateBackdropCSS } from "@/core/css";
import { Portal } from "@/react/components/Portal";
import { useComputedStyle, useStyleInjection } from "@/react/hooks";
import type { BackdropProps } from "./Backdrop.types";

const Backdrop = React.memo<BackdropProps>(({ isOpen, onClick, style, className, children }) => {
  /**
   * Inject component CSS
   */
  const BACKDROP_CSS: string = generateBackdropCSS();
  useStyleInjection(COMPONENT_NAMES.Backdrop, BACKDROP_CSS);

  /**
   * Get component style
   */
  const computedStyle = useComputedStyle(style);

  /**
   * Handle click - only trigger onClick when clicking on backdrop itself, not children
   */
  const handleClick: React.MouseEventHandler<HTMLDivElement> = React.useCallback(
    (e) => {
      if (e.target === e.currentTarget && onClick) {
        onClick(e);
      }
    },
    [onClick],
  );

  if (!isOpen) {
    return null;
  }

  return (
    <Portal>
      <div
        className={clsx(BACKDROP_CSS_CLASS_NAMES.base.className, className)}
        style={computedStyle}
        onClick={handleClick}
        aria-hidden="true"
      >
        {children}
      </div>
    </Portal>
  );
});

Backdrop.displayName = COMPONENT_NAMES.Backdrop;

export default Backdrop;
