export interface UseDelayedToggleReturn {
    show: () => void;
    hide: () => void;
    cancelHide: () => void;
    clearTimers: () => void;
}
/**
 * Manages delayed show/hide with timer cleanup
 * Used by Tooltip, Popover for hover interactions
 */
export declare function useDelayedToggle(onShow: () => void, onHide: () => void, showDelay: number, hideDelay: number, disabled?: boolean): UseDelayedToggleReturn;
//# sourceMappingURL=useDelayedToggle.d.ts.map