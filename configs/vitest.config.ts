import react from "@vitejs/plugin-react-swc";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  plugins: [react() as any, vue() as any],
  test: {
    root: path.resolve(__dirname, ".."),
    globals: true,
    environment: "happy-dom",
    setupFiles: "./configs/vitest.setup.ts",
    include: ["src/**/*.test.{ts,tsx}"],
    exclude: ["node_modules", "dist", "storybook-static", ".storybook"],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html", "lcov"],
      reportsDirectory: "./.cache/coverage", // from root directory
      clean: true,
      include: [
        "src/react/components/**/*.{ts,tsx}",
        "src/react/hooks/**/*.{ts,tsx}",
        "src/vue/components/**/*.{ts,vue}",
        "src/vue/composables/**/*.ts",
        "src/core/constants/**/*.{ts,tsx}",
        "src/core/helpers/**/*.ts",
        "src/core/tools/**/*.{ts,tsx}",
      ],
      exclude: ["**/*.stories.tsx", "**/*.types.ts", "**/index.ts", "**/*.d.ts"],
      thresholds: {
        lines: 40,
        functions: 40,
        branches: 40,
        statements: 40,
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../src"),
    },
  },
});
