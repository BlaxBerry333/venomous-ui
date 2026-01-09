function l(u) {
  const o = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(u);
  if (!o) return null;
  const a = parseInt(o[1], 16) / 255, t = parseInt(o[2], 16) / 255, n = parseInt(o[3], 16) / 255, s = Math.max(a, t, n), r = Math.min(a, t, n), h = (s + r) / 2;
  if (s === r)
    return { h: 0, s: 0, l: Math.round(h * 100) };
  const e = s - r, d = h > 0.5 ? e / (2 - s - r) : e / (s + r);
  let c = 0;
  switch (s) {
    case a:
      c = ((t - n) / e + (t < n ? 6 : 0)) / 6;
      break;
    case t:
      c = ((n - a) / e + 2) / 6;
      break;
    case n:
      c = ((a - t) / e + 4) / 6;
      break;
  }
  return {
    h: Math.round(c * 360),
    s: Math.round(d * 100),
    l: Math.round(h * 100)
  };
}
export {
  l as hexToHsl
};
