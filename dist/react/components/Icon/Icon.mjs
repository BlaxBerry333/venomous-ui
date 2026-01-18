import { jsx as u } from "react/jsx-runtime";
import t from "react";
import { Icon as I } from "@iconify/react";
import y from "clsx";
import { COMPONENT_NAMES as a } from "../../../core/constants/componentNames.mjs";
import { ICON_CSS_CLASS_NAMES as r } from "../../../core/constants/cssClassNames.mjs";
import d from "../../hooks/useComputedStyle/index.mjs";
import E from "../../hooks/useStyleInjection/index.mjs";
import "../ThemeProvider/ThemeContext.mjs";
import "../ThemeProvider/ThemeProvider.mjs";
import { generateIconCSS as O } from "../../../core/css/componentStyles/Icon.mjs";
const _ = ["inherit", "primary", "success", "error", "warning", "info"], g = t.memo(
  t.forwardRef(({ name: c, width: s = 20, color: o, className: n, style: i, ...l }, p) => {
    const S = O();
    E(a.Icon, S);
    const f = o && _.includes(o), e = o && !f ? o : void 0, m = d(i), N = e ? { ...m, color: e } : m, C = y(
      r.base.className,
      o === "inherit" && r.colorInherit.className,
      o === "primary" && r.colorPrimary.className,
      o === "success" && r.colorSuccess.className,
      o === "error" && r.colorError.className,
      o === "warning" && r.colorWarning.className,
      o === "info" && r.colorInfo.className,
      n
    );
    return /* @__PURE__ */ u(
      I,
      {
        ref: p,
        icon: c,
        className: C,
        style: N,
        width: s,
        height: s,
        ...l
      }
    );
  })
);
g.displayName = a.Icon;
export {
  g as default
};
