"use client";
import { mergeClassName } from "../internal/style/classnames.js";
import { useFormFieldControl } from "../FormField/FormField.js";
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
import "venomous-ui/styles/components/Textarea.css";
//#region packages/react/Textarea/Textarea.tsx
var BLOCK = "venomous--Textarea";
/** Textarea — 多行文本输入。在 FormField 内自动关联 label / 说明 / 错误信息。 */
var Textarea = forwardRef(function Textarea({ resize = "vertical", rows = 3, className, ...props }, ref) {
	return /* @__PURE__ */ jsx("textarea", {
		...useFormFieldControl(props),
		ref,
		rows,
		className: mergeClassName(BLOCK, `${BLOCK}--resize-${resize}`, className)
	});
});
//#endregion
export { Textarea };

//# sourceMappingURL=Textarea.js.map