import { MODAL_CSS_CLASS_NAMES } from "@/core/constants";
import { DESIGN_TOKENS } from "@/core/designs";

const { base } = MODAL_CSS_CLASS_NAMES;

/**
 * Generate Modal CSS
 *
 * Modal extends Card with max-width/max-height constraints and overflow handling
 *
 * @returns CSS string for Modal component
 */
export function generateModalCSS(): string {
  return `
/* ${base.description} */
.${base.className} {
  /* Layout - override Card defaults */
  width: var(--modal-max-width, ${DESIGN_TOKENS.breakpoints.sm.max});
  max-width: 100%;
  max-height: var(--modal-max-height, 80vh);

  /* Override Card's overflow: hidden to enable scrolling */
  overflow: auto !important;
}
  `.trim();
}
