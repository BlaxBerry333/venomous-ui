import { PROGRESS_SCROLL_INDICATOR_CSS_CLASS_NAMES } from "@/core/constants";
import { getCssVar } from "@/core/css/variables";

const { base, bar } = PROGRESS_SCROLL_INDICATOR_CSS_CLASS_NAMES;

/**
 * Generate base CSS for Progress.ScrollIndicator
 */
function generateBaseCSS(): string {
  return `
/* ${base.description} */
.${base.className} {
  --vui-scroll-indicator-bar-bg: ${getCssVar((v) => v.palette.main)};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  z-index: 9999;
  pointer-events: none;
  background-color: transparent;
}

/* ${bar.description} */
.${bar.className} {
  height: 100%;
  background-color: var(--vui-scroll-indicator-bar-bg);
  transform-origin: left;
  will-change: transform;
}
  `.trim();
}

/**
 * Generate Progress.ScrollIndicator CSS
 *
 * @returns CSS string for Progress.ScrollIndicator component
 */
export function generateProgressScrollIndicatorCSS(): string {
  return generateBaseCSS();
}
