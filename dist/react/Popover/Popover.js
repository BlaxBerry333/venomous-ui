"use client";
import { mergeClassName } from "../internal/style/classnames.js";
import { devWarn } from "../internal/dev/warn.js";
import { isEventInsideNodes } from "../internal/dom/dom.js";
import { overlayStack } from "../internal/dom/overlay-stack.js";
import { mergeIntoChild, mergeRefs } from "../internal/react/slot.js";
import { useFloating } from "../internal/react/use-floating.js";
import { createContext, forwardRef, useCallback, useContext, useEffect, useId, useMemo, useRef, useState } from "react";
import { jsx } from "react/jsx-runtime";
import "venomous-ui/styles/components/Popover.css";
//#region packages/react/Popover/Popover.tsx
var BLOCK = "venomous--Popover";
var PopoverContext = createContext(null);
function usePopoverContext(component) {
	const context = useContext(PopoverContext);
	if (!context) throw new Error(`[venomous-ui] <${component}> must be used inside <Popover>.`);
	return context;
}
/**
* Popover — 点击 trigger 打开的浮层。根组件不渲染 DOM，只提供状态。
*
* - content 带 `popover="manual"`，打开时进入 top layer：不被祖先 overflow / z-index 遮挡，
*   在模态 Dialog 里也能正常显示与交互（content 渲染在 trigger 旁，仍是 Dialog 的后代，不会被设为 inert）。
* - Esc / 点外部经全局浮层栈处理：嵌套时只关最上层，Esc 不会连带关闭外层 Dialog。
*/
function Popover({ defaultOpen = false, open: openProp, onOpenChange, placement = "bottom", offset = 8, collisionPadding = 8, flip = true, shift = true, matchTriggerWidth = false, closeOnOutsideClick = true, closeOnEsc = true, returnFocusOnClose = true, children }) {
	const isControlled = openProp !== void 0;
	const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
	const open = isControlled ? openProp : uncontrolledOpen;
	useEffect(() => {
		if (defaultOpen && isControlled) devWarn("Popover", "`defaultOpen` is ignored when `open` is controlled.");
	}, []);
	const setOpen = useCallback((next, reason) => {
		if (!isControlled) setUncontrolledOpen(next);
		onOpenChange?.(next, reason);
	}, [isControlled, onOpenChange]);
	const floating = useFloating({
		open,
		placement,
		offset,
		collisionPadding,
		flip,
		shift,
		matchTriggerWidth
	});
	const { getTrigger, getContent } = floating;
	const contentId = `${useId()}-content`;
	const [contentRole, setContentRole] = useState("dialog");
	useEffect(() => {
		if (!open) return void 0;
		const id = contentId;
		overlayStack.push({
			id,
			closeFromEsc: () => {
				if (closeOnEsc) setOpen(false, "esc-key");
			},
			closeFromOutside: (event) => {
				if (closeOnOutsideClick && !isEventInsideNodes(event, [getTrigger(), getContent()])) setOpen(false, "outside-click");
				return true;
			}
		});
		return () => overlayStack.remove(id);
	}, [
		open,
		contentId,
		closeOnEsc,
		closeOnOutsideClick,
		setOpen,
		getTrigger,
		getContent
	]);
	const focusInsideRef = useRef(false);
	useEffect(() => {
		if (!open) return void 0;
		const onFocusIn = () => {
			focusInsideRef.current = !!getContent()?.contains(document.activeElement);
		};
		document.addEventListener("focusin", onFocusIn);
		return () => document.removeEventListener("focusin", onFocusIn);
	}, [open, getContent]);
	const prevOpenRef = useRef(open);
	useEffect(() => {
		const wasOpen = prevOpenRef.current;
		prevOpenRef.current = open;
		if (!wasOpen || open || !focusInsideRef.current) return;
		focusInsideRef.current = false;
		if (returnFocusOnClose) getTrigger()?.focus({ preventScroll: true });
	}, [
		open,
		returnFocusOnClose,
		getTrigger
	]);
	const context = useMemo(() => ({
		open,
		setOpen,
		floating,
		contentId,
		contentRole,
		setContentRole
	}), [
		open,
		setOpen,
		floating,
		contentId,
		contentRole
	]);
	return /* @__PURE__ */ jsx(PopoverContext.Provider, {
		value: context,
		children
	});
}
var PopoverTrigger = forwardRef(function PopoverTrigger({ className, children, onClick, style, ...rest }, ref) {
	const { open, setOpen, floating, contentId, contentRole } = usePopoverContext("PopoverTrigger");
	const triggerProps = {
		...rest,
		ref: mergeRefs(ref, floating.triggerRef),
		className: mergeClassName(`${BLOCK}__trigger`, className),
		style: {
			...floating.triggerStyle,
			...style
		},
		"aria-haspopup": contentRole,
		"aria-expanded": open,
		"aria-controls": open ? contentId : void 0,
		"data-state": open ? "open" : "closed",
		onClick: (event) => {
			onClick?.(event);
			if (!event.defaultPrevented) setOpen(!open, "trigger-click");
		}
	};
	return mergeIntoChild(children, triggerProps) ?? /* @__PURE__ */ jsx("button", {
		type: "button",
		...triggerProps,
		children
	});
});
var PopoverContent = forwardRef(function PopoverContent({ role = "dialog", keepMounted = false, className, style, children, ...rest }, ref) {
	const { open, floating, contentId, setContentRole } = usePopoverContext("PopoverContent");
	useEffect(() => {
		setContentRole(role);
	}, [role, setContentRole]);
	useEffect(() => {
		if (open && role === "dialog" && !rest["aria-label"] && !rest["aria-labelledby"]) devWarn("Popover", "role=\"dialog\" content is missing `aria-label` or `aria-labelledby` — it has no accessible name.");
	}, [
		open,
		role,
		rest["aria-label"],
		rest["aria-labelledby"]
	]);
	if (!open && !keepMounted) return null;
	return /* @__PURE__ */ jsx("div", {
		...rest,
		popover: "manual",
		ref: mergeRefs(ref, floating.contentRef),
		id: contentId,
		role,
		tabIndex: -1,
		hidden: !open,
		"data-state": open ? "open" : "closed",
		"data-placement": floating.resolvedPlacement,
		className: mergeClassName(`${BLOCK}__content`, className),
		style: {
			...floating.contentStyle,
			...style
		},
		children
	});
});
//#endregion
export { Popover, PopoverContent, PopoverTrigger };

//# sourceMappingURL=Popover.js.map