"use client";
import { mergeClassName } from "../internal/style/classnames.js";
import { Children, forwardRef, isValidElement, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import "venomous-ui/styles/components/Breadcrumb.css";
//#region packages/react/Breadcrumb/Breadcrumb.tsx
var BLOCK = "venomous--Breadcrumb";
/**
* Breadcrumb — 层级导航：nav[aria-label] > ol > li。
* 分隔符对读屏器隐藏；层级多时可折叠中间部分，展开按钮可用键盘操作。
*/
var Breadcrumb = forwardRef(function Breadcrumb({ separator = "/", maxItems, expandLabel = "Show all", label = "Breadcrumb", className, children, ...rest }, ref) {
	const [expanded, setExpanded] = useState(false);
	const items = Children.toArray(children).filter(isValidElement);
	const entries = !expanded && maxItems !== void 0 && maxItems >= 2 && items.length > maxItems ? [
		items[0],
		"ellipsis",
		...items.slice(items.length - (maxItems - 1))
	] : items;
	return /* @__PURE__ */ jsx("nav", {
		...rest,
		ref,
		"aria-label": label,
		className: mergeClassName(BLOCK, className),
		children: /* @__PURE__ */ jsx("ol", {
			className: `${BLOCK}__list`,
			children: entries.map((entry, index) => /* @__PURE__ */ jsxs("li", {
				className: `${BLOCK}__item`,
				children: [index > 0 && /* @__PURE__ */ jsx("span", {
					className: `${BLOCK}__separator`,
					"aria-hidden": "true",
					children: separator
				}), entry === "ellipsis" ? /* @__PURE__ */ jsx("button", {
					type: "button",
					className: `${BLOCK}__ellipsis`,
					"aria-label": expandLabel,
					onClick: () => setExpanded(true),
					children: "…"
				}) : entry]
			}, entry === "ellipsis" ? "ellipsis" : entry.key))
		})
	});
});
/** 单个层级：有 href 且不是当前页时渲染链接，否则渲染文字 */
var BreadcrumbItem = forwardRef(function BreadcrumbItem({ current = false, href, className, children, ...rest }, ref) {
	if (current || href === void 0) return /* @__PURE__ */ jsx("span", {
		"aria-current": current ? "page" : void 0,
		className: mergeClassName(`${BLOCK}__current`, className),
		children
	});
	return /* @__PURE__ */ jsx("a", {
		...rest,
		ref,
		href,
		className: mergeClassName(`${BLOCK}__link`, className),
		children
	});
});
//#endregion
export { Breadcrumb, BreadcrumbItem };

//# sourceMappingURL=Breadcrumb.js.map