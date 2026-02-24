/**
 * Handle specific key press to trigger callback
 * Used by Modal, Drawer, Popover, etc.
 *
 * @param key - Key to listen for (e.g., "Escape", "Enter", "ArrowDown")
 * @param onKeydown - Callback when key is pressed
 * @param enabled - Getter function returning whether to listen for key events
 */
export declare function useKeydown(key: string, onKeydown: () => void, enabled: () => boolean): void;
//# sourceMappingURL=useKeydown.d.ts.map