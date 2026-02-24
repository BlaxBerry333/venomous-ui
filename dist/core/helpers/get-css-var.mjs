function u(t, e = 0) {
  if (typeof document > "u") return e;
  const n = t.startsWith("--") ? t : `--${t}`, o = getComputedStyle(document.documentElement).getPropertyValue(n).trim(), r = parseInt(o, 10);
  return Number.isNaN(r) ? e : r;
}
export {
  u as getCssVar
};
