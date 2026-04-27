/**
 * @file vite build config: utils —— 纯 TS，esm + d.ts，零运行时依赖。
 */

import { resolve } from 'node:path';
import { globSync } from 'tinyglobby';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

const root = resolve(__dirname, '..');
const src = resolve(root, 'packages/utils');
const out = resolve(root, 'dist/utils');

const entry = Object.fromEntries(
  globSync(['helpers/*.ts'], { cwd: src }).map((p) => [p.replace(/\.ts$/, ''), resolve(src, p)]),
);

export default defineConfig({
  build: {
    outDir: out,
    emptyOutDir: false,
    sourcemap: true,
    minify: false,
    target: 'es2022',
    lib: {
      entry,
      formats: ['es'],
    },
    rollupOptions: {
      output: {
        entryFileNames: '[name].js',
        preserveModules: false,
      },
    },
  },
  plugins: [
    dts({
      entryRoot: src,
      outDir: out,
      include: [resolve(src, 'helpers/**/*.ts'), resolve(src, 'types/**/*.ts')],
      exclude: [resolve(src, 'index.ts')],
      rollupTypes: false,
      tsconfigPath: resolve(root, 'tsconfig.json'),
      compilerOptions: { rootDir: src },
    }),
  ],
});
