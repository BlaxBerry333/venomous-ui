"use client";

import React from "react";

import { COMPONENT_NAMES } from "@/core/constants";
import { generateThemeProviderCSS } from "@/core/css";
import { createTheme, IThemeMode } from "@/core/theme";
import { useStyleInjection } from "@/react/hooks";
import { ThemeContext, type IThemeContextValue } from "./ThemeContext";
import type { ThemeProviderProps } from "./ThemeProvider.types";

const ThemeProvider = React.memo<ThemeProviderProps>(
  ({ children, defaultMode = "light", mode: controlledMode, onModeChange, customDesignTokens }) => {
    /**
     * 1. Manage theme mode (controlled/uncontrolled)
     */
    const { currentMode: mode, setMode, toggleMode } = useMergeThemeMode(defaultMode, controlledMode, onModeChange);

    /**
     * 2. Build theme object from design tokens
     */
    const theme = React.useMemo(() => createTheme({ mode, ...customDesignTokens }), [mode, customDesignTokens]);

    /**
     * 3. Inject CSS variables
     */
    const themeCSS = generateThemeProviderCSS({
      paletteColors: theme.paletteColors,
      semanticColors: theme.semanticColors,
    });
    useStyleInjection(COMPONENT_NAMES.ThemeProvider, themeCSS);

    /**
     * 4. Build context value
     */
    const contextValue = React.useMemo<IThemeContextValue>(
      () => ({ theme, mode, setMode, toggleMode }),
      [theme, mode, setMode, toggleMode],
    );

    return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
  },
);

ThemeProvider.displayName = COMPONENT_NAMES.ThemeProvider;

export default ThemeProvider;

/**
 * Hook to manage theme mode state (supports both controlled and uncontrolled modes)
 */
function useMergeThemeMode(
  defaultMode: ThemeProviderProps["defaultMode"] = "light",
  controlledMode: ThemeProviderProps["mode"],
  onModeChange: ThemeProviderProps["onModeChange"],
) {
  const isControlled = controlledMode !== undefined;
  const [internalMode, setInternalMode] = React.useState<IThemeMode>(defaultMode);

  const currentMode = isControlled ? controlledMode : internalMode;

  const setMode = React.useCallback(
    (newMode: IThemeMode) => {
      if (isControlled) onModeChange?.(newMode);
      else setInternalMode(newMode);
    },
    [isControlled, onModeChange],
  );

  const toggleMode = React.useCallback(() => {
    setMode(currentMode === "light" ? "dark" : "light");
  }, [currentMode, setMode]);

  React.useEffect(() => {
    if (!isControlled) {
      document.documentElement.dataset.theme = currentMode;
    }
  }, [currentMode, isControlled]);

  return { currentMode, setMode, toggleMode };
}
