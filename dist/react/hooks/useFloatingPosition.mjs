import { useState as d, useCallback as l, useEffect as p } from "react";
import { CSS_VAR_NAMES as w } from "../../core/constants/css-variables.mjs";
import { calculateFloatingPosition as f } from "../../core/helpers/calculate-floating-position.mjs";
import { getCssVar as S } from "../../core/helpers/get-css-var.mjs";
import "../../core/helpers/toast-store.mjs";
function z(n, e, r, i) {
  const [s, c] = d({ top: 0, left: 0 }), o = l(() => {
    if (!n.current || !e.current) return;
    const t = n.current.getBoundingClientRect(), u = {
      width: e.current.offsetWidth,
      height: e.current.offsetHeight
    }, a = S(w.spacingSm, 8), m = f(t, u, r, a);
    c(m);
  }, [n, e, r]);
  return p(() => {
    if (i) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          o();
        });
      });
      const t = () => {
        o();
      };
      return window.addEventListener("scroll", t, !0), window.addEventListener("resize", t), () => {
        window.removeEventListener("scroll", t, !0), window.removeEventListener("resize", t);
      };
    }
  }, [i, o]), { position: s, updatePosition: o };
}
export {
  z as useFloatingPosition
};
