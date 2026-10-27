import { mergeClassName } from "../internal/style/classnames.js";
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
import "venomous-ui/styles/components/Card.css";
//#region packages/react/Card/Card.tsx
var BLOCK = "venomous--Card";
/** Card — 内容分组容器。纯展示组件，无 hooks，可在服务端组件中直接使用。 */
var Card = forwardRef(function Card({ variant = "outlined", className, ...rest }, ref) {
	return /* @__PURE__ */ jsx("div", {
		...rest,
		ref,
		className: mergeClassName(BLOCK, `${BLOCK}--${variant}`, className)
	});
});
var CardHeader = forwardRef(function CardHeader({ className, ...rest }, ref) {
	return /* @__PURE__ */ jsx("div", {
		...rest,
		ref,
		className: mergeClassName(`${BLOCK}__header`, className)
	});
});
/** 标题，渲染为 h3；页面需要其他标题层级时，自己写对应标签并加 `venomous--Card__title` 类 */
var CardTitle = forwardRef(function CardTitle({ className, ...rest }, ref) {
	return /* @__PURE__ */ jsx("h3", {
		...rest,
		ref,
		className: mergeClassName(`${BLOCK}__title`, className)
	});
});
var CardBody = forwardRef(function CardBody({ className, ...rest }, ref) {
	return /* @__PURE__ */ jsx("div", {
		...rest,
		ref,
		className: mergeClassName(`${BLOCK}__body`, className)
	});
});
var CardFooter = forwardRef(function CardFooter({ className, ...rest }, ref) {
	return /* @__PURE__ */ jsx("div", {
		...rest,
		ref,
		className: mergeClassName(`${BLOCK}__footer`, className)
	});
});
//#endregion
export { Card, CardBody, CardFooter, CardHeader, CardTitle };

//# sourceMappingURL=Card.js.map