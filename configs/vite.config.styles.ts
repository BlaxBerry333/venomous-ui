/**
 * @file vite build config: styles —— SCSS → 同名 CSS，不聚合。
 */

import { resolve } from 'node:path';
import { globSync } from 'tinyglobby';
import { defineConfig } from 'vite';

const root = resolve(__dirname, '..');
const src = resolve(root, 'packages/styles');

// `_*.scss` 是 SCSS partial 约定（仅供其他 SCSS @use，不作为独立产物对外暴露）。
const input = Object.fromEntries(
  globSync(['reset.scss', 'tokens/*.scss', 'classnames/*.scss', 'components/*.scss'], {
    cwd: src,
    ignore: ['**/_*.scss'],
  }).map((p) => [p.replace(/\.scss$/, ''), resolve(src, p)]),
);

export default defineConfig({
  build: {
    outDir: resolve(root, 'dist/styles'),
    emptyOutDir: false,
    cssCodeSplit: true,
    sourcemap: true,
    minify: false,
    rollupOptions: {
      input,
      output: {
        assetFileNames: '[name].css',
      },
    },
  },
});
