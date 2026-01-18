import { jsxs as g, jsx as i } from "react/jsx-runtime";
import r from "react";
import F from "clsx";
import { COMPONENT_NAMES as z } from "../../../../core/constants/componentNames.mjs";
import { FORM_FIELD_SELECT_CSS_CLASS_NAMES as s } from "../../../../core/constants/cssClassNames.mjs";
import { getElementRect as ae, calculateFloatingPosition as ie } from "../../../../core/tools/positioning/index.mjs";
import "../../FormControl/FormControl.mjs";
import { useFormControlContext as ne } from "../../FormControl/FormControlContext.mjs";
import q from "../../Icon/Icon.mjs";
import ce from "../../Portal/Portal.mjs";
import oe from "../../../hooks/useComputedStyle/index.mjs";
import ue from "../../../hooks/useStyleInjection/index.mjs";
import "../../ThemeProvider/ThemeContext.mjs";
import "../../ThemeProvider/ThemeProvider.mjs";
import { isOptionGroup as C } from "./Select.types.mjs";
import { generateFormFieldSelectCSS as de } from "../../../../core/css/componentStyles/FormFieldSelect.mjs";
const me = r.memo(
  ({
    options: m,
    value: R,
    defaultValue: B,
    placeholder: $ = "Select...",
    variant: k = "outlined",
    size: E = "medium",
    disabled: N = !1,
    error: O = !1,
    fullWidth: G = !0,
    clearable: Q = !1,
    searchable: y = !1,
    searchPlaceholder: V = "Search...",
    onChange: n,
    onOpen: v,
    onClose: h,
    className: K,
    style: U
  }) => {
    var j;
    const H = de();
    ue(z.FormFieldSelect, H);
    const J = oe(U), L = ne(), [X, I] = r.useState(B), f = R !== void 0, S = f ? R : X, [l, M] = r.useState(!1), [b, _] = r.useState(""), [p, A] = r.useState(null), Y = F(
      s.base.className,
      N && s.disabled.className,
      l && s.open.className,
      O && s.error.className,
      k === "outlined" && s.variantOutlined.className,
      k === "filled" && s.variantFilled.className,
      E === "small" && s.sizeSmall.className,
      E === "medium" && s.sizeMedium.className,
      E === "large" && s.sizeLarge.className,
      G && s.fullWidth.className,
      K
    ), u = r.useRef(null), o = r.useRef(null), x = r.useRef(null), P = r.useMemo(() => {
      const e = [];
      return m.forEach((t) => {
        C(t) ? e.push(...t.options) : e.push(t);
      }), e;
    }, [m]), T = r.useMemo(() => P.find((e) => e.value === S), [P, S]), Z = r.useMemo(() => {
      if (!b) return m;
      const e = b.toLowerCase();
      return m.map((t) => {
        if (C(t)) {
          const a = t.options.filter((w) => String(w.label).toLowerCase().includes(e));
          return a.length === 0 ? null : { ...t, options: a };
        }
        return String(t.label).toLowerCase().includes(e) ? t : null;
      }).filter((t) => t !== null);
    }, [m, b]), D = r.useCallback(() => {
      N || (M(!0), _(""), v == null || v());
    }, [N, v]), c = r.useCallback(() => {
      M(!1), h == null || h();
    }, [h]), ee = r.useCallback(() => {
      l ? c() : D();
    }, [l, D, c]), te = r.useCallback(
      (e) => {
        e.disabled || (f || I(e.value), n == null || n(e.value), c());
      },
      [f, n, c]
    ), se = r.useCallback(
      (e) => {
        e.stopPropagation(), f || I(void 0), n == null || n(void 0);
      },
      [f, n]
    ), d = r.useCallback(() => {
      if (!u.current || !o.current) return;
      const e = ae(u.current), t = o.current.getBoundingClientRect();
      if (t.width === 0 || t.height === 0) return;
      const a = ie({
        triggerRect: e,
        floatingRect: { width: t.width, height: t.height },
        placement: "bottom",
        offset: 4
      });
      A(a.position);
    }, []);
    r.useEffect(() => {
      if (!l) {
        A(null);
        return;
      }
      let e, t = 0;
      const a = 10, w = () => {
        o.current && o.current.getBoundingClientRect().width > 0 ? (d(), y && x.current && x.current.focus()) : t < a && (t++, e = requestAnimationFrame(w));
      };
      return e = requestAnimationFrame(w), window.addEventListener("scroll", d, !0), window.addEventListener("resize", d), () => {
        cancelAnimationFrame(e), window.removeEventListener("scroll", d, !0), window.removeEventListener("resize", d);
      };
    }, [l, d, y]), r.useEffect(() => {
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
    const re = ((j = u.current) == null ? void 0 : j.offsetWidth) ?? 0, W = (e) => {
      const t = e.value === S, a = F(
        s.option.className,
        t && s.optionSelected.className,
        e.disabled && s.optionDisabled.className
      );
      return /* @__PURE__ */ i(
        "div",
        {
          className: a,
          onClick: () => te(e),
          role: "option",
          "aria-selected": t,
          "aria-disabled": e.disabled,
          children: e.label
        },
        String(e.value)
      );
    }, le = () => Z.map((e) => C(e) ? /* @__PURE__ */ g("div", { className: s.group.className, children: [
      /* @__PURE__ */ i("div", { className: s.groupLabel.className, children: e.label }),
      e.options.map(W)
    ] }, `group-${e.label}`) : W(e));
    return /* @__PURE__ */ g("div", { ref: u, className: Y, style: J, children: [
      /* @__PURE__ */ g(
        "button",
        {
          type: "button",
          className: s.trigger.className,
          onClick: ee,
          disabled: N,
          "aria-haspopup": "listbox",
          "aria-expanded": l,
          "aria-invalid": O || void 0,
          "aria-describedby": L == null ? void 0 : L.helperTextId,
          children: [
            T ? /* @__PURE__ */ i("span", { className: s.value.className, children: T.label }) : /* @__PURE__ */ i(
              "span",
              {
                className: F(
                  s.value.className,
                  s.placeholder.className
                ),
                children: $
              }
            ),
            Q && S !== void 0 && /* @__PURE__ */ i(
              "span",
              {
                role: "button",
                className: s.clearButton.className,
                onClick: se,
                tabIndex: -1,
                "aria-label": "Clear selection",
                children: /* @__PURE__ */ i(q, { name: "mdi:close" })
              }
            ),
            /* @__PURE__ */ i("span", { className: s.arrow.className, children: /* @__PURE__ */ i(q, { name: "mdi:chevron-down" }) })
          ]
        }
      ),
      l && /* @__PURE__ */ i(ce, { children: /* @__PURE__ */ g(
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
            minWidth: re
          },
          children: [
            y && /* @__PURE__ */ i(
              "input",
              {
                ref: x,
                type: "text",
                className: s.search.className,
                placeholder: V,
                value: b,
                onChange: (e) => _(e.target.value)
              }
            ),
            /* @__PURE__ */ i("div", { className: s.optionsList.className, children: le() })
          ]
        }
      ) })
    ] });
  }
);
me.displayName = z.FormFieldSelect;
export {
  me as default
};
