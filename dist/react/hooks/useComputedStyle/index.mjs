import t from "react";
import r from "../useThemeContext/index.mjs";
function f(e) {
  const { theme: o } = r();
  return t.useMemo(() => {
    if (e !== void 0)
      return typeof e == "function" ? e(o) : e;
  }, [e, o]);
}
export {
  f as default
};
