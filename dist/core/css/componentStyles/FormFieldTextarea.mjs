import { FORM_FIELD_TEXTAREA_CSS_CLASS_NAMES as f } from "../../constants/cssClassNames.mjs";
import { getCssVar as c } from "../variables/getCssVar.mjs";
import { DESIGN_TOKENS as a } from "../../designs/index.mjs";
import { FORM_FIELD_TRANSITION as z, generateFullWidthCSS as b, generateDisabledCSS as C, generateFocusedCSS as h, generateErrorCSS as x, generateOutlinedVariantCSS as F, generateFilledVariantCSS as R } from "./FormFieldShared.mjs";
const {
  base: m,
  textarea: e,
  disabled: s,
  focused: i,
  error: r,
  variantOutlined: d,
  variantFilled: $,
  sizeSmall: t,
  sizeMedium: o,
  sizeLarge: l,
  resizeNone: N,
  resizeVertical: S,
  resizeHorizontal: u,
  resizeBoth: p,
  fullWidth: g
} = f;
function E() {
  return `
/* ${m.description} */
.${m.className} {
  box-sizing: border-box;
  display: inline-flex;
  border-radius: ${a.borderRadius.medium};
  transition: ${z};
}

/* ${g.description} */
${b(g.className)}

/* ${e.description} */
.${e.className} {
  flex: 1;
  min-width: 0;
  border: none;
  background: transparent;
  color: ${c((n) => n.text.primary)};
  font-family: inherit;
  outline: none;
  line-height: 1.5;
}

.${e.className}::placeholder {
  color: ${c((n) => n.text.disabled)};
}
  `.trim();
}
function _() {
  return `
/* ${s.description} */
${C(s.className, e.className)}

/* ${i.description} */
${h(i.className)}

/* ${r.description} */
${x(r.className, i.className, s.className, e.className)}
  `.trim();
}
function O() {
  return `
/* ${d.description} */
${F(d.className, s.className, i.className, r.className)}

/* ${$.description} */
${R($.className, s.className, i.className, r.className)}
  `.trim();
}
function T() {
  return `
/* ${t.description} */
.${t.className} {
  padding: ${a.spacings[2]};
  border-radius: ${a.borderRadius.small};
}

.${t.className} .${e.className} {
  font-size: ${a.fontSizes.small};
}

/* ${o.description} */
.${o.className} {
  padding: ${a.spacings[3]};
  border-radius: ${a.borderRadius.medium};
}

.${o.className} .${e.className} {
  font-size: 14px;
}

/* ${l.description} */
.${l.className} {
  padding: ${a.spacings[4]};
  border-radius: ${a.borderRadius.large};
}

.${l.className} .${e.className} {
  font-size: ${a.fontSizes.medium};
}
  `.trim();
}
function A() {
  return `
/* ${N.description} */
.${N.className} .${e.className} {
  resize: none;
}

/* ${S.description} */
.${S.className} .${e.className} {
  resize: vertical;
}

/* ${u.description} */
.${u.className} .${e.className} {
  resize: horizontal;
}

/* ${p.description} */
.${p.className} .${e.className} {
  resize: both;
}
  `.trim();
}
function M() {
  return [E(), _(), O(), T(), A()].join(
    `

`
  );
}
export {
  M as generateFormFieldTextareaCSS
};
