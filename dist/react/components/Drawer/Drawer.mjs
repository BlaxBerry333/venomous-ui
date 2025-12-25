import { jsx as y, jsxs as C } from "react/jsx-runtime";
import a from "react";
import E from "clsx";
import { COMPONENT_NAMES as n } from "../../../core/constants/componentNames.mjs";
import { DRAWER_CSS_CLASS_NAMES as r } from "../../../core/constants/cssClassNames.mjs";
import w from "../Backdrop/Backdrop.mjs";
import D from "../../hooks/useComputedStyle/index.mjs";
import R from "../../hooks/useStyleInjection/index.mjs";
import "../ThemeProvider/ThemeContext.mjs";
import "../ThemeProvider/ThemeProvider.mjs";
import { generateDrawerCSS as g } from "../../../core/css/componentStyles/Drawer.mjs";
const A = {
  left: r.anchorLeft.className,
  right: r.anchorRight.className,
  top: r.anchorTop.className,
  bottom: r.anchorBottom.className
}, _ = a.memo(
  ({
    isOpen: e,
    onClose: t,
    anchor: s = "left",
    closeOnBackdropClick: m = !0,
    closeOnEscape: c = !0,
    style: i,
    className: l,
    DrawerHeader: d,
    DrawerFooter: p,
    children: f
  }) => {
    const u = g();
    R(n.Drawer, u);
    const S = D(i), h = a.useCallback(() => {
      m && t && t();
    }, [m, t]);
    a.useEffect(() => {
      if (!e || !c || !t)
        return;
      const o = (k) => {
        k.key === "Escape" && t();
      };
      return document.addEventListener("keydown", o), () => {
        document.removeEventListener("keydown", o);
      };
    }, [e, c, t]);
    const N = a.useCallback((o) => {
      o.stopPropagation();
    }, []);
    return /* @__PURE__ */ y(w, { isOpen: e, onClick: h, children: /* @__PURE__ */ C(
      "div",
      {
        className: E(r.base.className, A[s], l),
        style: S,
        "data-open": e,
        onClick: N,
        role: "dialog",
        "aria-modal": "true",
        children: [
          d,
          f,
          p
        ]
      }
    ) });
  }
);
_.displayName = n.Drawer;
export {
  _ as default
};
