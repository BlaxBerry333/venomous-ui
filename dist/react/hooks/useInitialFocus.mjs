import { useEffect as u } from "react";
import { FOCUSABLE_SELECTOR as c } from "../../core/constants/a11y.mjs";
function m(r, t) {
  u(() => {
    if (t && r.current) {
      const e = r.current.querySelectorAll(c);
      if (e.length > 0) {
        const o = requestAnimationFrame(() => {
          e[0].focus();
        });
        return () => cancelAnimationFrame(o);
      }
    }
  }, [t, r]);
}
export {
  m as useInitialFocus
};
