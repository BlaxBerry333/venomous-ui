function n(t, e = 0) {
  const r = t.startsWith("--") ? t : `--${t}`, o = getComputedStyle(document.documentElement).getPropertyValue(r).trim();
  return parseInt(o, 10) || e;
}
export {
  n as getCssVar
};
