import { DESIGN_TOKENS as a } from "../designs/index.mjs";
function p({
  mode: h = "light",
  paletteColors: b = a.palettesColorsResets.MAMBA,
  semanticColors: u = a.semanticColors,
  ...t
}) {
  return {
    /**
     * Current theme mode info
     */
    mode: {
      current: h,
      isDark: h === "dark",
      isLight: h === "light"
    },
    /**
     * Main palette colors
     */
    paletteColors: b,
    /**
     * Semantic colors
     */
    semanticColors: u,
    /**
     * Breakpoint
     */
    breakpoint: (n = "xs") => ({ ...a.breakpoints, ...t == null ? void 0 : t.breakpoints })[n],
    /**
     * Background color
     */
    backgroundColor: (n = "body") => {
      var o, c;
      const l = { ...a.backgroundColors.light, ...(o = t == null ? void 0 : t.backgroundColors) == null ? void 0 : o.light }, g = { ...a.backgroundColors.dark, ...(c = t == null ? void 0 : t.backgroundColors) == null ? void 0 : c.dark };
      return (h === "dark" ? g : l)[n];
    },
    /**
     * Border color
     */
    borderColor: (n = "primary") => {
      var o, c;
      const l = { ...a.borderColors.light, ...(o = t == null ? void 0 : t.borderColors) == null ? void 0 : o.light }, g = { ...a.borderColors.dark, ...(c = t == null ? void 0 : t.borderColors) == null ? void 0 : c.dark };
      return (h === "dark" ? g : l)[n];
    },
    /**
     * Border radius
     */
    borderRadius: (n = "medium") => ({ ...a.borderRadius, ...t == null ? void 0 : t.borderRadius })[n],
    /**
     * Font color
     */
    fontColor: (n = "primary") => {
      var o, c;
      const l = { ...a.fontColors.light, ...(o = t == null ? void 0 : t.fontColors) == null ? void 0 : o.light }, g = { ...a.fontColors.dark, ...(c = t == null ? void 0 : t.fontColors) == null ? void 0 : c.dark };
      return (h === "dark" ? g : l)[n];
    },
    /**
     * Font size
     */
    fontSize: (n = "medium") => ({ ...a.fontSizes, ...t == null ? void 0 : t.fontSizes })[n],
    /**
     * Font weight
     */
    fontWeight: (n = "medium") => ({ ...a.fontWeights, ...t == null ? void 0 : t.fontWeights })[n],
    /**
     * Line height
     */
    lineHeight: (n = "medium") => ({ ...a.lineHeights, ...t == null ? void 0 : t.lineWeights })[n],
    /**
     * Box shadow
     */
    boxShadow: (n = "small") => {
      var o, c;
      const l = { ...a.boxShadows.light, ...(o = t == null ? void 0 : t.boxShadows) == null ? void 0 : o.light }, g = { ...a.boxShadows.dark, ...(c = t == null ? void 0 : t.boxShadows) == null ? void 0 : c.dark };
      return (h === "dark" ? g : l)[n];
    },
    /**
     * Spacing
     */
    spacing: (n = 0) => ({ ...a.spacings, ...t == null ? void 0 : t.spacings })[n],
    /**
     * Stroke width
     */
    strokeWidth: (n = "small") => ({ ...a.strokeWidths, ...t == null ? void 0 : t.strokeWidths })[n],
    /**
     * Opacity
     */
    opacity: (n = "medium") => ({ ...a.opacities, ...t == null ? void 0 : t.opacities })[n],
    /**
     * Transition
     */
    transition: (n = "normal") => {
      const l = { ...a.transitions, ...t == null ? void 0 : t.transitions };
      return l[n] ?? l.normal;
    },
    /**
     * Z-index
     */
    zIndex: (n = "small") => ({ ...a.zIndexs, ...t == null ? void 0 : t.zIndexs })[n]
  };
}
export {
  p as createTheme
};
