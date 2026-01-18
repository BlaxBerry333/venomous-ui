import { BACKDROP_CSS_CLASS_NAMES as t } from "../../constants/cssClassNames.mjs";
import { DESIGN_TOKENS as e } from "../../designs/index.mjs";
const { base: i, open: n } = t;
function r() {
  return `
/* ${i.description} */
.${i.className} {
  /* Reset */
  box-sizing: border-box;
  margin: 0;
  padding: 0;

  /* Layout */
  position: fixed;
  inset: 0;
  z-index: ${e.zIndexs.medium};

  /* Flex box for centering children (modal/drawer content) */
  display: flex;
  align-items: center;
  justify-content: center;

  /* Backdrop appearance - hidden by default */
  background-color: rgba(0, 0, 0, 0);
  visibility: hidden;
  pointer-events: none;

  /* Animation */
  transition: background-color ${e.transitions.progress}, visibility ${e.transitions.progress};

  /* Prevent text selection */
  -webkit-tap-highlight-color: transparent;
}

/* ${n.description} */
.${i.className}.${n.className} {
  background-color: rgba(0, 0, 0, 0.5);
  visibility: visible;
  pointer-events: auto;
}
  `.trim();
}
function s() {
  return [r()].join(`

`);
}
export {
  s as generateBackdropCSS
};
