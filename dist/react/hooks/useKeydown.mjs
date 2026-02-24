import { useRef as u, useEffect as f } from "react";
function d(e, n, t) {
  const r = u(n);
  r.current = n, f(() => {
    if (!t) return;
    const o = (c) => {
      c.key === e && r.current();
    };
    return document.addEventListener("keydown", o), () => {
      document.removeEventListener("keydown", o);
    };
  }, [t, e]);
}
export {
  d as useKeydown
};
