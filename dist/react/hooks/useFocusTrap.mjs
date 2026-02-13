import { useCallback as s, useEffect as l } from "react";
import { FOCUSABLE_SELECTOR as f } from "../../core/constants/a11y.mjs";
function E(n, o) {
  const r = s(
    (e) => {
      if (e.key !== "Tab" || !n.current) return;
      const t = n.current.querySelectorAll(f);
      if (t.length === 0) return;
      const u = t[0], c = t[t.length - 1];
      e.shiftKey ? document.activeElement === u && (e.preventDefault(), c.focus()) : document.activeElement === c && (e.preventDefault(), u.focus());
    },
    [n]
  );
  l(() => {
    if (o)
      return document.addEventListener("keydown", r), () => {
        document.removeEventListener("keydown", r);
      };
  }, [o, r]);
}
export {
  E as useFocusTrap
};
