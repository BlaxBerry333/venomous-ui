import { jsx as w, jsxs as C } from "react/jsx-runtime";
import e from "react";
import E from "clsx";
import { COMPONENT_NAMES as n } from "../../../core/constants/componentNames.mjs";
import { DRAWER_CSS_CLASS_NAMES as o } from "../../../core/constants/cssClassNames.mjs";
import R from "../Backdrop/Backdrop.mjs";
import D from "../../hooks/useComputedStyle/index.mjs";
import g from "../../hooks/useFocusTrap.mjs";
import A from "../../hooks/useStyleInjection/index.mjs";
import "../ThemeProvider/ThemeContext.mjs";
import "../ThemeProvider/ThemeProvider.mjs";
import { generateDrawerCSS as _ } from "../../../core/css/componentStyles/Drawer.mjs";
const b = {
  left: o.anchorLeft.className,
  right: o.anchorRight.className,
  top: o.anchorTop.className,
  bottom: o.anchorBottom.className
}, v = e.memo(
  ({
    isOpen: t,
    onClose: r,
    anchor: i = "left",
    closeOnBackdropClick: m = !0,
    closeOnEscape: c = !0,
    style: l,
    className: f,
    DrawerHeader: d,
    DrawerFooter: p,
    children: u
  }) => {
    const S = _();
    A(n.Drawer, S);
    const s = e.useRef(null);
    g(s, t);
    const h = D(l), N = e.useCallback(() => {
      m && r && r();
    }, [m, r]);
    e.useEffect(() => {
      if (!t || !c || !r)
        return;
      const a = (y) => {
        y.key === "Escape" && r();
      };
      return document.addEventListener("keydown", a), () => {
        document.removeEventListener("keydown", a);
      };
    }, [t, c, r]);
    const k = e.useCallback((a) => {
      a.stopPropagation();
    }, []);
    return /* @__PURE__ */ w(R, { isOpen: t, onClick: N, children: /* @__PURE__ */ C(
      "div",
      {
        ref: s,
        className: E(o.base.className, b[i], f),
        style: h,
        "data-open": t,
        onClick: k,
        role: "dialog",
        "aria-modal": "true",
        children: [
          d,
          u,
          p
        ]
      }
    ) });
  }
);
v.displayName = n.Drawer;
export {
  v as default
};
