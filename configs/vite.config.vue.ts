import vue from "@vitejs/plugin-vue";
import { globSync } from "glob";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    vue(),
    visualizer({
      filename: ".cache/analyze/stats-vue.html",
      open: false,
      gzipSize: true,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../src"),
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: false,
    lib: {
      formats: ["es"],
      entry: "",
    },
    rollupOptions: {
      input: globSync("src/vue/**/*.{ts,vue}", {
        ignore: ["**/*.stories.tsx", "**/*.test.tsx", "**/*.test.ts", "**/*.d.ts"],
      }),
      external: ["vue", "@iconify/vue", "clsx"],
      output: {
        format: "es",
        preserveModules: true,
        preserveModulesRoot: "src",
        dir: "dist",
        entryFileNames: "[name].mjs",
      },
    },
  },
});
