import { jsx as v } from "react/jsx-runtime";
import m, { useId as I, useMemo as R } from "react";
import g from "clsx";
import { COMPONENT_NAMES as p } from "../../../../core/constants/componentNames.mjs";
import { SPACE_GRID_CSS_CLASS_NAMES as s } from "../../../../core/constants/cssClassNames.mjs";
import A from "../../../hooks/useComputedStyle/index.mjs";
import a from "../../../hooks/useStyleInjection/index.mjs";
import "../../ThemeProvider/ThemeContext.mjs";
import "../../ThemeProvider/ThemeProvider.mjs";
import { generateSpaceGridCSS as M, generateResponsiveGridCSS as O } from "../../../../core/css/componentStyles/SpaceGrid.mjs";
const b = m.memo(
  m.forwardRef(
    ({ as: S = "div", spacing: n = 0, columns: e = 1, className: c, style: d, children: f, ...l }, C) => {
      var t, i;
      const N = S, u = I(), o = typeof e == "object", _ = M();
      a(p.SpaceGrid, _);
      const r = o ? `VENOMOUS_UI__Grid-responsive-${u.replace(/:/g, "")}` : "", G = R(() => o ? O(r, e) : "", [o, r, e]);
      a(r || "noop", G);
      const y = A(d), E = g(
        s.base.className,
        (t = s[`spacing${n}`]) == null ? void 0 : t.className,
        // For numeric columns, use pre-defined className (columns1-12)
        typeof e == "number" && ((i = s[`columns${e}`]) == null ? void 0 : i.className),
        // For responsive columns, use dynamic className
        o && r,
        c
      );
      return /* @__PURE__ */ v(N, { ref: C, className: E, style: y, ...l, children: f });
    }
  )
);
b.displayName = p.SpaceGrid;
export {
  b as default
};
