import type { Preview } from "@storybook/react";
import { useDarkMode } from "storybook-dark-mode";

import type { IThemeMode } from "../src/core/theme";
import { StoryDocsThemeProvider, StoryPreviewThemeProvider } from "./components";
import { storybookDarkTheme, storybookLightTheme } from "./manager";

const preview: Preview = {
  parameters: {
    layout: "padded",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    darkMode: {
      classTarget: "html",
      darkClass: [],
      lightClass: [],
      stylePreview: true,
      dark: storybookDarkTheme,
      light: storybookLightTheme,
    },
    docs: {
      container: StoryDocsThemeProvider,
    },
  },
  decorators: [
    (Story) => {
      const isDark = useDarkMode();
      const mode: IThemeMode = isDark ? "dark" : "light";
      return (
        <StoryPreviewThemeProvider mode={mode}>
          <div
            style={{
              minHeight: "100px",
              minWidth: "400px",
              maxWidth: "100%",
            }}
          >
            <Story />
          </div>
        </StoryPreviewThemeProvider>
      );
    },
  ],
};

export default preview;
