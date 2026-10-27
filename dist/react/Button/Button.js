"use client";
import { mergeClassName } from "../internal/style/classnames.js";
import { forwardRef } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import "venomous-ui/styles/components/Button.css";
//#region packages/react/Button/Button.tsx
var BLOCK = "venomous--Button";
function hasContent(node) {
	return node !== void 0 && node !== null && typeof node !== "boolean" && node !== "";
}
/**
* Button — 基础按钮。
*
* 设计要点：
* - 'use client'：内部给 <button> 挂了 onClick（loading 时拦截点击），服务端组件不能直接渲染带事件处理的元素。
* - state 用 `data-venomous-loading`（运行时变化）；variant / size 用 className（永久属性）。
* - 样式自动副作用：import 'Button.scss'，用户无需手动 import 组件 CSS。
* - 默认 type='button' —— 避免在 <form> 内意外提交。
* - loading 不用原生 disabled（切换瞬间会丢焦点），改用 aria-disabled + 在 click 上 preventDefault。
*   键盘 Enter / Space 与表单隐式提交最终都派发 click，拦 click 一处即可，同时阻止 submit。
*/
var Button = forwardRef(function Button({ variant = "primary", size = "md", loading = false, disabled, startIcon, endIcon, children, className, type = "button", onClick, ...rest }, ref) {
	const classes = mergeClassName(BLOCK, `${BLOCK}--${variant}`, `${BLOCK}--size-${size}`, className);
	const handleClick = (event) => {
		if (loading) {
			event.preventDefault();
			return;
		}
		onClick?.(event);
	};
	return /* @__PURE__ */ jsxs("button", {
		ref,
		type,
		className: classes,
		disabled,
		"aria-disabled": loading || void 0,
		"aria-busy": loading || void 0,
		"data-venomous-loading": loading ? "true" : void 0,
		...rest,
		onClick: handleClick,
		children: [
			loading ? /* @__PURE__ */ jsx("span", {
				className: `${BLOCK}__spinner`,
				"aria-hidden": "true"
			}) : hasContent(startIcon) && /* @__PURE__ */ jsx("span", {
				className: `${BLOCK}__icon`,
				children: startIcon
			}),
			hasContent(children) && /* @__PURE__ */ jsx("span", {
				className: `${BLOCK}__label`,
				children
			}),
			!loading && hasContent(endIcon) && /* @__PURE__ */ jsx("span", {
				className: `${BLOCK}__icon`,
				children: endIcon
			})
		]
	});
});
//#endregion
export { Button };

//# sourceMappingURL=Button.js.map