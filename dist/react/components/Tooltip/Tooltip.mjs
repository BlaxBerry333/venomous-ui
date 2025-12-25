import { jsx as p, Fragment as w, jsxs as C } from "react/jsx-runtime";
import o from "react";
import k from "clsx";
import { COMPONENT_NAMES as R } from "../../../core/constants/componentNames.mjs";
import { TOOLTIP_CSS_CLASS_NAMES as B } from "../../../core/constants/cssClassNames.mjs";
import { getElementRect as I, calculateFloatingPosition as j, getArrowDirection as q } from "../../../core/tools/positioning/index.mjs";
import z from "../Arrow/Arrow.mjs";
import D from "../Portal/Portal.mjs";
import $ from "../../hooks/useComputedStyle/index.mjs";
import U from "../../hooks/useStyleInjection/index.mjs";
import "../ThemeProvider/ThemeContext.mjs";
import "../ThemeProvider/ThemeProvider.mjs";
import { generateTooltipCSS as W } from "../../../core/css/componentStyles/Tooltip.mjs";
const G = o.memo(({ children: f, title: d, placement: a = "top", offset: g = 8, style: v, className: A }) => {
  const P = W();
  U(R.Tooltip, P);
  const h = $(v), [i, u] = o.useState(!1), [r, S] = o.useState(null), [y, F] = o.useState(a), m = o.useRef(null), l = o.useRef(null), L = o.useCallback(() => u(!0), []), M = o.useCallback(() => u(!1), []), O = o.useCallback(() => u(!0), []), T = o.useCallback(() => u(!1), []);
  o.useEffect(() => {
    i || S(null);
  }, [i]);
  const b = 8, s = o.useCallback(() => {
    if (!m.current || !l.current) return;
    const n = I(m.current), e = l.current.getBoundingClientRect();
    if (e.width === 0 || e.height === 0) return;
    const t = j({
      triggerRect: n,
      floatingRect: { width: e.width, height: e.height },
      placement: a,
      offset: g + b
    });
    S(t.position), F(t.actualPlacement);
  }, [a, g]);
  o.useEffect(() => {
    if (!i) return;
    let n, e = 0;
    const t = 10, E = () => {
      l.current && l.current.getBoundingClientRect().width > 0 ? s() : e < t && (e++, n = requestAnimationFrame(E));
    };
    return n = requestAnimationFrame(E), window.addEventListener("scroll", s, !0), window.addEventListener("resize", s), () => {
      cancelAnimationFrame(n), window.removeEventListener("scroll", s, !0), window.removeEventListener("resize", s);
    };
  }, [i, s]);
  const x = o.useMemo(
    () => ({
      left: r ? `${r.x}px` : 0,
      top: r ? `${r.y}px` : 0,
      visibility: r ? "visible" : "hidden",
      ...h
    }),
    [r, h]
  ), N = q(y ?? a);
  if (!d)
    return /* @__PURE__ */ p(w, { children: f });
  const c = o.Children.only(f), _ = o.cloneElement(c, {
    ref: m,
    onMouseEnter: (n) => {
      var e, t;
      L(), (t = (e = c.props).onMouseEnter) == null || t.call(e, n);
    },
    onMouseLeave: (n) => {
      var e, t;
      M(), (t = (e = c.props).onMouseLeave) == null || t.call(e, n);
    },
    onFocus: (n) => {
      var e, t;
      O(), (t = (e = c.props).onFocus) == null || t.call(e, n);
    },
    onBlur: (n) => {
      var e, t;
      T(), (t = (e = c.props).onBlur) == null || t.call(e, n);
    }
  });
  return /* @__PURE__ */ C(w, { children: [
    _,
    i && /* @__PURE__ */ p(D, { children: /* @__PURE__ */ C(
      "div",
      {
        ref: l,
        className: k(B.base.className, A),
        style: x,
        role: "tooltip",
        children: [
          /* @__PURE__ */ p(z, { direction: N }),
          d
        ]
      }
    ) })
  ] });
});
G.displayName = R.Tooltip;
export {
  G as default
};
