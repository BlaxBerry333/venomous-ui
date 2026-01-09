import { jsxs as I, jsx as r } from "react/jsx-runtime";
import o from "react";
import w from "clsx";
import { LIST_CSS_CLASS_NAMES as e } from "../../../core/constants/cssClassNames.mjs";
import x from "../../hooks/useComputedStyle/index.mjs";
import "../ThemeProvider/ThemeContext.mjs";
import "../ThemeProvider/ThemeProvider.mjs";
const L = o.memo(
  o.forwardRef(
    ({
      as: n,
      selected: i = !1,
      disabled: t = !1,
      onClick: a,
      StartElement: c,
      EndElement: l,
      depth: p,
      children: N,
      className: d,
      style: f,
      ...h
    }, u) => {
      const D = n || "li", y = x(f), m = !!a && !t, S = () => {
        switch (p) {
          case 1:
            return e.itemDepth1.className;
          case 2:
            return e.itemDepth2.className;
          case 3:
            return e.itemDepth3.className;
          case 4:
            return e.itemDepth4.className;
          default:
            return;
        }
      }, v = w(
        e.item.className,
        m && e.itemInteractive.className,
        i && e.itemSelected.className,
        t && e.itemDisabled.className,
        S(),
        d
      );
      return /* @__PURE__ */ I(
        D,
        {
          ref: u,
          className: v,
          style: y,
          onClick: a ? (s) => {
            !t && a && a(s);
          } : void 0,
          onKeyDown: m ? (s) => {
            m && (s.key === "Enter" || s.key === " ") && (s.preventDefault(), a == null || a(s));
          } : void 0,
          tabIndex: m ? 0 : void 0,
          "aria-selected": i || void 0,
          "aria-disabled": t || void 0,
          ...h,
          children: [
            c && /* @__PURE__ */ r("span", { className: e.itemStartElement.className, children: c }),
            /* @__PURE__ */ r("span", { className: e.itemContent.className, children: N }),
            l && /* @__PURE__ */ r("span", { className: e.itemEndElement.className, children: l })
          ]
        }
      );
    }
  )
);
L.displayName = "ListItem";
export {
  L as default
};
