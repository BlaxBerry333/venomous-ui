/**
 * Accessibility-related constants
 */

/**
 * CSS selector for focusable elements within a container
 * Used for focus trap implementation in Modal, Drawer, etc.
 */
export const FOCUSABLE_SELECTOR =
  'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
