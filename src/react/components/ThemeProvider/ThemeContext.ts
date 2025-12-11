"use client";

import React from "react";

import { COMPONENT_NAMES } from "@/core/constants";
import type { ITheme, IThemeMode } from "@/core/theme";

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

export const ThemeContext = React.createContext<IThemeContextValue | null>(null);

ThemeContext.displayName = COMPONENT_NAMES.ThemeProviderContext;
