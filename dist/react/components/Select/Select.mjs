import { jsxs as j, jsx as a } from "react/jsx-runtime";
import { useState as h, useRef as z, useId as V, useCallback as v, useEffect as X, useMemo as Y } from "react";
import { COMPONENT_NAMES as Z } from "../../../core/constants/component-names.mjs";
import { CSS_CLASSES as ee } from "../../../core/constants/css-classes.mjs";
import { useClickOutside as te } from "../../hooks/useClickOutside.mjs";
import "../../../core/helpers/toast-store.mjs";
import { useKeydown as re } from "../../hooks/useKeydown.mjs";
import { Portal as se } from "../Portal/Portal.mjs";
import { SelectContext as ie } from "./SelectContext.mjs";
import { SelectOption as K } from "./SelectOption.mjs";
const r = ee.select;
function T({
  name: k,
  options: s = [],
  value: l,
  placeholder: $ = "Select...",
  size: q = "md",
  disabled: m = !1,
  readOnly: w = !1,
  error: E,
  maxHeight: g = 300,
  dropdownIcon: N,
  selectedIcon: D,
  onChange: p,
  className: B = "",
  children: A
}) {
  var O, R;
  const [n, b] = h(!1), [u, c] = h(-1), [F, S] = h(void 0), d = z(null), C = z(null), L = V(), o = !!A, x = o ? void 0 : s.find((e) => e.value === l), P = o ? l == null ? void 0 : l.toString() : x == null ? void 0 : x.label, H = o ? F : u >= 0 ? (O = s[u]) == null ? void 0 : O.value : void 0, U = v(() => {
    m || w || (b((e) => !e), c(-1), S(void 0));
  }, [m, w]), f = v(() => {
    b(!1), c(-1), S(void 0);
  }, []), y = v(
    (e) => {
      var i;
      const t = s.find((Q) => Q.value === e);
      p == null || p(e, t || { value: e, label: String(e) }), f(), (i = d.current) == null || i.focus();
    },
    [s, p, f]
  ), I = v(
    (e) => {
      if (o)
        S(e);
      else {
        const t = s.findIndex((i) => i.value === e);
        t >= 0 && c(t);
      }
    },
    [o, s]
  ), [M, _] = h({ top: 0, left: 0 });
  X(() => {
    if (n && d.current) {
      const e = () => {
        const t = d.current.getBoundingClientRect();
        _({
          top: t.bottom + 4,
          // 4px gap
          left: t.left
        });
      };
      return requestAnimationFrame(() => {
        requestAnimationFrame(e);
      }), window.addEventListener("scroll", e, !0), window.addEventListener("resize", e), () => {
        window.removeEventListener("scroll", e, !0), window.removeEventListener("resize", e);
      };
    }
  }, [n]), re("Escape", f, n), te([d, C], f, n);
  const W = (e) => {
    if (!n) {
      (e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === "Enter" || e.key === " ") && (e.preventDefault(), b(!0), o || c(0));
      return;
    }
    if (o) {
      e.key === "Tab" && f();
      return;
    }
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault(), c((t) => {
          const i = t + 1;
          return i >= s.length ? 0 : i;
        });
        break;
      case "ArrowUp":
        e.preventDefault(), c((t) => {
          const i = t - 1;
          return i < 0 ? s.length - 1 : i;
        });
        break;
      case "Enter":
      case " ":
        if (e.preventDefault(), u >= 0 && s[u]) {
          const t = s[u];
          t.disabled || y(t.value);
        }
        break;
      case "Tab":
        f();
        break;
    }
  }, G = [
    r.root,
    r.sizes[q],
    n ? r.states.open : "",
    E ? r.states.error : "",
    m ? r.states.disabled : "",
    w ? r.states.readonly : "",
    B
  ].filter(Boolean).join(" "), J = Y(
    () => ({
      value: l,
      onSelect: y,
      highlightedValue: H,
      onHighlight: I,
      selectedIcon: D
    }),
    [l, y, H, I, D]
  );
  return /* @__PURE__ */ j("div", { className: G, children: [
    k && /* @__PURE__ */ a("input", { type: "hidden", name: k, value: l ?? "" }),
    /* @__PURE__ */ j(
      "button",
      {
        ref: d,
        type: "button",
        className: r.trigger,
        disabled: m,
        "aria-haspopup": "listbox",
        "aria-expanded": n,
        "aria-controls": n ? L : void 0,
        "aria-invalid": E || void 0,
        onClick: U,
        onKeyDown: W,
        children: [
          /* @__PURE__ */ a("span", { className: P ? r.value : `${r.value} ${r.placeholder}`, children: P || $ }),
          N && /* @__PURE__ */ a("span", { className: r.icon, children: N })
        ]
      }
    ),
    n && /* @__PURE__ */ a(se, { children: /* @__PURE__ */ a(
      "div",
      {
        ref: C,
        id: L,
        role: "listbox",
        className: r.dropdown,
        style: {
          top: M.top,
          left: M.left,
          width: (R = d.current) == null ? void 0 : R.offsetWidth,
          maxHeight: typeof g == "number" ? `${g}px` : g
        },
        children: /* @__PURE__ */ a(ie.Provider, { value: J, children: o ? A : s.map((e) => /* @__PURE__ */ a(K, { value: e.value, disabled: e.disabled, children: e.label }, e.value)) })
      }
    ) })
  ] });
}
T.displayName = Z.Select;
T.Option = K;
export {
  T as Select
};
