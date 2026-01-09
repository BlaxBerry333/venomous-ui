import { FORM_FIELD_NUMBER_CSS_CLASS_NAMES as N } from "../../constants/cssClassNames.mjs";
import { DESIGN_TOKENS as e } from "../../designs/index.mjs";
import { FORM_FIELD_TRANSITION as S, generateFullWidthCSS as g, generateInputCSS as u, generateButtonAddonCSS as f, generateDisabledCSS as x, generateFocusedCSS as b, generateErrorCSS as h, generateOutlinedVariantCSS as C, generateFilledVariantCSS as z } from "./FormFieldShared.mjs";
const {
  base: d,
  input: a,
  controls: o,
  controlButton: s,
  disabled: i,
  focused: n,
  error: l,
  variantOutlined: m,
  variantFilled: $,
  sizeSmall: t,
  sizeMedium: r,
  sizeLarge: c,
  fullWidth: p
} = N;
function F() {
  return `
/* ${d.description} */
.${d.className} {
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  border-radius: ${e.borderRadius.medium};
  transition: ${S};
}

/* ${p.description} */
${g(p.className)}

/* ${a.description} */
${u(a.className)}

.${a.className} {
  text-align: left;
  -moz-appearance: textfield;
}

.${a.className}::-webkit-outer-spin-button,
.${a.className}::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* ${o.description} */
.${o.className} {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

/* ${s.description} */
${f(s.className)}
  `.trim();
}
function R() {
  return `
/* ${i.description} */
${x(i.className, a.className)}

/* ${n.description} */
${b(n.className)}

/* ${l.description} */
${h(l.className, n.className, i.className, a.className)}
  `.trim();
}
function _() {
  return `
/* ${m.description} */
${C(m.className, i.className, n.className, l.className)}

/* ${$.description} */
${z($.className, i.className, n.className, l.className)}
  `.trim();
}
function E() {
  return `
/* ${t.description} */
.${t.className} {
  height: 28px;
  padding: 0 ${e.spacings[1]};
  border-radius: ${e.borderRadius.small};
}

.${t.className} .${a.className} {
  font-size: ${e.fontSizes.small};
  padding: 0 ${e.spacings[1]};
}

.${t.className} .${s.className} {
  width: 18px;
  height: 13px;
  font-size: 12px;
}

/* ${r.description} */
.${r.className} {
  height: 36px;
  padding: 0 ${e.spacings[1]};
  border-radius: ${e.borderRadius.medium};
}

.${r.className} .${a.className} {
  font-size: 14px;
  padding: 0 ${e.spacings[2]};
}

.${r.className} .${s.className} {
  width: 22px;
  height: 17px;
  font-size: 14px;
}

/* ${c.description} */
.${c.className} {
  height: 44px;
  padding: 0 ${e.spacings[2]};
  border-radius: ${e.borderRadius.large};
}

.${c.className} .${a.className} {
  font-size: ${e.fontSizes.medium};
  padding: 0 ${e.spacings[3]};
}

.${c.className} .${s.className} {
  width: 26px;
  height: 21px;
  font-size: 16px;
}
  `.trim();
}
function M() {
  return [F(), R(), _(), E()].join(`

`);
}
export {
  M as generateFormFieldNumberCSS
};
