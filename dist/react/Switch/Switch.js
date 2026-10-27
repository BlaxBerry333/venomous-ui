"use client";
import { mergeClassName } from "../internal/style/classnames.js";
import { useFormFieldControl } from "../FormField/FormField.js";
import { forwardRef } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import "venomous-ui/styles/components/Switch.css";
//#region packages/react/Switch/Switch.tsx
var BLOCK = "venomous--Switch";
/**
* Switch — 开关。原生 checkbox 加 role="switch"，读屏器读作"开 / 关"；
* 外观由相邻的 __track / __thumb 绘制。在 FormField 内时自动关联说明与错误信息。
*/
var Switch = forwardRef(function Switch({ size = "md", className, style, children, ...props }, ref) {
	const rest = useFormFieldControl(props);
	return /* @__PURE__ */ jsxs("label", {
		className: mergeClassName(BLOCK, `${BLOCK}--size-${size}`, className),
		style,
		"data-disabled": rest.disabled || void 0,
		children: [
			/* @__PURE__ */ jsx("input", {
				...rest,
				ref,
				type: "checkbox",
				role: "switch",
				className: `${BLOCK}__input`
			}),
			/* @__PURE__ */ jsx("span", {
				className: `${BLOCK}__track`,
				"aria-hidden": "true",
				children: /* @__PURE__ */ jsx("span", { className: `${BLOCK}__thumb` })
			}),
			children !== void 0 && /* @__PURE__ */ jsx("span", {
				className: `${BLOCK}__label`,
				children
			})
		]
	});
});
//#endregion
export { Switch };

//# sourceMappingURL=Switch.js.map