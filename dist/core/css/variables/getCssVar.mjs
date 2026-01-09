import "../../constants/cssClassNames.mjs";
import { CSS_VARIABLE_NAMES as t } from "../../constants/cssVariableNames.mjs";
function m(r) {
  return `var(${r(t)})`;
}
export {
  m as getCssVar
};
