import { AVATAR_CSS_CLASS_NAMES as u } from "../../constants/cssClassNames.mjs";
import { getCssVar as i } from "../variables/getCssVar.mjs";
import { DESIGN_TOKENS as e } from "../../designs/index.mjs";
const { base: r, sizeSmall: n, sizeMedium: a, sizeLarge: s, variantCircular: o, variantRounded: c, variantSquare: d, image: l, fallback: m } = u;
function f() {
  return `
/* ${r.description} */
.${r.className} {
  box-sizing: border-box;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;
  user-select: none;
  vertical-align: middle;
  background-color: ${i((t) => t.bg.normal)};
  color: ${i((t) => t.text.secondary)};
  font-weight: ${e.fontWeights.medium};
}
  `.trim();
}
function p() {
  return `
/* ${n.description} */
.${n.className} {
  width: 24px;
  height: 24px;
  font-size: ${e.fontSizes.small};
}

/* ${a.description} */
.${a.className} {
  width: 40px;
  height: 40px;
  font-size: ${e.fontSizes.medium};
}

/* ${s.description} */
.${s.className} {
  width: 56px;
  height: 56px;
  font-size: ${e.fontSizes.large};
}
  `.trim();
}
function $() {
  return `
/* ${o.description} */
.${o.className} {
  border-radius: 50%;
}

/* ${c.description} */
.${c.className} {
  border-radius: ${e.borderRadius.medium};
}

/* ${d.description} */
.${d.className} {
  border-radius: 0;
}
  `.trim();
}
function g() {
  return `
/* ${l.description} */
.${l.className} {
  width: 100%;
  height: 100%;
  object-fit: cover;
  text-align: center;
  color: transparent;
}

/* ${m.description} */
.${m.className} {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-transform: uppercase;
}
  `.trim();
}
function b() {
  return [
    f(),
    p(),
    $(),
    g()
  ].join(`

`);
}
export {
  b as generateAvatarCSS
};
