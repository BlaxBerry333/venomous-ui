import s from "react";
function m({
  onFocus: e,
  onBlur: t
} = {}) {
  const [d, c] = s.useState(!1), l = s.useCallback(
    (a) => {
      c(!0), e == null || e(a);
    },
    [e]
  ), f = s.useCallback(
    (a) => {
      c(!1), t == null || t(a);
    },
    [t]
  );
  return { isFocused: d, handleFocus: l, handleBlur: f };
}
export {
  m as default
};
