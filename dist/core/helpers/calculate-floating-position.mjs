function h(n, c, f, t) {
  const { top: e, left: o, width: r, height: l } = n;
  switch (f) {
    case "top":
      return {
        top: e - c.height - t,
        left: o + r / 2
      };
    case "bottom":
      return {
        top: e + l + t,
        left: o + r / 2
      };
    case "left":
      return {
        top: e + l / 2,
        left: o - c.width - t
      };
    case "right":
      return {
        top: e + l / 2,
        left: o + r + t
      };
    /* v8 ignore next -- @preserve TypeScript ensures valid placement */
    default:
      return {
        top: 0,
        left: 0
      };
  }
}
export {
  h as calculateFloatingPosition
};
