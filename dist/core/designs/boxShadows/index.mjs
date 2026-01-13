const p = {
  light: {
    /** No shadow */
    none: "none",
    /** Subtle elevation */
    small: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    /** Medium elevation */
    medium: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    /** High elevation */
    large: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)"
  },
  dark: {
    none: "none",
    small: "0 1px 2px 0 rgb(0 0 0 / 0.3)",
    medium: "0 4px 6px -1px rgb(0 0 0 / 0.4), 0 2px 4px -2px rgb(0 0 0 / 0.3)",
    large: "0 10px 15px -3px rgb(0 0 0 / 0.5), 0 4px 6px -4px rgb(0 0 0 / 0.4)"
  }
};
export {
  p as BOX_SHADOWS
};
