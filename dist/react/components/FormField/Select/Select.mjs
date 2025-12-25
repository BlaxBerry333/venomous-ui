import { jsxs as g, jsx as n } from "react/jsx-runtime";
import r from "react";
import F from "clsx";
import { COMPONENT_NAMES as j } from "../../../../core/constants/componentNames.mjs";
import { FORM_FIELD_SELECT_CSS_CLASS_NAMES as s } from "../../../../core/constants/cssClassNames.mjs";
import { getElementRect as le, calculateFloatingPosition as ae } from "../../../../core/tools/positioning/index.mjs";
import W from "../../Icon/Icon.mjs";
import ne from "../../Portal/Portal.mjs";
import ie from "../../../hooks/useComputedStyle/index.mjs";
import ce from "../../../hooks/useStyleInjection/index.mjs";
import "../../ThemeProvider/ThemeContext.mjs";
import "../../ThemeProvider/ThemeProvider.mjs";
import { isOptionGroup as R } from "./Select.types.mjs";
import { generateFormFieldSelectCSS as oe } from "../../../../core/css/componentStyles/FormFieldSelect.mjs";
const ue = r.memo(
  ({
    options: d,
    value: x,
    defaultValue: q,
    placeholder: z = "Select...",
    variant: C = "outlined",
    size: E = "medium",
    disabled: N = !1,
    error: B = !1,
    fullWidth: $ = !0,
    clearable: G = !1,
    searchable: L = !1,
    searchPlaceholder: Q = "Search...",
    onChange: i,
    onOpen: v,
    onClose: h,
    className: V,
    style: K
  }) => {
    var T;
    const U = oe();
    ce(j.FormFieldSelect, U);
    const H = ie(K), [J, k] = r.useState(q), f = x !== void 0, S = f ? x : J, [l, O] = r.useState(!1), [w, I] = r.useState(""), [p, M] = r.useState(null), X = F(
      s.base.className,
      N && s.disabled.className,
      l && s.open.className,
      B && s.error.className,
      C === "outlined" && s.variantOutlined.className,
      C === "filled" && s.variantFilled.className,
      E === "small" && s.sizeSmall.className,
      E === "medium" && s.sizeMedium.className,
      E === "large" && s.sizeLarge.className,
      $ && s.fullWidth.className,
      V
    ), u = r.useRef(null), o = r.useRef(null), y = r.useRef(null), _ = r.useMemo(() => {
      const e = [];
      return d.forEach((t) => {
        R(t) ? e.push(...t.options) : e.push(t);
      }), e;
    }, [d]), A = r.useMemo(() => _.find((e) => e.value === S), [_, S]), Y = r.useMemo(() => {
      if (!w) return d;
      const e = w.toLowerCase();
      return d.map((t) => {
        if (R(t)) {
          const a = t.options.filter((b) => String(b.label).toLowerCase().includes(e));
          return a.length === 0 ? null : { ...t, options: a };
        }
        return String(t.label).toLowerCase().includes(e) ? t : null;
      }).filter((t) => t !== null);
    }, [d, w]), P = r.useCallback(() => {
      N || (O(!0), I(""), v == null || v());
    }, [N, v]), c = r.useCallback(() => {
      O(!1), h == null || h();
    }, [h]), Z = r.useCallback(() => {
      l ? c() : P();
    }, [l, P, c]), ee = r.useCallback(
      (e) => {
        e.disabled || (f || k(e.value), i == null || i(e.value), c());
      },
      [f, i, c]
    ), te = r.useCallback(
      (e) => {
        e.stopPropagation(), f || k(void 0), i == null || i(void 0);
      },
      [f, i]
    ), m = r.useCallback(() => {
      if (!u.current || !o.current) return;
      const e = le(u.current), t = o.current.getBoundingClientRect();
      if (t.width === 0 || t.height === 0) return;
      const a = ae({
        triggerRect: e,
        floatingRect: { width: t.width, height: t.height },
        placement: "bottom",
        offset: 4
      });
      M(a.position);
    }, []);
    r.useEffect(() => {
      if (!l) {
        M(null);
        return;
      }
      let e, t = 0;
      const a = 10, b = () => {
        o.current && o.current.getBoundingClientRect().width > 0 ? (m(), L && y.current && y.current.focus()) : t < a && (t++, e = requestAnimationFrame(b));
      };
      return e = requestAnimationFrame(b), window.addEventListener("scroll", m, !0), window.addEventListener("resize", m), () => {
        cancelAnimationFrame(e), window.removeEventListener("scroll", m, !0), window.removeEventListener("resize", m);
      };
    }, [l, m, L]), r.useEffect(() => {
      if (!l) return;
      const e = (t) => {
        const a = t.target;
        u.current && !u.current.contains(a) && o.current && !o.current.contains(a) && c();
      };
      return document.addEventListener("mousedown", e), () => {
        document.removeEventListener("mousedown", e);
      };
    }, [l, c]), r.useEffect(() => {
      if (!l) return;
      const e = (t) => {
        t.key === "Escape" && c();
      };
      return document.addEventListener("keydown", e), () => {
        document.removeEventListener("keydown", e);
      };
    }, [l, c]);
    const se = ((T = u.current) == null ? void 0 : T.offsetWidth) ?? 0, D = (e) => {
      const t = e.value === S, a = F(
        s.option.className,
        t && s.optionSelected.className,
        e.disabled && s.optionDisabled.className
      );
      return /* @__PURE__ */ n(
        "div",
        {
          className: a,
          onClick: () => ee(e),
          role: "option",
          "aria-selected": t,
          "aria-disabled": e.disabled,
          children: e.label
        },
        String(e.value)
      );
    }, re = () => Y.map((e) => R(e) ? /* @__PURE__ */ g("div", { className: s.group.className, children: [
      /* @__PURE__ */ n("div", { className: s.groupLabel.className, children: e.label }),
      e.options.map(D)
    ] }, `group-${e.label}`) : D(e));
    return /* @__PURE__ */ g("div", { ref: u, className: X, style: H, children: [
      /* @__PURE__ */ g(
        "button",
        {
          type: "button",
          className: s.trigger.className,
          onClick: Z,
          disabled: N,
          "aria-haspopup": "listbox",
          "aria-expanded": l,
          children: [
            A ? /* @__PURE__ */ n("span", { className: s.value.className, children: A.label }) : /* @__PURE__ */ n(
              "span",
              {
                className: F(
                  s.value.className,
                  s.placeholder.className
                ),
                children: z
              }
            ),
            G && S !== void 0 && /* @__PURE__ */ n(
              "span",
              {
                role: "button",
                className: s.clearButton.className,
                onClick: te,
                tabIndex: -1,
                "aria-label": "Clear selection",
                children: /* @__PURE__ */ n(W, { name: "mdi:close" })
              }
            ),
            /* @__PURE__ */ n("span", { className: s.arrow.className, children: /* @__PURE__ */ n(W, { name: "mdi:chevron-down" }) })
          ]
        }
      ),
      l && /* @__PURE__ */ n(ne, { children: /* @__PURE__ */ g(
        "div",
        {
          ref: o,
          className: s.dropdown.className,
          role: "listbox",
          style: {
            position: "fixed",
            left: p ? `${p.x}px` : 0,
            top: p ? `${p.y}px` : 0,
            visibility: p ? "visible" : "hidden",
            minWidth: se
          },
          children: [
            L && /* @__PURE__ */ n(
              "input",
              {
                ref: y,
                type: "text",
                className: s.search.className,
                placeholder: Q,
                value: w,
                onChange: (e) => I(e.target.value)
              }
            ),
            /* @__PURE__ */ n("div", { className: s.optionsList.className, children: re() })
          ]
        }
      ) })
    ] });
  }
);
ue.displayName = j.FormFieldSelect;
export {
  ue as default
};
