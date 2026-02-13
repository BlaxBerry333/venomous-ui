import { createContext as e, useContext as n } from "react";
const o = e(null);
function r() {
  const t = n(o);
  if (!t)
    throw new Error("Select.Option must be used within a Select component with children");
  return t;
}
export {
  o as SelectContext,
  r as useSelectContext
};
