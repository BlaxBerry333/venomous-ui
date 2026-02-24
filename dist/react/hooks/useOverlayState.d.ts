export interface UseOverlayStateReturn {
    isVisible: boolean;
    isClosing: boolean;
}
/**
 * Manages overlay open/close state with animation support
 * Handles:
 * - Visibility state with closing animation delay
 * - Focus save/restore on open/close
 * - Timer cleanup
 */
export declare function useOverlayState(open: boolean): UseOverlayStateReturn;
//# sourceMappingURL=useOverlayState.d.ts.map