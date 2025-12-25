function g(r) {
  const n = {
    top: "bottom",
    bottom: "top",
    left: "right",
    right: "left"
  }, [i, t] = r.split("-"), o = n[i] || i;
  return t ? `${o}-${t}` : o;
}
function u(r, n, i, t) {
  const { x: o, y: e, width: p, height: c } = r, { width: s, height: l } = n, h = o + p / 2, a = e + c / 2;
  return {
    // Top placements
    top: { x: h - s / 2, y: e - l - t },
    "top-start": { x: o, y: e - l - t },
    "top-end": { x: o + p - s, y: e - l - t },
    // Bottom placements
    bottom: { x: h - s / 2, y: e + c + t },
    "bottom-start": { x: o, y: e + c + t },
    "bottom-end": { x: o + p - s, y: e + c + t },
    // Left placements
    left: { x: o - s - t, y: a - l / 2 },
    "left-start": { x: o - s - t, y: e },
    "left-end": { x: o - s - t, y: e + c - l },
    // Right placements
    right: { x: o + p + t, y: a - l / 2 },
    "right-start": { x: o + p + t, y: e },
    "right-end": { x: o + p + t, y: e + c - l }
  }[i];
}
function d(r, n, i, t = 8) {
  const { x: o, y: e } = r, { width: p, height: c } = n, s = typeof window < "u" ? window.innerWidth : 0, l = typeof window < "u" ? window.innerHeight : 0;
  switch (i.split("-")[0]) {
    case "top":
      return e < t;
    case "bottom":
      return e + c > l - t;
    case "left":
      return o < t;
    case "right":
      return o + p > s - t;
    default:
      return !1;
  }
}
function y(r) {
  const { triggerRect: n, floatingRect: i, placement: t, offset: o = 8 } = r, e = u(n, i, t, o);
  if (!d(e, i, t))
    return {
      position: e,
      actualPlacement: t
    };
  const c = g(t), s = u(n, i, c, o);
  return d(s, i, c) ? {
    position: e,
    actualPlacement: t
  } : {
    position: s,
    actualPlacement: c
  };
}
function x(r) {
  const n = r.split("-")[0];
  return {
    top: "bottom",
    bottom: "top",
    left: "right",
    right: "left"
  }[n];
}
function m(r) {
  const n = r.getBoundingClientRect();
  return {
    x: n.left,
    y: n.top,
    width: n.width,
    height: n.height
  };
}
export {
  y as calculateFloatingPosition,
  x as getArrowDirection,
  m as getElementRect
};
