import { jsx as m } from "react/jsx-runtime";
import u, { useState as f, useRef as d, useEffect as p } from "react";
import R from "clsx";
import { COMPONENT_NAMES as S } from "../../../../core/constants/componentNames.mjs";
import { PROGRESS_PAGE_LOAD_CSS_CLASS_NAMES as l } from "../../../../core/constants/cssClassNames.mjs";
import x from "../../../hooks/useComputedStyle/index.mjs";
import y from "../../../hooks/useStyleInjection/index.mjs";
import "../../ThemeProvider/ThemeContext.mjs";
import "../../ThemeProvider/ThemeProvider.mjs";
import { generateProgressPageLoadCSS as C } from "../../../../core/css/componentStyles/ProgressPageLoad.mjs";
const E = u.memo(
  u.forwardRef(
    ({ isLoading: s = !1, value: r, className: P, style: N, ...g }, h) => {
      const [c, t] = f(0), [o, i] = f(!1), e = d(null), a = d(null);
      y(S.ProgressPageLoad, C());
      const v = x(N);
      p(() => {
        if (e.current && (clearInterval(e.current), e.current = null), a.current && (clearTimeout(a.current), a.current = null), s)
          if (i(!0), t(0), r !== void 0)
            t(Math.min(Math.max(r, 0), 100));
          else {
            let n = 0;
            e.current = setInterval(() => {
              n += Math.random() * 10, n >= 90 && (n = 90, e.current && (clearInterval(e.current), e.current = null)), t(n);
            }, 200);
          }
        else o && (t(100), a.current = setTimeout(() => {
          i(!1), t(0);
        }, 300));
        return () => {
          e.current && clearInterval(e.current), a.current && clearTimeout(a.current);
        };
      }, [s, r, o]), p(() => {
        s && r !== void 0 && t(Math.min(Math.max(r, 0), 100));
      }, [s, r]);
      const M = R(
        l.base.className,
        o && l.active.className,
        P
      );
      return /* @__PURE__ */ m(
        "div",
        {
          ref: h,
          className: M,
          style: v,
          role: "progressbar",
          "aria-valuenow": Math.round(c),
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-hidden": !o,
          ...g,
          children: /* @__PURE__ */ m("div", { className: l.bar.className, style: { width: `${c}%` } })
        }
      );
    }
  )
);
E.displayName = S.ProgressPageLoad;
export {
  E as default
};
