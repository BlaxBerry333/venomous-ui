"use client";
import { mergeClassName } from "../internal/style/classnames.js";
import { devWarn } from "../internal/dev/warn.js";
import { scrollLock } from "../internal/dom/scroll-lock.js";
import { useIsomorphicLayoutEffect } from "../internal/react/use-isomorphic-layout-effect.js";
import { createContext, forwardRef, useCallback, useContext, useEffect, useId, useImperativeHandle, useMemo, useRef, useState } from "react";
import { jsx } from "react/jsx-runtime";
import "venomous-ui/styles/components/Dialog.css";
//#region packages/react/Dialog/Dialog.tsx
var BLOCK = "venomous--Dialog";
var DialogContext = createContext(null);
/**
* Dialog — 基于原生 `<dialog>` + `showModal()` 的模态框。
*
* - 焦点锁定、背景 inert、top layer 都交给浏览器。
* - 不绑 `<dialog open>` 属性：属性只能非模态展示，模态必须调 showModal()。
* - Esc 走原生 cancel 事件；preventDefault 后由 setOpen 统一关闭，避免重复通知 onOpenChange。
* - backdrop 点击按坐标是否落在 dialog 矩形外判定，对任意尺寸（含全屏）都成立。
*/
var Dialog = forwardRef(function Dialog({ defaultOpen = false, open: openProp, onOpenChange, closeOnBackdropClick = true, closeOnEsc = true, lockScroll = true, ariaLabel, ariaLabelledBy, className, children, onClick, ...rest }, ref) {
	const dialogRef = useRef(null);
	const isControlled = openProp !== void 0;
	const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
	const open = isControlled ? openProp : uncontrolledOpen;
	const defaultTitleId = useId();
	const [titleId, setTitleId] = useState(null);
	const titleIdRef = useRef(null);
	const registerTitle = useCallback((id) => {
		titleIdRef.current = id;
		setTitleId(id);
		return () => {
			titleIdRef.current = null;
			setTitleId(null);
		};
	}, []);
	const context = useMemo(() => ({
		defaultTitleId,
		registerTitle
	}), [defaultTitleId, registerTitle]);
	useEffect(() => {
		if (defaultOpen && isControlled) devWarn("Dialog", "`defaultOpen` is ignored when `open` is controlled.");
	}, []);
	useEffect(() => {
		if (open && !ariaLabel && !ariaLabelledBy && !titleIdRef.current) devWarn("Dialog", "missing `ariaLabel`, `ariaLabelledBy` or `<DialogTitle>` — dialog has no accessible name.");
	}, [
		open,
		ariaLabel,
		ariaLabelledBy
	]);
	const setOpen = useCallback((next) => {
		if (!isControlled) setUncontrolledOpen(next);
		onOpenChange?.(next);
	}, [isControlled, onOpenChange]);
	useEffect(() => {
		const el = dialogRef.current;
		if (open && !el.open) el.showModal();
		else if (!open && el.open) el.close();
	}, [open]);
	useEffect(() => {
		const el = dialogRef.current;
		return () => {
			if (el?.open) el.close();
		};
	}, []);
	useEffect(() => {
		if (!open || !lockScroll) return void 0;
		scrollLock.acquire();
		return () => scrollLock.release();
	}, [open, lockScroll]);
	useImperativeHandle(ref, () => ({
		get el() {
			return dialogRef.current;
		},
		open: () => setOpen(true),
		close: () => setOpen(false),
		toggle: () => setOpen(!open)
	}), [open, setOpen]);
	const handleCancel = (event) => {
		event.preventDefault();
		if (closeOnEsc) setOpen(false);
	};
	const handleClick = (event) => {
		if (closeOnBackdropClick) {
			const rect = event.currentTarget.getBoundingClientRect();
			if (!(event.clientX >= rect.left && event.clientX <= rect.right && event.clientY >= rect.top && event.clientY <= rect.bottom)) setOpen(false);
		}
		onClick?.(event);
	};
	return /* @__PURE__ */ jsx(DialogContext.Provider, {
		value: context,
		children: /* @__PURE__ */ jsx("dialog", {
			...rest,
			ref: dialogRef,
			"aria-label": ariaLabel,
			"aria-labelledby": ariaLabelledBy ?? titleId ?? void 0,
			onCancel: handleCancel,
			onClick: handleClick,
			className: mergeClassName(BLOCK, className),
			children
		})
	});
});
var DialogHeader = forwardRef(function DialogHeader({ className, ...rest }, ref) {
	return /* @__PURE__ */ jsx("div", {
		...rest,
		ref,
		className: mergeClassName(`${BLOCK}__header`, className)
	});
});
/** 对话框标题；在 Dialog 内使用时自动成为 Dialog 的无障碍名称（aria-labelledby） */
var DialogTitle = forwardRef(function DialogTitle({ id, className, ...rest }, ref) {
	const context = useContext(DialogContext);
	const resolvedId = id ?? context?.defaultTitleId;
	useIsomorphicLayoutEffect(() => {
		if (context && resolvedId) return context.registerTitle(resolvedId);
	}, [context, resolvedId]);
	return /* @__PURE__ */ jsx("h2", {
		...rest,
		ref,
		id: resolvedId,
		className: mergeClassName(`${BLOCK}__title`, className)
	});
});
var DialogBody = forwardRef(function DialogBody({ className, ...rest }, ref) {
	return /* @__PURE__ */ jsx("div", {
		...rest,
		ref,
		className: mergeClassName(`${BLOCK}__body`, className)
	});
});
var DialogFooter = forwardRef(function DialogFooter({ className, ...rest }, ref) {
	return /* @__PURE__ */ jsx("div", {
		...rest,
		ref,
		className: mergeClassName(`${BLOCK}__footer`, className)
	});
});
//#endregion
export { Dialog, DialogBody, DialogFooter, DialogHeader, DialogTitle };

//# sourceMappingURL=Dialog.js.map