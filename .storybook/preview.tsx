import type { Preview } from "@storybook/react";

// Reset CSS
import "@/core/styles/reset.css";
// Inject CSS Variables
import "@/core/styles/variables/index.css";
// Inject Component CSS
import "@/core/styles/components/index.css";
import { DocsPage, ThemedDocsContainer } from "./components";
import { storybookDarkTheme, storybookLightTheme } from "./manager";
import "./storybook-overrides.css";

const preview: Preview = {
  parameters: {
    layout: "padded",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      container: ThemedDocsContainer,
      page: DocsPage,
    },
    darkMode: {
      classTarget: "html",
      darkClass: ["dark"],
      lightClass: [],
      stylePreview: true,
      dark: storybookDarkTheme,
      light: storybookLightTheme,
    },
  },
  decorators: [
    (Story) => {
      return (
        <div
          style={{
            minHeight: "100px",
            minWidth: "400px",
            maxWidth: "100%",
          }}
        >
          <Story />
        </div>
      );
    },
  ],
};

export default preview;
