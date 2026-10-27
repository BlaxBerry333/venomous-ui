import { mergeClassName } from "../internal/style/classnames.js";
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
import "venomous-ui/styles/components/Badge.css";
//#region packages/react/Badge/Badge.tsx
var BLOCK = "venomous--Badge";
/**
* Badge — 状态 / 计数标签。纯展示组件，无 hooks。
* 颜色本身不传达信息给读屏器，文字里要写清状态（如 "Failed" 而不是只用红色）。
*/
var Badge = forwardRef(function Badge({ variant = "neutral", className, ...rest }, ref) {
	return /* @__PURE__ */ jsx("span", {
		...rest,
		ref,
		className: mergeClassName(BLOCK, `${BLOCK}--${variant}`, className)
	});
});
//#endregion
export { Badge };

//# sourceMappingURL=Badge.js.map