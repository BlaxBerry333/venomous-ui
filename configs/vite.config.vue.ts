/**
 * @file vite build config: vue —— esm + d.ts。
 *
 * external `^venomous-ui\/`：避免把 utils / styles 二次打入 vue 产物。
 */

import { resolve } from 'node:path';
import { globSync } from 'tinyglobby';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

const root = resolve(__dirname, '..');
const src = resolve(root, 'packages/vue');
const out = resolve(root, 'dist/vue');

const entry = Object.fromEntries(
  globSync(['components/index.ts', 'components/*/index.ts', 'composables/*.ts'], {
    cwd: src,
  }).map((p) => [p.replace(/\.ts$/, ''), resolve(src, p)]),
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
      external: ['vue', /^venomous-ui\//],
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
      include: [resolve(src, 'components/**/*.ts'), resolve(src, 'composables/**/*.ts')],
      exclude: [resolve(src, 'index.ts')],
      rollupTypes: false,
      tsconfigPath: resolve(root, 'tsconfig.json'),
      compilerOptions: { rootDir: src },
    }),
  ],
});
