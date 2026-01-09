import "../../constants/cssClassNames.mjs";
import { CSS_VARIABLE_NAMES as r } from "../../constants/cssVariableNames.mjs";
import { DESIGN_TOKENS as i } from "../../designs/index.mjs";
function d() {
  return `
body {
  background-color: var(${r.bg.body});
  color: var(${r.text.primary});
  transition: ${i.transitions.normal};
}
  `.trim();
}
function c(a) {
  return `
:root {
  /* Semantic colors - Success */
  ${r.semantic.success.light}: ${a.success.light};
  ${r.semantic.success.main}: ${a.success.main};
  ${r.semantic.success.dark}: ${a.success.dark};

  /* Semantic colors - Warning */
  ${r.semantic.warning.light}: ${a.warning.light};
  ${r.semantic.warning.main}: ${a.warning.main};
  ${r.semantic.warning.dark}: ${a.warning.dark};

  /* Semantic colors - Error */
  ${r.semantic.error.light}: ${a.error.light};
  ${r.semantic.error.main}: ${a.error.main};
  ${r.semantic.error.dark}: ${a.error.dark};

  /* Semantic colors - Info */
  ${r.semantic.info.light}: ${a.info.light};
  ${r.semantic.info.main}: ${a.info.main};
  ${r.semantic.info.dark}: ${a.info.dark};
}
  `.trim();
}
function s(a, n) {
  const e = i.backgroundColors[a], o = i.fontColors[a], t = i.borderColors[a], $ = i.boxShadows[a];
  return `
[data-theme="${a}"] {
  /* Background colors */
  ${r.bg.body}: ${e.body};
  ${r.bg.normal}: ${e.normal};
  ${r.bg.float}: ${e.float};
  ${r.bg.active}: ${e.active};
  ${r.bg.disabled}: ${e.disabled};

  /* Text colors */
  ${r.text.primary}: ${o.primary};
  ${r.text.secondary}: ${o.secondary};
  ${r.text.tertiary}: ${o.tertiary};
  ${r.text.disabled}: ${o.disabled};

  /* Border colors */
  ${r.border.primary}: ${t.primary};
  ${r.border.secondary}: ${t.secondary};
  ${r.border.tertiary}: ${t.tertiary};
  ${r.border.disabled}: ${t.disabled};

  /* Box Shadows */
  ${r.shadow.none}: ${$.none};
  ${r.shadow.small}: ${$.small};
  ${r.shadow.medium}: ${$.medium};
  ${r.shadow.large}: ${$.large};

  /* Palette (user-configurable theme color) */
  ${r.palette.light}: ${n.light};
  ${r.palette.main}: ${n.main};
  ${r.palette.dark}: ${n.dark};
}
  `.trim();
}
function b({
  paletteColors: a,
  semanticColors: n
}) {
  return [
    d(),
    c(n),
    s("light", a),
    s("dark", a)
  ].join(`

`);
}
export {
  b as generateThemeProviderCSS
};
