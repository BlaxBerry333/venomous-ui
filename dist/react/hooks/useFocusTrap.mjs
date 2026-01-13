import o from "react";
const d = [
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "a[href]",
  '[tabindex]:not([tabindex="-1"])'
].join(", ");
function i(e, n) {
  const u = o.useRef(null);
  o.useEffect(() => {
    if (!n || !e.current) return;
    u.current = document.activeElement;
    const s = e.current.querySelectorAll(d);
    s.length > 0 && s[0].focus();
    const c = (t) => {
      if (t.key !== "Tab" || !e.current) return;
      const r = e.current.querySelectorAll(d);
      if (r.length === 0) return;
      const l = r[0], f = r[r.length - 1];
      t.shiftKey && document.activeElement === l ? (t.preventDefault(), f.focus()) : !t.shiftKey && document.activeElement === f && (t.preventDefault(), l.focus());
    };
    return document.addEventListener("keydown", c), () => document.removeEventListener("keydown", c);
  }, [n, e]), o.useEffect(() => {
    !n && u.current && (u.current.focus(), u.current = null);
  }, [n]);
}
export {
  i as default
};
