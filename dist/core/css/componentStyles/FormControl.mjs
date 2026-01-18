import { FORM_CONTROL_CSS_CLASS_NAMES as g } from "../../constants/cssClassNames.mjs";
import { getCssVar as t } from "../variables/getCssVar.mjs";
import { DESIGN_TOKENS as e } from "../../designs/index.mjs";
const { base: p, row: s, labelWrapper: m, labelTooltip: l, content: N, field: $, helperText: i, error: c, sizeSmall: r, sizeMedium: o, sizeLarge: n } = g;
function d() {
  return `
/* ${p.description} */
.${p.className} {
  display: flex;
  flex-direction: column;
  gap: ${e.spacings[1]};
  width: 100%;
}
  `.trim();
}
function f() {
  return `
/* ${s.description} */
.${s.className} {
  flex-direction: row;
  align-items: flex-start;
  gap: ${e.spacings[3]};
}

.${s.className} .${m.className} {
  flex-shrink: 0;
}

.${s.className} .${$.className} {
  display: flex;
  align-items: center;
}

.${s.className} .${N.className} {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${e.spacings[1]};
}
  `.trim();
}
function S() {
  return `
/* ${m.description} */
.${m.className} {
  display: inline-flex;
  align-items: center;
  gap: ${e.spacings[1]};
}

/* ${l.description} */
.${l.className} {
  display: inline-flex;
  align-items: center;
  color: ${t((a) => a.text.tertiary)};
  cursor: help;
}

.${l.className} svg {
  width: 14px;
  height: 14px;
}
  `.trim();
}
function x() {
  return `
/* ${$.description} */
.${$.className} {
  width: 100%;
}
  `.trim();
}
function u() {
  return `
/* ${i.description} */
.${i.className} {
  font-size: ${e.fontSizes.small};
  line-height: 1.5;
  color: ${t((a) => a.text.secondary)};
  margin: 0;
}

/* ${c.description} */
.${c.className} .${i.className} {
  color: ${t((a) => a.semantic.error.main)};
}

/* Error state label color */
.${c.className} label {
  color: ${t((a) => a.semantic.error.main)};
}
  `.trim();
}
function C() {
  return `
/* ${r.description} */
.${r.className} {
  gap: ${e.spacings[1]};
}

.${r.className}.${s.className} {
  gap: ${e.spacings[2]};
}

.${r.className} .${i.className} {
  font-size: 11px;
}

/* ${o.description} */
.${o.className} {
  gap: ${e.spacings[1]};
}

.${o.className}.${s.className} {
  gap: ${e.spacings[3]};
}

/* ${n.description} */
.${n.className} {
  gap: ${e.spacings[2]};
}

.${n.className}.${s.className} {
  gap: ${e.spacings[4]};
}

.${n.className} .${i.className} {
  font-size: 13px;
}
  `.trim();
}
function y() {
  return [
    d(),
    f(),
    S(),
    x(),
    u(),
    C()
  ].join(`

`);
}
export {
  y as generateFormControlCSS
};
