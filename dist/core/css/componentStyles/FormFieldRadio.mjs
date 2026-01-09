import { FORM_FIELD_RADIO_CSS_CLASS_NAMES as f } from "../../constants/cssClassNames.mjs";
import { getCssVar as s } from "../variables/getCssVar.mjs";
import { DESIGN_TOKENS as r } from "../../designs/index.mjs";
const {
  group: N,
  base: o,
  input: d,
  circle: a,
  dot: c,
  label: p,
  checked: t,
  disabled: $,
  error: i,
  horizontal: g,
  vertical: x,
  sizeSmall: n,
  sizeMedium: l,
  sizeLarge: m
} = f;
function b() {
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

/* ${d.description} */
.${d.className} {
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
  transition: ${r.transitions.colors};
}

.${o.className}:hover:not(.${$.className}):not(.${i.className}) .${a.className} {
  border-color: ${s((e) => e.palette.main)};
}

/* ${c.description} */
.${c.className} {
  border-radius: 50%;
  background-color: #ffffff;
  transform: scale(0);
  transition: ${r.transitions.transform};
}

/* ${p.description} */
.${p.className} {
  color: ${s((e) => e.text.primary)};
}
  `.trim();
}
function h() {
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
.${d.className}:focus-visible + .${a.className} {
  box-shadow: 0 0 0 2px ${s((e) => e.palette.light)};
}

.${i.className} .${d.className}:focus-visible + .${a.className} {
  box-shadow: 0 0 0 3px color-mix(in srgb, ${s((e) => e.semantic.error.main)} 20%, transparent);
}
  `.trim();
}
function u() {
  return `
/* ${g.description} */
.${g.className} {
  flex-direction: row;
  flex-wrap: wrap;
  gap: ${r.spacings[4]};
}

/* ${x.description} */
.${x.className} {
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

.${n.className} .${p.className} {
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

.${l.className} .${p.className} {
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

.${m.className} .${p.className} {
  font-size: ${r.fontSizes.medium};
}
  `.trim();
}
function v() {
  return [b(), h(), u(), S()].join(`

`);
}
export {
  v as generateFormFieldRadioCSS
};
