import { FORM_FIELD_SWITCH_CSS_CLASS_NAMES as N } from "../../constants/cssClassNames.mjs";
import { getCssVar as e } from "../variables/getCssVar.mjs";
import { DESIGN_TOKENS as t } from "../../designs/index.mjs";
const { base: p, input: $, track: s, thumb: c, checked: r, disabled: i, error: o, sizeSmall: l, sizeMedium: n, sizeLarge: m } = N;
function d() {
  return `
/* ${p.description} */
.${p.className} {
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
}

/* ${$.description} */
.${$.className} {
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

/* ${s.description} */
.${s.className} {
  position: relative;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  background-color: ${e((a) => a.border.secondary)};
  border-radius: 999px;
  transition: ${t.transitions.colors};
}

.${p.className}:hover:not(.${i.className}):not(.${r.className}):not(.${o.className}) .${s.className} {
  background-color: ${e((a) => a.border.primary)};
}

/* ${c.description} */
.${c.className} {
  position: absolute;
  background-color: #ffffff;
  border-radius: 50%;
  box-shadow:
    0 1px 3px 0 rgb(0 0 0 / 0.1),
    0 1px 2px -1px rgb(0 0 0 / 0.1);
  transition: ${t.transitions.transform};
}
  `.trim();
}
function g() {
  return `
/* ${r.description} */
.${r.className} .${s.className} {
  background-color: ${e((a) => a.palette.main)};
}

.${r.className}:hover:not(.${i.className}):not(.${o.className}) .${s.className} {
  background-color: ${e((a) => a.palette.dark)};
}

/* ${i.description} */
.${i.className} {
  opacity: ${t.opacities.disabled};
  cursor: not-allowed;
  pointer-events: none;
}

/* ${o.description} */
.${o.className} .${s.className} {
  background-color: ${e((a) => a.semantic.error.light)};
}

.${o.className}:hover:not(.${i.className}):not(.${r.className}) .${s.className} {
  background-color: ${e((a) => a.semantic.error.main)};
}

.${o.className}.${r.className} .${s.className} {
  background-color: ${e((a) => a.semantic.error.main)};
}

.${o.className}.${r.className}:hover:not(.${i.className}) .${s.className} {
  background-color: ${e((a) => a.semantic.error.dark)};
}

/* Focus ring */
.${$.className}:focus-visible + .${s.className} {
  box-shadow: 0 0 0 2px ${e((a) => a.palette.light)};
}

.${o.className} .${$.className}:focus-visible + .${s.className} {
  box-shadow: 0 0 0 3px color-mix(in srgb, ${e((a) => a.semantic.error.main)} 20%, transparent);
}
  `.trim();
}
function x() {
  return `
/* ${l.description} */
.${l.className} {
  gap: ${t.spacings[2]};
}

.${l.className} .${s.className} {
  width: 28px;
  height: 16px;
}

.${l.className} .${c.className} {
  width: 12px;
  height: 12px;
  left: 2px;
}

.${l.className}.${r.className} .${c.className} {
  transform: translateX(12px);
}

/* ${n.description} */
.${n.className} {
  gap: ${t.spacings[2]};
}

.${n.className} .${s.className} {
  width: 36px;
  height: 20px;
}

.${n.className} .${c.className} {
  width: 16px;
  height: 16px;
  left: 2px;
}

.${n.className}.${r.className} .${c.className} {
  transform: translateX(16px);
}

/* ${m.description} */
.${m.className} {
  gap: ${t.spacings[3]};
}

.${m.className} .${s.className} {
  width: 44px;
  height: 24px;
}

.${m.className} .${c.className} {
  width: 20px;
  height: 20px;
  left: 2px;
}

.${m.className}.${r.className} .${c.className} {
  transform: translateX(20px);
}
  `.trim();
}
function f() {
  return [d(), g(), x()].join(`

`);
}
export {
  f as generateFormFieldSwitchCSS
};
