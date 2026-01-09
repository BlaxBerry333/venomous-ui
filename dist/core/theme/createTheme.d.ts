import { type ICustomDesignTokens } from "../designs";
import type { ITheme, IThemeMode } from "./types";
/**
 * Create a runtime theme object
 *
 * @param options - CreateThemeParams
 * @returns Theme object with function-based API
 *
 * @example
 * ```tsx
 * const theme = createTheme({
 *   mode: "dark",
 * });
 *
 * const theme = createTheme({
 *   palette: { main: "#ff0000", light: "#ff0000", dark: "#ff0000" }
 * });
 * ```
 */
export declare function createTheme({ mode, paletteColors, semanticColors, ...overrides }: {
    mode: IThemeMode;
} & ICustomDesignTokens): ITheme;
//# sourceMappingURL=createTheme.d.ts.map