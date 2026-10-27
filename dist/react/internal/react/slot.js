import { mergeClassName } from "../style/classnames.js";
import { cloneElement, isValidElement, version } from "react";
//#region internal/react/slot.ts
/** 合并多个 ref（函数 ref / 对象 ref / null）为一个回调 ref */
function mergeRefs(...refs) {
	return (node) => {
		for (const ref of refs) if (typeof ref === "function") ref(node);
		else if (ref) ref.current = node;
	};
}
function getElementRef(element) {
	return Number.parseInt(version, 10) >= 19 ? element.props.ref : element.ref;
}
/**
* 把 slotProps 合并到唯一的子元素上并返回克隆，不额外渲染 DOM。
* - on* 事件：先调子元素自己的，未 preventDefault 时再调 slot 的
* - className / aria-describedby 拼接；style 浅合并（子元素优先）；ref 合并
* - 其余属性子元素优先
* 子元素必须把 ref 与其余 props 转发到 DOM（本库组件均满足）。
* children 不是单个元素时返回 null，由调用方决定回退渲染。
*/
function mergeIntoChild(children, slotProps) {
	if (!isValidElement(children)) return null;
	const childProps = children.props;
	const merged = { ...slotProps };
	for (const [key, childValue] of Object.entries(childProps)) {
		const slotValue = slotProps[key];
		if (/^on[A-Z]/.test(key) && typeof slotValue === "function" && typeof childValue === "function") merged[key] = (event) => {
			childValue(event);
			if (!event.defaultPrevented) slotValue(event);
		};
		else if (key === "className" || key === "aria-describedby") merged[key] = mergeClassName(slotValue, childValue);
		else if (key === "style") merged[key] = {
			...slotValue,
			...childValue
		};
		else if (key !== "ref" && key !== "children") merged[key] = childValue;
	}
	merged.ref = mergeRefs(slotProps.ref, getElementRef(children));
	return cloneElement(children, merged);
}
//#endregion
export { mergeIntoChild, mergeRefs };

//# sourceMappingURL=slot.js.map