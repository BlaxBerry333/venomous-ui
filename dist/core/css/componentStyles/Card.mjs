import { CARD_CSS_CLASS_NAMES as v } from "../../constants/cssClassNames.mjs";
import { getCssVar as e } from "../variables/getCssVar.mjs";
import { DESIGN_TOKENS as s } from "../../designs/index.mjs";
const {
  base: l,
  disabled: r,
  loading: t,
  clickable: i,
  variantElevated: o,
  variantOutlined: n,
  variantFilled: d,
  radiusNone: m,
  radiusSmall: $,
  radiusMedium: p,
  radiusLarge: b,
  paddingNone: u,
  paddingSmall: g,
  paddingMedium: N,
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
  transition:
    box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 200ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 200ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 200ms cubic-bezier(0.4, 0, 0.2, 1);
}
  `.trim();
}
function h() {
  return `
/* ${r.description} */
.${r.className} {
  opacity: ${s.opacities.disabled};
  cursor: not-allowed;
  pointer-events: none;
}

/* ${t.description} */
.${t.className} {
  opacity: ${s.opacities.disabled};
  cursor: wait;
  pointer-events: none;
}

/* ${c.description} */
.${c.className} {
  display: block;
}

.${t.className} .${c.className} {
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
function x() {
  return `
/* ${o.description} */
.${o.className} {
  background-color: ${e((a) => a.bg.float)};
  border: 1px solid transparent;
  box-shadow: ${e((a) => a.shadow.medium)};
}
.${o.className}.${i.className}:hover:not(.${r.className}) {
  box-shadow: ${e((a) => a.shadow.large)};
}
.${o.className}.${i.className}:active:not(.${r.className}) {
  transform: scale(0.995);
  box-shadow: ${e((a) => a.shadow.medium)};
}

/* ${n.description} */
.${n.className} {
  background-color: ${e((a) => a.bg.body)};
  border: 1px solid ${e((a) => a.border.primary)};
}
.${n.className}.${i.className}:hover:not(.${r.className}) {
  border-color: ${e((a) => a.palette.main)};
  box-shadow: 0 0 0 1px ${e((a) => a.palette.main)};
}
.${n.className}.${i.className}:active:not(.${r.className}) {
  transform: scale(0.995);
  background-color: ${e((a) => a.bg.active)};
}

/* ${d.description} */
.${d.className} {
  background-color: ${e((a) => a.bg.normal)};
  border: 1px solid transparent;
}
.${d.className}.${i.className}:hover:not(.${r.className}) {
  background-color: ${e((a) => a.bg.active)};
}
.${d.className}.${i.className}:active:not(.${r.className}) {
  transform: scale(0.995);
  background-color: ${e((a) => a.bg.disabled)};
}
  `.trim();
}
function w() {
  return `
/* ${u.description} */
.${u.className} {
  padding: 0;
}

/* ${g.description} */
.${g.className} {
  padding: ${s.spacings[2]};
}

/* ${N.description} */
.${N.className} {
  padding: ${s.spacings[4]};
}

/* ${S.description} */
.${S.className} {
  padding: ${s.spacings[6]};
}
  `.trim();
}
function k() {
  return `
/* ${m.description} */
.${m.className} {
  border-radius: ${s.borderRadius.none};
}

/* ${$.description} */
.${$.className} {
  border-radius: ${s.borderRadius.small};
}

/* ${p.description} */
.${p.className} {
  border-radius: ${s.borderRadius.medium};
}

/* ${b.description} */
.${b.className} {
  border-radius: ${s.borderRadius.large};
}
  `.trim();
}
function E() {
  return [
    C(),
    h(),
    x(),
    w(),
    k()
  ].join(`

`);
}
export {
  E as generateCardCSS
};
