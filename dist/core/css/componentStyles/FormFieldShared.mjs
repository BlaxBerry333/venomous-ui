import { getCssVar as t } from "../variables/getCssVar.mjs";
import { DESIGN_TOKENS as i } from "../../designs/index.mjs";
const p = i.transitions.colorsAndShadow;
function b(r) {
  return `
.${r} {
  flex: 1;
  min-width: 0;
  border: none;
  background: transparent;
  color: ${t((n) => n.text.primary)};
  font-family: inherit;
  outline: none;
}

.${r}::placeholder {
  color: ${t((n) => n.text.disabled)};
}`;
}
function u(r, n) {
  let e = `
.${r} {
  opacity: ${i.opacities.disabled};
  cursor: not-allowed;
  pointer-events: none;
}`;
  return n && (e += `

.${r} .${n} {
  cursor: not-allowed;
}`), e;
}
function S(r) {
  return `
.${r} {
  border-color: ${t((n) => n.palette.main)};
  box-shadow: 0 0 0 2px ${t((n) => n.palette.light)};
}`;
}
function l(r, n, e, c) {
  let o = `
.${r} {
  border-color: ${t(($) => $.semantic.error.main)};
}

.${r}:hover:not(.${e}):not(.${n}) {
  border-color: ${t(($) => $.semantic.error.dark)};
}

.${r}.${n} {
  border-color: ${t(($) => $.semantic.error.main)};
  box-shadow: 0 0 0 3px color-mix(in srgb, ${t(($) => $.semantic.error.main)} 20%, transparent);
}`;
  return c && (o += `

.${r} .${c} {
  color: ${t(($) => $.semantic.error.main)};
}`), o;
}
function s(r, n, e, c) {
  return `
.${r} {
  background-color: transparent;
  border: 1px solid ${t((o) => o.border.secondary)};
}

.${r}:hover:not(.${n}):not(.${e}):not(.${c}) {
  border-color: ${t((o) => o.border.primary)};
}

.${r}.${c}:not(.${e}) {
  border-color: ${t((o) => o.semantic.error.main)};
  background-color: color-mix(in srgb, ${t((o) => o.semantic.error.main)} 4%, transparent);
}

.${r}.${c}:hover:not(.${n}):not(.${e}) {
  border-color: ${t((o) => o.semantic.error.dark)};
  background-color: color-mix(in srgb, ${t((o) => o.semantic.error.main)} 6%, transparent);
}`;
}
function x(r, n, e, c) {
  return `
.${r} {
  background-color: ${t((o) => o.bg.active)};
  border: 1px solid transparent;
}

.${r}:hover:not(.${n}):not(.${e}):not(.${c}) {
  background-color: ${t((o) => o.bg.active)};
}

.${r}.${e}:not(.${c}) {
  background-color: transparent;
  border-color: ${t((o) => o.palette.main)};
}

.${r}.${c} {
  background-color: color-mix(in srgb, ${t((o) => o.semantic.error.main)} 8%, transparent);
  border-color: transparent;
}

.${r}.${c}:hover:not(.${n}):not(.${e}) {
  background-color: color-mix(in srgb, ${t((o) => o.semantic.error.main)} 12%, transparent);
}

.${r}.${c}.${e} {
  background-color: transparent;
  border-color: ${t((o) => o.semantic.error.main)};
}`;
}
const a = {
  small: {
    height: "28px",
    padding: `0 ${i.spacings[2]}`,
    gap: i.spacings[1],
    borderRadius: i.borderRadius.small,
    fontSize: i.fontSizes.small
  },
  medium: {
    height: "36px",
    padding: `0 ${i.spacings[3]}`,
    gap: i.spacings[2],
    borderRadius: i.borderRadius.medium,
    fontSize: "14px"
  },
  large: {
    height: "44px",
    padding: `0 ${i.spacings[4]}`,
    gap: i.spacings[2],
    borderRadius: i.borderRadius.large,
    fontSize: i.fontSizes.medium
  }
};
function h(r, n) {
  const e = a[n];
  return `
.${r} {
  height: ${e.height};
  padding: ${e.padding};
  gap: ${e.gap};
  border-radius: ${e.borderRadius};
}`;
}
function f(r, n, e) {
  const c = a[e];
  return `
.${r} .${n} {
  font-size: ${c.fontSize};
}`;
}
const m = {
  small: { fontSize: "14px", size: "20px" },
  medium: { fontSize: "18px", size: "24px" },
  large: { fontSize: "22px", size: "28px" }
};
function k(r) {
  return `
.${r} {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: ${t((n) => n.text.secondary)};
}`;
}
function v(r) {
  return `
.${r} {
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  color: ${t((n) => n.text.secondary)};
  cursor: pointer;
  padding: 0;
  border-radius: ${i.borderRadius.small};
  transition: ${i.transitions.colors};
}

.${r}:hover {
  background-color: ${t((n) => n.bg.active)};
  color: ${t((n) => n.text.primary)};
}

.${r}:active {
  background-color: ${t((n) => n.bg.active)};
}

.${r}:disabled {
  opacity: ${i.opacities.disabled};
  cursor: not-allowed;
  pointer-events: none;
}`;
}
function z(r) {
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
  k as generateAddonCSS,
  v as generateButtonAddonCSS,
  h as generateContainerSizeCSS,
  u as generateDisabledCSS,
  z as generateEllipsisCSS,
  l as generateErrorCSS,
  x as generateFilledVariantCSS,
  S as generateFocusedCSS,
  y as generateFullWidthCSS,
  b as generateInputCSS,
  f as generateInputSizeCSS,
  s as generateOutlinedVariantCSS
};
