import { useRef as c, useCallback as n } from "react";
function o(...r) {
  const t = c(r);
  return t.current = r, n((u) => {
    t.current.forEach((e) => {
      typeof e == "function" ? e(u) : e && (e.current = u);
    });
  }, []);
}
export {
  o as useMergeRefs
};
