import { useEffect as c } from "react";
function f(e, t, n) {
  c(() => {
    if (!n) return;
    const o = (s) => {
      const i = s.target;
      e.some((u) => {
        var r;
        return (r = u.current) == null ? void 0 : r.contains(i);
      }) || t();
    };
    return document.addEventListener("mousedown", o), () => {
      document.removeEventListener("mousedown", o);
    };
  }, [e, t, n]);
}
export {
  f as useClickOutside
};
