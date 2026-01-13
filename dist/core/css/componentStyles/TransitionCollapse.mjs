import { TRANSITION_COLLAPSE_CSS_CLASS_NAMES as e } from "../../constants/cssClassNames.mjs";
import { DESIGN_TOKENS as t } from "../../designs/index.mjs";
const { base: o, open: r, content: a } = e;
function i() {
  return `
/* Transition.Collapse - CSS Grid-based smooth height animation */
.${o.className} {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows ${t.transitions.slow};
}

/* Open state */
.${r.className} {
  grid-template-rows: 1fr;
}

/* Content wrapper - handles overflow */
.${a.className} {
  overflow: hidden;
}
  `.trim();
}
export {
  i as generateTransitionCollapseCSS
};
