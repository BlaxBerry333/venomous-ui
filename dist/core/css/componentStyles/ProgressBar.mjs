import { PROGRESS_BAR_CSS_CLASS_NAMES as g } from "../../constants/cssClassNames.mjs";
import { getCssVar as a } from "../variables/getCssVar.mjs";
import { DESIGN_TOKENS as u } from "../../designs/index.mjs";
const {
  base: i,
  track: s,
  fill: r,
  animated: o,
  sizeSmall: n,
  sizeMedium: t,
  sizeLarge: c,
  colorPrimary: m,
  colorSuccess: l,
  colorError: $,
  colorWarning: d,
  colorInfo: p
} = g;
function N() {
  return `
/* ${i.description} */
.${i.className} {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
}

/* ${s.description} */
.${s.className} {
  flex: 1;
  position: relative;
  overflow: hidden;
  background-color: ${a((e) => e.bg.active)};
  border-radius: 999px;
}

/* ${r.description} */
.${r.className} {
  height: 100%;
  border-radius: 999px;
  background-color: ${a((e) => e.palette.main)};
  transition: width ${u.transitions.progress};
}
  `.trim();
}
function S() {
  return `
/* ${n.description} */
.${n.className} .${s.className} {
  height: 4px;
}

/* ${t.description} */
.${t.className} .${s.className} {
  height: 8px;
}

/* ${c.description} */
.${c.className} .${s.className} {
  height: 12px;
}
  `.trim();
}
function f() {
  return `
/* ${m.description} */
.${m.className} .${r.className} {
  background-color: ${a((e) => e.palette.main)};
}

/* ${l.description} */
.${l.className} .${r.className} {
  background-color: ${a((e) => e.semantic.success.main)};
}

/* ${$.description} */
.${$.className} .${r.className} {
  background-color: ${a((e) => e.semantic.error.main)};
}

/* ${d.description} */
.${d.className} .${r.className} {
  background-color: ${a((e) => e.semantic.warning.main)};
}

/* ${p.description} */
.${p.className} .${r.className} {
  background-color: ${a((e) => e.semantic.info.main)};
}
  `.trim();
}
function b() {
  return `
/* ${o.description} */
@keyframes progress-bar-indeterminate {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(400%);
  }
}

.${o.className} .${r.className} {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 25%;
  transition: none;
  animation: progress-bar-indeterminate 1.5s ease-in-out infinite;
}
  `.trim();
}
function C() {
  return [N(), S(), f(), b()].join(`

`);
}
export {
  C as generateProgressBarCSS
};
