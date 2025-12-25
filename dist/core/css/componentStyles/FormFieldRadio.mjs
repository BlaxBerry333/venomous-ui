import { FORM_FIELD_RADIO_CSS_CLASS_NAMES as u } from "../../constants/cssClassNames.mjs";
import { getCssVar as s } from "../variables/getCssVar.mjs";
import { DESIGN_TOKENS as r } from "../../designs/index.mjs";
const {
  group: N,
  base: o,
  input: p,
  circle: a,
  dot: c,
  label: d,
  checked: t,
  disabled: $,
  error: i,
  horizontal: b,
  vertical: g,
  sizeSmall: n,
  sizeMedium: l,
  sizeLarge: m
} = u;
function x() {
  return `
/* ${N.description} */
.${N.className} {
  box-sizing: border-box;
  display: flex;
}

/* ${o.description} */
.${o.className} {
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
}

/* ${p.description} */
.${p.className} {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* ${a.description} */
.${a.className} {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: 2px solid ${s((e) => e.border.secondary)};
  border-radius: 50%;
  background-color: transparent;
  transition:
    background-color 150ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.${o.className}:hover:not(.${$.className}):not(.${i.className}) .${a.className} {
  border-color: ${s((e) => e.palette.main)};
}

/* ${c.description} */
.${c.className} {
  border-radius: 50%;
  background-color: #ffffff;
  transform: scale(0);
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

/* ${d.description} */
.${d.className} {
  color: ${s((e) => e.text.primary)};
}
  `.trim();
}
function f() {
  return `
/* ${t.description} */
.${t.className} .${a.className} {
  background-color: ${s((e) => e.palette.main)};
  border-color: ${s((e) => e.palette.main)};
}

.${t.className} .${c.className} {
  transform: scale(1);
}

/* ${$.description} */
.${$.className} {
  opacity: ${r.opacities.disabled};
  cursor: not-allowed;
  pointer-events: none;
}

/* ${i.description} */
.${i.className} .${a.className} {
  border-color: ${s((e) => e.semantic.error.main)};
}

.${i.className}:hover:not(.${$.className}) .${a.className} {
  border-color: ${s((e) => e.semantic.error.dark)};
}

.${i.className}.${t.className} .${a.className} {
  background-color: ${s((e) => e.semantic.error.main)};
  border-color: ${s((e) => e.semantic.error.main)};
}

.${i.className}.${t.className}:hover:not(.${$.className}) .${a.className} {
  background-color: ${s((e) => e.semantic.error.dark)};
  border-color: ${s((e) => e.semantic.error.dark)};
}

/* Focus ring */
.${p.className}:focus-visible + .${a.className} {
  box-shadow: 0 0 0 2px ${s((e) => e.palette.light)};
}

.${i.className} .${p.className}:focus-visible + .${a.className} {
  box-shadow: 0 0 0 3px color-mix(in srgb, ${s((e) => e.semantic.error.main)} 20%, transparent);
}
  `.trim();
}
function h() {
  return `
/* ${b.description} */
.${b.className} {
  flex-direction: row;
  flex-wrap: wrap;
  gap: ${r.spacings[4]};
}

/* ${g.description} */
.${g.className} {
  flex-direction: column;
  gap: ${r.spacings[3]};
}
  `.trim();
}
function S() {
  return `
/* ${n.description} */
.${n.className} .${o.className} {
  gap: ${r.spacings[2]};
}

.${n.className} .${a.className} {
  width: 14px;
  height: 14px;
}

.${n.className} .${c.className} {
  width: 6px;
  height: 6px;
}

.${n.className} .${d.className} {
  font-size: ${r.fontSizes.small};
}

/* ${l.description} */
.${l.className} .${o.className} {
  gap: ${r.spacings[2]};
}

.${l.className} .${a.className} {
  width: 18px;
  height: 18px;
}

.${l.className} .${c.className} {
  width: 8px;
  height: 8px;
}

.${l.className} .${d.className} {
  font-size: 14px;
}

/* ${m.description} */
.${m.className} .${o.className} {
  gap: ${r.spacings[3]};
}

.${m.className} .${a.className} {
  width: 22px;
  height: 22px;
}

.${m.className} .${c.className} {
  width: 10px;
  height: 10px;
}

.${m.className} .${d.className} {
  font-size: ${r.fontSizes.medium};
}
  `.trim();
}
function v() {
  return [x(), f(), h(), S()].join(`

`);
}
export {
  v as generateFormFieldRadioCSS
};
