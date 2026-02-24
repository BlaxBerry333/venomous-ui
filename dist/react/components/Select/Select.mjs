import { jsxs as j, jsx as c } from "react/jsx-runtime";
import { useState as v, useRef as z, useId as V, useCallback as w, useEffect as X, useMemo as Y } from "react";
import { COMPONENT_NAMES as Z } from "../../../core/constants/component-names.mjs";
import { CSS_CLASSES as ee } from "../../../core/constants/css-classes.mjs";
import { useClickOutside as te } from "../../hooks/useClickOutside.mjs";
import "../../../core/helpers/toast-store.mjs";
import { useKeydown as re } from "../../hooks/useKeydown.mjs";
import { Portal as ne } from "../Portal/Portal.mjs";
import { SelectContext as se } from "./SelectContext.mjs";
import { SelectOption as K } from "./SelectOption.mjs";
const n = ee.select;
function T({
  name: E,
  options: s = [],
  value: l,
  placeholder: $ = "Select...",
  size: q = "md",
  disabled: m = !1,
  readOnly: g = !1,
  error: A,
  maxHeight: b = 300,
  dropdownIcon: N,
  selectedIcon: D,
  onChange: p,
  className: B = "",
  children: C
}) {
  var O, R;
  const [i, S] = v(!1), [u, d] = v(-1), [U, x] = v(void 0), a = z(null), I = z(null), L = V(), o = !!C, y = o ? void 0 : s.find((e) => e.value === l), P = o ? l == null ? void 0 : l.toString() : y == null ? void 0 : y.label, F = o ? U : u >= 0 ? (O = s[u]) == null ? void 0 : O.value : void 0, _ = w(() => {
    m || g || (S((e) => !e), d(-1), x(void 0));
  }, [m, g]), f = w(() => {
    S(!1), d(-1), x(void 0);
  }, []), k = w(
    (e) => {
      var r;
      const t = s.find((h) => h.value === e);
      p == null || p(e, t || { value: e, label: String(e) }), f(), (r = a.current) == null || r.focus();
    },
    [s, p, f]
  ), H = w(
    (e) => {
      if (o)
        x(e);
      else {
        const t = s.findIndex((r) => r.value === e);
        t >= 0 && d(t);
      }
    },
    [o, s]
  ), [M, W] = v({ top: 0, left: 0 });
  X(() => {
    if (i && a.current) {
      const e = () => {
        if (!a.current) return;
        const h = a.current.getBoundingClientRect();
        W({
          top: h.bottom + 4,
          // 4px gap
          left: h.left
        });
      };
      let t;
      const r = requestAnimationFrame(() => {
        t = requestAnimationFrame(e);
      });
      return window.addEventListener("scroll", e, !0), window.addEventListener("resize", e), () => {
        cancelAnimationFrame(r), cancelAnimationFrame(t), window.removeEventListener("scroll", e, !0), window.removeEventListener("resize", e);
      };
    }
  }, [i]), re("Escape", f, i), te([a, I], f, i);
  const G = (e) => {
    if (!i) {
      (e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === "Enter" || e.key === " ") && (e.preventDefault(), S(!0), o || d(0));
      return;
    }
    if (o) {
      e.key === "Tab" && f();
      return;
    }
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault(), d((t) => {
          const r = t + 1;
          return r >= s.length ? 0 : r;
        });
        break;
      case "ArrowUp":
        e.preventDefault(), d((t) => {
          const r = t - 1;
          return r < 0 ? s.length - 1 : r;
        });
        break;
      case "Enter":
      case " ":
        if (e.preventDefault(), u >= 0 && s[u]) {
          const t = s[u];
          t.disabled || k(t.value);
        }
        break;
      case "Tab":
        f();
        break;
    }
  }, J = [
    n.root,
    n.sizes[q],
    i ? n.states.open : "",
    A ? n.states.error : "",
    m ? n.states.disabled : "",
    g ? n.states.readonly : "",
    B
  ].filter(Boolean).join(" "), Q = Y(
    () => ({
      value: l,
      onSelect: k,
      highlightedValue: F,
      onHighlight: H,
      selectedIcon: D
    }),
    [l, k, F, H, D]
  );
  return /* @__PURE__ */ j("div", { className: J, children: [
    E && /* @__PURE__ */ c("input", { type: "hidden", name: E, value: l ?? "" }),
    /* @__PURE__ */ j(
      "button",
      {
        ref: a,
        type: "button",
        className: n.trigger,
        disabled: m,
        "aria-haspopup": "listbox",
        "aria-expanded": i,
        "aria-controls": i ? L : void 0,
        "aria-invalid": A || void 0,
        onClick: _,
        onKeyDown: G,
        children: [
          /* @__PURE__ */ c("span", { className: P ? n.value : `${n.value} ${n.placeholder}`, children: P || $ }),
          N && /* @__PURE__ */ c("span", { className: n.icon, children: N })
        ]
      }
    ),
    i && /* @__PURE__ */ c(ne, { children: /* @__PURE__ */ c(
      "div",
      {
        ref: I,
        id: L,
        role: "listbox",
        className: n.dropdown,
        style: {
          top: M.top,
          left: M.left,
          width: (R = a.current) == null ? void 0 : R.offsetWidth,
          maxHeight: typeof b == "number" ? `${b}px` : b
        },
        children: /* @__PURE__ */ c(se.Provider, { value: Q, children: o ? C : s.map((e) => /* @__PURE__ */ c(K, { value: e.value, disabled: e.disabled, children: e.label }, e.value)) })
      }
    ) })
  ] });
}
T.displayName = Z.Select;
T.Option = K;
export {
  T as Select
};
