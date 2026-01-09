import e from "react";
import { COMPONENT_NAMES as t } from "../../../core/constants/componentNames.mjs";
import "../ThemeProvider/ThemeContext.mjs";
import "../ThemeProvider/ThemeProvider.mjs";
import o from "../../hooks/useStyleInjection/index.mjs";
import { CSS_RESET_CSS as m } from "../../../core/css/componentStyles/CssReset.mjs";
const r = e.memo(() => (o(t.CssReset, m), null));
r.displayName = t.CssReset;
export {
  r as default
};
