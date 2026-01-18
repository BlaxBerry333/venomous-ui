import { TRANSITION_FADE_CSS_CLASS_NAMES } from "@/core/constants";
import { DESIGN_TOKENS } from "@/core/designs";

const { base, open } = TRANSITION_FADE_CSS_CLASS_NAMES;

/**
 * Generate Transition.Fade CSS
 *
 * Uses opacity transition for smooth fade in/out animations.
 */
export function generateTransitionFadeCSS(): string {
  return `
/* Transition.Fade - Opacity-based fade animation */
.${base.className} {
  opacity: 0;
  visibility: hidden;
  transition: opacity ${DESIGN_TOKENS.transitions.progress}, visibility ${DESIGN_TOKENS.transitions.progress};
}

/* Open state */
.${open.className} {
  opacity: 1;
  visibility: visible;
}
  `.trim();
}
