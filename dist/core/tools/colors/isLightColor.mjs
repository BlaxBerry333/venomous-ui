function u(e, o = 0.5) {
  const n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
  if (!n) return !0;
  const s = parseInt(n[1], 16) / 255, a = parseInt(n[2], 16) / 255, c = parseInt(n[3], 16) / 255, t = (r) => r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);
  return 0.2126 * t(s) + 0.7152 * t(a) + 0.0722 * t(c) > o;
}
export {
  u as isLightColor
};
