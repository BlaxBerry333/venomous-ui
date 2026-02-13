import react from "@vitejs/plugin-react-swc";
import { globSync } from "glob";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: ".cache/analyze/stats-react.html",
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
      input: globSync("src/react/**/*.{ts,tsx}", {
        ignore: ["**/*.stories.tsx", "**/*.test.tsx", "**/*.test.ts"],
      }),
      external: ["react", "react-dom", "react/jsx-runtime", "@iconify/react", "clsx"],
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
