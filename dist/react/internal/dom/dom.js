//#region internal/dom/dom.ts
/**
* 读取当前视口宽高（CSS 像素）；SSR 期返回零尺寸，避免 ReferenceError。
*
* @example
* const { width, height } = getViewportSize();
*/
function getViewportSize() {
	if (typeof window === "undefined") return {
		width: 0,
		height: 0
	};
	return {
		width: window.innerWidth || document.documentElement.clientWidth,
		height: window.innerHeight || document.documentElement.clientHeight
	};
}
/**
* 判断 PointerEvent 的命中路径是否落在给定节点之一内部，用于 outside-click 检测。
* 优先 composedPath（Shadow DOM 兼容、且 portal 抽离的子树仍算 inside），
* 退化时再用 event.target + node.contains。
*
* @example
* if (!isEventInsideNodes(event, [triggerEl, contentEl])) close();
*/
function isEventInsideNodes(event, nodes) {
	const path = typeof event.composedPath === "function" ? event.composedPath() : [];
	if (path.length > 0) {
		for (const node of nodes) if (node && path.includes(node)) return true;
		return false;
	}
	const target = event.target;
	if (!target) return false;
	for (const node of nodes) if (node && node.contains(target)) return true;
	return false;
}
//#endregion
export { getViewportSize, isEventInsideNodes };

//# sourceMappingURL=dom.js.map