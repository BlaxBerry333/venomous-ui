import { jsx as f } from "react/jsx-runtime";
import t from "react";
import { COMPONENT_NAMES as u } from "../../../core/constants/componentNames.mjs";
import { createTheme as p } from "../../../core/theme/createTheme.mjs";
import { ThemeContext as h } from "./ThemeContext.mjs";
import v from "../../hooks/useStyleInjection/index.mjs";
import { generateThemeProviderCSS as M } from "../../../core/css/componentStyles/ThemeProvider.mjs";
const S = t.memo(
  ({ children: n, defaultMode: i = "light", mode: o, onModeChange: l, customDesignTokens: c }) => {
    const { currentMode: r, setMode: e, toggleMode: m } = T(i, o, l), s = t.useMemo(() => p({ mode: r, ...c }), [r, c]), a = M({
      paletteColors: s.paletteColors,
      semanticColors: s.semanticColors
    });
    v(u.ThemeProvider, a);
    const d = t.useMemo(
      () => ({ theme: s, mode: r, setMode: e, toggleMode: m }),
      [s, r, e, m]
    );
    return /* @__PURE__ */ f(h.Provider, { value: d, children: n });
  }
);
S.displayName = u.ThemeProvider;
function T(n = "light", i, o) {
  const l = i !== void 0, [c, r] = t.useState(n), e = l ? i : c, m = t.useCallback(
    (a) => {
      l ? o == null || o(a) : r(a);
    },
    [l, o]
  ), s = t.useCallback(() => {
    m(e === "light" ? "dark" : "light");
  }, [e, m]);
  return t.useEffect(() => {
    document.documentElement.dataset.theme = e;
  }, [e]), { currentMode: e, setMode: m, toggleMode: s };
}
export {
  S as default
};
