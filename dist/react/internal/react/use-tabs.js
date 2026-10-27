import { devWarn } from "../dev/warn.js";
import { useIsomorphicLayoutEffect } from "./use-isomorphic-layout-effect.js";
import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
//#region internal/react/use-tabs.ts
/**
* Tabs 的状态与 ARIA tabs pattern 键盘语义（roving tabindex、方向键 / Home / End、manual 激活）。
* 内部 hook，不对外导出；SSR 安全：id 走 useId，focus 只在事件回调里派发。
*/
function useTabs(options = {}) {
	const { defaultValue, value: valueProp, onValueChange, activationMode = "automatic", loop = true } = options;
	const isControlled = valueProp !== void 0;
	const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
	const value = isControlled ? valueProp : uncontrolledValue;
	useEffect(() => {
		if (defaultValue !== void 0 && isControlled) devWarn("Tabs", "`defaultValue` is ignored when `value` is controlled.");
	}, []);
	const setValue = useCallback((next) => {
		if (next === value) return;
		if (!isControlled) setUncontrolledValue(next);
		onValueChange?.(next);
	}, [
		value,
		isControlled,
		onValueChange
	]);
	const baseId = useId();
	const makeTriggerId = useCallback((v) => `${baseId}-trigger-${v}`, [baseId]);
	const makePanelId = useCallback((v) => `${baseId}-panel-${v}`, [baseId]);
	const triggersRef = useRef(/* @__PURE__ */ new Map());
	const getOrderedTriggers = useCallback(() => {
		const list = [];
		triggersRef.current.forEach((entry, v) => list.push({
			value: v,
			entry
		}));
		return list.sort((a, b) => a.entry.el.compareDocumentPosition(b.entry.el) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1);
	}, []);
	useIsomorphicLayoutEffect(() => {
		if (isControlled || uncontrolledValue !== void 0) return;
		const first = getOrderedTriggers().find((t) => !t.entry.disabled);
		if (first) setUncontrolledValue(first.value);
	}, []);
	const [manualFocusValue, setManualFocusValue] = useState(void 0);
	const rovingValue = activationMode === "manual" && manualFocusValue !== void 0 ? manualFocusValue : value;
	const findNextEnabled = useCallback((ordered, fromIndex, direction) => {
		const total = ordered.length;
		let i = fromIndex;
		for (let step = 0; step < total; step++) {
			i += direction;
			if (i < 0) {
				if (!loop) return null;
				i = total - 1;
			} else if (i >= total) {
				if (!loop) return null;
				i = 0;
			}
			const candidate = ordered[i];
			if (candidate && !candidate.entry.disabled) return candidate;
		}
		return null;
	}, [loop]);
	const focusTrigger = useCallback((target) => {
		target.entry.el.focus();
		if (activationMode === "automatic") setValue(target.value);
		else setManualFocusValue(target.value);
	}, [activationMode, setValue]);
	const prevKey = "ArrowLeft";
	const nextKey = "ArrowRight";
	const getListProps = useCallback((userProps) => ({
		...userProps,
		role: "tablist"
	}), []);
	const getTriggerProps = useCallback((args, userProps) => {
		const { value: triggerValue, disabled = false } = args;
		const isSelected = value === triggerValue;
		const isRoving = rovingValue === triggerValue;
		const refCallback = (node) => {
			if (node) triggersRef.current.set(triggerValue, {
				el: node,
				disabled
			});
			else triggersRef.current.delete(triggerValue);
			const userRef = userProps?.ref;
			if (typeof userRef === "function") userRef(node);
			else if (userRef && typeof userRef === "object") userRef.current = node;
		};
		const handleClick = (event) => {
			if (!disabled) {
				setValue(triggerValue);
				if (activationMode === "manual") setManualFocusValue(triggerValue);
			}
			userProps?.onClick?.(event);
		};
		const handleKeyDown = (event) => {
			const key = event.key;
			const isNav = key === prevKey || key === nextKey || key === "Home" || key === "End";
			const isActivate = activationMode === "manual" && (key === "Enter" || key === " ");
			if (isNav) {
				const ordered = getOrderedTriggers();
				const currentIndex = ordered.findIndex((o) => o.value === triggerValue);
				let target;
				if (key === "Home") target = ordered.find((o) => !o.entry.disabled) ?? null;
				else if (key === "End") target = [...ordered].reverse().find((o) => !o.entry.disabled) ?? null;
				else target = findNextEnabled(ordered, currentIndex, key === prevKey ? -1 : 1);
				if (target) {
					event.preventDefault();
					focusTrigger(target);
				}
			} else if (isActivate && !disabled) {
				event.preventDefault();
				setValue(triggerValue);
			}
			userProps?.onKeyDown?.(event);
		};
		const { ref: _ignoredRef, onClick: _ignoredClick, onKeyDown: _ignoredKeyDown, ...restUserProps } = userProps ?? {};
		return {
			...restUserProps,
			ref: refCallback,
			type: restUserProps.type ?? "button",
			role: "tab",
			id: makeTriggerId(triggerValue),
			"aria-selected": isSelected,
			"aria-controls": makePanelId(triggerValue),
			"aria-disabled": disabled || void 0,
			"data-state": isSelected ? "active" : "inactive",
			"data-disabled": disabled || void 0,
			disabled,
			tabIndex: isRoving ? 0 : -1,
			onClick: handleClick,
			onKeyDown: handleKeyDown
		};
	}, [
		value,
		rovingValue,
		activationMode,
		prevKey,
		nextKey,
		makeTriggerId,
		makePanelId,
		setValue,
		getOrderedTriggers,
		findNextEnabled,
		focusTrigger
	]);
	const getPanelProps = useCallback((args, userProps) => {
		const { value: panelValue, keepMounted } = args;
		const isActive = value === panelValue;
		return {
			...userProps,
			role: "tabpanel",
			id: makePanelId(panelValue),
			"aria-labelledby": makeTriggerId(panelValue),
			tabIndex: 0,
			hidden: !isActive && keepMounted ? true : void 0,
			"data-state": isActive ? "active" : "inactive"
		};
	}, [
		value,
		makePanelId,
		makeTriggerId
	]);
	const isPanelMounted = useCallback((panelValue, keepMounted) => keepMounted === true || value === panelValue, [value]);
	useEffect(() => {
		if (activationMode === "manual" && value !== void 0) setManualFocusValue(value);
	}, [value, activationMode]);
	return useMemo(() => ({
		value,
		setValue,
		getListProps,
		getTriggerProps,
		getPanelProps,
		isPanelMounted
	}), [
		value,
		setValue,
		getListProps,
		getTriggerProps,
		getPanelProps,
		isPanelMounted
	]);
}
//#endregion
export { useTabs };

//# sourceMappingURL=use-tabs.js.map