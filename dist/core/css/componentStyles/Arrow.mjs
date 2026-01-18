import { ARROW_CSS_CLASS_NAMES as r } from "../../constants/cssClassNames.mjs";
const { base: o, directionTop: t, directionBottom: e, directionLeft: a, directionRight: i } = r;
function n() {
  return `
.${o.className} {
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
  border-color: transparent;
}
  `.trim();
}
function d() {
  return `
.${t.className} {
  border-bottom-color: var(--arrow-color, currentColor);
  border-top-width: 0;
  border-left-width: var(--arrow-size, 8px);
  border-right-width: var(--arrow-size, 8px);
  border-bottom-width: var(--arrow-size, 8px);
  top: calc(-1 * var(--arrow-size, 8px));
  left: 50%;
  transform: translateX(-50%);
}
  `.trim();
}
function w() {
  return `
.${e.className} {
  border-top-color: var(--arrow-color, currentColor);
  border-bottom-width: 0;
  border-left-width: var(--arrow-size, 8px);
  border-right-width: var(--arrow-size, 8px);
  border-top-width: var(--arrow-size, 8px);
  bottom: calc(-1 * var(--arrow-size, 8px));
  left: 50%;
  transform: translateX(-50%);
}
  `.trim();
}
function s() {
  return `
.${a.className} {
  border-right-color: var(--arrow-color, currentColor);
  border-left-width: 0;
  border-top-width: var(--arrow-size, 8px);
  border-bottom-width: var(--arrow-size, 8px);
  border-right-width: var(--arrow-size, 8px);
  left: calc(-1 * var(--arrow-size, 8px));
  top: 50%;
  transform: translateY(-50%);
}
  `.trim();
}
function c() {
  return `
.${i.className} {
  border-left-color: var(--arrow-color, currentColor);
  border-right-width: 0;
  border-top-width: var(--arrow-size, 8px);
  border-bottom-width: var(--arrow-size, 8px);
  border-left-width: var(--arrow-size, 8px);
  right: calc(-1 * var(--arrow-size, 8px));
  top: 50%;
  transform: translateY(-50%);
}
  `.trim();
}
function b() {
  return [
    n(),
    d(),
    w(),
    s(),
    c()
  ].join(`

`);
}
export {
  b as generateArrowCSS
};
