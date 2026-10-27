//#region internal/style/theme.ts
/**
* @file 主题相关的共享常量与纯函数；useTheme 与 ThemeScript 共用，保证两边默认值和校验规则一致。
*/
var DEFAULT_THEMES = ["light", "dark"];
var DEFAULT_STORAGE_KEY = "venomous-theme";
/** 固定写在 <html> 上；themes/dark.scss 的选择器是 `:root[data-theme='dark']` */
var THEME_ATTRIBUTE = "data-theme";
/**
* 把 localStorage 读出的原始值收敛成合法主题；不在 `themes` 内（且不是启用中的 'system'）的脏值回落到 defaultTheme。
*
* @example
* normalizeTheme('purple', { themes: ['light', 'dark'], enableSystem: true, defaultTheme: 'system' }); // 'system'
*/
function normalizeTheme(raw, options) {
	if (raw === null) return options.defaultTheme;
	if (options.enableSystem && raw === "system") return raw;
	return options.themes.includes(raw) ? raw : options.defaultTheme;
}
//#endregion
export { DEFAULT_STORAGE_KEY, DEFAULT_THEMES, THEME_ATTRIBUTE, normalizeTheme };

//# sourceMappingURL=theme.js.map