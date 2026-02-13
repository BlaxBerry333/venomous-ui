function i(e, r = 2) {
  const t = e.trim().split(/\s+/);
  return t.length === 0 || t[0] === "" ? "" : r <= 1 ? t[0][0].toUpperCase() : r === 2 ? t.length === 1 ? t[0][0].toUpperCase() : (t[0][0] + t[t.length - 1][0]).toUpperCase() : t.slice(0, r).map((p) => p[0]).join("").toUpperCase();
}
export {
  i as getAvatarInitials
};
