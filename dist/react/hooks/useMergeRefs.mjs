import { useCallback as u } from "react";
function i(...e) {
  return u(
    (o) => {
      e.forEach((t) => {
        typeof t == "function" ? t(o) : t && (t.current = o);
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    e
  );
}
export {
  i as useMergeRefs
};
