import { ICustomDesignTokens } from "../../../core/designs";
import type { IThemeMode } from "../../../core/theme";
import type { PropsWithChildren } from "react";
export interface ThemeProviderProps extends PropsWithChildren {
    /**
     * Initial theme mode (uncontrolled mode)
     * Use this when you want ThemeProvider to manage mode state internally
     */
    defaultMode?: IThemeMode;
    /**
     * Theme mode (controlled mode)
     * When provided, ThemeProvider will use this value and won't manage mode state internally.
     * You must also provide onModeChange to handle mode changes.
     */
    mode?: IThemeMode;
    /**
     * Callback when mode changes (controlled mode)
     */
    onModeChange?: (themeMode: IThemeMode) => void;
    /**
     * Design tokens to customize theme
     */
    customDesignTokens?: ICustomDesignTokens;
}
//# sourceMappingURL=ThemeProvider.types.d.ts.map