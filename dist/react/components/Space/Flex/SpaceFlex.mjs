import { jsx as x } from "react/jsx-runtime";
import o from "react";
import E from "clsx";
import { COMPONENT_NAMES as t } from "../../../../core/constants/componentNames.mjs";
import { SPACE_FLEX_CSS_CLASS_NAMES as e } from "../../../../core/constants/cssClassNames.mjs";
import u from "../../../hooks/useComputedStyle/index.mjs";
import _ from "../../../hooks/useStyleInjection/index.mjs";
import "../../ThemeProvider/ThemeContext.mjs";
import "../../ThemeProvider/ThemeProvider.mjs";
import { generateSpaceFlexCSS as d } from "../../../../core/css/componentStyles/SpaceFlex.mjs";
const F = o.memo(
  o.forwardRef(
    ({ as: s = "div", spacing: a = 0, column: r = !1, className: l, style: c, children: p, ...S }, i) => {
      var m;
      const f = s, n = d();
      _(t.SpaceFlex, n);
      const N = u(c), C = E(
        e.base.className,
        r && e.column.className,
        (m = e[`spacing${a}`]) == null ? void 0 : m.className,
        l
      );
      return /* @__PURE__ */ x(f, { ref: i, className: C, style: N, ...S, children: p });
    }
  )
);
F.displayName = t.SpaceFlex;
export {
  F as default
};
