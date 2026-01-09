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
export default function useStyleInjection(styleId: string, css: string): void;
//# sourceMappingURL=index.d.ts.map