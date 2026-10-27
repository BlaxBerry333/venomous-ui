"use client";
import { mergeClassName } from "../internal/style/classnames.js";
import { Dialog } from "../Dialog/Dialog.js";
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
import "venomous-ui/styles/components/Drawer.css";
//#region packages/react/Drawer/Drawer.tsx
var BLOCK = "venomous--Drawer";
/**
* Drawer — 从屏幕边缘滑出的模态面板。行为与 Dialog 完全相同（原生 <dialog>、Esc、点背景关闭、滚动锁），
* 只是外观贴边。内部结构沿用 DialogHeader / DialogTitle / DialogBody / DialogFooter。
*/
var Drawer = forwardRef(function Drawer({ side = "right", className, ...rest }, ref) {
	return /* @__PURE__ */ jsx(Dialog, {
		...rest,
		ref,
		"data-side": side,
		className: mergeClassName(BLOCK, `${BLOCK}--${side}`, className)
	});
});
//#endregion
export { Drawer };

//# sourceMappingURL=Drawer.js.map