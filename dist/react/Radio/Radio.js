"use client";
import { mergeClassName } from "../internal/style/classnames.js";
import { devWarn } from "../internal/dev/warn.js";
import { useFormFieldControl, useFormFieldLabelledBy } from "../FormField/FormField.js";
import { createContext, forwardRef, useCallback, useContext, useEffect, useId, useMemo, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import "venomous-ui/styles/components/Radio.css";
//#region packages/react/Radio/Radio.tsx
var BLOCK = "venomous--Radio";
var RadioGroupContext = createContext(null);
/**
* Radio — 原生 radio 视觉隐藏但保留焦点与表单行为。
* 同组的 radio 共用 name，方向键切换由浏览器原生处理。
*/
var Radio = forwardRef(function Radio({ className, style, children, onChange, ...rest }, ref) {
	const group = useContext(RadioGroupContext);
	const groupProps = group ? {
		name: group.name,
		checked: group.value === rest.value,
		disabled: rest.disabled ?? group.disabled,
		required: rest.required ?? group.required
	} : {};
	const disabled = groupProps.disabled ?? rest.disabled;
	const handleChange = (event) => {
		onChange?.(event);
		group?.select(rest.value);
	};
	return /* @__PURE__ */ jsxs("label", {
		className: mergeClassName(BLOCK, className),
		style,
		"data-disabled": disabled || void 0,
		children: [
			/* @__PURE__ */ jsx("input", {
				...rest,
				...groupProps,
				ref,
				type: "radio",
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
/** RadioGroup — 单选组，role="radiogroup"；在 FormField 内时标题经 aria-labelledby 关联 */
var RadioGroup = forwardRef(function RadioGroup({ defaultValue, value: valueProp, onValueChange, name: nameProp, disabled: disabledProp, required: requiredProp, orientation = "vertical", className, children, ...props }, ref) {
	const fieldLabelledBy = useFormFieldLabelledBy();
	const { disabled, required, ...rest } = useFormFieldControl({
		...props,
		disabled: disabledProp,
		required: requiredProp
	});
	const generatedName = useId();
	const name = nameProp ?? generatedName;
	const isControlled = valueProp !== void 0;
	const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
	const value = isControlled ? valueProp : uncontrolledValue;
	useEffect(() => {
		if (isControlled && defaultValue !== void 0) devWarn("RadioGroup", "`defaultValue` is ignored when `value` is controlled.");
	}, []);
	const select = useCallback((next) => {
		if (!isControlled) setUncontrolledValue(next);
		onValueChange?.(next);
	}, [isControlled, onValueChange]);
	const context = useMemo(() => ({
		name,
		value,
		disabled,
		required,
		select
	}), [
		name,
		value,
		disabled,
		required,
		select
	]);
	return /* @__PURE__ */ jsx(RadioGroupContext.Provider, {
		value: context,
		children: /* @__PURE__ */ jsx("div", {
			"aria-labelledby": fieldLabelledBy,
			...rest,
			ref,
			role: "radiogroup",
			"aria-disabled": disabled || void 0,
			"aria-required": required || void 0,
			"data-orientation": orientation,
			className: mergeClassName(`${BLOCK}Group`, className),
			children
		})
	});
});
//#endregion
export { Radio, RadioGroup };

//# sourceMappingURL=Radio.js.map