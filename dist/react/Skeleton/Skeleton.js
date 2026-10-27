import { mergeClassName } from "../internal/style/classnames.js";
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
import "venomous-ui/styles/components/Skeleton.css";
//#region packages/react/Skeleton/Skeleton.tsx
var BLOCK = "venomous--Skeleton";
var toCss = (value) => typeof value === "number" ? `${value}px` : value;
/**
* Skeleton — 加载占位。对读屏器隐藏；加载状态应由外层容器用 aria-busy 或文字说明表达。
* 用户设置减少动态效果时不播放动画。
*/
var Skeleton = forwardRef(function Skeleton({ shape = "text", width, height, className, style, ...rest }, ref) {
	return /* @__PURE__ */ jsx("span", {
		"aria-hidden": "true",
		...rest,
		ref,
		className: mergeClassName(BLOCK, `${BLOCK}--${shape}`, className),
		style: {
			width: toCss(width),
			height: toCss(height),
			...style
		}
	});
});
//#endregion
export { Skeleton };

//# sourceMappingURL=Skeleton.js.map