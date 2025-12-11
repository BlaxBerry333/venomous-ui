"use client";

import React from "react";

/**
 * Cache of injected style IDs
 * Using Set for O(1) lookup instead of DOM query
 */
const injectedStyles = new Set<string>();

/**
 * Hook to inject CSS styles into the document head.
 *
 * Uses a Set cache for O(1) duplicate detection (faster than DOM query).
 * Styles are injected once and persist for the lifetime of the page.
 *
 * @param styleId - Unique identifier for the style element (used as data attribute)
 * @param css - CSS string to inject
 *
 * @example
 * ```tsx
 * import { useStyleInjection } from "@/react/hooks";
 * import { COMPONENT_NAMES } from "@/core/constants";
 * import { BUTTON_CSS } from "@/core/css";
 *
 * function Button() {
 *   useStyleInjection(COMPONENT_NAMES.Button, BUTTON_CSS);
 *   return <button>...</button>;
 * }
 * ```
 */
export default function useStyleInjection(styleId: string, css: string): void {
  React.useInsertionEffect(() => {
    if (typeof document === "undefined") return;

    // O(1) Set lookup instead of DOM query
    if (injectedStyles.has(styleId)) return;

    injectedStyles.add(styleId);

    const cssAttr = `data-${styleId}`;
    const styleEl = document.createElement("style");
    styleEl.setAttribute(cssAttr, "");
    styleEl.textContent = css;
    document.head.appendChild(styleEl);

    // Note: I don't remove styles on cleanup because:
    // 1. Other instances of the same component may still be using them
    // 2. Styles should persist for the page lifetime for performance
  }, [styleId, css]);
}
