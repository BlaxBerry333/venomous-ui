import { SPACE_GRID_CSS_CLASS_NAMES as i } from "../../constants/cssClassNames.mjs";
import { DESIGN_TOKENS as p } from "../../designs/index.mjs";
function f() {
  const r = i.base.className, s = Object.entries(p.spacings).map(([e, n]) => {
    const t = i[`spacing${e}`];
    return t ? `.${t.className} { gap: ${n}; }` : "";
  }).filter(Boolean).join(`
`), a = Array.from({ length: 12 }, (e, n) => n + 1).map((e) => {
    const n = i[`columns${e}`];
    return n ? `.${n.className} { grid-template-columns: repeat(${e}, 1fr); }` : "";
  }).filter(Boolean).join(`
`);
  return `
/* ${i.base.description} */
.${r} {
  box-sizing: border-box;
  display: grid;
  min-width: 0;
}

/* Spacing classes */
${s}

/* Columns classes */
${a}
  `.trim();
}
function g(r, s) {
  const e = ["xs", "sm", "md", "lg", "xl"].filter((o) => s[o] !== void 0);
  if (e.length === 0) return "";
  const [n, ...t] = e, l = s[n], c = [
    // Base style (smallest defined breakpoint, no media query)
    `.${r} { grid-template-columns: repeat(${l}, 1fr); }`
  ];
  for (const o of t) {
    const m = s[o];
    c.push(
      `@media (min-width: ${p.breakpoints[o].min}) { .${r} { grid-template-columns: repeat(${m}, 1fr); } }`
    );
  }
  return c.join(`
`);
}
export {
  g as generateResponsiveGridCSS,
  f as generateSpaceGridCSS
};
