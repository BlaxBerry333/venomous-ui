import { jsxs as P, jsx as m } from "react/jsx-runtime";
import f from "react";
import _ from "clsx";
import { COMPONENT_NAMES as N } from "../../../core/constants/componentNames.mjs";
import { CHIP_CSS_CLASS_NAMES as e } from "../../../core/constants/cssClassNames.mjs";
import E from "../../hooks/useComputedStyle/index.mjs";
import b from "../../hooks/useStyleInjection/index.mjs";
import "../ThemeProvider/ThemeContext.mjs";
import "../ThemeProvider/ThemeProvider.mjs";
import { generateChipCSS as j } from "../../../core/css/componentStyles/Chip.mjs";
const w = () => /* @__PURE__ */ m("svg", { viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ m("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" }) }), A = f.memo(
  f.forwardRef(
    ({
      variant: i = "filled",
      size: r = "medium",
      color: a = "default",
      disabled: s = !1,
      selected: d = !1,
      clickable: o = !1,
      deletable: p = !1,
      onDelete: c,
      Icon: u,
      DeleteIcon: C,
      className: S,
      style: h,
      children: n,
      onClick: l,
      ...v
    }, I) => {
      const g = j();
      b(N.Chip, g);
      const x = E(h), y = _(
        e.base.className,
        s && e.disabled.className,
        d && e.selected.className,
        (o || l) && e.clickable.className,
        i === "filled" && e.variantFilled.className,
        i === "outlined" && e.variantOutlined.className,
        r === "small" && e.sizeSmall.className,
        r === "medium" && e.sizeMedium.className,
        r === "large" && e.sizeLarge.className,
        a === "default" && e.colorDefault.className,
        a === "primary" && e.colorPrimary.className,
        a === "success" && e.colorSuccess.className,
        a === "error" && e.colorError.className,
        a === "warning" && e.colorWarning.className,
        a === "info" && e.colorInfo.className,
        S
      ), M = (t) => {
        t.stopPropagation(), !s && c && c();
      };
      return /* @__PURE__ */ P(
        "div",
        {
          ref: I,
          className: y,
          style: x,
          onClick: (t) => {
            !s && l && l(t);
          },
          "aria-disabled": s || void 0,
          role: o || l ? "button" : void 0,
          tabIndex: o || l ? s ? -1 : 0 : void 0,
          ...v,
          children: [
            u,
            n && /* @__PURE__ */ m("span", { className: e.label.className, children: n }),
            p && /* @__PURE__ */ m(
              "span",
              {
                className: e.deleteIcon.className,
                onClick: M,
                role: "button",
                "aria-label": "Remove",
                tabIndex: s ? -1 : 0,
                children: C || /* @__PURE__ */ m(w, {})
              }
            )
          ]
        }
      );
    }
  )
);
A.displayName = N.Chip;
export {
  A as default
};
