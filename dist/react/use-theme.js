"use client";
import { DEFAULT_STORAGE_KEY, DEFAULT_THEMES, THEME_ATTRIBUTE, normalizeTheme } from "./internal/style/theme.js";
import { useCallback, useEffect, useMemo, useState } from "react";
//#region packages/react/use-theme.ts
/**
* @file useTheme — 主题状态管理 hook（SSR 安全 / 持久化 / 系统偏好 / 跨 tab + 同 tab 同步）
*
* 设计要点：
* - server 端 `theme` / `resolvedTheme` 一律返回 undefined，避免 hydration mismatch；
*   首屏正确的 <html data-theme> 由 <ThemeScript /> 在 head 内同步注入解决。
* - 持久化、systemTheme 监听、跨 tab storage 监听、同 tab 跨实例同步都在 effect 内完成，
*   server 期不触达 DOM。
* - setTheme 接受 'system'，运行时按 prefers-color-scheme 解析成 resolvedTheme。
* - 固定写 <html data-theme>，与 themes/dark.scss 的 `:root[data-theme='dark']` 对应。
*   自定义 themes 需要用户自己提供 `:root[data-theme='<name>']` 的 CSS。
* - storage 里的脏值（不在 themes 内）回落到 defaultTheme，不会原样写进 DOM。
*/
var SYSTEM_DARK_QUERY = "(prefers-color-scheme: dark)";
function getSystemColorScheme() {
	return window.matchMedia(SYSTEM_DARK_QUERY).matches ? "dark" : "light";
}
function readStoredTheme(storageKey) {
	if (storageKey === false) return null;
	try {
		return window.localStorage.getItem(storageKey);
	} catch {
		return null;
	}
}
function writeStoredTheme(storageKey, value) {
	try {
		window.localStorage.setItem(storageKey, value);
	} catch {}
}
var themeChangeListeners = /* @__PURE__ */ new Set();
function notifyThemeChange(storageKey, value) {
	for (const fn of themeChangeListeners) fn(storageKey, value);
}
function useTheme(options = {}) {
	const { themes = DEFAULT_THEMES, defaultTheme = "system", enableSystem = true, storageKey = DEFAULT_STORAGE_KEY } = options;
	const [mounted, setMounted] = useState(false);
	const [theme, setThemeState] = useState(void 0);
	const [systemTheme, setSystemTheme] = useState(void 0);
	const themesKey = themes.join("\n");
	const normalize = useCallback((raw) => normalizeTheme(raw, {
		themes,
		enableSystem,
		defaultTheme
	}), [
		themesKey,
		enableSystem,
		defaultTheme
	]);
	useEffect(() => {
		setThemeState(normalize(readStoredTheme(storageKey)));
		if (enableSystem) setSystemTheme(getSystemColorScheme());
		setMounted(true);
	}, [
		normalize,
		storageKey,
		enableSystem
	]);
	useEffect(() => {
		if (!enableSystem) return void 0;
		const mql = window.matchMedia(SYSTEM_DARK_QUERY);
		const handler = (e) => {
			setSystemTheme(e.matches ? "dark" : "light");
		};
		mql.addEventListener("change", handler);
		return () => mql.removeEventListener("change", handler);
	}, [enableSystem]);
	useEffect(() => {
		if (storageKey === false) return void 0;
		const onStorage = (e) => {
			if (e.key === storageKey) setThemeState(normalize(e.newValue));
		};
		const onChange = (key, value) => {
			if (key === storageKey) setThemeState(normalize(value));
		};
		window.addEventListener("storage", onStorage);
		themeChangeListeners.add(onChange);
		return () => {
			window.removeEventListener("storage", onStorage);
			themeChangeListeners.delete(onChange);
		};
	}, [storageKey, normalize]);
	const resolvedTheme = useMemo(() => {
		if (theme === void 0) return void 0;
		if (theme === "system") return systemTheme ?? "light";
		return theme;
	}, [theme, systemTheme]);
	useEffect(() => {
		if (resolvedTheme === void 0) return;
		document.documentElement.setAttribute(THEME_ATTRIBUTE, resolvedTheme);
	}, [resolvedTheme]);
	const setTheme = useCallback((next) => {
		setThemeState(next);
		if (storageKey === false) return;
		writeStoredTheme(storageKey, next);
		notifyThemeChange(storageKey, next);
	}, [storageKey]);
	return {
		theme,
		resolvedTheme,
		systemTheme,
		themes: useMemo(() => enableSystem ? ["system", ...themes] : themes, [enableSystem, themesKey]),
		setTheme,
		mounted
	};
}
//#endregion
export { useTheme };

//# sourceMappingURL=use-theme.js.map