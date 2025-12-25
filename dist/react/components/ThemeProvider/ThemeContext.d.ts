import React from "react";
import type { ITheme, IThemeMode } from "../../../core/theme";
export interface IThemeContextValue {
    /** Current theme object */
    theme: ITheme;
    /** Current theme mode */
    mode: IThemeMode;
    /** Set theme mode */
    setMode: (mode: IThemeMode) => void;
    /** Toggle between light and dark mode */
    toggleMode: () => void;
}
export declare const ThemeContext: React.Context<IThemeContextValue | null>;
//# sourceMappingURL=ThemeContext.d.ts.map