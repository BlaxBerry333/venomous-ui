import { type RefObject } from "react";
/**
 * Handle click outside of specified elements
 * Used by Popover for closing on outside click
 *
 * @param refs - Array of refs to check if click is inside
 * @param onClickOutside - Callback when click is outside all refs
 * @param enabled - Whether to listen for outside clicks
 */
export declare function useClickOutside(refs: RefObject<HTMLElement | null>[], onClickOutside: () => void, enabled: boolean): void;
//# sourceMappingURL=useClickOutside.d.ts.map