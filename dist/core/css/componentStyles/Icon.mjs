import { ICON_CSS_CLASS_NAMES as l } from "../../constants/cssClassNames.mjs";
import { getCssVar as n } from "../variables/getCssVar.mjs";
import { DESIGN_TOKENS as m } from "../../designs/index.mjs";
const { base: o, colorInherit: e, colorPrimary: i, colorSuccess: c, colorError: s, colorWarning: t, colorInfo: a } = l;
function $() {
  return `
/* ${o.description} */
.${o.className} {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: inherit;
  transition: ${m.transitions.fast};
}
  `.trim();
}
function S() {
  return `
/* ${e.description} */
.${e.className} {
  color: inherit;
}

/* ${i.description} */
.${i.className} {
  color: ${n((r) => r.palette.main)};
}

/* ${c.description} */
.${c.className} {
  color: ${n((r) => r.semantic.success.main)};
}

/* ${s.description} */
.${s.className} {
  color: ${n((r) => r.semantic.error.main)};
}

/* ${t.description} */
.${t.className} {
  color: ${n((r) => r.semantic.warning.main)};
}

/* ${a.description} */
.${a.className} {
  color: ${n((r) => r.semantic.info.main)};
}
  `.trim();
}
function u() {
  return [$(), S()].join(`

`);
}
export {
  u as generateIconBaseCSS,
  u as generateIconCSS
};
