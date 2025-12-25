import { FORM_FIELD_CHECKBOX_CSS_CLASS_NAMES as N } from "../../constants/cssClassNames.mjs";
import { getCssVar as s } from "../variables/getCssVar.mjs";
import { DESIGN_TOKENS as o } from "../../designs/index.mjs";
const { base: d, input: p, box: a, icon: c, label: $, checked: i, disabled: m, error: r, sizeSmall: t, sizeMedium: n, sizeLarge: l } = N;
function b() {
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
  border: 2px solid ${s((e) => e.border.secondary)};
  border-radius: ${o.borderRadius.small};
  background-color: transparent;
  transition:
    background-color 150ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.${d.className}:hover:not(.${m.className}):not(.${r.className}) .${a.className} {
  border-color: ${s((e) => e.palette.main)};
}

/* ${c.description} */
.${c.className} {
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  color: #ffffff;
  transform: scale(0.5);
  transition:
    opacity 150ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

/* ${$.description} */
.${$.className} {
  color: ${s((e) => e.text.primary)};
}
  `.trim();
}
function f() {
  return `
/* ${i.description} */
.${i.className} .${a.className} {
  background-color: ${s((e) => e.palette.main)};
  border-color: ${s((e) => e.palette.main)};
}

.${i.className} .${c.className} {
  opacity: 1;
  transform: scale(1);
}

/* ${m.description} */
.${m.className} {
  opacity: ${o.opacities.disabled};
  cursor: not-allowed;
  pointer-events: none;
}

/* ${r.description} */
.${r.className} .${a.className} {
  border-color: ${s((e) => e.semantic.error.main)};
}

.${r.className}:hover:not(.${m.className}) .${a.className} {
  border-color: ${s((e) => e.semantic.error.dark)};
}

.${r.className}.${i.className} .${a.className} {
  background-color: ${s((e) => e.semantic.error.main)};
  border-color: ${s((e) => e.semantic.error.main)};
}

.${r.className}.${i.className}:hover:not(.${m.className}) .${a.className} {
  background-color: ${s((e) => e.semantic.error.dark)};
  border-color: ${s((e) => e.semantic.error.dark)};
}

/* Focus ring */
.${p.className}:focus-visible + .${a.className} {
  box-shadow: 0 0 0 2px ${s((e) => e.palette.light)};
}

.${r.className} .${p.className}:focus-visible + .${a.className} {
  box-shadow: 0 0 0 3px color-mix(in srgb, ${s((e) => e.semantic.error.main)} 20%, transparent);
}
  `.trim();
}
function u() {
  return `
/* ${t.description} */
.${t.className} {
  gap: ${o.spacings[2]};
}

.${t.className} .${a.className} {
  width: 14px;
  height: 14px;
}

.${t.className} .${c.className} {
  font-size: 10px;
}

.${t.className} .${$.className} {
  font-size: ${o.fontSizes.small};
}

/* ${n.description} */
.${n.className} {
  gap: ${o.spacings[2]};
}

.${n.className} .${a.className} {
  width: 18px;
  height: 18px;
}

.${n.className} .${c.className} {
  font-size: 12px;
}

.${n.className} .${$.className} {
  font-size: 14px;
}

/* ${l.description} */
.${l.className} {
  gap: ${o.spacings[3]};
}

.${l.className} .${a.className} {
  width: 22px;
  height: 22px;
}

.${l.className} .${c.className} {
  font-size: 14px;
}

.${l.className} .${$.className} {
  font-size: ${o.fontSizes.medium};
}
  `.trim();
}
function S() {
  return [b(), f(), u()].join(`

`);
}
export {
  S as generateFormFieldCheckboxCSS
};
