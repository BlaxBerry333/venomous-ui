import { FORM_FIELD_SELECT_CSS_CLASS_NAMES as _ } from "../../constants/cssClassNames.mjs";
import { getCssVar as e } from "../variables/getCssVar.mjs";
import { DESIGN_TOKENS as s } from "../../designs/index.mjs";
import { generateFullWidthCSS as F, FORM_FIELD_TRANSITION as E, generateAddonCSS as I, generateButtonAddonCSS as R, FORM_FIELD_SIZES as o, FORM_FIELD_ICON_SIZES as h } from "./FormFieldShared.mjs";
const {
  base: w,
  trigger: r,
  value: p,
  placeholder: u,
  arrow: d,
  dropdown: v,
  search: f,
  optionsList: k,
  option: N,
  optionSelected: x,
  optionDisabled: S,
  group: z,
  groupLabel: y,
  clearButton: g,
  disabled: c,
  open: n,
  error: i,
  variantOutlined: b,
  variantFilled: l,
  sizeSmall: t,
  sizeMedium: $,
  sizeLarge: m,
  fullWidth: C
} = _;
function L() {
  return `
/* ${w.description} */
.${w.className} {
  box-sizing: border-box;
  display: inline-flex;
  position: relative;
}

/* ${C.description} */
${F(C.className)}

/* ${r.description} */
.${r.className} {
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  width: 100%;
  border: none;
  background: transparent;
  cursor: pointer;
  font-family: inherit;
  text-align: left;
  border-radius: ${s.borderRadius.medium};
  transition: ${E};
}

/* ${p.description} */
.${p.className} {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${e((a) => a.text.primary)};
}

/* ${u.description} */
.${u.className} {
  color: ${e((a) => a.text.disabled)};
}

/* ${d.description} */
${I(d.className)}

.${d.className} {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.${n.className} .${d.className} {
  transform: rotate(180deg);
}

/* ${g.description} */
${R(g.className)}

.${g.className} {
  flex-shrink: 0;
}

/* ${v.description} */
.${v.className} {
  box-sizing: border-box;
  min-width: 100%;
  max-height: 300px;
  overflow: hidden;
  background-color: ${e((a) => a.bg.normal)};
  border: 1px solid ${e((a) => a.border.secondary)};
  border-radius: ${s.borderRadius.medium};
  box-shadow: ${s.boxShadows.light.medium};
  display: flex;
  flex-direction: column;
}

/* ${f.description} */
.${f.className} {
  box-sizing: border-box;
  width: 100%;
  padding: ${s.spacings[2]} ${s.spacings[3]};
  border: none;
  border-bottom: 1px solid ${e((a) => a.border.secondary)};
  background: transparent;
  color: ${e((a) => a.text.primary)};
  font-family: inherit;
  font-size: 14px;
  outline: none;
}

.${f.className}::placeholder {
  color: ${e((a) => a.text.disabled)};
}

/* ${k.description} */
.${k.className} {
  flex: 1;
  overflow-y: auto;
  padding: ${s.spacings[1]} 0;
}

/* ${N.description} */
.${N.className} {
  display: flex;
  align-items: center;
  padding: ${s.spacings[2]} ${s.spacings[3]};
  cursor: pointer;
  color: ${e((a) => a.text.primary)};
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.${N.className}:hover:not(.${S.className}) {
  background-color: ${e((a) => a.bg.active)};
}

/* ${x.description} */
.${x.className} {
  background-color: ${e((a) => a.palette.light)};
  color: ${e((a) => a.palette.main)};
  font-weight: ${s.fontWeights.medium};
}

.${x.className}:hover {
  background-color: ${e((a) => a.palette.light)};
}

/* ${S.description} */
.${S.className} {
  opacity: ${s.opacities.disabled};
  cursor: not-allowed;
}

/* ${z.description} */
.${z.className} {
  padding: ${s.spacings[1]} 0;
}

.${z.className}:not(:first-child) {
  border-top: 1px solid ${e((a) => a.border.secondary)};
  margin-top: ${s.spacings[1]};
  padding-top: ${s.spacings[2]};
}

/* ${y.description} */
.${y.className} {
  padding: ${s.spacings[1]} ${s.spacings[3]};
  font-size: ${s.fontSizes.small};
  font-weight: ${s.fontWeights.medium};
  color: ${e((a) => a.text.secondary)};
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
  `.trim();
}
function O() {
  return `
/* ${c.description} */
.${c.className} {
  opacity: ${s.opacities.disabled};
  pointer-events: none;
}

.${c.className} .${r.className} {
  cursor: not-allowed;
}

/* ${n.description} */
.${n.className} .${r.className} {
  border-color: ${e((a) => a.palette.main)};
  box-shadow: 0 0 0 2px ${e((a) => a.palette.light)};
}

/* ${i.description} */
.${i.className} .${r.className} {
  border-color: ${e((a) => a.semantic.error.main)};
}

.${i.className}:not(.${c.className}):not(.${n.className}):hover .${r.className} {
  border-color: ${e((a) => a.semantic.error.dark)};
}

.${i.className}.${n.className} .${r.className} {
  border-color: ${e((a) => a.semantic.error.main)};
  box-shadow: 0 0 0 3px color-mix(in srgb, ${e((a) => a.semantic.error.main)} 20%, transparent);
}

.${i.className} .${p.className} {
  color: ${e((a) => a.semantic.error.main)};
}
  `.trim();
}
function D() {
  return `
/* ${b.description} */
.${b.className} .${r.className} {
  background-color: transparent;
  border: 1px solid ${e((a) => a.border.secondary)};
}

.${b.className}:not(.${c.className}):not(.${n.className}):not(.${i.className}):hover .${r.className} {
  border-color: ${e((a) => a.border.primary)};
}

.${b.className}.${i.className}:not(.${n.className}) .${r.className} {
  border-color: ${e((a) => a.semantic.error.main)};
  background-color: color-mix(in srgb, ${e((a) => a.semantic.error.main)} 4%, transparent);
}

.${b.className}.${i.className}:not(.${c.className}):not(.${n.className}):hover .${r.className} {
  border-color: ${e((a) => a.semantic.error.dark)};
  background-color: color-mix(in srgb, ${e((a) => a.semantic.error.main)} 6%, transparent);
}

/* ${l.description} */
.${l.className} .${r.className} {
  background-color: ${e((a) => a.bg.active)};
  border: 1px solid transparent;
}

.${l.className}:not(.${c.className}):not(.${n.className}):not(.${i.className}):hover .${r.className} {
  background-color: ${e((a) => a.bg.active)};
}

.${l.className}.${n.className}:not(.${i.className}) .${r.className} {
  background-color: transparent;
  border-color: ${e((a) => a.palette.main)};
}

.${l.className}.${i.className} .${r.className} {
  background-color: color-mix(in srgb, ${e((a) => a.semantic.error.main)} 8%, transparent);
  border-color: transparent;
}

.${l.className}.${i.className}:not(.${c.className}):not(.${n.className}):hover .${r.className} {
  background-color: color-mix(in srgb, ${e((a) => a.semantic.error.main)} 12%, transparent);
}

.${l.className}.${i.className}.${n.className} .${r.className} {
  background-color: transparent;
  border-color: ${e((a) => a.semantic.error.main)};
}
  `.trim();
}
function M() {
  return `
/* ${t.description} */
.${t.className} .${r.className} {
  height: ${o.small.height};
  padding: ${o.small.padding};
  gap: ${o.small.gap};
  border-radius: ${o.small.borderRadius};
}

.${t.className} .${p.className},
.${t.className} .${u.className} {
  font-size: ${o.small.fontSize};
}

.${t.className} .${d.className},
.${t.className} .${g.className} {
  font-size: ${h.small.fontSize};
  width: 16px;
  height: 16px;
}

.${t.className} .${N.className} {
  padding: ${s.spacings[1]} ${s.spacings[2]};
  font-size: ${o.small.fontSize};
}

/* ${$.description} */
.${$.className} .${r.className} {
  height: ${o.medium.height};
  padding: ${o.medium.padding};
  gap: ${o.medium.gap};
  border-radius: ${o.medium.borderRadius};
}

.${$.className} .${p.className},
.${$.className} .${u.className} {
  font-size: ${o.medium.fontSize};
}

.${$.className} .${d.className},
.${$.className} .${g.className} {
  font-size: ${h.medium.fontSize};
  width: 20px;
  height: 20px;
}

.${$.className} .${N.className} {
  padding: ${s.spacings[2]} ${s.spacings[3]};
  font-size: ${o.medium.fontSize};
}

/* ${m.description} */
.${m.className} .${r.className} {
  height: ${o.large.height};
  padding: ${o.large.padding};
  gap: ${o.large.gap};
  border-radius: ${o.large.borderRadius};
}

.${m.className} .${p.className},
.${m.className} .${u.className} {
  font-size: ${o.large.fontSize};
}

.${m.className} .${d.className},
.${m.className} .${g.className} {
  font-size: ${h.large.fontSize};
  width: 24px;
  height: 24px;
}

.${m.className} .${N.className} {
  padding: ${s.spacings[2]} ${s.spacings[4]};
  font-size: ${o.large.fontSize};
}
  `.trim();
}
function V() {
  return [L(), O(), D(), M()].join(`

`);
}
export {
  V as generateFormFieldSelectCSS
};
