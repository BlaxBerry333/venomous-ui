"use client";
import { mergeClassName } from "../internal/style/classnames.js";
import { devWarn } from "../internal/dev/warn.js";
import { mergeRefs } from "../internal/react/slot.js";
import { useIsomorphicLayoutEffect } from "../internal/react/use-isomorphic-layout-effect.js";
import { useFormFieldControl, useFormFieldLabelledBy } from "../FormField/FormField.js";
import { createContext, forwardRef, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import "venomous-ui/styles/components/Checkbox.css";
//#region packages/react/Checkbox/Checkbox.tsx
var BLOCK = "venomous--Checkbox";
var CheckboxGroupContext = createContext(null);
/**
* Checkbox — 原生 checkbox 视觉隐藏但保留焦点与表单行为，外观由相邻的 __control 绘制。
* 在 CheckboxGroup 内时选中状态由组管理；在 FormField 内时自动关联说明与错误信息。
*/
var Checkbox = forwardRef(function Checkbox({ indeterminate = false, className, style, children, onChange, ...props }, ref) {
	const group = useContext(CheckboxGroupContext);
	const rest = useFormFieldControl(props);
	const inputRef = useRef(null);
	useIsomorphicLayoutEffect(() => {
		inputRef.current.indeterminate = indeterminate;
	}, [indeterminate]);
	const groupProps = group ? {
		name: group.name,
		checked: rest.value !== void 0 && group.value.includes(rest.value),
		disabled: rest.disabled ?? group.disabled
	} : {};
	const handleChange = (event) => {
		onChange?.(event);
		if (group && rest.value !== void 0) group.toggle(rest.value, event.target.checked);
	};
	const disabled = groupProps.disabled ?? rest.disabled;
	return /* @__PURE__ */ jsxs("label", {
		className: mergeClassName(BLOCK, className),
		style,
		"data-disabled": disabled || void 0,
		children: [
			/* @__PURE__ */ jsx("input", {
				...rest,
				...groupProps,
				ref: mergeRefs(ref, inputRef),
				type: "checkbox",
				className: `${BLOCK}__input`,
				onChange: handleChange
			}),
			/* @__PURE__ */ jsx("span", {
				className: `${BLOCK}__control`,
				"aria-hidden": "true"
			}),
			children !== void 0 && /* @__PURE__ */ jsx("span", {
				className: `${BLOCK}__label`,
				children
			})
		]
	});
});
/** CheckboxGroup — 多选组，role="group"；value 是选中项的数组 */
var CheckboxGroup = forwardRef(function CheckboxGroup({ defaultValue, value: valueProp, onValueChange, name, disabled: disabledProp, orientation = "vertical", className, children, ...props }, ref) {
	const fieldLabelledBy = useFormFieldLabelledBy();
	const { disabled, required: _required, "aria-invalid": _invalid, ...rest } = useFormFieldControl({
		...props,
		disabled: disabledProp
	});
	const isControlled = valueProp !== void 0;
	const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue ?? []);
	const value = isControlled ? valueProp : uncontrolledValue;
	useEffect(() => {
		if (isControlled && defaultValue !== void 0) devWarn("CheckboxGroup", "`defaultValue` is ignored when `value` is controlled.");
	}, []);
	const toggle = useCallback((item, checked) => {
		const next = checked ? [...value, item] : value.filter((v) => v !== item);
		if (!isControlled) setUncontrolledValue(next);
		onValueChange?.(next);
	}, [
		value,
		isControlled,
		onValueChange
	]);
	const context = useMemo(() => ({
		name,
		value,
		disabled,
		toggle
	}), [
		name,
		value,
		disabled,
		toggle
	]);
	return /* @__PURE__ */ jsx(CheckboxGroupContext.Provider, {
		value: context,
		children: /* @__PURE__ */ jsx("div", {
			"aria-labelledby": fieldLabelledBy,
			...rest,
			ref,
			role: "group",
			"aria-disabled": disabled || void 0,
			"data-orientation": orientation,
			className: mergeClassName(`${BLOCK}Group`, className),
			children
		})
	});
});
//#endregion
export { Checkbox, CheckboxGroup };

//# sourceMappingURL=Checkbox.js.map