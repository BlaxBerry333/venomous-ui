"use client";
import { mergeClassName } from "../internal/style/classnames.js";
import { createContext, forwardRef, useContext, useId, useMemo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import "venomous-ui/styles/components/FormField.css";
//#region packages/react/FormField/FormField.tsx
var BLOCK = "venomous--FormField";
var FormFieldContext = createContext(null);
/**
* 表单控件读取所在 FormField 的关联信息，与自身 props 合并（自身 props 优先，aria-describedby 拼接）。
* 不在 FormField 内时原样返回。
*/
function useFormFieldControl(props) {
	const field = useContext(FormFieldContext);
	if (!field) return props;
	return {
		...props,
		id: props.id ?? field.controlId,
		disabled: props.disabled ?? field.disabled,
		required: props.required ?? field.required,
		"aria-describedby": mergeClassName(field.describedBy, props["aria-describedby"]) || void 0,
		"aria-invalid": props["aria-invalid"] ?? (field.invalid || void 0)
	};
}
/** 分组类控件（RadioGroup 等）没有可被 label[for] 指向的元素，用 aria-labelledby 关联标题 */
function useFormFieldLabelledBy() {
	return useContext(FormFieldContext)?.labelId;
}
var FormField = forwardRef(function FormField({ label, description, error, required, disabled, controlId: controlIdProp, className, children, ...rest }, ref) {
	const baseId = useId();
	const controlId = controlIdProp ?? `${baseId}-control`;
	const labelId = label ? `${baseId}-label` : void 0;
	const descriptionId = description ? `${baseId}-description` : void 0;
	const errorId = error ? `${baseId}-error` : void 0;
	const invalid = !!error;
	const context = useMemo(() => ({
		controlId,
		labelId,
		describedBy: mergeClassName(descriptionId, errorId) || void 0,
		invalid,
		disabled,
		required
	}), [
		controlId,
		labelId,
		descriptionId,
		errorId,
		invalid,
		disabled,
		required
	]);
	return /* @__PURE__ */ jsx(FormFieldContext.Provider, {
		value: context,
		children: /* @__PURE__ */ jsxs("div", {
			...rest,
			ref,
			"data-invalid": invalid || void 0,
			"data-disabled": disabled || void 0,
			className: mergeClassName(BLOCK, className),
			children: [
				label && /* @__PURE__ */ jsxs("label", {
					id: labelId,
					htmlFor: controlId,
					className: `${BLOCK}__label`,
					children: [label, required && /* @__PURE__ */ jsx("span", {
						"aria-hidden": "true",
						className: `${BLOCK}__required`,
						children: "*"
					})]
				}),
				children,
				description && /* @__PURE__ */ jsx("p", {
					id: descriptionId,
					className: `${BLOCK}__description`,
					children: description
				}),
				error && /* @__PURE__ */ jsx("p", {
					id: errorId,
					className: `${BLOCK}__error`,
					children: error
				})
			]
		})
	});
});
//#endregion
export { FormField, useFormFieldControl, useFormFieldLabelledBy };

//# sourceMappingURL=FormField.js.map