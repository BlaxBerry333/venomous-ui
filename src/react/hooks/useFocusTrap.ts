"use client";

import React from "react";

/**
 * Focusable element selectors
 */
const FOCUSABLE_SELECTORS = [
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "a[href]",
  '[tabindex]:not([tabindex="-1"])',
].join(", ");

/**
 * useFocusTrap hook
 * Traps focus within a container element when active
 *
 * Features:
 * - Saves previous focus element on activation
 * - Auto-focuses first focusable element
 * - Loops Tab navigation within container
 * - Restores focus on deactivation
 *
 * @param containerRef - Ref to the container element
 * @param isActive - Whether the focus trap is active
 */
export default function useFocusTrap(containerRef: React.RefObject<HTMLElement | null>, isActive: boolean): void {
  const previousFocusRef = React.useRef<HTMLElement | null>(null);

  /**
   * Handle activation: save focus, focus first element, setup Tab handler
   */
  React.useEffect(() => {
    if (!isActive || !containerRef.current) return;

    // Save current focus element
    previousFocusRef.current = document.activeElement as HTMLElement;

    // Focus first focusable element
    const focusableElements = containerRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTORS);
    if (focusableElements.length > 0) {
      focusableElements[0].focus();
    }

    // Handle Tab key for focus cycling
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Tab" || !containerRef.current) return;

      const focusables = containerRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTORS);
      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      // Shift+Tab on first element -> focus last
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
      // Tab on last element -> focus first
      else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isActive, containerRef]);

  /**
   * Handle deactivation: restore previous focus
   */
  React.useEffect(() => {
    if (!isActive && previousFocusRef.current) {
      previousFocusRef.current.focus();
      previousFocusRef.current = null;
    }
  }, [isActive]);
}
