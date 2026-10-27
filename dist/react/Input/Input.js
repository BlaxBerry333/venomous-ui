"use client";
import { mergeClassName } from "../internal/style/classnames.js";
import { useFormFieldControl } from "../FormField/FormField.js";
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
import "venomous-ui/styles/components/Input.css";
//#region packages/react/Input/Input.tsx
var BLOCK = "venomous--Input";
/**
* Input — 单行文本输入。在 FormField 内自动关联 label / 说明 / 错误信息。
* 错误态用 aria-invalid 表达，样式也挂在它上面。
*/
var Input = forwardRef(function Input({ size = "md", className, ...props }, ref) {
	return /* @__PURE__ */ jsx("input", {
		...useFormFieldControl(props),
		ref,
		className: mergeClassName(BLOCK, `${BLOCK}--size-${size}`, className)
	});
});
//#endregion
export { Input };

//# sourceMappingURL=Input.js.map