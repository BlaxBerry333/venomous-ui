import { useCallback, type RefCallback, type RefObject } from "react";

type Ref<T> = RefCallback<T> | RefObject<T> | null | undefined;

/**
 * Merge multiple refs into a single callback ref
 * Useful when you need both an internal ref and a forwarded ref
 */
export function useMergeRefs<T>(...refs: Ref<T>[]): RefCallback<T> {
  return useCallback(
    (node: T) => {
      refs.forEach((ref) => {
        if (typeof ref === "function") {
          ref(node);
        } else if (ref) {
          (ref as { current: T }).current = node;
        }
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    refs,
  );
}
