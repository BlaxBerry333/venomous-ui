import { jsxs as y, jsx as u } from "react/jsx-runtime";
import { useState as M, useRef as s, useCallback as C, useEffect as j } from "react";
import { CSS_CLASSES as x } from "../../../core/constants/css-classes.mjs";
const _ = {
  success: "✓",
  error: "✕",
  warning: "⚠",
  info: "ℹ"
}, r = x.toast;
function O({ toast: e, store: o, defaultDuration: S, defaultClosable: b, icons: c }) {
  const [t, L] = M(!1), i = s(null), l = s(0), m = s(0), h = s(null), n = e.duration ?? S, R = e.closable ?? b, g = c == null ? void 0 : c[e.type], f = C(
    (E = !1) => {
      var N;
      if (t) return;
      L(!0);
      const p = h.current;
      if (!p) {
        o.dismiss(e.id), E && ((N = e.onAutoClose) == null || N.call(e));
        return;
      }
      const v = () => {
        var T;
        p.removeEventListener("animationend", v), o.dismiss(e.id), E && ((T = e.onAutoClose) == null || T.call(e));
      };
      p.addEventListener("animationend", v);
    },
    [t, e, o]
  ), d = s(f);
  d.current = f, j(() => {
    if (!(n <= 0))
      return l.current = n, m.current = Date.now(), i.current = setTimeout(() => d.current(!0), n), () => {
        i.current && clearTimeout(i.current);
      };
  }, [n]);
  const w = C(() => {
    n <= 0 || !i.current || (clearTimeout(i.current), i.current = null, l.current -= Date.now() - m.current);
  }, [n]), A = C(() => {
    n <= 0 || l.current <= 0 || (m.current = Date.now(), i.current = setTimeout(() => d.current(!0), l.current));
  }, [n]), I = [r.root, r.types[e.type], t ? r.closing : ""].filter(Boolean).join(" ");
  return /* @__PURE__ */ y(
    "li",
    {
      ref: h,
      className: I,
      role: "status",
      "aria-live": e.type === "error" ? "assertive" : "polite",
      "aria-atomic": "true",
      onMouseEnter: w,
      onMouseLeave: A,
      children: [
        /* @__PURE__ */ u("span", { className: r.icon, children: g ?? _[e.type] }),
        /* @__PURE__ */ y("div", { className: r.content, children: [
          /* @__PURE__ */ u("p", { className: r.title, children: e.title }),
          e.description && /* @__PURE__ */ u("p", { className: r.description, children: e.description })
        ] }),
        R && /* @__PURE__ */ u("button", { type: "button", className: r.close, "aria-label": "Close", onClick: () => f(!1), children: (c == null ? void 0 : c.close) ?? "✕" })
      ]
    }
  );
}
export {
  O as ToastItem
};
