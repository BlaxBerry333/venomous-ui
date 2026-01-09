import { FORM_FIELD_CHECKBOX_CSS_CLASS_NAMES as N } from "../../constants/cssClassNames.mjs";
import { getCssVar as e } from "../variables/getCssVar.mjs";
import { DESIGN_TOKENS as r } from "../../designs/index.mjs";
const { base: d, input: p, box: a, icon: i, label: $, checked: c, disabled: m, error: o, sizeSmall: t, sizeMedium: n, sizeLarge: l } = N;
function f() {
  return `
/* ${d.description} */
.${d.className} {
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
  border: 2px solid ${e((s) => s.border.secondary)};
  border-radius: ${r.borderRadius.small};
  background-color: transparent;
  transition: ${r.transitions.colors};
}

.${d.className}:hover:not(.${m.className}):not(.${o.className}) .${a.className} {
  border-color: ${e((s) => s.palette.main)};
}

/* ${i.description} */
.${i.className} {
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  color: #ffffff;
  transform: scale(0.5);
  transition: ${r.transitions.opacity}, ${r.transitions.transform};
}

/* ${$.description} */
.${$.className} {
  color: ${e((s) => s.text.primary)};
}
  `.trim();
}
function b() {
  return `
/* ${c.description} */
.${c.className} .${a.className} {
  background-color: ${e((s) => s.palette.main)};
  border-color: ${e((s) => s.palette.main)};
}

.${c.className} .${i.className} {
  opacity: 1;
  transform: scale(1);
}

/* ${m.description} */
.${m.className} {
  opacity: ${r.opacities.disabled};
  cursor: not-allowed;
  pointer-events: none;
}

/* ${o.description} */
.${o.className} .${a.className} {
  border-color: ${e((s) => s.semantic.error.main)};
}

.${o.className}:hover:not(.${m.className}) .${a.className} {
  border-color: ${e((s) => s.semantic.error.dark)};
}

.${o.className}.${c.className} .${a.className} {
  background-color: ${e((s) => s.semantic.error.main)};
  border-color: ${e((s) => s.semantic.error.main)};
}

.${o.className}.${c.className}:hover:not(.${m.className}) .${a.className} {
  background-color: ${e((s) => s.semantic.error.dark)};
  border-color: ${e((s) => s.semantic.error.dark)};
}

/* Focus ring */
.${p.className}:focus-visible + .${a.className} {
  box-shadow: 0 0 0 2px ${e((s) => s.palette.light)};
}

.${o.className} .${p.className}:focus-visible + .${a.className} {
  box-shadow: 0 0 0 3px color-mix(in srgb, ${e((s) => s.semantic.error.main)} 20%, transparent);
}
  `.trim();
}
function g() {
  return `
/* ${t.description} */
.${t.className} {
  gap: ${r.spacings[2]};
}

.${t.className} .${a.className} {
  width: 14px;
  height: 14px;
}

.${t.className} .${i.className} {
  font-size: 10px;
}

.${t.className} .${$.className} {
  font-size: ${r.fontSizes.small};
}

/* ${n.description} */
.${n.className} {
  gap: ${r.spacings[2]};
}

.${n.className} .${a.className} {
  width: 18px;
  height: 18px;
}

.${n.className} .${i.className} {
  font-size: 12px;
}

.${n.className} .${$.className} {
  font-size: 14px;
}

/* ${l.description} */
.${l.className} {
  gap: ${r.spacings[3]};
}

.${l.className} .${a.className} {
  width: 22px;
  height: 22px;
}

.${l.className} .${i.className} {
  font-size: 14px;
}

.${l.className} .${$.className} {
  font-size: ${r.fontSizes.medium};
}
  `.trim();
}
function S() {
  return [f(), b(), g()].join(`

`);
}
export {
  S as generateFormFieldCheckboxCSS
};
