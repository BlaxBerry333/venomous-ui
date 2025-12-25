import { TOAST_CSS_CLASS_NAMES as v } from "../../constants/cssClassNames.mjs";
import { getCssVar as e } from "../variables/getCssVar.mjs";
import { DESIGN_TOKENS as s } from "../../designs/index.mjs";
const {
  container: b,
  root: $,
  icon: t,
  content: y,
  title: h,
  description: w,
  action: k,
  closeButton: n,
  variantSuccess: g,
  variantError: u,
  variantWarning: N,
  variantInfo: x,
  variantLoading: r,
  placementTopRight: m,
  placementTopCenter: l,
  placementTopLeft: c,
  placementBottomRight: d,
  placementBottomCenter: p,
  placementBottomLeft: f,
  entering: o,
  exiting: i
} = v;
function S() {
  return `
/* ${b.description} */
.${b.className} {
  box-sizing: border-box;
  position: fixed;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  pointer-events: none;
  padding: var(--toast-offset, 16px);
  gap: var(--toast-gap, 12px);
}

/* ${m.description} */
.${m.className} {
  top: 0;
  right: 0;
  align-items: flex-end;
}

/* ${l.description} */
.${l.className} {
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  align-items: center;
}

/* ${c.description} */
.${c.className} {
  top: 0;
  left: 0;
  align-items: flex-start;
}

/* ${d.description} */
.${d.className} {
  bottom: 0;
  right: 0;
  align-items: flex-end;
  flex-direction: column-reverse;
}

/* ${p.description} */
.${p.className} {
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  align-items: center;
  flex-direction: column-reverse;
}

/* ${f.description} */
.${f.className} {
  bottom: 0;
  left: 0;
  align-items: flex-start;
  flex-direction: column-reverse;
}
  `.trim();
}
function C() {
  return `
/* ${$.description} */
.${$.className} {
  box-sizing: border-box;
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: ${s.spacings[3]};
  width: 360px;
  min-height: 56px;
  padding: 14px 16px 14px 20px;
  border-radius: ${s.borderRadius.medium};
  border: 1px solid ${e((a) => a.border.secondary)};
  background-color: ${e((a) => a.bg.float)};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08);
  pointer-events: auto;
  overflow: hidden;
}

/* Left accent bar */
.${$.className}::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background-color: ${e((a) => a.border.primary)};
  border-radius: ${s.borderRadius.medium} 0 0 ${s.borderRadius.medium};
}

/* ${t.description} */
.${t.className} {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  font-size: 22px;
  line-height: 1;
}

/* ${y.description} */
.${y.className} {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-top: 1px;
}

/* ${h.description} */
.${h.className} {
  font-size: 14px;
  font-weight: ${s.fontWeights.medium};
  line-height: 1.5;
  color: ${e((a) => a.text.primary)};
  word-break: break-word;
}

/* ${w.description} */
.${w.className} {
  font-size: 13px;
  font-weight: ${s.fontWeights.light};
  line-height: 1.5;
  color: ${e((a) => a.text.tertiary)};
  word-break: break-word;
}

/* ${k.description} */
.${k.className} {
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
}

/* ${n.description} */
.${n.className} {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  margin: -6px -6px -6px 0;
  padding: 0;
  border: none;
  background: transparent;
  border-radius: ${s.borderRadius.small};
  color: ${e((a) => a.text.tertiary)};
  font-size: 18px;
  cursor: pointer;
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.${n.className}:hover {
  background-color: ${e((a) => a.bg.active)};
  color: ${e((a) => a.text.primary)};
}

.${n.className}:focus-visible {
  outline: 2px solid ${e((a) => a.palette.main)};
  outline-offset: 2px;
}
  `.trim();
}
function T() {
  return `
/* ${g.description} */
.${g.className}::before {
  background-color: ${e((a) => a.semantic.success.main)};
}
.${g.className} .${t.className} {
  color: ${e((a) => a.semantic.success.main)};
}

/* ${u.description} */
.${u.className}::before {
  background-color: ${e((a) => a.semantic.error.main)};
}
.${u.className} .${t.className} {
  color: ${e((a) => a.semantic.error.main)};
}

/* ${N.description} */
.${N.className}::before {
  background-color: ${e((a) => a.semantic.warning.main)};
}
.${N.className} .${t.className} {
  color: ${e((a) => a.semantic.warning.main)};
}

/* ${x.description} */
.${x.className}::before {
  background-color: ${e((a) => a.semantic.info.main)};
}
.${x.className} .${t.className} {
  color: ${e((a) => a.semantic.info.main)};
}

/* ${r.description} */
.${r.className}::before {
  background-color: ${e((a) => a.palette.main)};
}
.${r.className} .${t.className} {
  color: ${e((a) => a.palette.main)};
}
  `.trim();
}
function X() {
  return `
/* Animation keyframes */
@keyframes toast-slide-in-right {
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes toast-slide-out-right {
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(100%);
  }
}

@keyframes toast-slide-in-left {
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes toast-slide-out-left {
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(-100%);
  }
}

@keyframes toast-slide-in-down {
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes toast-slide-out-up {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-100%);
  }
}

@keyframes toast-slide-in-up {
  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes toast-slide-out-down {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(100%);
  }
}

@keyframes toast-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Loading icon spin animation */
.${r.className} .${t.className} svg,
.${r.className} .${t.className} > span {
  animation: toast-spin 1s linear infinite;
}

/* Entering animations by placement */
.${m.className} .${o.className} {
  animation: toast-slide-in-right 200ms ease-out forwards;
}
.${c.className} .${o.className} {
  animation: toast-slide-in-left 200ms ease-out forwards;
}
.${l.className} .${o.className} {
  animation: toast-slide-in-down 200ms ease-out forwards;
}
.${d.className} .${o.className} {
  animation: toast-slide-in-right 200ms ease-out forwards;
}
.${f.className} .${o.className} {
  animation: toast-slide-in-left 200ms ease-out forwards;
}
.${p.className} .${o.className} {
  animation: toast-slide-in-up 200ms ease-out forwards;
}

/* Exiting animations by placement */
.${m.className} .${i.className} {
  animation: toast-slide-out-right 150ms ease-in forwards;
}
.${c.className} .${i.className} {
  animation: toast-slide-out-left 150ms ease-in forwards;
}
.${l.className} .${i.className} {
  animation: toast-slide-out-up 150ms ease-in forwards;
}
.${d.className} .${i.className} {
  animation: toast-slide-out-right 150ms ease-in forwards;
}
.${f.className} .${i.className} {
  animation: toast-slide-out-left 150ms ease-in forwards;
}
.${p.className} .${i.className} {
  animation: toast-slide-out-down 150ms ease-in forwards;
}

/* Respect reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  .${o.className},
  .${i.className} {
    animation: none !important;
  }
  .${r.className} .${t.className} svg,
  .${r.className} .${t.className} > span {
    animation: none !important;
  }
}
  `.trim();
}
function E() {
  return [
    S(),
    C(),
    T(),
    X()
  ].join(`

`);
}
export {
  E as generateToastCSS
};
