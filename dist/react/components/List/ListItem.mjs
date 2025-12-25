import { jsxs as u, jsx as t } from "react/jsx-runtime";
import c from "react";
import x from "clsx";
import { LIST_CSS_CLASS_NAMES as e } from "../../../core/constants/cssClassNames.mjs";
import C from "../../hooks/useComputedStyle/index.mjs";
import "../ThemeProvider/ThemeContext.mjs";
import "../ThemeProvider/ThemeProvider.mjs";
const y = c.memo(
  c.forwardRef(
    ({
      as: r,
      selected: m = !1,
      disabled: s = !1,
      onClick: a,
      StartElement: i,
      EndElement: l,
      children: n,
      className: p,
      style: N,
      ...d
    }, f) => {
      const S = r || "li", v = C(N), o = !!a && !s, I = x(
        e.item.className,
        o && e.itemInteractive.className,
        m && e.itemSelected.className,
        s && e.itemDisabled.className,
        p
      );
      return /* @__PURE__ */ u(
        S,
        {
          ref: f,
          className: I,
          style: v,
          onClick: a ? (h) => {
            !s && a && a(h);
          } : void 0,
          tabIndex: o ? 0 : void 0,
          "aria-selected": m || void 0,
          "aria-disabled": s || void 0,
          ...d,
          children: [
            i && /* @__PURE__ */ t("span", { className: e.itemStartElement.className, children: i }),
            /* @__PURE__ */ t("span", { className: e.itemContent.className, children: n }),
            l && /* @__PURE__ */ t("span", { className: e.itemEndElement.className, children: l })
          ]
        }
      );
    }
  )
);
y.displayName = "ListItem";
export {
  y as default
};
