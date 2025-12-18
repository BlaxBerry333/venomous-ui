import { TYPOGRAPHY_TEXT_CSS_CLASS_NAMES } from "@/core/constants";
import { getCssVar } from "@/core/css/variables";
import { DESIGN_TOKENS } from "@/core/designs";

const { base, asCode, asKbd, asMark, asDel, asIns, asSmall, asStrong, asEm, asSub, asSup } =
  TYPOGRAPHY_TEXT_CSS_CLASS_NAMES;

/**
 * Generate base CSS for Typography.Text
 */
function generateBaseCSS(): string {
  return `
/* ${base.description} */
.${base.className} {
  font-size: inherit;
  line-height: inherit;
  color: ${getCssVar((v) => v.text.primary)};
}
  `.trim();
}

/**
 * Generate code element CSS
 */
function generateCodeCSS(): string {
  return `
/* ${asCode.description} */
.${asCode.className} {
  font-family: ui-monospace, SFMono-Regular, "SF Mono", "Liberation Mono", monospace;
  font-size: 0.9em;
  padding: 0.15em 0.4em;
  background-color: ${getCssVar((v) => v.bg.active)};
  border-radius: ${DESIGN_TOKENS.borderRadius.small};
}
  `.trim();
}

/**
 * Generate kbd (keyboard) element CSS
 */
function generateKbdCSS(): string {
  return `
/* ${asKbd.description} */
.${asKbd.className} {
  font-family: ui-monospace, SFMono-Regular, "SF Mono", "Liberation Mono", monospace;
  font-size: 0.85em;
  padding: 0.15em 0.4em;
  background-color: ${getCssVar((v) => v.bg.normal)};
  border: 1px solid ${getCssVar((v) => v.border.secondary)};
  border-radius: ${DESIGN_TOKENS.borderRadius.small};
  box-shadow: inset 0 -1px 0 ${getCssVar((v) => v.border.secondary)};
}
  `.trim();
}

/**
 * Generate mark (highlight) element CSS
 */
function generateMarkCSS(): string {
  return `
/* ${asMark.description} */
.${asMark.className} {
  padding: 0.1em 0.2em;
  background-color: ${getCssVar((v) => v.semantic.warning.light)};
  border-radius: ${DESIGN_TOKENS.borderRadius.small};
}
  `.trim();
}

/**
 * Generate del (deleted) element CSS
 */
function generateDelCSS(): string {
  return `
/* ${asDel.description} */
.${asDel.className} {
  text-decoration: line-through;
  color: ${getCssVar((v) => v.text.secondary)};
}
  `.trim();
}

/**
 * Generate ins (inserted) element CSS
 */
function generateInsCSS(): string {
  return `
/* ${asIns.description} */
.${asIns.className} {
  text-decoration: underline;
  text-decoration-color: ${getCssVar((v) => v.semantic.success.main)};
  text-underline-offset: 2px;
}
  `.trim();
}

/**
 * Generate small element CSS
 */
function generateSmallCSS(): string {
  return `
/* ${asSmall.description} */
.${asSmall.className} {
  font-size: ${DESIGN_TOKENS.fontSizes.small};
  color: ${getCssVar((v) => v.text.secondary)};
}
  `.trim();
}

/**
 * Generate strong element CSS
 */
function generateStrongCSS(): string {
  return `
/* ${asStrong.description} */
.${asStrong.className} {
  font-weight: ${DESIGN_TOKENS.fontWeights.bold};
}
  `.trim();
}

/**
 * Generate em (emphasis) element CSS
 */
function generateEmCSS(): string {
  return `
/* ${asEm.description} */
.${asEm.className} {
  font-style: italic;
}
  `.trim();
}

/**
 * Generate sub (subscript) element CSS
 */
function generateSubCSS(): string {
  return `
/* ${asSub.description} */
.${asSub.className} {
  font-size: 0.75em;
  vertical-align: sub;
}
  `.trim();
}

/**
 * Generate sup (superscript) element CSS
 */
function generateSupCSS(): string {
  return `
/* ${asSup.description} */
.${asSup.className} {
  font-size: 0.75em;
  vertical-align: super;
}
  `.trim();
}

/**
 * Generate Typography.Text CSS
 *
 * @returns CSS string for Typography.Text component
 */
export function generateTypographyTextCSS(): string {
  return [
    generateBaseCSS(),
    generateCodeCSS(),
    generateKbdCSS(),
    generateMarkCSS(),
    generateDelCSS(),
    generateInsCSS(),
    generateSmallCSS(),
    generateStrongCSS(),
    generateEmCSS(),
    generateSubCSS(),
    generateSupCSS(),
  ].join("\n\n");
}
