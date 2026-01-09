import { FORM_FIELD_TEXT_CSS_CLASS_NAMES as g } from "../../constants/cssClassNames.mjs";
import { DESIGN_TOKENS as f } from "../../designs/index.mjs";
import { FORM_FIELD_TRANSITION as C, generateFullWidthCSS as z, generateInputCSS as F, generateAddonCSS as o, generateDisabledCSS as _, generateFocusedCSS as I, generateErrorCSS as E, generateOutlinedVariantCSS as b, generateFilledVariantCSS as O, generateContainerSizeCSS as c, generateInputSizeCSS as S, FORM_FIELD_ICON_SIZES as N } from "./FormFieldShared.mjs";
const {
  base: $,
  input: e,
  prefix: r,
  suffix: n,
  disabled: t,
  focused: l,
  error: m,
  variantOutlined: d,
  variantFilled: u,
  sizeSmall: a,
  sizeMedium: s,
  sizeLarge: i,
  fullWidth: p
} = g;
function x() {
  return `
/* ${$.description} */
.${$.className} {
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  border-radius: ${f.borderRadius.medium};
  transition: ${C};
}

/* ${p.description} */
${z(p.className)}

/* ${e.description} */
${F(e.className)}

/* ${r.description} */
${o(r.className)}

/* ${n.description} */
${o(n.className)}
  `.trim();
}
function T() {
  return `
/* ${t.description} */
${_(t.className, e.className)}

/* ${l.description} */
${I(l.className)}

/* ${m.description} */
${E(m.className, l.className, t.className, e.className)}
  `.trim();
}
function D() {
  return `
/* ${d.description} */
${b(d.className, t.className, l.className, m.className)}

/* ${u.description} */
${O(u.className, t.className, l.className, m.className)}
  `.trim();
}
function L() {
  return `
/* ${a.description} */
${c(a.className, "small")}
${S(a.className, e.className, "small")}

.${a.className} .${r.className},
.${a.className} .${n.className} {
  font-size: ${N.small.fontSize};
}

/* ${s.description} */
${c(s.className, "medium")}
${S(s.className, e.className, "medium")}

.${s.className} .${r.className},
.${s.className} .${n.className} {
  font-size: ${N.medium.fontSize};
}

/* ${i.description} */
${c(i.className, "large")}
${S(i.className, e.className, "large")}

.${i.className} .${r.className},
.${i.className} .${n.className} {
  font-size: ${N.large.fontSize};
}
  `.trim();
}
function V() {
  return [x(), T(), D(), L()].join(`

`);
}
export {
  V as generateFormFieldTextCSS
};
