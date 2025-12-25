import { jsx as f } from "react/jsx-runtime";
import o from "react";
import { COMPONENT_NAMES as u } from "../../../core/constants/componentNames.mjs";
import { createTheme as p } from "../../../core/theme/createTheme.mjs";
import { ThemeContext as h } from "./ThemeContext.mjs";
import v from "../../hooks/useStyleInjection/index.mjs";
import { generateThemeProviderCSS as M } from "../../../core/css/componentStyles/ThemeProvider.mjs";
const S = o.memo(
  ({ children: n, defaultMode: l = "light", mode: r, onModeChange: t, customDesignTokens: c }) => {
    const { currentMode: m, setMode: e, toggleMode: s } = T(l, r, t), i = o.useMemo(() => p({ mode: m, ...c }), [m, c]), a = M({
      paletteColors: i.paletteColors,
      semanticColors: i.semanticColors
    });
    v(u.ThemeProvider, a);
    const d = o.useMemo(
      () => ({ theme: i, mode: m, setMode: e, toggleMode: s }),
      [i, m, e, s]
    );
    return /* @__PURE__ */ f(h.Provider, { value: d, children: n });
  }
);
S.displayName = u.ThemeProvider;
function T(n = "light", l, r) {
  const t = l !== void 0, [c, m] = o.useState(n), e = t ? l : c, s = o.useCallback(
    (a) => {
      t ? r == null || r(a) : m(a);
    },
    [t, r]
  ), i = o.useCallback(() => {
    s(e === "light" ? "dark" : "light");
  }, [e, s]);
  return o.useEffect(() => {
    t || (document.documentElement.dataset.theme = e);
  }, [e, t]), { currentMode: e, setMode: s, toggleMode: i };
}
export {
  S as default
};
