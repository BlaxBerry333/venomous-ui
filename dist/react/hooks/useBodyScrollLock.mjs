import { useEffect as f } from "react";
let o = 0, t = "";
function r(e) {
  f(() => {
    if (e)
      return o === 0 && (t = document.body.style.overflow), o++, document.body.style.overflow = "hidden", () => {
        o--, o === 0 && (document.body.style.overflow = t);
      };
  }, [e]);
}
export {
  r as useBodyScrollLock
};
