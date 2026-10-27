"use client";
import { mergeClassName } from "../internal/style/classnames.js";
import { useTabs } from "../internal/react/use-tabs.js";
import { createContext, forwardRef, useContext } from "react";
import { jsx } from "react/jsx-runtime";
import "venomous-ui/styles/components/Tabs.css";
//#region packages/react/Tabs/Tabs.tsx
var BLOCK = "venomous--Tabs";
var TabsContext = createContext(null);
function useTabsContext(component) {
	const context = useContext(TabsContext);
	if (!context) throw new Error(`[venomous-ui] <${component}> must be used inside <Tabs>.`);
	return context;
}
/**
* Tabs — ARIA tabs：方向键 / Home / End 切换，roving tabindex，可选手动激活。
*
* 结构显式书写（TabList 包 TabTitle，TabPanel 与之平级，用 value 配对），
* 不靠扫描 children 的组件类型：在 Next.js 服务端组件里传入的子元素类型是客户端引用，扫描会失效。
*/
var Tabs = forwardRef(function Tabs({ defaultValue, value, onValueChange, activationMode, loop, className, children, ...rest }, ref) {
	const tabs = useTabs({
		...defaultValue !== void 0 ? { defaultValue } : {},
		...value !== void 0 ? { value } : {},
		...onValueChange !== void 0 ? { onValueChange } : {},
		...activationMode !== void 0 ? { activationMode } : {},
		...loop !== void 0 ? { loop } : {}
	});
	return /* @__PURE__ */ jsx(TabsContext.Provider, {
		value: tabs,
		children: /* @__PURE__ */ jsx("div", {
			...rest,
			ref,
			className: mergeClassName(BLOCK, className),
			children
		})
	});
});
var TabList = forwardRef(function TabList({ className, children, ...rest }, ref) {
	return /* @__PURE__ */ jsx("div", {
		...useTabsContext("TabList").getListProps({
			...rest,
			className: mergeClassName(`${BLOCK}__list`, className)
		}),
		ref,
		children
	});
});
var TabTitle = forwardRef(function TabTitle({ value, disabled = false, className, children, ...rest }, ref) {
	return /* @__PURE__ */ jsx("button", {
		...useTabsContext("TabTitle").getTriggerProps({
			value,
			disabled
		}, {
			...rest,
			ref,
			className: mergeClassName(`${BLOCK}__title`, className)
		}),
		children
	});
});
var TabPanel = forwardRef(function TabPanel({ value, keepMounted = false, className, children, ...rest }, ref) {
	const tabs = useTabsContext("TabPanel");
	if (!tabs.isPanelMounted(value, keepMounted)) return null;
	return /* @__PURE__ */ jsx("div", {
		...tabs.getPanelProps({
			value,
			keepMounted
		}, {
			...rest,
			className: mergeClassName(`${BLOCK}__panel`, className)
		}),
		ref,
		children
	});
});
//#endregion
export { TabList, TabPanel, TabTitle, Tabs };

//# sourceMappingURL=Tabs.js.map