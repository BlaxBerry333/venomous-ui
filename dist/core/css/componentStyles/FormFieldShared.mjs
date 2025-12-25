import { getCssVar as e } from "../variables/getCssVar.mjs";
import { DESIGN_TOKENS as c } from "../../designs/index.mjs";
const p = `
  border-color 150ms cubic-bezier(0.4, 0, 0.2, 1),
  background-color 150ms cubic-bezier(0.4, 0, 0.2, 1),
  box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1)`;
function b(r) {
  return `
.${r} {
  flex: 1;
  min-width: 0;
  border: none;
  background: transparent;
  color: ${e((o) => o.text.primary)};
  font-family: inherit;
  outline: none;
}

.${r}::placeholder {
  color: ${e((o) => o.text.disabled)};
}`;
}
function u(r, o) {
  let t = `
.${r} {
  opacity: ${c.opacities.disabled};
  cursor: not-allowed;
  pointer-events: none;
}`;
  return o && (t += `

.${r} .${o} {
  cursor: not-allowed;
}`), t;
}
function l(r) {
  return `
.${r} {
  border-color: ${e((o) => o.palette.main)};
  box-shadow: 0 0 0 2px ${e((o) => o.palette.light)};
}`;
}
function S(r, o, t, i) {
  let n = `
.${r} {
  border-color: ${e(($) => $.semantic.error.main)};
}

.${r}:hover:not(.${t}):not(.${o}) {
  border-color: ${e(($) => $.semantic.error.dark)};
}

.${r}.${o} {
  border-color: ${e(($) => $.semantic.error.main)};
  box-shadow: 0 0 0 3px color-mix(in srgb, ${e(($) => $.semantic.error.main)} 20%, transparent);
}`;
  return i && (n += `

.${r} .${i} {
  color: ${e(($) => $.semantic.error.main)};
}`), n;
}
function s(r, o, t, i) {
  return `
.${r} {
  background-color: transparent;
  border: 1px solid ${e((n) => n.border.secondary)};
}

.${r}:hover:not(.${o}):not(.${t}):not(.${i}) {
  border-color: ${e((n) => n.border.primary)};
}

.${r}.${i}:not(.${t}) {
  border-color: ${e((n) => n.semantic.error.main)};
  background-color: color-mix(in srgb, ${e((n) => n.semantic.error.main)} 4%, transparent);
}

.${r}.${i}:hover:not(.${o}):not(.${t}) {
  border-color: ${e((n) => n.semantic.error.dark)};
  background-color: color-mix(in srgb, ${e((n) => n.semantic.error.main)} 6%, transparent);
}`;
}
function x(r, o, t, i) {
  return `
.${r} {
  background-color: ${e((n) => n.bg.active)};
  border: 1px solid transparent;
}

.${r}:hover:not(.${o}):not(.${t}):not(.${i}) {
  background-color: ${e((n) => n.bg.active)};
}

.${r}.${t}:not(.${i}) {
  background-color: transparent;
  border-color: ${e((n) => n.palette.main)};
}

.${r}.${i} {
  background-color: color-mix(in srgb, ${e((n) => n.semantic.error.main)} 8%, transparent);
  border-color: transparent;
}

.${r}.${i}:hover:not(.${o}):not(.${t}) {
  background-color: color-mix(in srgb, ${e((n) => n.semantic.error.main)} 12%, transparent);
}

.${r}.${i}.${t} {
  background-color: transparent;
  border-color: ${e((n) => n.semantic.error.main)};
}`;
}
const a = {
  small: {
    height: "28px",
    padding: `0 ${c.spacings[2]}`,
    gap: c.spacings[1],
    borderRadius: c.borderRadius.small,
    fontSize: c.fontSizes.small
  },
  medium: {
    height: "36px",
    padding: `0 ${c.spacings[3]}`,
    gap: c.spacings[2],
    borderRadius: c.borderRadius.medium,
    fontSize: "14px"
  },
  large: {
    height: "44px",
    padding: `0 ${c.spacings[4]}`,
    gap: c.spacings[2],
    borderRadius: c.borderRadius.large,
    fontSize: c.fontSizes.medium
  }
};
function h(r, o) {
  const t = a[o];
  return `
.${r} {
  height: ${t.height};
  padding: ${t.padding};
  gap: ${t.gap};
  border-radius: ${t.borderRadius};
}`;
}
function f(r, o, t) {
  const i = a[t];
  return `
.${r} .${o} {
  font-size: ${i.fontSize};
}`;
}
const m = {
  small: { fontSize: "14px", size: "20px" },
  medium: { fontSize: "18px", size: "24px" },
  large: { fontSize: "22px", size: "28px" }
};
function z(r) {
  return `
.${r} {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: ${e((o) => o.text.secondary)};
}`;
}
function k(r) {
  return `
.${r} {
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  color: ${e((o) => o.text.secondary)};
  cursor: pointer;
  padding: 0;
  border-radius: ${c.borderRadius.small};
  transition:
    background-color 150ms cubic-bezier(0.4, 0, 0.2, 1),
    color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.${r}:hover {
  background-color: ${e((o) => o.bg.active)};
  color: ${e((o) => o.text.primary)};
}

.${r}:active {
  background-color: ${e((o) => o.bg.active)};
}

.${r}:disabled {
  opacity: ${c.opacities.disabled};
  cursor: not-allowed;
  pointer-events: none;
}`;
}
function v(r) {
  return `
.${r} {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}`;
}
function y(r) {
  return `
.${r} {
  width: 100%;
}`;
}
export {
  m as FORM_FIELD_ICON_SIZES,
  a as FORM_FIELD_SIZES,
  p as FORM_FIELD_TRANSITION,
  z as generateAddonCSS,
  k as generateButtonAddonCSS,
  h as generateContainerSizeCSS,
  u as generateDisabledCSS,
  v as generateEllipsisCSS,
  S as generateErrorCSS,
  x as generateFilledVariantCSS,
  l as generateFocusedCSS,
  y as generateFullWidthCSS,
  b as generateInputCSS,
  f as generateInputSizeCSS,
  s as generateOutlinedVariantCSS
};
