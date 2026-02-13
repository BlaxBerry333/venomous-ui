export interface UseOverlayStateReturn {
    isVisible: Readonly<import("vue").Ref<boolean>>;
    isClosing: Readonly<import("vue").Ref<boolean>>;
}
/**
 * Manages overlay open/close state with animation support
 * Handles:
 * - Visibility state with closing animation delay
 * - Focus save/restore on open/close
 * - Timer cleanup on unmount
 */
export declare function useOverlayState(open: () => boolean): UseOverlayStateReturn;
//# sourceMappingURL=useOverlayState.d.ts.map