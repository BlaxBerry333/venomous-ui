import { PROGRESS_BAR_CSS_CLASS_NAMES as g } from "../../constants/cssClassNames.mjs";
import { getCssVar as r } from "../variables/getCssVar.mjs";
const {
  base: s,
  track: i,
  fill: a,
  animated: n,
  sizeSmall: o,
  sizeMedium: t,
  sizeLarge: c,
  colorPrimary: m,
  colorSuccess: l,
  colorError: $,
  colorWarning: d,
  colorInfo: p
} = g;
function u() {
  return `
/* ${s.description} */
.${s.className} {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
}

/* ${i.description} */
.${i.className} {
  flex: 1;
  position: relative;
  overflow: hidden;
  background-color: ${r((e) => e.bg.active)};
  border-radius: 999px;
}

/* ${a.description} */
.${a.className} {
  height: 100%;
  border-radius: 999px;
  background-color: ${r((e) => e.palette.main)};
  transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1);
}
  `.trim();
}
function N() {
  return `
/* ${o.description} */
.${o.className} .${i.className} {
  height: 4px;
}

/* ${t.description} */
.${t.className} .${i.className} {
  height: 8px;
}

/* ${c.description} */
.${c.className} .${i.className} {
  height: 12px;
}
  `.trim();
}
function b() {
  return `
/* ${m.description} */
.${m.className} .${a.className} {
  background-color: ${r((e) => e.palette.main)};
}

/* ${l.description} */
.${l.className} .${a.className} {
  background-color: ${r((e) => e.semantic.success.main)};
}

/* ${$.description} */
.${$.className} .${a.className} {
  background-color: ${r((e) => e.semantic.error.main)};
}

/* ${d.description} */
.${d.className} .${a.className} {
  background-color: ${r((e) => e.semantic.warning.main)};
}

/* ${p.description} */
.${p.className} .${a.className} {
  background-color: ${r((e) => e.semantic.info.main)};
}
  `.trim();
}
function S() {
  return `
/* ${n.description} */
@keyframes progress-bar-indeterminate {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(400%);
  }
}

.${n.className} .${a.className} {
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
function x() {
  return [u(), N(), b(), S()].join(`

`);
}
export {
  x as generateProgressBarCSS
};
