import { jsx as i } from "react/jsx-runtime";
import n, { useState as v, useCallback as C, useEffect as E } from "react";
import w from "clsx";
import { COMPONENT_NAMES as d } from "../../../../core/constants/componentNames.mjs";
import { PROGRESS_SCROLL_INDICATOR_CSS_CLASS_NAMES as m } from "../../../../core/constants/cssClassNames.mjs";
import I from "../../../hooks/useComputedStyle/index.mjs";
import P from "../../../hooks/useStyleInjection/index.mjs";
import "../../ThemeProvider/ThemeContext.mjs";
import "../../ThemeProvider/ThemeProvider.mjs";
import { generateProgressScrollIndicatorCSS as R } from "../../../../core/css/componentStyles/ProgressScrollIndicator.mjs";
const x = n.memo(
  n.forwardRef(
    ({ target: r, className: p, style: u, ...S }, f) => {
      const [t, c] = v(0);
      P(d.ProgressScrollIndicator, R());
      const g = I(u), o = C(() => {
        let e, l, s;
        r ? (e = r.scrollTop, l = r.scrollHeight, s = r.clientHeight) : (e = window.scrollY || document.documentElement.scrollTop, l = document.documentElement.scrollHeight, s = window.innerHeight);
        const a = l - s;
        if (a <= 0) {
          c(0);
          return;
        }
        const h = e / a * 100;
        c(Math.min(Math.max(h, 0), 100));
      }, [r]);
      E(() => {
        const e = r || window;
        return o(), e.addEventListener("scroll", o, { passive: !0 }), () => {
          e.removeEventListener("scroll", o);
        };
      }, [r, o]);
      const N = w(m.base.className, p);
      return /* @__PURE__ */ i(
        "div",
        {
          ref: f,
          className: N,
          style: g,
          role: "progressbar",
          "aria-valuenow": Math.round(t),
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-label": "Reading progress",
          ...S,
          children: /* @__PURE__ */ i(
            "div",
            {
              className: m.bar.className,
              style: { transform: `scaleX(${t / 100})` }
            }
          )
        }
      );
    }
  )
);
x.displayName = d.ProgressScrollIndicator;
export {
  x as default
};
