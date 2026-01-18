import { MODAL_CSS_CLASS_NAMES } from "@/core/constants";
import { DESIGN_TOKENS } from "@/core/designs";

const { base, open } = MODAL_CSS_CLASS_NAMES;

/**
 * Generate Modal CSS
 *
 * Modal extends Card with max-width/max-height constraints, overflow handling,
 * and fade + scale animation synchronized with Backdrop.
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

  /* Animation - hidden by default */
  opacity: 0;
  transform: scale(0.95);
  transition: opacity ${DESIGN_TOKENS.transitions.progress}, transform ${DESIGN_TOKENS.transitions.progress};
}

/* ${open.description} */
.${base.className}.${open.className} {
  opacity: 1;
  transform: scale(1);
}
  `.trim();
}
