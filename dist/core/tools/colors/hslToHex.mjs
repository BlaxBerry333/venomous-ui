function g(t, f, a) {
  const x = f / 100, i = a / 100, e = (1 - Math.abs(2 * i - 1)) * x, r = e * (1 - Math.abs(t / 60 % 2 - 1)), u = i - e / 2;
  let s = 0, o = 0, n = 0;
  t >= 0 && t < 60 ? (s = e, o = r, n = 0) : t >= 60 && t < 120 ? (s = r, o = e, n = 0) : t >= 120 && t < 180 ? (s = 0, o = e, n = r) : t >= 180 && t < 240 ? (s = 0, o = r, n = e) : t >= 240 && t < 300 ? (s = r, o = 0, n = e) : t >= 300 && t < 360 && (s = e, o = 0, n = r);
  const c = (b) => {
    const l = Math.round((b + u) * 255).toString(16);
    return l.length === 1 ? "0" + l : l;
  };
  return `#${c(s)}${c(o)}${c(n)}`;
}
export {
  g as hslToHex
};
