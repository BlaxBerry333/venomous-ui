export type ColorScheme = 'light' | 'dark';
export interface UseThemeOptions<T extends string = ColorScheme> {
    /** 可选主题列表；默认 `['light', 'dark']`。setTheme 入参受此约束 */
    themes?: readonly T[];
    /** 默认主题；默认 `'system'`。server 首帧 + 用户未做选择时的 fallback */
    defaultTheme?: T | 'system';
    /** 是否启用 system（跟随 OS prefers-color-scheme）；默认 true */
    enableSystem?: boolean;
    /** localStorage key；传 false 关闭持久化；默认 `'venomous-theme'` */
    storageKey?: string | false;
}
export interface UseThemeReturn<T extends string = ColorScheme> {
    /** 用户选择的主题（可能是 `'system'`，未 resolve）。SSR 期为 undefined */
    theme: T | 'system' | undefined;
    /** 实际生效的主题（`'system'` 已 resolve 成 light/dark）。SSR 期为 undefined */
    resolvedTheme: T | undefined;
    /** 系统偏好（enableSystem=true 时有值）。SSR 期为 undefined */
    systemTheme: ColorScheme | undefined;
    /** 所有可用主题（含 `'system'` 当 enableSystem=true） */
    themes: readonly (T | 'system')[];
    /** 切换主题；写入 storage + 触发 DOM 副作用 + 通知同 tab 其他实例 */
    setTheme: (next: T | 'system') => void;
    /** client mount 完成标志。SSR 期为 false；UI 依赖 theme 时用它做 fallback 判断 */
    mounted: boolean;
}
export declare function useTheme<T extends string = ColorScheme>(options?: UseThemeOptions<T>): UseThemeReturn<T>;
//# sourceMappingURL=use-theme.d.ts.map