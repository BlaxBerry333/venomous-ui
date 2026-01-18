import { DRAWER_CSS_CLASS_NAMES as m } from "../../constants/cssClassNames.mjs";
import { getCssVar as s } from "../variables/getCssVar.mjs";
import { DESIGN_TOKENS as t } from "../../designs/index.mjs";
const { base: i, anchorLeft: r, anchorRight: e, anchorTop: o, anchorBottom: n } = m;
function c() {
  return `
/* ${i.description} */
.${i.className} {
  /* Reset */
  box-sizing: border-box;
  margin: 0;

  /* Fixed position - override Backdrop's flex box centering */
  position: fixed;
  z-index: ${t.zIndexs.large};

  /* Appearance */
  background-color: ${s((a) => a.bg.float)};
  box-shadow: ${s((a) => a.shadow.large)};

  /* Spacing */
  padding: ${t.spacings[4]};

  /* Scrollable content */
  overflow: auto;

  /* Slide animation */
  transition: transform ${t.transitions.progress};
}
  `.trim();
}
function h() {
  return `
/* ${r.description} */
.${r.className} {
  top: 0;
  left: 0;
  height: 100vh;
  width: ${t.breakpoints.xs.max};
  max-width: 100vw;
  transform: translateX(-100%);
}
.${r.className}[data-open="true"] {
  transform: translateX(0);
}

/* ${e.description} */
.${e.className} {
  top: 0;
  right: 0;
  height: 100vh;
  width: ${t.breakpoints.xs.max};
  max-width: 100vw;
  transform: translateX(100%);
}
.${e.className}[data-open="true"] {
  transform: translateX(0);
}

/* ${o.description} */
.${o.className} {
  top: 0;
  left: 0;
  width: 100vw;
  height: ${t.breakpoints.xs.max};
  max-height: 100vh;
  transform: translateY(-100%);
}
.${o.className}[data-open="true"] {
  transform: translateY(0);
}

/* ${n.description} */
.${n.className} {
  bottom: 0;
  left: 0;
  width: 100vw;
  height: ${t.breakpoints.xs.max};
  max-height: 100vh;
  transform: translateY(100%);
}
.${n.className}[data-open="true"] {
  transform: translateY(0);
}
  `.trim();
}
function f() {
  return [c(), h()].join(`

`);
}
export {
  f as generateDrawerCSS
};
