import { type Ref } from "vue";
/**
 * Handle click outside of specified elements
 * Used by Popover for closing on outside click
 *
 * @param refs - Array of refs to check if click is inside
 * @param onClickOutside - Callback when click is outside all refs
 * @param enabled - Getter function returning whether to listen
 */
export declare function useClickOutside(refs: Ref<HTMLElement | null | undefined>[], onClickOutside: () => void, enabled: () => boolean): void;
//# sourceMappingURL=useClickOutside.d.ts.map