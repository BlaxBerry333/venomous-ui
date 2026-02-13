import type { StorybookConfig } from "@storybook/react-vite";
import path from "path";

const config: StorybookConfig = {
  stories: [
    // All docs and stories are centralized in .storybook/stories
    "./stories/**/*.mdx",
    "./stories/**/*.stories.@(ts|tsx)",
  ],

  staticDirs: ["./assets"],

  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal: async (config) => {
    // Add Vue plugin to support .vue files (dynamic import for ESM)
    const vue = (await import("@vitejs/plugin-vue")).default;
    config.plugins = config.plugins || [];
    config.plugins.push(vue());

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
      watch: {
        // Reduce file system polling for better performance
        usePolling: false,
      },
    };
    // Optimize dependencies for faster cold start
    config.optimizeDeps = {
      ...config.optimizeDeps,
      include: ["react", "react-dom", "vue", "@storybook/blocks", "@storybook/theming", "storybook-dark-mode"],
    };
    config.build = {
      ...config.build,
      chunkSizeWarningLimit: 2000,
    };

    return config;
  },
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "storybook-dark-mode",
  ],
};

export default config;
