import { PROGRESS_PAGE_LOAD_CSS_CLASS_NAMES as i } from "../../constants/cssClassNames.mjs";
import { getCssVar as r } from "../variables/getCssVar.mjs";
const { base: a, bar: e, active: t } = i;
function s() {
  return `
/* ${a.description} */
.${a.className} {
  --vui-page-load-bar-bg: ${r((o) => o.palette.main)};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  z-index: 9999;
  pointer-events: none;
  opacity: 0;
  transition: opacity 200ms ease-out;
}

/* ${t.description} */
.${t.className} {
  opacity: 1;
}

/* ${e.description} */
.${e.className} {
  height: 100%;
  background-color: var(--vui-page-load-bar-bg);
  box-shadow: 0 0 10px var(--vui-page-load-bar-bg), 0 0 5px var(--vui-page-load-bar-bg);
  transition: width 200ms ease-out;
}
  `.trim();
}
function g() {
  return s();
}
export {
  g as generateProgressPageLoadCSS
};
