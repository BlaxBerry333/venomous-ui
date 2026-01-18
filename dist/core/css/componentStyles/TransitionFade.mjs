import { TRANSITION_FADE_CSS_CLASS_NAMES as t } from "../../constants/cssClassNames.mjs";
import { DESIGN_TOKENS as i } from "../../designs/index.mjs";
const { base: s, open: a } = t;
function o() {
  return `
/* Transition.Fade - Opacity-based fade animation */
.${s.className} {
  opacity: 0;
  visibility: hidden;
  transition: opacity ${i.transitions.progress}, visibility ${i.transitions.progress};
}

/* Open state */
.${a.className} {
  opacity: 1;
  visibility: visible;
}
  `.trim();
}
export {
  o as generateTransitionFadeCSS
};
