"use client";
import { mergeClassName } from "../internal/style/classnames.js";
import { devWarn } from "../internal/dev/warn.js";
import { isEventInsideNodes } from "../internal/dom/dom.js";
import { overlayStack } from "../internal/dom/overlay-stack.js";
import { mergeIntoChild, mergeRefs } from "../internal/react/slot.js";
import { useFloating } from "../internal/react/use-floating.js";
import { createContext, forwardRef, useCallback, useContext, useEffect, useId, useMemo, useRef, useState } from "react";
import { jsx } from "react/jsx-runtime";
import "venomous-ui/styles/components/Tooltip.css";
//#region packages/react/Tooltip/Tooltip.tsx
var BLOCK = "venomous--Tooltip";
var TooltipContext = createContext(null);
function useTooltipContext(component) {
	const context = useContext(TooltipContext);
	if (!context) throw new Error(`[venomous-ui] <${component}> must be used inside <Tooltip>.`);
	return context;
}
function isKeyboardFocus(element) {
	try {
		return element.matches(":focus-visible");
	} catch {
		return true;
	}
}
/**
* Tooltip — 悬停 / 键盘聚焦显示的提示。根组件不渲染 DOM，只提供状态。
*
* - 指针从 trigger 移到提示内容上不会关闭（WCAG 1.4.13）。
* - aria-describedby 写在真正获得焦点的元素上（TooltipTrigger 把属性合并到子元素）。
* - 与 Popover 共用定位与 top layer；进入全局浮层栈，Esc 先关 tooltip，不连带关闭外层。
*/
function Tooltip({ defaultOpen = false, open: openProp, onOpenChange, placement = "top", offset = 6, collisionPadding = 8, flip = true, shift = true, openDelay = 200, closeDelay = 200, closeOnEsc = true, trigger = "hover", disabled = false, children }) {
	const isControlled = openProp !== void 0;
	const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
	const open = isControlled ? openProp : uncontrolledOpen;
	const hoverMode = trigger === "hover";
	useEffect(() => {
		if (defaultOpen && isControlled) devWarn("Tooltip", "`defaultOpen` is ignored when `open` is controlled.");
	}, []);
	const setOpen = useCallback((next, reason) => {
		if (!isControlled) setUncontrolledOpen(next);
		onOpenChange?.(next, reason);
	}, [isControlled, onOpenChange]);
	const timerRef = useRef(void 0);
	const clearTimer = useCallback(() => {
		clearTimeout(timerRef.current);
		timerRef.current = void 0;
	}, []);
	useEffect(() => clearTimer, [clearTimer]);
	const activeRef = useRef({
		trigger: false,
		focus: false,
		content: false
	});
	const resetActive = useCallback(() => {
		activeRef.current = {
			trigger: false,
			focus: false,
			content: false
		};
		clearTimer();
	}, [clearTimer]);
	const setHover = useCallback((source, active) => {
		if (!hoverMode || disabled) return;
		activeRef.current[source] = active;
		clearTimer();
		const want = Object.values(activeRef.current).some(Boolean);
		if (want === open) return;
		const delay = want ? openDelay : closeDelay;
		if (delay <= 0) {
			setOpen(want, "hover");
			return;
		}
		timerRef.current = setTimeout(() => {
			timerRef.current = void 0;
			setOpen(want, "hover");
		}, delay);
	}, [
		hoverMode,
		disabled,
		open,
		openDelay,
		closeDelay,
		setOpen,
		clearTimer
	]);
	const toggleByClick = useCallback(() => {
		if (!hoverMode && !disabled) setOpen(!open, "click");
	}, [
		hoverMode,
		disabled,
		open,
		setOpen
	]);
	useEffect(() => {
		if (!disabled) return;
		resetActive();
		if (open) setOpen(false, "hover");
	}, [
		disabled,
		open,
		setOpen,
		resetActive
	]);
	const floating = useFloating({
		open,
		placement,
		offset,
		collisionPadding,
		flip,
		shift
	});
	const { getTrigger, getContent } = floating;
	const contentId = `${useId()}-content`;
	useEffect(() => {
		if (!open) return void 0;
		const id = contentId;
		overlayStack.push({
			id,
			closeFromEsc: () => {
				if (!closeOnEsc) return;
				resetActive();
				setOpen(false, "esc-key");
			},
			closeFromOutside: (event) => {
				if (hoverMode) return false;
				if (!isEventInsideNodes(event, [getTrigger(), getContent()])) setOpen(false, "outside-click");
				return true;
			}
		});
		return () => overlayStack.remove(id);
	}, [
		open,
		contentId,
		closeOnEsc,
		hoverMode,
		setOpen,
		resetActive,
		getTrigger,
		getContent
	]);
	const context = useMemo(() => ({
		open,
		floating,
		contentId,
		hoverMode,
		disabled,
		setHover,
		toggleByClick
	}), [
		open,
		floating,
		contentId,
		hoverMode,
		disabled,
		setHover,
		toggleByClick
	]);
	return /* @__PURE__ */ jsx(TooltipContext.Provider, {
		value: context,
		children
	});
}
var TooltipTrigger = forwardRef(function TooltipTrigger({ className, style, children, onPointerEnter, onPointerLeave, onFocus, onBlur, onClick, ...rest }, ref) {
	const { open, floating, contentId, setHover, toggleByClick } = useTooltipContext("TooltipTrigger");
	const triggerProps = {
		...rest,
		ref: mergeRefs(ref, floating.triggerRef),
		className: mergeClassName(`${BLOCK}__trigger`, className),
		style: {
			...floating.triggerStyle,
			...style
		},
		"aria-describedby": mergeClassName(rest["aria-describedby"], open && contentId) || void 0,
		"data-state": open ? "open" : "closed",
		onPointerEnter: (event) => {
			onPointerEnter?.(event);
			setHover("trigger", true);
		},
		onPointerLeave: (event) => {
			onPointerLeave?.(event);
			setHover("trigger", false);
		},
		onFocus: (event) => {
			onFocus?.(event);
			if (isKeyboardFocus(event.target)) setHover("focus", true);
		},
		onBlur: (event) => {
			onBlur?.(event);
			setHover("focus", false);
		},
		onClick: (event) => {
			onClick?.(event);
			toggleByClick();
		}
	};
	return mergeIntoChild(children, triggerProps) ?? /* @__PURE__ */ jsx("span", {
		tabIndex: 0,
		...triggerProps,
		children
	});
});
var TooltipContent = forwardRef(function TooltipContent({ keepMounted = false, className, style, onPointerEnter, onPointerLeave, children, ...rest }, ref) {
	const { open, floating, contentId, setHover } = useTooltipContext("TooltipContent");
	if (!open && !keepMounted) return null;
	return /* @__PURE__ */ jsx("div", {
		...rest,
		popover: "manual",
		ref: mergeRefs(ref, floating.contentRef),
		id: contentId,
		role: "tooltip",
		hidden: !open,
		"data-state": open ? "open" : "closed",
		"data-placement": floating.resolvedPlacement,
		className: mergeClassName(`${BLOCK}__content`, className),
		style: {
			...floating.contentStyle,
			...style
		},
		onPointerEnter: (event) => {
			onPointerEnter?.(event);
			setHover("content", true);
		},
		onPointerLeave: (event) => {
			onPointerLeave?.(event);
			setHover("content", false);
		},
		children
	});
});
//#endregion
export { Tooltip, TooltipContent, TooltipTrigger };

//# sourceMappingURL=Tooltip.js.map