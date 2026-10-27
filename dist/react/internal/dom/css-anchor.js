//#region internal/dom/css-anchor.ts
/**
* @file CSS Anchor Positioning（Chrome 125+ / Safari 26+）能力探测 + anchor-name 工具。
*/
var anchorSupportCache = null;
/**
* 探测当前浏览器是否支持 CSS Anchor Positioning（Chrome 125+ / Safari 26+）；
* 模块级缓存，首次同步算一次后零开销。SSR 期返回 false。
*
* @example
* const useAnchor = supportsCssAnchorPositioning();
*/
function supportsCssAnchorPositioning() {
	if (anchorSupportCache !== null) return anchorSupportCache;
	if (typeof CSS === "undefined" || typeof CSS.supports !== "function") {
		anchorSupportCache = false;
		return false;
	}
	anchorSupportCache = CSS.supports("anchor-name: --x") && CSS.supports("position-try-fallbacks: flip-block");
	return anchorSupportCache;
}
/**
* 把任意字符串转成合法 CSS ident（[a-zA-Z0-9_-]），非法字符替换为 `_`。
* 用于把 React useId 输出（形如 `:r0:`）转成可写入 anchor-name 的 ident。
*
* @example
* const name = `--anchor-${sanitizeCssIdent(id)}`;
*/
function sanitizeCssIdent(id) {
	return id.replace(/[^a-zA-Z0-9_-]/g, "_");
}
var anchorNameCounter = 0;
/**
* 取一个进程内全局唯一的 anchor-name 序号（递增整数字符串）。
* 多 ReactRoot / 多 createApp 场景下，各自 useId 都从 `:r0:` 开始重数 —— 仅靠 useId 拼 anchor-name
* 会撞名，而 CSS Anchor Positioning 一旦撞名整组 fallback 到 auto；用此计数器追加后缀即可避免。
*
* @example
* const anchorName = `--anchor-${sanitizeCssIdent(id)}-${nextAnchorName()}`;
*/
function nextAnchorName() {
	anchorNameCounter += 1;
	return `${anchorNameCounter}`;
}
//#endregion
export { nextAnchorName, sanitizeCssIdent, supportsCssAnchorPositioning };

//# sourceMappingURL=css-anchor.js.map