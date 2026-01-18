import { PROGRESS_SCROLL_INDICATOR_CSS_CLASS_NAMES as o } from "../../constants/cssClassNames.mjs";
import { getCssVar as n } from "../variables/getCssVar.mjs";
const { base: r, bar: t } = o;
function i() {
  return `
/* ${r.description} */
.${r.className} {
  --vui-scroll-indicator-bar-bg: ${n((e) => e.palette.main)};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  z-index: 9999;
  pointer-events: none;
  background-color: transparent;
}

/* ${t.description} */
.${t.className} {
  height: 100%;
  background-color: var(--vui-scroll-indicator-bar-bg);
  transform-origin: left;
  will-change: transform;
}
  `.trim();
}
function c() {
  return i();
}
export {
  c as generateProgressScrollIndicatorCSS
};
