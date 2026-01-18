import { MODAL_CSS_CLASS_NAMES as t } from "../../constants/cssClassNames.mjs";
import { DESIGN_TOKENS as a } from "../../designs/index.mjs";
const { base: r, open: o } = t;
function s() {
  return `
/* ${r.description} */
.${r.className} {
  /* Layout - override Card defaults */
  width: var(--modal-max-width, ${a.breakpoints.sm.max});
  max-width: 100%;
  max-height: var(--modal-max-height, 80vh);

  /* Override Card's overflow: hidden to enable scrolling */
  overflow: auto !important;

  /* Animation - hidden by default */
  opacity: 0;
  transform: scale(0.95);
  transition: opacity ${a.transitions.progress}, transform ${a.transitions.progress};
}

/* ${o.description} */
.${r.className}.${o.className} {
  opacity: 1;
  transform: scale(1);
}
  `.trim();
}
export {
  s as generateModalCSS
};
