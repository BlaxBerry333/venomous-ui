import { FORM_FIELD_PASSWORD_CSS_CLASS_NAMES as u } from "../../constants/cssClassNames.mjs";
import { DESIGN_TOKENS as g } from "../../designs/index.mjs";
import { FORM_FIELD_TRANSITION as p, generateFullWidthCSS as z, generateInputCSS as C, generateButtonAddonCSS as f, generateDisabledCSS as F, generateFocusedCSS as h, generateErrorCSS as _, generateOutlinedVariantCSS as I, generateFilledVariantCSS as O, generateContainerSizeCSS as c, generateInputSizeCSS as S, FORM_FIELD_ICON_SIZES as e } from "./FormFieldShared.mjs";
const {
  base: o,
  input: a,
  toggle: s,
  disabled: i,
  focused: t,
  error: m,
  variantOutlined: $,
  variantFilled: d,
  sizeSmall: r,
  sizeMedium: n,
  sizeLarge: l,
  fullWidth: N
} = u;
function b() {
  return `
/* ${o.description} */
.${o.className} {
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  border-radius: ${g.borderRadius.medium};
  transition: ${p};
}

/* ${N.description} */
${z(N.className)}

/* ${a.description} */
${C(a.className)}

/* ${s.description} */
${f(s.className)}
  `.trim();
}
function E() {
  return `
/* ${i.description} */
${F(i.className, a.className)}

/* ${t.description} */
${h(t.className)}

/* ${m.description} */
${_(m.className, t.className, i.className, a.className)}
  `.trim();
}
function D() {
  return `
/* ${$.description} */
${I($.className, i.className, t.className, m.className)}

/* ${d.description} */
${O(d.className, i.className, t.className, m.className)}
  `.trim();
}
function R() {
  return `
/* ${r.description} */
${c(r.className, "small")}
${S(r.className, a.className, "small")}

.${r.className} .${s.className} {
  width: ${e.small.size};
  height: ${e.small.size};
  font-size: ${e.small.fontSize};
}

/* ${n.description} */
${c(n.className, "medium")}
${S(n.className, a.className, "medium")}

.${n.className} .${s.className} {
  width: ${e.medium.size};
  height: ${e.medium.size};
  font-size: ${e.medium.fontSize};
}

/* ${l.description} */
${c(l.className, "large")}
${S(l.className, a.className, "large")}

.${l.className} .${s.className} {
  width: ${e.large.size};
  height: ${e.large.size};
  font-size: ${e.large.fontSize};
}
  `.trim();
}
function w() {
  return [b(), E(), D(), R()].join(`

`);
}
export {
  w as generateFormFieldPasswordCSS
};
