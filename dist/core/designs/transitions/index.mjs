const o = "cubic-bezier(0.4, 0, 0.2, 1)", s = {
  fast: `all 100ms ${o}`,
  normal: `all 200ms ${o}`,
  slow: `all 300ms ${o}`,
  colors: `background-color 150ms ${o}, border-color 150ms ${o}, color 150ms ${o}`,
  colorsAndShadow: `background-color 150ms ${o}, border-color 150ms ${o}, color 150ms ${o}, box-shadow 150ms ${o}`,
  transform: `transform 150ms ${o}`,
  transformFast: `transform 100ms ${o}`,
  opacity: `opacity 150ms ${o}`,
  progress: `300ms ${o}`
};
export {
  s as TRANSITIONS,
  o as TRANSITION_EASING
};
