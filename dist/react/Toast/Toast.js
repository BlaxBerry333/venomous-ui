"use client";
import { mergeClassName } from "../internal/style/classnames.js";
import { createToastStore } from "../internal/dom/toast-store.js";
import { forwardRef, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import "venomous-ui/styles/components/Toast.css";
//#region packages/react/Toast/Toast.tsx
var BLOCK = "venomous--Toast";
var DEFAULT_DURATION = 5e3;
var store = createToastStore();
var EMPTY = [];
function show(title, options = {}) {
	return store.add({
		title,
		description: options.description,
		variant: options.variant ?? "info",
		duration: options.duration ?? DEFAULT_DURATION,
		closable: options.closable ?? true,
		onClose: options.onClose
	});
}
function dismiss(id) {
	const removed = id === void 0 ? store.clear() : [store.remove(id)];
	for (const record of removed) record?.data.onClose?.();
}
/**
* 弹出通知。需要在应用里渲染一次 `<Toaster />`。
*
* @example
* toast('Saved');
* toast.danger('Upload failed', { description: 'File is larger than 10 MB.' });
*/
var toast = Object.assign(show, {
	info: (title, options) => show(title, {
		...options,
		variant: "info"
	}),
	success: (title, options) => show(title, {
		...options,
		variant: "success"
	}),
	warning: (title, options) => show(title, {
		...options,
		variant: "warning"
	}),
	danger: (title, options) => show(title, {
		...options,
		variant: "danger"
	}),
	dismiss
});
function ToastItem({ record, paused, closeLabel }) {
	const { id, data } = record;
	const remainingRef = useRef(data.duration);
	useEffect(() => {
		if (paused || data.duration <= 0 || !Number.isFinite(data.duration)) return void 0;
		const startedAt = Date.now();
		const timer = setTimeout(() => dismiss(id), remainingRef.current);
		return () => {
			clearTimeout(timer);
			remainingRef.current -= Date.now() - startedAt;
		};
	}, [
		paused,
		id,
		data.duration
	]);
	return /* @__PURE__ */ jsxs("li", {
		role: data.variant === "danger" ? "alert" : "status",
		"aria-atomic": "true",
		"data-variant": data.variant,
		className: mergeClassName(BLOCK, `${BLOCK}--${data.variant}`),
		children: [/* @__PURE__ */ jsxs("div", {
			className: `${BLOCK}__content`,
			children: [/* @__PURE__ */ jsx("div", {
				className: `${BLOCK}__title`,
				children: data.title
			}), data.description !== void 0 && /* @__PURE__ */ jsx("div", {
				className: `${BLOCK}__description`,
				children: data.description
			})]
		}), data.closable && /* @__PURE__ */ jsx("button", {
			type: "button",
			className: `${BLOCK}__close`,
			"aria-label": closeLabel,
			onClick: () => dismiss(id),
			children: /* @__PURE__ */ jsx("span", {
				"aria-hidden": "true",
				children: "×"
			})
		})]
	});
}
/**
* Toaster — 通知的渲染位置，应用里渲染一次。
* 鼠标悬停或焦点在通知区内时暂停自动关闭，方便阅读与操作。
*/
var Toaster = forwardRef(function Toaster({ placement = "bottom-end", limit = 3, label = "Notifications", closeLabel = "Dismiss", className, onPointerEnter, onPointerLeave, onFocus, onBlur, ...rest }, ref) {
	const toasts = useSyncExternalStore(store.subscribe, store.getSnapshot, () => EMPTY);
	const [hovered, setHovered] = useState(false);
	const [focused, setFocused] = useState(false);
	const visible = toasts.slice(0, limit);
	return /* @__PURE__ */ jsx("section", {
		...rest,
		ref,
		"aria-label": label,
		"data-placement": placement,
		className: mergeClassName(`${BLOCK}er`, className),
		onPointerEnter: (event) => {
			onPointerEnter?.(event);
			setHovered(true);
		},
		onPointerLeave: (event) => {
			onPointerLeave?.(event);
			setHovered(false);
		},
		onFocus: (event) => {
			onFocus?.(event);
			setFocused(true);
		},
		onBlur: (event) => {
			onBlur?.(event);
			if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
		},
		children: /* @__PURE__ */ jsx("ol", {
			"aria-live": "polite",
			className: `${BLOCK}er__list`,
			children: visible.map((record) => /* @__PURE__ */ jsx(ToastItem, {
				record,
				paused: hovered || focused,
				closeLabel
			}, record.id))
		})
	});
});
//#endregion
export { Toaster, toast };

//# sourceMappingURL=Toast.js.map