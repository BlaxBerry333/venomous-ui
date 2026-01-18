import s from "react";
function f({
  value: l,
  defaultValue: u,
  onChange: t
}) {
  const [c, o] = s.useState(u), e = l !== void 0, a = e ? l : c, i = s.useCallback(
    (r) => {
      e || o(r), t == null || t(r);
    },
    [e, t]
  );
  return { currentValue: a, isControlled: e, setValue: i };
}
export {
  f as default
};
