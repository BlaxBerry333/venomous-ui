import { CARD_CSS_CLASS_NAMES as v } from "../../constants/cssClassNames.mjs";
import { getCssVar as s } from "../variables/getCssVar.mjs";
import { DESIGN_TOKENS as e } from "../../designs/index.mjs";
const {
  base: l,
  disabled: r,
  loading: d,
  clickable: i,
  variantElevated: o,
  variantOutlined: n,
  variantFilled: t,
  radiusNone: $,
  radiusSmall: m,
  radiusMedium: p,
  radiusLarge: b,
  paddingNone: u,
  paddingSmall: N,
  paddingMedium: g,
  paddingLarge: S,
  content: c,
  loadingIcon: f
} = v;
function C() {
  return `
/* ${l.description} */
.${l.className} {
  /* Reset */
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  min-width: 0;
  position: relative;
  overflow: hidden;

  /* Smooth transitions */
  transition: ${e.transitions.colorsAndShadow}, ${e.transitions.transform};
}
  `.trim();
}
function h() {
  return `
/* ${r.description} */
.${r.className} {
  opacity: ${e.opacities.disabled};
  cursor: not-allowed;
  pointer-events: none;
}

/* ${d.description} */
.${d.className} {
  opacity: ${e.opacities.disabled};
  cursor: wait;
  pointer-events: none;
}

/* ${c.description} */
.${c.className} {
  display: block;
}

.${d.className} .${c.className} {
  visibility: hidden;
}

/* ${f.description} */
.${f.className} {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
}

/* ${i.description} */
.${i.className} {
  cursor: pointer;
}
  `.trim();
}
function w() {
  return `
/* ${o.description} */
.${o.className} {
  background-color: ${s((a) => a.bg.float)};
  border: 1px solid transparent;
  box-shadow: ${s((a) => a.shadow.medium)};
}
.${o.className}.${i.className}:hover:not(.${r.className}) {
  box-shadow: ${s((a) => a.shadow.large)};
}
.${o.className}.${i.className}:active:not(.${r.className}) {
  transform: scale(0.995);
  box-shadow: ${s((a) => a.shadow.medium)};
}

/* ${n.description} */
.${n.className} {
  background-color: ${s((a) => a.bg.body)};
  border: 1px solid ${s((a) => a.border.primary)};
}
.${n.className}.${i.className}:hover:not(.${r.className}) {
  border-color: ${s((a) => a.palette.main)};
  box-shadow: 0 0 0 1px ${s((a) => a.palette.main)};
}
.${n.className}.${i.className}:active:not(.${r.className}) {
  transform: scale(0.995);
  background-color: ${s((a) => a.bg.active)};
}

/* ${t.description} */
.${t.className} {
  background-color: ${s((a) => a.bg.normal)};
  border: 1px solid transparent;
}
.${t.className}.${i.className}:hover:not(.${r.className}) {
  background-color: ${s((a) => a.bg.active)};
}
.${t.className}.${i.className}:active:not(.${r.className}) {
  transform: scale(0.995);
  background-color: ${s((a) => a.bg.disabled)};
}
  `.trim();
}
function x() {
  return `
/* ${u.description} */
.${u.className} {
  padding: 0;
}

/* ${N.description} */
.${N.className} {
  padding: ${e.spacings[2]};
}

/* ${g.description} */
.${g.className} {
  padding: ${e.spacings[4]};
}

/* ${S.description} */
.${S.className} {
  padding: ${e.spacings[6]};
}
  `.trim();
}
function k() {
  return `
/* ${$.description} */
.${$.className} {
  border-radius: ${e.borderRadius.none};
}

/* ${m.description} */
.${m.className} {
  border-radius: ${e.borderRadius.small};
}

/* ${p.description} */
.${p.className} {
  border-radius: ${e.borderRadius.medium};
}

/* ${b.description} */
.${b.className} {
  border-radius: ${e.borderRadius.large};
}
  `.trim();
}
function E() {
  return [
    C(),
    h(),
    w(),
    x(),
    k()
  ].join(`

`);
}
export {
  E as generateCardCSS
};
