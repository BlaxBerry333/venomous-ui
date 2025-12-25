import { BACKDROP_CSS_CLASS_NAMES as n } from "../../constants/cssClassNames.mjs";
import { DESIGN_TOKENS as r } from "../../designs/index.mjs";
const { base: e } = n;
function t() {
  return `
/* ${e.description} */
.${e.className} {
  /* Reset */
  box-sizing: border-box;
  margin: 0;
  padding: 0;

  /* Layout */
  position: fixed;
  inset: 0;
  z-index: ${r.zIndexs.medium};

  /* Flex box for centering children (modal/drawer content) */
  display: flex;
  align-items: center;
  justify-content: center;

  /* Backdrop appearance */
  background-color: rgba(0, 0, 0, 0.5);

  /* Prevent text selection */
  -webkit-tap-highlight-color: transparent;
}
  `.trim();
}
function a() {
  return [t()].join(`

`);
}
export {
  a as generateBackdropCSS
};
