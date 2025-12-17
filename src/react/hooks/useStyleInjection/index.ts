"use client";

import React from "react";

/**
 * Cache: styleId -> { css, element }
 * Stores both CSS content and DOM reference for O(1) updates
 */
const injectedStyles = new Map<string, { css: string; element: HTMLStyleElement }>();

/**
 * Hook to inject CSS styles into the document head.
 *
 * Performance characteristics:
 * - O(1) cache lookup and comparison
 * - No DOM query needed for updates (element reference cached)
 * - Static styles (most components): single injection, no updates
 * - Dynamic styles (ThemeProvider): updates when content changes
 *
 * Handles edge cases:
 * - HMR/page refresh: cleans up orphaned style elements from previous sessions
 * - Element removal: recreates element if externally removed
 *
 * @param styleId - Unique identifier for the style element
 * @param css - CSS string to inject
 */
export default function useStyleInjection(styleId: string, css: string): void {
  React.useInsertionEffect(() => {
    if (typeof document === "undefined") return;

    const cached = injectedStyles.get(styleId);

    // Fast path: CSS content unchanged and element still in DOM
    if (cached?.css === css && cached.element.isConnected) return;

    if (cached?.element.isConnected) {
      // Update existing element (no DOM query needed)
      cached.element.textContent = css;
      cached.css = css;
    } else {
      // Check for orphaned style element from previous session (HMR/refresh)
      // This can happen when JS module reloads but DOM persists
      const existingEl = document.querySelector(`style[data-${styleId}]`) as HTMLStyleElement | null;

      if (existingEl) {
        // Reuse existing element, update content
        existingEl.textContent = css;
        injectedStyles.set(styleId, { css, element: existingEl });
      } else {
        // First injection: create and cache element
        const styleEl = document.createElement("style");
        styleEl.setAttribute(`data-${styleId}`, "");
        styleEl.textContent = css;
        document.head.appendChild(styleEl);
        injectedStyles.set(styleId, { css, element: styleEl });
      }
    }
  }, [styleId, css]);
}
