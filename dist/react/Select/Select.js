"use client";
import { mergeClassName } from "../internal/style/classnames.js";
import { useFormFieldControl } from "../FormField/FormField.js";
import { forwardRef } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import "venomous-ui/styles/components/Select.css";
//#region packages/react/Select/Select.tsx
var BLOCK = "venomous--Select";
/**
* Select — 原生 `<select>` 加样式。下拉列表由浏览器 / 系统绘制，键盘、读屏、移动端体验都是原生的。
* 在 FormField 内自动关联 label / 说明 / 错误信息。
*/
var Select = forwardRef(function Select({ size = "md", placeholder, className, style, children, ...props }, ref) {
	const rest = useFormFieldControl(props);
	const showPlaceholderByDefault = placeholder !== void 0 && rest.value === void 0 && rest.defaultValue === void 0;
	return /* @__PURE__ */ jsxs("span", {
		className: mergeClassName(BLOCK, `${BLOCK}--size-${size}`, className),
		style,
		"data-disabled": rest.disabled || void 0,
		children: [/* @__PURE__ */ jsxs("select", {
			...showPlaceholderByDefault ? { defaultValue: "" } : {},
			...rest,
			ref,
			className: `${BLOCK}__field`,
			children: [placeholder !== void 0 && /* @__PURE__ */ jsx("option", {
				value: "",
				disabled: true,
				hidden: true,
				children: placeholder
			}), children]
		}), /* @__PURE__ */ jsx("span", {
			className: `${BLOCK}__icon`,
			"aria-hidden": "true"
		})]
	});
});
//#endregion
export { Select };

//# sourceMappingURL=Select.js.map