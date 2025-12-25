import { jsx as e } from "react/jsx-runtime";
import s from "react";
import M from "clsx";
import { COMPONENT_NAMES as f } from "../../../core/constants/componentNames.mjs";
import { AVATAR_CSS_CLASS_NAMES as a } from "../../../core/constants/cssClassNames.mjs";
import b from "../Icon/Icon.mjs";
import E from "../../hooks/useComputedStyle/index.mjs";
import V from "../../hooks/useStyleInjection/index.mjs";
import "../ThemeProvider/ThemeContext.mjs";
import "../ThemeProvider/ThemeProvider.mjs";
import { generateAvatarCSS as j } from "../../../core/css/componentStyles/Avatar.mjs";
const q = s.memo(
  s.forwardRef(
    ({
      size: m = "medium",
      variant: t = "circular",
      imageSrc: l,
      alt: i,
      fallbackText: c,
      fallbackIcon: n,
      ImageProps: p,
      onImageLoadError: r,
      className: d,
      style: S,
      children: o,
      ...A
    }, C) => {
      const [v, u] = s.useState(!1), h = j();
      V(f.Avatar, h);
      const y = E(S), R = s.useCallback(
        (g) => {
          u(!0), r == null || r(g);
        },
        [r]
      );
      s.useEffect(() => {
        u(!1);
      }, [l]);
      const N = l && !v, _ = M(
        a.base.className,
        m === "small" && a.sizeSmall.className,
        m === "medium" && a.sizeMedium.className,
        m === "large" && a.sizeLarge.className,
        t === "circular" && a.variantCircular.className,
        t === "rounded" && a.variantRounded.className,
        t === "square" && a.variantSquare.className,
        N && a.hasImage.className,
        d
      );
      return /* @__PURE__ */ e(
        "div",
        {
          ref: C,
          className: _,
          style: y,
          role: "img",
          "aria-label": i || c || "avatar",
          ...A,
          children: o || (N ? /* @__PURE__ */ e(
            "img",
            {
              src: l,
              alt: i,
              className: a.image.className,
              onError: R,
              ...p
            }
          ) : c ? /* @__PURE__ */ e("span", { className: a.fallback.className, children: c }) : n ? /* @__PURE__ */ e("span", { className: a.fallback.className, children: n }) : /* @__PURE__ */ e("span", { className: a.fallback.className, children: /* @__PURE__ */ e(b, { name: "mdi:account" }) }))
        }
      );
    }
  )
);
q.displayName = f.Avatar;
export {
  q as default
};
