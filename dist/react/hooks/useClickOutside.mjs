import { useRef as u, useEffect as m } from "react";
function v(e, t, n) {
  const r = u(t), s = u(e);
  r.current = t, s.current = e, m(() => {
    if (!n) return;
    const c = (i) => {
      const d = i.target;
      s.current.some((f) => {
        var o;
        return (o = f.current) == null ? void 0 : o.contains(d);
      }) || r.current();
    };
    return document.addEventListener("mousedown", c), () => {
      document.removeEventListener("mousedown", c);
    };
  }, [n]);
}
export {
  v as useClickOutside
};
