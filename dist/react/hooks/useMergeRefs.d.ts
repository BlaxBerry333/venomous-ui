import { type RefCallback, type RefObject } from "react";
type Ref<T> = RefCallback<T> | RefObject<T> | null | undefined;
/**
 * Merge multiple refs into a single callback ref
 * Useful when you need both an internal ref and a forwarded ref
 */
export declare function useMergeRefs<T>(...refs: Ref<T>[]): RefCallback<T>;
export {};
//# sourceMappingURL=useMergeRefs.d.ts.map