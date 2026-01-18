import { TRANSITION_COLLAPSE_CSS_CLASS_NAMES } from "@/core/constants";
import { DESIGN_TOKENS } from "@/core/designs";

const { base, open, content } = TRANSITION_COLLAPSE_CSS_CLASS_NAMES;

/**
 * Generate Transition.Collapse CSS
 *
 * Uses CSS Grid-based animation (grid-template-rows: 0fr -> 1fr) for
 * smooth height transitions without JavaScript.
 */
export function generateTransitionCollapseCSS(): string {
  return `
/* Transition.Collapse - CSS Grid-based smooth height animation */
.${base.className} {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows ${DESIGN_TOKENS.transitions.progress};
}

/* Open state */
.${open.className} {
  grid-template-rows: 1fr;
}

/* Content wrapper - handles overflow */
.${content.className} {
  overflow: hidden;
}
  `.trim();
}
