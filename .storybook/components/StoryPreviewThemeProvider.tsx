import React from "react";

import type { IThemeMode } from "../../src/core/theme";
import { CssReset, ThemeProvider } from "../../src/react/components";

/**
 * Storybook ThemeProvider wrapper
 *
 * Syncs with storybook-dark-mode and provides ThemeProvider + CssReset globally.
 * This is used in the global decorator so individual stories don't need to wrap with ThemeProvider.
 */
export default function StoryPreviewThemeProvider({ mode, children }: React.PropsWithChildren<{ mode: IThemeMode }>) {
  React.useEffect(() => {
    document.documentElement.dataset.theme = mode;
  }, [mode]);

  return (
    <ThemeProvider mode={mode} onModeChange={() => console.log("Theme changed")}>
      <CssReset />
      {children}
    </ThemeProvider>
  );
}
