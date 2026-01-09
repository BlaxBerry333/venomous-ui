import { PROGRESS_PAGE_LOAD_CSS_CLASS_NAMES as o } from "../../constants/cssClassNames.mjs";
import { getCssVar as n } from "../variables/getCssVar.mjs";
import { DESIGN_TOKENS as a } from "../../designs/index.mjs";
const { base: t, bar: i, active: r } = o;
function s() {
  return `
/* ${t.description} */
.${t.className} {
  --vui-page-load-bar-bg: ${n((e) => e.palette.main)};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  z-index: 9999;
  pointer-events: none;
  opacity: 0;
  transition: ${a.transitions.opacity};
}

/* ${r.description} */
.${r.className} {
  opacity: 1;
}

/* ${i.description} */
.${i.className} {
  height: 100%;
  background-color: var(--vui-page-load-bar-bg);
  box-shadow: 0 0 10px var(--vui-page-load-bar-bg), 0 0 5px var(--vui-page-load-bar-bg);
  transition: width ${a.transitions.progress};
}
  `.trim();
}
function d() {
  return s();
}
export {
  d as generateProgressPageLoadCSS
};
