import { PROGRESS_CIRCLE_CSS_CLASS_NAMES as h } from "../../constants/cssClassNames.mjs";
import { getCssVar as a } from "../variables/getCssVar.mjs";
import { DESIGN_TOKENS as m } from "../../designs/index.mjs";
const {
  base: $,
  svg: l,
  track: o,
  fill: e,
  label: n,
  animated: c,
  sizeSmall: t,
  sizeMedium: r,
  sizeLarge: i,
  colorPrimary: N,
  colorSuccess: d,
  colorError: f,
  colorWarning: p,
  colorInfo: g
} = h;
function S() {
  return `
/* ${$.description} */
.${$.className} {
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

/* ${l.description} */
.${l.className} {
  transform: rotate(-90deg);
}

/* ${o.description} */
.${o.className} {
  fill: none;
  stroke: ${a((s) => s.bg.active)};
}

/* ${e.description} */
.${e.className} {
  fill: none;
  stroke: ${a((s) => s.palette.main)};
  stroke-linecap: round;
  transition: stroke-dashoffset 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

/* ${n.description} */
.${n.className} {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: ${m.fontWeights.medium};
  color: ${a((s) => s.text.primary)};
}
  `.trim();
}
function k() {
  return `
/* ${t.description} */
.${t.className} {
  width: 40px;
  height: 40px;
}

.${t.className} .${o.className},
.${t.className} .${e.className} {
  stroke-width: 3;
}

.${t.className} .${n.className} {
  font-size: 10px;
}

/* ${r.description} */
.${r.className} {
  width: 64px;
  height: 64px;
}

.${r.className} .${o.className},
.${r.className} .${e.className} {
  stroke-width: 4;
}

.${r.className} .${n.className} {
  font-size: ${m.fontSizes.small};
}

/* ${i.description} */
.${i.className} {
  width: 96px;
  height: 96px;
}

.${i.className} .${o.className},
.${i.className} .${e.className} {
  stroke-width: 5;
}

.${i.className} .${n.className} {
  font-size: ${m.fontSizes.medium};
}
  `.trim();
}
function u() {
  return `
/* ${c.description} */
@keyframes progress-circle-rotate {
  100% {
    transform: rotate(270deg);
  }
}

@keyframes progress-circle-dash {
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
}

.${c.className} .${l.className} {
  animation: progress-circle-rotate 1.4s linear infinite;
}

.${c.className} .${e.className} {
  animation: progress-circle-dash 1.4s ease-in-out infinite;
  stroke-dasharray: 1, 150;
  stroke-dashoffset: 0;
  transition: none;
}
  `.trim();
}
function x() {
  return `
/* ${N.description} */
.${N.className} .${e.className} {
  stroke: ${a((s) => s.palette.main)};
}

/* ${d.description} */
.${d.className} .${e.className} {
  stroke: ${a((s) => s.semantic.success.main)};
}

/* ${f.description} */
.${f.className} .${e.className} {
  stroke: ${a((s) => s.semantic.error.main)};
}

/* ${p.description} */
.${p.className} .${e.className} {
  stroke: ${a((s) => s.semantic.warning.main)};
}

/* ${g.description} */
.${g.className} .${e.className} {
  stroke: ${a((s) => s.semantic.info.main)};
}
  `.trim();
}
function b() {
  return [S(), k(), x(), u()].join(`

`);
}
export {
  b as generateProgressCircleCSS
};
