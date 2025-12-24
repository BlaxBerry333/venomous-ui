import { ICON_CSS_CLASS_NAMES } from "@/core/constants";
import { getCssVar } from "@/core/css/variables";
import { DESIGN_TOKENS } from "@/core/designs";

const { base, colorInherit, colorPrimary, colorSuccess, colorError, colorWarning, colorInfo } = ICON_CSS_CLASS_NAMES;

/**
 * Generate base CSS for Icon
 */
function generateIconBaseCSS(): string {
  return `
/* ${base.description} */
.${base.className} {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: inherit;
  transition: ${DESIGN_TOKENS.transitions.fast};
}
  `.trim();
}

/**
 * Generate color CSS for Icon
 */
function generateIconColorCSS(): string {
  return `
/* ${colorInherit.description} */
.${colorInherit.className} {
  color: inherit;
}

/* ${colorPrimary.description} */
.${colorPrimary.className} {
  color: ${getCssVar((v) => v.palette.main)};
}

/* ${colorSuccess.description} */
.${colorSuccess.className} {
  color: ${getCssVar((v) => v.semantic.success.main)};
}

/* ${colorError.description} */
.${colorError.className} {
  color: ${getCssVar((v) => v.semantic.error.main)};
}

/* ${colorWarning.description} */
.${colorWarning.className} {
  color: ${getCssVar((v) => v.semantic.warning.main)};
}

/* ${colorInfo.description} */
.${colorInfo.className} {
  color: ${getCssVar((v) => v.semantic.info.main)};
}
  `.trim();
}

/**
 * Generate Icon CSS
 */
export function generateIconCSS(): string {
  return [generateIconBaseCSS(), generateIconColorCSS()].join("\n\n");
}

// Keep old export for backwards compatibility
export { generateIconCSS as generateIconBaseCSS };
