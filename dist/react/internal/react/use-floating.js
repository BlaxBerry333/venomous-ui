import { nextAnchorName, sanitizeCssIdent, supportsCssAnchorPositioning } from "../dom/css-anchor.js";
import { getViewportSize } from "../dom/dom.js";
import { computeFloatingPosition, floatingPlacementToPositionArea, parseFloatingPlacement } from "../dom/floating.js";
import { useIsomorphicLayoutEffect } from "./use-isomorphic-layout-effect.js";
import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
//#region internal/react/use-floating.ts
var MARGIN_KEY = {
	top: "marginBottom",
	bottom: "marginTop",
	left: "marginRight",
	right: "marginLeft"
};
function setTopLayer(el, show) {
	const method = show ? el.showPopover : el.hidePopover;
	if (typeof method !== "function") return;
	try {
		method.call(el);
	} catch {}
}
/**
* 浮层定位：Popover / Tooltip 共用。
* - 支持 CSS Anchor Positioning 的浏览器：只写样式，布局阶段由浏览器定位，零 JS。
* - 否则：rAF 每帧检查 trigger / content 尺寸与视口，有变化才重算并写 transform。
* - 能力检测在挂载后做，首帧与服务端输出一致，不产生 hydration 差异。
*/
function useFloating(options) {
	const { open, placement, offset, collisionPadding, flip, shift, matchTriggerWidth = false } = options;
	const id = useId();
	const anchorName = useMemo(() => `--venomous-anchor-${sanitizeCssIdent(id)}-${nextAnchorName()}`, [id]);
	const [useAnchor, setUseAnchor] = useState(false);
	useIsomorphicLayoutEffect(() => {
		setUseAnchor(supportsCssAnchorPositioning());
	}, []);
	const triggerNode = useRef(null);
	const contentNode = useRef(null);
	const [resolvedPlacement, setResolvedPlacement] = useState(placement);
	const updatePosition = useCallback(() => {
		const trigger = triggerNode.current;
		const content = contentNode.current;
		if (!trigger || !content) return;
		const viewport = getViewportSize();
		if (matchTriggerWidth) content.style.minWidth = `${trigger.offsetWidth}px`;
		const result = computeFloatingPosition({
			anchorRect: trigger.getBoundingClientRect(),
			contentWidth: content.offsetWidth,
			contentHeight: content.offsetHeight,
			viewportWidth: viewport.width,
			viewportHeight: viewport.height,
			placement,
			offset,
			collisionPadding,
			flip,
			shift
		});
		content.style.transform = `translate3d(${Math.round(result.x)}px, ${Math.round(result.y)}px, 0)`;
		setResolvedPlacement(result.resolvedPlacement);
	}, [
		placement,
		offset,
		collisionPadding,
		flip,
		shift,
		matchTriggerWidth
	]);
	const latest = useRef({
		updatePosition,
		open,
		useAnchor
	});
	useIsomorphicLayoutEffect(() => {
		latest.current = {
			updatePosition,
			open,
			useAnchor
		};
	});
	const triggerRef = useCallback((node) => {
		triggerNode.current = node;
	}, []);
	const contentRef = useCallback((node) => {
		contentNode.current = node;
		if (!node || !latest.current.open) return;
		setTopLayer(node, true);
		if (!latest.current.useAnchor) latest.current.updatePosition();
	}, []);
	useIsomorphicLayoutEffect(() => {
		const content = contentNode.current;
		if (!content) return;
		setTopLayer(content, open);
		if (open && !useAnchor) updatePosition();
	}, [
		open,
		useAnchor,
		updatePosition
	]);
	useEffect(() => {
		if (useAnchor || !open) return void 0;
		let rafId = 0;
		let prev = "";
		const tick = () => {
			const trigger = triggerNode.current;
			const content = contentNode.current;
			if (trigger && content) {
				const r = trigger.getBoundingClientRect();
				const key = [
					r.x,
					r.y,
					r.width,
					r.height,
					content.offsetWidth,
					content.offsetHeight,
					window.innerWidth,
					window.innerHeight
				].join(",");
				if (key !== prev) {
					prev = key;
					latest.current.updatePosition();
				}
			}
			rafId = window.requestAnimationFrame(tick);
		};
		rafId = window.requestAnimationFrame(tick);
		return () => window.cancelAnimationFrame(rafId);
	}, [open, useAnchor]);
	const contentStyle = useMemo(() => {
		if (!useAnchor) return {
			position: "fixed",
			top: 0,
			left: 0,
			right: "auto",
			bottom: "auto",
			margin: 0
		};
		const { side } = parseFloatingPlacement(placement);
		return {
			position: "fixed",
			inset: "auto",
			margin: 0,
			[MARGIN_KEY[side]]: `${offset}px`,
			positionAnchor: anchorName,
			positionArea: floatingPlacementToPositionArea(placement),
			...flip ? { positionTryFallbacks: "flip-block, flip-inline, flip-block flip-inline" } : {},
			...matchTriggerWidth ? { minWidth: "anchor-size(width)" } : {}
		};
	}, [
		useAnchor,
		placement,
		offset,
		flip,
		matchTriggerWidth,
		anchorName
	]);
	const triggerStyle = useMemo(() => useAnchor ? { anchorName } : void 0, [useAnchor, anchorName]);
	return {
		triggerRef,
		contentRef,
		getTrigger: useCallback(() => triggerNode.current, []),
		getContent: useCallback(() => contentNode.current, []),
		resolvedPlacement: useAnchor ? placement : resolvedPlacement,
		triggerStyle,
		contentStyle
	};
}
//#endregion
export { useFloating };

//# sourceMappingURL=use-floating.js.map