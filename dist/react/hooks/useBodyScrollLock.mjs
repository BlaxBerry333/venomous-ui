import { useEffect as t } from "react";
function f(o) {
  t(() => {
    if (o) {
      const e = document.body.style.overflow;
      return document.body.style.overflow = "hidden", () => {
        document.body.style.overflow = e;
      };
    }
  }, [o]);
}
export {
  f as useBodyScrollLock
};
