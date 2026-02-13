import { useCallback as u, useEffect as c } from "react";
function f(n, t, o) {
  const e = u(
    (r) => {
      r.key === n && t();
    },
    [n, t]
  );
  c(() => {
    if (o)
      return document.addEventListener("keydown", e), () => {
        document.removeEventListener("keydown", e);
      };
  }, [o, e]);
}
export {
  f as useKeydown
};
