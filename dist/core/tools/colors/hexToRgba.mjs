function o(n, r = 1) {
  const t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n);
  if (!t) return n;
  const e = parseInt(t[1], 16), a = parseInt(t[2], 16), s = parseInt(t[3], 16);
  return `rgba(${e}, ${a}, ${s}, ${r})`;
}
export {
  o as hexToRgba
};
