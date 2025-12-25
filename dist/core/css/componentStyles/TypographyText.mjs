import { TYPOGRAPHY_TEXT_CSS_CLASS_NAMES as $ } from "../../constants/cssClassNames.mjs";
import { getCssVar as r } from "../variables/getCssVar.mjs";
import { DESIGN_TOKENS as n } from "../../designs/index.mjs";
const { base: o, asCode: t, asKbd: i, asMark: a, asDel: s, asIns: c, asSmall: m, asStrong: d, asEm: l, asSub: u, asSup: S } = $;
function g() {
  return `
/* ${o.description} */
.${o.className} {
  font-size: inherit;
  line-height: inherit;
  color: ${r((e) => e.text.primary)};
}
  `.trim();
}
function f() {
  return `
/* ${t.description} */
.${t.className} {
  font-family: ui-monospace, SFMono-Regular, "SF Mono", "Liberation Mono", monospace;
  font-size: 0.9em;
  padding: 0.15em 0.4em;
  background-color: ${r((e) => e.bg.active)};
  border-radius: ${n.borderRadius.small};
}
  `.trim();
}
function p() {
  return `
/* ${i.description} */
.${i.className} {
  font-family: ui-monospace, SFMono-Regular, "SF Mono", "Liberation Mono", monospace;
  font-size: 0.85em;
  padding: 0.15em 0.4em;
  background-color: ${r((e) => e.bg.normal)};
  border: 1px solid ${r((e) => e.border.secondary)};
  border-radius: ${n.borderRadius.small};
  box-shadow: inset 0 -1px 0 ${r((e) => e.border.secondary)};
}
  `.trim();
}
function b() {
  return `
/* ${a.description} */
.${a.className} {
  padding: 0.1em 0.2em;
  background-color: ${r((e) => e.semantic.warning.light)};
  border-radius: ${n.borderRadius.small};
}
  `.trim();
}
function C() {
  return `
/* ${s.description} */
.${s.className} {
  text-decoration: line-through;
  color: ${r((e) => e.text.secondary)};
}
  `.trim();
}
function N() {
  return `
/* ${c.description} */
.${c.className} {
  text-decoration: underline;
  text-decoration-color: ${r((e) => e.semantic.success.main)};
  text-underline-offset: 2px;
}
  `.trim();
}
function x() {
  return `
/* ${m.description} */
.${m.className} {
  font-size: ${n.fontSizes.small};
  color: ${r((e) => e.text.secondary)};
}
  `.trim();
}
function h() {
  return `
/* ${d.description} */
.${d.className} {
  font-weight: ${n.fontWeights.bold};
}
  `.trim();
}
function y() {
  return `
/* ${l.description} */
.${l.className} {
  font-style: italic;
}
  `.trim();
}
function M() {
  return `
/* ${u.description} */
.${u.className} {
  font-size: 0.75em;
  vertical-align: sub;
}
  `.trim();
}
function z() {
  return `
/* ${S.description} */
.${S.className} {
  font-size: 0.75em;
  vertical-align: super;
}
  `.trim();
}
function k() {
  return [
    g(),
    f(),
    p(),
    b(),
    C(),
    N(),
    x(),
    h(),
    y(),
    M(),
    z()
  ].join(`

`);
}
export {
  k as generateTypographyTextCSS
};
