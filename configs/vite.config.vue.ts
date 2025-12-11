import vue from "@vitejs/plugin-vue";
import { globSync } from "glob";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [vue()],
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
        ignore: ["**/*.stories.tsx", "**/*.test.tsx", "**/*.test.ts"],
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
