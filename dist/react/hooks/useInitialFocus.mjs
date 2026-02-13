import { useEffect as o } from "react";
import { FOCUSABLE_SELECTOR as u } from "../../core/constants/a11y.mjs";
function f(t, r) {
  o(() => {
    if (r && t.current) {
      const e = t.current.querySelectorAll(u);
      e.length > 0 && requestAnimationFrame(() => {
        e[0].focus();
      });
    }
  }, [r, t]);
}
export {
  f as useInitialFocus
};
