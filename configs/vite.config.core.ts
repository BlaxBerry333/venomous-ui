import { copyFileSync, mkdirSync } from "fs";
import { globSync } from "glob";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig } from "vite";

// Plugin to copy CSS files to dist
function copyCssPlugin() {
  return {
    name: "copy-css",
    closeBundle() {
      const cssFiles = globSync("src/core/styles/**/*.css");
      for (const file of cssFiles) {
        const destPath = file.replace("src/", "dist/");
        const destDir = path.dirname(destPath);
        mkdirSync(destDir, { recursive: true });
        copyFileSync(file, destPath);
      }
    },
  };
}

export default defineConfig({
  plugins: [
    copyCssPlugin(),
    visualizer({
      filename: ".cache/analyze/stats-core.html",
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
