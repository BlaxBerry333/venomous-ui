import { MODAL_CSS_CLASS_NAMES as a } from "../../constants/cssClassNames.mjs";
import { DESIGN_TOKENS as o } from "../../designs/index.mjs";
const { base: r } = a;
function i() {
  return `
/* ${r.description} */
.${r.className} {
  /* Layout - override Card defaults */
  width: var(--modal-max-width, ${o.breakpoints.sm.max});
  max-width: 100%;
  max-height: var(--modal-max-height, 80vh);

  /* Override Card's overflow: hidden to enable scrolling */
  overflow: auto !important;
}
  `.trim();
}
export {
  i as generateModalCSS
};
