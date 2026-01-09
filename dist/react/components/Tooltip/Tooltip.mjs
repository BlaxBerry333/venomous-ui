import { jsx as p, Fragment as C, jsxs as v } from "react/jsx-runtime";
import t from "react";
import k from "clsx";
import { COMPONENT_NAMES as R } from "../../../core/constants/componentNames.mjs";
import { TOOLTIP_CSS_CLASS_NAMES as B } from "../../../core/constants/cssClassNames.mjs";
import { getElementRect as $, calculateFloatingPosition as j, getArrowDirection as q } from "../../../core/tools/positioning/index.mjs";
import z from "../Arrow/Arrow.mjs";
import D from "../Portal/Portal.mjs";
import U from "../../hooks/useComputedStyle/index.mjs";
import W from "../../hooks/useStyleInjection/index.mjs";
import "../ThemeProvider/ThemeContext.mjs";
import "../ThemeProvider/ThemeProvider.mjs";
import { generateTooltipCSS as G } from "../../../core/css/componentStyles/Tooltip.mjs";
const H = t.memo(({ children: d, title: f, placement: a = "top", offset: g = 8, style: y, className: A }) => {
  const P = G();
  W(R.Tooltip, P);
  const h = t.useId(), S = U(y), [r, u] = t.useState(!1), [i, E] = t.useState(null), [b, F] = t.useState(a), m = t.useRef(null), l = t.useRef(null), L = t.useCallback(() => u(!0), []), M = t.useCallback(() => u(!1), []), O = t.useCallback(() => u(!0), []), T = t.useCallback(() => u(!1), []);
  t.useEffect(() => {
    r || E(null);
  }, [r]);
  const x = 8, s = t.useCallback(() => {
    if (!m.current || !l.current) return;
    const n = $(m.current), e = l.current.getBoundingClientRect();
    if (e.width === 0 || e.height === 0) return;
    const o = j({
      triggerRect: n,
      floatingRect: { width: e.width, height: e.height },
      placement: a,
      offset: g + x
    });
    E(o.position), F(o.actualPlacement);
  }, [a, g]);
  t.useEffect(() => {
    if (!r) return;
    let n, e = 0;
    const o = 10, w = () => {
      l.current && l.current.getBoundingClientRect().width > 0 ? s() : e < o && (e++, n = requestAnimationFrame(w));
    };
    return n = requestAnimationFrame(w), window.addEventListener("scroll", s, !0), window.addEventListener("resize", s), () => {
      cancelAnimationFrame(n), window.removeEventListener("scroll", s, !0), window.removeEventListener("resize", s);
    };
  }, [r, s]);
  const I = t.useMemo(
    () => ({
      left: i ? `${i.x}px` : 0,
      top: i ? `${i.y}px` : 0,
      visibility: i ? "visible" : "hidden",
      ...S
    }),
    [i, S]
  ), N = q(b ?? a);
  if (!f)
    return /* @__PURE__ */ p(C, { children: d });
  const c = t.Children.only(d), _ = t.cloneElement(c, {
    ref: m,
    "aria-describedby": r ? `tooltip-${h}` : void 0,
    onMouseEnter: (n) => {
      var e, o;
      L(), (o = (e = c.props).onMouseEnter) == null || o.call(e, n);
    },
    onMouseLeave: (n) => {
      var e, o;
      M(), (o = (e = c.props).onMouseLeave) == null || o.call(e, n);
    },
    onFocus: (n) => {
      var e, o;
      O(), (o = (e = c.props).onFocus) == null || o.call(e, n);
    },
    onBlur: (n) => {
      var e, o;
      T(), (o = (e = c.props).onBlur) == null || o.call(e, n);
    }
  });
  return /* @__PURE__ */ v(C, { children: [
    _,
    r && /* @__PURE__ */ p(D, { children: /* @__PURE__ */ v(
      "div",
      {
        ref: l,
        id: `tooltip-${h}`,
        className: k(B.base.className, A),
        style: I,
        role: "tooltip",
        children: [
          /* @__PURE__ */ p(z, { direction: N }),
          f
        ]
      }
    ) })
  ] });
});
H.displayName = R.Tooltip;
export {
  H as default
};
