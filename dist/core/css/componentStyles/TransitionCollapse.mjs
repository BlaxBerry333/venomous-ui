import { TRANSITION_COLLAPSE_CSS_CLASS_NAMES as e } from "../../constants/cssClassNames.mjs";
import { DESIGN_TOKENS as r } from "../../designs/index.mjs";
const { base: t, open: o, content: s } = e;
function i() {
  return `
/* Transition.Collapse - CSS Grid-based smooth height animation */
.${t.className} {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows ${r.transitions.progress};
}

/* Open state */
.${o.className} {
  grid-template-rows: 1fr;
}

/* Content wrapper - handles overflow */
.${s.className} {
  overflow: hidden;
}
  `.trim();
}
export {
  i as generateTransitionCollapseCSS
};
