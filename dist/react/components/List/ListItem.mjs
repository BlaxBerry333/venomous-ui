import { jsxs as I, jsx as i } from "react/jsx-runtime";
import r from "react";
import v from "clsx";
import { LIST_CSS_CLASS_NAMES as e } from "../../../core/constants/cssClassNames.mjs";
import x from "../../hooks/useComputedStyle/index.mjs";
import "../ThemeProvider/ThemeContext.mjs";
import "../ThemeProvider/ThemeProvider.mjs";
const C = r.memo(
  r.forwardRef(
    ({
      as: n,
      selected: o = !1,
      disabled: s = !1,
      onClick: t,
      StartElement: l,
      EndElement: c,
      children: d,
      className: p,
      style: N,
      ...f
    }, y) => {
      const S = n || "li", h = x(N), m = !!t && !s, u = v(
        e.item.className,
        m && e.itemInteractive.className,
        o && e.itemSelected.className,
        s && e.itemDisabled.className,
        p
      );
      return /* @__PURE__ */ I(
        S,
        {
          ref: y,
          className: u,
          style: h,
          onClick: t ? (a) => {
            !s && t && t(a);
          } : void 0,
          onKeyDown: m ? (a) => {
            m && (a.key === "Enter" || a.key === " ") && (a.preventDefault(), a.currentTarget.click());
          } : void 0,
          tabIndex: m ? 0 : void 0,
          "aria-selected": o || void 0,
          "aria-disabled": s || void 0,
          ...f,
          children: [
            l && /* @__PURE__ */ i("span", { className: e.itemStartElement.className, children: l }),
            /* @__PURE__ */ i("span", { className: e.itemContent.className, children: d }),
            c && /* @__PURE__ */ i("span", { className: e.itemEndElement.className, children: c })
          ]
        }
      );
    }
  )
);
C.displayName = "ListItem";
export {
  C as default
};
