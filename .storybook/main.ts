import type { StorybookConfig } from "@storybook/react-vite";
import path from "path";

const config: StorybookConfig = {
  stories: [
    // Independent docs (Introduction, Guides, etc.)
    "./docs/**/*.mdx",
    // Module stories
    "../src/react/**/*.stories.@(ts|tsx)",
    "../src/vue/**/*.stories.@(ts|tsx)",
  ],

  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal: async (config) => {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "../src"),
    };
    config.server = {
      ...config.server,
      hmr: {
        overlay: false,
      },
    };
    config.build = {
      ...config.build,
      chunkSizeWarningLimit: 2000,
    };

    return config;
  },
  addons: ["@storybook/addon-essentials", "@storybook/addon-interactions", "storybook-dark-mode"],
};

export default config;
