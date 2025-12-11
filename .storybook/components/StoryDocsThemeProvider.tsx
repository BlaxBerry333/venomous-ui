import React from "react";

import { DocsContainer, DocsContainerProps } from "@storybook/blocks";
import { addons } from "@storybook/preview-api";
import { themes } from "@storybook/theming";
import { DARK_MODE_EVENT_NAME } from "storybook-dark-mode";

import type { IThemeMode } from "../../src/core/theme";
import { CssReset, ThemeProvider } from "../../src/react/components";

/**
 * Storybook Docs ThemeProvider wrapper
 *
 * Provides:
 * 1. DocsContainer with correct Storybook theme (light/dark)
 * 2. ThemeProvider for React components rendered in docs (Canvas, etc.)
 *
 * Syncs with storybook-dark-mode addon.
 */
export default function StoryDocsThemeProvider({ children, ...props }: React.PropsWithChildren<DocsContainerProps>) {
  const [isDark, setIsDark] = React.useState(false);
  const mode: IThemeMode = isDark ? "dark" : "light";

  React.useEffect(() => {
    const channel = addons.getChannel();

    const handleDarkModeChange = (dark: boolean) => {
      setIsDark(dark);
      document.documentElement.dataset.theme = dark ? "dark" : "light";
    };

    channel.on(DARK_MODE_EVENT_NAME, handleDarkModeChange);
    return () => channel.off(DARK_MODE_EVENT_NAME, handleDarkModeChange);
  }, []);

  return (
    <DocsContainer {...props} theme={isDark ? themes.dark : themes.light}>
      <ThemeProvider mode={mode}>
        <CssReset />
        {children}
      </ThemeProvider>
    </DocsContainer>
  );
}
