import { useContext as t } from "react";
import { ThemeContext as o } from "../../components/ThemeProvider/ThemeContext.mjs";
import "../../components/ThemeProvider/ThemeProvider.mjs";
function i() {
  const e = t(o);
  if (!e)
    throw new Error("useThemeContext must be used within a ThemeProvider");
  return e;
}
export {
  i as default
};
