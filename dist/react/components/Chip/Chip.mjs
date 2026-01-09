import { jsxs as b, jsx as l } from "react/jsx-runtime";
import N from "react";
import E from "clsx";
import { COMPONENT_NAMES as p } from "../../../core/constants/componentNames.mjs";
import { CHIP_CSS_CLASS_NAMES as e } from "../../../core/constants/cssClassNames.mjs";
import j from "../../hooks/useComputedStyle/index.mjs";
import w from "../../hooks/useStyleInjection/index.mjs";
import "../ThemeProvider/ThemeContext.mjs";
import "../ThemeProvider/ThemeProvider.mjs";
import { generateChipCSS as A } from "../../../core/css/componentStyles/Chip.mjs";
const D = () => /* @__PURE__ */ l("svg", { viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ l("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" }) }), L = N.memo(
  N.forwardRef(
    ({
      variant: i = "filled",
      size: m = "medium",
      color: a = "default",
      disabled: s = !1,
      selected: d = !1,
      clickable: c = !1,
      deletable: u = !1,
      onDelete: n,
      Icon: C,
      DeleteIcon: S,
      className: h,
      style: v,
      children: f,
      onClick: o,
      ...I
    }, g) => {
      const x = A();
      w(p.Chip, x);
      const y = j(v), M = E(
        e.base.className,
        s && e.disabled.className,
        d && e.selected.className,
        (c || o) && e.clickable.className,
        i === "filled" && e.variantFilled.className,
        i === "outlined" && e.variantOutlined.className,
        m === "small" && e.sizeSmall.className,
        m === "medium" && e.sizeMedium.className,
        m === "large" && e.sizeLarge.className,
        a === "default" && e.colorDefault.className,
        a === "primary" && e.colorPrimary.className,
        a === "success" && e.colorSuccess.className,
        a === "error" && e.colorError.className,
        a === "warning" && e.colorWarning.className,
        a === "info" && e.colorInfo.className,
        h
      ), P = (t) => {
        t.stopPropagation(), !s && n && n();
      }, _ = (t) => {
        !s && o && o(t);
      }, r = c || !!o;
      return /* @__PURE__ */ b(
        "div",
        {
          ref: g,
          className: M,
          style: y,
          onClick: _,
          role: r ? "button" : void 0,
          "aria-disabled": r && s ? !0 : void 0,
          tabIndex: r ? s ? -1 : 0 : void 0,
          ...I,
          children: [
            C,
            f && /* @__PURE__ */ l("span", { className: e.label.className, children: f }),
            u && /* @__PURE__ */ l(
              "span",
              {
                className: e.deleteIcon.className,
                onClick: P,
                role: "button",
                "aria-label": "Remove",
                tabIndex: s ? -1 : 0,
                children: S || /* @__PURE__ */ l(D, {})
              }
            )
          ]
        }
      );
    }
  )
);
L.displayName = p.Chip;
export {
  L as default
};
