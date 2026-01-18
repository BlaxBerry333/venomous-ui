import { FORM_FIELD_RADIO_CSS_CLASS_NAMES as f } from "../../constants/cssClassNames.mjs";
import { getCssVar as a } from "../variables/getCssVar.mjs";
import { DESIGN_TOKENS as r } from "../../designs/index.mjs";
const {
  group: N,
  base: o,
  input: d,
  circle: e,
  dot: c,
  label: t,
  checked: n,
  disabled: p,
  error: i,
  horizontal: g,
  vertical: x,
  sizeSmall: l,
  sizeMedium: m,
  sizeLarge: $
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

/* ${e.description} */
.${e.className} {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: 2px solid ${a((s) => s.border.secondary)};
  border-radius: 50%;
  background-color: transparent;
  transition: ${r.transitions.colors};
}

.${o.className}:hover:not(.${p.className}):not(.${i.className}) .${e.className} {
  border-color: ${a((s) => s.palette.main)};
}

/* ${c.description} */
.${c.className} {
  border-radius: 50%;
  background-color: #ffffff;
  transform: scale(0);
  transition: ${r.transitions.transform};
}

/* ${t.description} */
.${t.className} {
  color: ${a((s) => s.text.primary)};
}
  `.trim();
}
function h() {
  return `
/* ${n.description} */
.${n.className} .${e.className} {
  background-color: ${a((s) => s.palette.main)};
  border-color: ${a((s) => s.palette.main)};
}

.${n.className} .${c.className} {
  transform: scale(1);
}

/* ${p.description} */
.${p.className} {
  opacity: ${r.opacities.disabled};
  cursor: not-allowed;
  pointer-events: none;
}

/* ${i.description} */
.${i.className} .${e.className} {
  border-color: ${a((s) => s.semantic.error.main)};
}

.${i.className} .${t.className} {
  color: ${a((s) => s.semantic.error.main)};
}

.${i.className}:hover:not(.${p.className}) .${e.className} {
  border-color: ${a((s) => s.semantic.error.dark)};
}

.${i.className}.${n.className} .${e.className} {
  background-color: ${a((s) => s.semantic.error.main)};
  border-color: ${a((s) => s.semantic.error.main)};
}

.${i.className}.${n.className}:hover:not(.${p.className}) .${e.className} {
  background-color: ${a((s) => s.semantic.error.dark)};
  border-color: ${a((s) => s.semantic.error.dark)};
}

/* Focus ring */
.${d.className}:focus-visible + .${e.className} {
  box-shadow: 0 0 0 2px ${a((s) => s.palette.light)};
}

.${i.className} .${d.className}:focus-visible + .${e.className} {
  box-shadow: 0 0 0 3px color-mix(in srgb, ${a((s) => s.semantic.error.main)} 20%, transparent);
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
/* ${l.description} */
.${l.className} .${o.className} {
  gap: ${r.spacings[2]};
}

.${l.className} .${e.className} {
  width: 14px;
  height: 14px;
}

.${l.className} .${c.className} {
  width: 6px;
  height: 6px;
}

.${l.className} .${t.className} {
  font-size: ${r.fontSizes.small};
}

/* ${m.description} */
.${m.className} .${o.className} {
  gap: ${r.spacings[2]};
}

.${m.className} .${e.className} {
  width: 18px;
  height: 18px;
}

.${m.className} .${c.className} {
  width: 8px;
  height: 8px;
}

.${m.className} .${t.className} {
  font-size: 14px;
}

/* ${$.description} */
.${$.className} .${o.className} {
  gap: ${r.spacings[3]};
}

.${$.className} .${e.className} {
  width: 22px;
  height: 22px;
}

.${$.className} .${c.className} {
  width: 10px;
  height: 10px;
}

.${$.className} .${t.className} {
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
