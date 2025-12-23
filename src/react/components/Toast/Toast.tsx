"use client";

import React from "react";

import clsx from "clsx";

import { TOAST_CSS_CLASS_NAMES } from "@/core/constants";
import { Icon } from "@/react/components/Icon";

import type { ToastVariant } from "@/core/types";

import type { ToastItemProps } from "./Toast.types";

/**
 * Default icons for each variant
 */
const DEFAULT_ICONS: Record<ToastVariant, string> = {
  success: "mdi:check-circle",
  error: "mdi:close-circle",
  warning: "mdi:alert",
  info: "mdi:information",
  loading: "mdi:loading",
};

/**
 * Get ARIA attributes based on variant
 */
function getAriaAttributes(variant: ToastVariant): { role: string; "aria-live": "polite" | "assertive" } {
  if (variant === "error" || variant === "warning") {
    return { role: "alert", "aria-live": "assertive" };
  }
  return { role: "status", "aria-live": "polite" };
}

/**
 * Single Toast component (internal)
 */
const Toast = React.memo<ToastItemProps>(({ toast, onClose, onMouseEnter, onMouseLeave }) => {
  const { variant, title, description, showIcon = true, icon, action, closable = true, state } = toast;

  const ariaAttrs = getAriaAttributes(variant);

  const rootClassName = clsx(
    TOAST_CSS_CLASS_NAMES.root.className,
    variant === "success" && TOAST_CSS_CLASS_NAMES.variantSuccess.className,
    variant === "error" && TOAST_CSS_CLASS_NAMES.variantError.className,
    variant === "warning" && TOAST_CSS_CLASS_NAMES.variantWarning.className,
    variant === "info" && TOAST_CSS_CLASS_NAMES.variantInfo.className,
    variant === "loading" && TOAST_CSS_CLASS_NAMES.variantLoading.className,
    state === "entering" && TOAST_CSS_CLASS_NAMES.entering.className,
    state === "exiting" && TOAST_CSS_CLASS_NAMES.exiting.className,
  );

  /**
   * Render icon
   */
  const renderIcon = () => {
    if (!showIcon) return null;

    if (icon) {
      return <span className={TOAST_CSS_CLASS_NAMES.icon.className}>{icon}</span>;
    }

    return (
      <span className={TOAST_CSS_CLASS_NAMES.icon.className}>
        <Icon name={DEFAULT_ICONS[variant]} />
      </span>
    );
  };

  return (
    <div
      className={rootClassName}
      {...ariaAttrs}
      aria-atomic="true"
      aria-busy={variant === "loading" ? "true" : undefined}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {renderIcon()}

      <div className={TOAST_CSS_CLASS_NAMES.content.className}>
        {title && <div className={TOAST_CSS_CLASS_NAMES.title.className}>{title}</div>}
        {description && <div className={TOAST_CSS_CLASS_NAMES.description.className}>{description}</div>}
        {action && <div className={TOAST_CSS_CLASS_NAMES.action.className}>{action}</div>}
      </div>

      {closable && (
        <button
          type="button"
          className={TOAST_CSS_CLASS_NAMES.closeButton.className}
          onClick={onClose}
          aria-label="Close notification"
        >
          <Icon name="mdi:close" />
        </button>
      )}
    </div>
  );
});

Toast.displayName = "Toast";

export default Toast;
