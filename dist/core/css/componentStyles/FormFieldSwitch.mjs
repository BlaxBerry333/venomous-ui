import { FORM_FIELD_SWITCH_CSS_CLASS_NAMES as N } from "../../constants/cssClassNames.mjs";
import { getCssVar as e } from "../variables/getCssVar.mjs";
import { DESIGN_TOKENS as m } from "../../designs/index.mjs";
const { base: p, input: $, track: s, thumb: o, checked: r, disabled: i, error: c, sizeSmall: t, sizeMedium: l, sizeLarge: n } = N;
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
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.${p.className}:hover:not(.${i.className}):not(.${r.className}):not(.${c.className}) .${s.className} {
  background-color: ${e((a) => a.border.primary)};
}

/* ${o.description} */
.${o.className} {
  position: absolute;
  background-color: #ffffff;
  border-radius: 50%;
  box-shadow:
    0 1px 3px 0 rgb(0 0 0 / 0.1),
    0 1px 2px -1px rgb(0 0 0 / 0.1);
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
  `.trim();
}
function g() {
  return `
/* ${r.description} */
.${r.className} .${s.className} {
  background-color: ${e((a) => a.palette.main)};
}

.${r.className}:hover:not(.${i.className}):not(.${c.className}) .${s.className} {
  background-color: ${e((a) => a.palette.dark)};
}

/* ${i.description} */
.${i.className} {
  opacity: ${m.opacities.disabled};
  cursor: not-allowed;
  pointer-events: none;
}

/* ${c.description} */
.${c.className} .${s.className} {
  background-color: ${e((a) => a.semantic.error.light)};
}

.${c.className}:hover:not(.${i.className}):not(.${r.className}) .${s.className} {
  background-color: ${e((a) => a.semantic.error.main)};
}

.${c.className}.${r.className} .${s.className} {
  background-color: ${e((a) => a.semantic.error.main)};
}

.${c.className}.${r.className}:hover:not(.${i.className}) .${s.className} {
  background-color: ${e((a) => a.semantic.error.dark)};
}

/* Focus ring */
.${$.className}:focus-visible + .${s.className} {
  box-shadow: 0 0 0 2px ${e((a) => a.palette.light)};
}

.${c.className} .${$.className}:focus-visible + .${s.className} {
  box-shadow: 0 0 0 3px color-mix(in srgb, ${e((a) => a.semantic.error.main)} 20%, transparent);
}
  `.trim();
}
function x() {
  return `
/* ${t.description} */
.${t.className} {
  gap: ${m.spacings[2]};
}

.${t.className} .${s.className} {
  width: 28px;
  height: 16px;
}

.${t.className} .${o.className} {
  width: 12px;
  height: 12px;
  left: 2px;
}

.${t.className}.${r.className} .${o.className} {
  transform: translateX(12px);
}

/* ${l.description} */
.${l.className} {
  gap: ${m.spacings[2]};
}

.${l.className} .${s.className} {
  width: 36px;
  height: 20px;
}

.${l.className} .${o.className} {
  width: 16px;
  height: 16px;
  left: 2px;
}

.${l.className}.${r.className} .${o.className} {
  transform: translateX(16px);
}

/* ${n.description} */
.${n.className} {
  gap: ${m.spacings[3]};
}

.${n.className} .${s.className} {
  width: 44px;
  height: 24px;
}

.${n.className} .${o.className} {
  width: 20px;
  height: 20px;
  left: 2px;
}

.${n.className}.${r.className} .${o.className} {
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
