import { BADGE_CSS_CLASS_NAMES as b } from "../../constants/cssClassNames.mjs";
import { getCssVar as e } from "../variables/getCssVar.mjs";
import { DESIGN_TOKENS as t } from "../../designs/index.mjs";
const {
  root: p,
  badge: a,
  invisible: i,
  variantStandard: r,
  variantDot: n,
  sizeSmall: o,
  sizeMedium: c,
  sizeLarge: l,
  colorDefault: N,
  colorPrimary: g,
  colorSuccess: h,
  colorError: x,
  colorWarning: u,
  colorInfo: S,
  anchorTopRight: m,
  anchorTopLeft: $,
  anchorBottomRight: d,
  anchorBottomLeft: f
} = b;
function w() {
  return `
/* ${p.description} */
.${p.className} {
  position: relative;
  display: inline-flex;
  vertical-align: middle;
  flex-shrink: 0;
}

/* ${a.description} */
.${a.className} {
  position: absolute;
  display: flex;
  flex-flow: row wrap;
  place-content: center;
  align-items: center;
  box-sizing: border-box;
  font-family: inherit;
  font-weight: ${t.fontWeights.medium};
  line-height: 1;
  z-index: 1;
  transition: ${t.transitions.colors}, ${t.transitions.transform}, ${t.transitions.opacity};
}
  `.trim();
}
function B() {
  return `
/* ${i.description} */
.${i.className} .${a.className} {
  transform: scale(0);
  opacity: 0;
}
  `.trim();
}
function C() {
  return `
/* ${r.description} */
.${r.className} .${a.className} {
  border-radius: 10px;
  padding: 0 6px;
  min-width: 20px;
}

/* ${n.description} */
.${n.className} .${a.className} {
  border-radius: ${t.borderRadius.full};
  padding: 0;
}
  `.trim();
}
function z() {
  return `
/* ${o.description} - Standard */
.${o.className}.${r.className} .${a.className} {
  height: 16px;
  min-width: 16px;
  font-size: 10px;
  padding: 0 4px;
}

/* ${o.description} - Dot */
.${o.className}.${n.className} .${a.className} {
  height: 6px;
  width: 6px;
  min-width: 6px;
}

/* ${c.description} - Standard */
.${c.className}.${r.className} .${a.className} {
  height: 20px;
  min-width: 20px;
  font-size: 12px;
  padding: 0 6px;
}

/* ${c.description} - Dot */
.${c.className}.${n.className} .${a.className} {
  height: 8px;
  width: 8px;
  min-width: 8px;
}

/* ${l.description} - Standard */
.${l.className}.${r.className} .${a.className} {
  height: 24px;
  min-width: 24px;
  font-size: 14px;
  padding: 0 8px;
}

/* ${l.description} - Dot */
.${l.className}.${n.className} .${a.className} {
  height: 10px;
  width: 10px;
  min-width: 10px;
}
  `.trim();
}
function v() {
  return `
/* ${N.description} */
.${N.className} .${a.className} {
  background-color: ${e((s) => s.bg.active)};
  color: ${e((s) => s.text.primary)};
}

/* ${g.description} */
.${g.className} .${a.className} {
  background-color: ${e((s) => s.palette.main)};
  color: #ffffff;
}

/* ${h.description} */
.${h.className} .${a.className} {
  background-color: ${e((s) => s.semantic.success.main)};
  color: #ffffff;
}

/* ${x.description} */
.${x.className} .${a.className} {
  background-color: ${e((s) => s.semantic.error.main)};
  color: #ffffff;
}

/* ${u.description} */
.${u.className} .${a.className} {
  background-color: ${e((s) => s.semantic.warning.main)};
  color: #ffffff;
}

/* ${S.description} */
.${S.className} .${a.className} {
  background-color: ${e((s) => s.semantic.info.main)};
  color: #ffffff;
}
  `.trim();
}
function k() {
  return `
/* ${m.description} */
.${m.className} .${a.className} {
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
  transform-origin: 100% 0%;
}

/* ${$.description} */
.${$.className} .${a.className} {
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
  transform-origin: 0% 0%;
}

/* ${d.description} */
.${d.className} .${a.className} {
  bottom: 0;
  right: 0;
  transform: translate(50%, 50%);
  transform-origin: 100% 100%;
}

/* ${f.description} */
.${f.className} .${a.className} {
  bottom: 0;
  left: 0;
  transform: translate(-50%, 50%);
  transform-origin: 0% 100%;
}

/* Invisible state positioning overrides */
.${i.className}.${m.className} .${a.className} {
  transform: translate(50%, -50%) scale(0);
}

.${i.className}.${$.className} .${a.className} {
  transform: translate(-50%, -50%) scale(0);
}

.${i.className}.${d.className} .${a.className} {
  transform: translate(50%, 50%) scale(0);
}

.${i.className}.${f.className} .${a.className} {
  transform: translate(-50%, 50%) scale(0);
}
  `.trim();
}
function L() {
  return [
    w(),
    B(),
    C(),
    z(),
    v(),
    k()
  ].join(`

`);
}
export {
  L as generateBadgeCSS
};
