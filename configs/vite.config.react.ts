/**
 * @file vite build config: react —— esm + d.ts。
 *
 * external `^venomous-ui\/`：避免把 utils / styles 二次打入 react 产物。
 */

import { resolve } from 'node:path';
import { globSync } from 'tinyglobby';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

const root = resolve(__dirname, '..');
const src = resolve(root, 'packages/react');
const out = resolve(root, 'dist/react');

const entry = Object.fromEntries(
  globSync(['components/index.ts', 'components/*/index.ts', 'hooks/*.ts', 'hooks/*.tsx'], {
    cwd: src,
  }).map((p) => [p.replace(/\.tsx?$/, ''), resolve(src, p)]),
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
      external: ['react', 'react-dom', 'react/jsx-runtime', /^venomous-ui\//],
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
      include: [
        resolve(src, 'components/**/*.ts'),
        resolve(src, 'components/**/*.tsx'),
        resolve(src, 'hooks/**/*.ts'),
      ],
      exclude: [resolve(src, 'index.ts')],
      rollupTypes: false,
      tsconfigPath: resolve(root, 'tsconfig.json'),
      compilerOptions: { rootDir: src },
    }),
  ],
});
