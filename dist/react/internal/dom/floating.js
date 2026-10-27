//#region internal/dom/floating.ts
/**
* 把 placement 字符串拆成 side + align 两段。`bottom` / `bottom-start` / `bottom-end` →
* `{ side: 'bottom', align: 'center' | 'start' | 'end' }`。无 `-` 后缀视为 center。
*
* @example
* const { side, align } = parseFloatingPlacement('top-end'); // { side: 'top', align: 'end' }
*/
function parseFloatingPlacement(p) {
	const [side, align] = p.split("-");
	return {
		side,
		align: align ?? "center"
	};
}
/**
* `parseFloatingPlacement` 的逆向：合成回 placement 字符串。`align === 'center'` 时省略后缀。
*
* @example
* joinFloatingPlacement('top', 'end'); // 'top-end'
* joinFloatingPlacement('top', 'center'); // 'top'
*/
function joinFloatingPlacement(side, align) {
	return align === "center" ? side : `${side}-${align}`;
}
var OPPOSITE_SIDE = {
	top: "bottom",
	bottom: "top",
	left: "right",
	right: "left"
};
/**
* 单趟纯函数：先按视口空间判断是否 flip 到对侧，再按 align 算出 x/y，最后按 collisionPadding clamp 实现 shift。
* 输出 content 的视口坐标 + 实际生效的 placement（可能与输入不同——CSS 钩子用）。
*
* @example
* const { x, y, resolvedPlacement } = computeFloatingPosition({
*   anchorRect, contentWidth, contentHeight, viewportWidth, viewportHeight,
*   placement: 'bottom-start', offset: 8, collisionPadding: 8, flip: true, shift: true,
* });
*/
function computeFloatingPosition(input) {
	const { anchorRect, contentWidth, contentHeight, viewportWidth, viewportHeight, placement, offset, collisionPadding, flip, shift } = input;
	const parsed = parseFloatingPlacement(placement);
	let { side } = parsed;
	const { align } = parsed;
	if (flip) {
		const space = {
			top: anchorRect.top - collisionPadding,
			bottom: viewportHeight - anchorRect.bottom - collisionPadding,
			left: anchorRect.left - collisionPadding,
			right: viewportWidth - anchorRect.right - collisionPadding
		};
		const needed = side === "top" || side === "bottom" ? contentHeight + offset : contentWidth + offset;
		if (space[side] < needed && space[OPPOSITE_SIDE[side]] > space[side]) side = OPPOSITE_SIDE[side];
	}
	let x = 0;
	let y = 0;
	if (side === "top") y = anchorRect.top - contentHeight - offset;
	else if (side === "bottom") y = anchorRect.bottom + offset;
	else if (side === "left") x = anchorRect.left - contentWidth - offset;
	else x = anchorRect.right + offset;
	if (side === "top" || side === "bottom") if (align === "start") x = anchorRect.left;
	else if (align === "end") x = anchorRect.right - contentWidth;
	else x = anchorRect.left + (anchorRect.width - contentWidth) / 2;
	else if (align === "start") y = anchorRect.top;
	else if (align === "end") y = anchorRect.bottom - contentHeight;
	else y = anchorRect.top + (anchorRect.height - contentHeight) / 2;
	if (shift) if (side === "top" || side === "bottom") {
		const minX = collisionPadding;
		const maxX = viewportWidth - contentWidth - collisionPadding;
		if (maxX >= minX) {
			if (x < minX) x = minX;
			else if (x > maxX) x = maxX;
		}
	} else {
		const minY = collisionPadding;
		const maxY = viewportHeight - contentHeight - collisionPadding;
		if (maxY >= minY) {
			if (y < minY) y = minY;
			else if (y > maxY) y = maxY;
		}
	}
	return {
		x,
		y,
		resolvedPlacement: joinFloatingPlacement(side, align)
	};
}
/**
* 把 placement 翻成 CSS Anchor Positioning 的 `position-area` 值（如 `top span-right`）。
* 用于支持原生 anchor 的浏览器，让 layout 阶段直接定位，零 JS。
*
* @example
* el.style.positionArea = floatingPlacementToPositionArea('bottom-start');
*/
function floatingPlacementToPositionArea(p) {
	const { side, align } = parseFloatingPlacement(p);
	if (side === "top" || side === "bottom") {
		if (align === "start") return `${side} span-right`;
		if (align === "end") return `${side} span-left`;
		return side;
	}
	if (align === "start") return `${side} span-bottom`;
	if (align === "end") return `${side} span-top`;
	return side;
}
//#endregion
export { computeFloatingPosition, floatingPlacementToPositionArea, parseFloatingPlacement };

//# sourceMappingURL=floating.js.map