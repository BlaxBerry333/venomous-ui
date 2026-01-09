import { TYPOGRAPHY_TITLE_CSS_CLASS_NAMES as $ } from "../../constants/cssClassNames.mjs";
import { getCssVar as f } from "../variables/getCssVar.mjs";
import { DESIGN_TOKENS as e } from "../../designs/index.mjs";
const { base: t, levelH1: i, levelH2: s, levelH3: n, levelH4: o, levelH5: l, levelH6: r } = $;
function m() {
  return `
/* ${t.description} */
.${t.className} {
  margin: 0;
  padding: 0;
  font-weight: ${e.fontWeights.bold};
  line-height: ${e.lineHeights.small};
  color: ${f((a) => a.text.primary)};
}
  `.trim();
}
function c() {
  return `
/* ${i.description} */
.${i.className} {
  font-size: ${e.fontSizes.title1};
}

/* ${s.description} */
.${s.className} {
  font-size: ${e.fontSizes.title2};
}

/* ${n.description} */
.${n.className} {
  font-size: ${e.fontSizes.subTitle1};
}

/* ${o.description} */
.${o.className} {
  font-size: ${e.fontSizes.subTitle2};
}

/* ${l.description} */
.${l.className} {
  font-size: ${e.fontSizes.large};
}

/* ${r.description} */
.${r.className} {
  font-size: ${e.fontSizes.medium};
}
  `.trim();
}
function z() {
  return [m(), c()].join(`

`);
}
export {
  z as generateTypographyTitleCSS
};
