import React from "react";
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
export default function useFocusTrap(containerRef: React.RefObject<HTMLElement | null>, isActive: boolean): void;
//# sourceMappingURL=useFocusTrap.d.ts.map