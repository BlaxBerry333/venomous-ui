import { useState as d, useCallback as l, useEffect as p } from "react";
import { CSS_VAR_NAMES as w } from "../../core/constants/css-variables.mjs";
import { calculateFloatingPosition as f } from "../../core/helpers/calculate-floating-position.mjs";
import { getCssVar as S } from "../../core/helpers/get-css-var.mjs";
import "../../core/helpers/toast-store.mjs";
function g(r, e, s, c) {
  const [a, u] = d({ top: 0, left: 0 }), n = l(() => {
    if (!r.current || !e.current) return;
    const o = r.current.getBoundingClientRect(), i = {
      width: e.current.offsetWidth,
      height: e.current.offsetHeight
    }, t = S(w.spacingSm, 8), m = f(o, i, s, t);
    u(m);
  }, [r, e, s]);
  return p(() => {
    if (c) {
      let o;
      const i = requestAnimationFrame(() => {
        o = requestAnimationFrame(() => {
          n();
        });
      }), t = () => {
        n();
      };
      return window.addEventListener("scroll", t, !0), window.addEventListener("resize", t), () => {
        cancelAnimationFrame(i), cancelAnimationFrame(o), window.removeEventListener("scroll", t, !0), window.removeEventListener("resize", t);
      };
    }
  }, [c, n]), { position: a, updatePosition: n };
}
export {
  g as useFloatingPosition
};
