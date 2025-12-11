import { globSync } from "glob";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
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
      input: globSync("src/core/**/*.ts", {
        ignore: ["**/*.test.ts"],
      }),
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
