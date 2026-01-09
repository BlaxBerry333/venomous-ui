import { PROGRESS_PAGE_LOAD_CSS_CLASS_NAMES } from "@/core/constants";
import { getCssVar } from "@/core/css/variables";
import { DESIGN_TOKENS } from "@/core/designs";

const { base, bar, active } = PROGRESS_PAGE_LOAD_CSS_CLASS_NAMES;

/**
 * Generate base CSS for Progress.PageLoad
 */
function generateBaseCSS(): string {
  return `
/* ${base.description} */
.${base.className} {
  --vui-page-load-bar-bg: ${getCssVar((v) => v.palette.main)};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  z-index: 9999;
  pointer-events: none;
  opacity: 0;
  transition: ${DESIGN_TOKENS.transitions.opacity};
}

/* ${active.description} */
.${active.className} {
  opacity: 1;
}

/* ${bar.description} */
.${bar.className} {
  height: 100%;
  background-color: var(--vui-page-load-bar-bg);
  box-shadow: 0 0 10px var(--vui-page-load-bar-bg), 0 0 5px var(--vui-page-load-bar-bg);
  transition: width ${DESIGN_TOKENS.transitions.progress};
}
  `.trim();
}

/**
 * Generate Progress.PageLoad CSS
 *
 * @returns CSS string for Progress.PageLoad component
 */
export function generateProgressPageLoadCSS(): string {
  return generateBaseCSS();
}
