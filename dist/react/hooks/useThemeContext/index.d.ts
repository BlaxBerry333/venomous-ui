import { IThemeContextValue } from "../../../react/components/ThemeProvider";
/**
 * Hook to access the current theme
 *
 * When used within a ThemeProvider, returns the theme from context.
 * When used outside ThemeProvider, returns a default theme (for development/testing).
 *
 * @returns The current Theme object
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const theme = useTheme();
 *   return (
 *     <div style={{
 *       padding: theme.spacing(2),
 *       backgroundColor: theme.color.background("body"),
 *       borderRadius: theme.radius("medium"),
 *     }}>
 *       Content
 *     </div>
 *   );
 * }
 * ```
 */
export default function useThemeContext(): IThemeContextValue;
//# sourceMappingURL=index.d.ts.map