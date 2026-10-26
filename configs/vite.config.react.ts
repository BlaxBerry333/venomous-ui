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

// entry：根 barrel + 每个组件子目录的 index。
// 源码结构：packages/react/index.ts + packages/react/<Name>/index.ts
// 产物结构：dist/react/index.js + dist/react/<Name>/index.js
// （与 package.json exports 的 "./react" / "./react/*" 一一对齐）
const entry = Object.fromEntries([
  ['index', resolve(src, 'index.ts')],
  ...globSync('*/index.ts', { cwd: src }).map((p) => {
    const name = p.split('/')[0];
    return [`${name}/index`, resolve(src, p)];
  }),
]);

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
      include: [resolve(src, '**/*.ts'), resolve(src, '**/*.tsx')],
      rollupTypes: false,
      tsconfigPath: resolve(root, 'tsconfig.json'),
      compilerOptions: { rootDir: src },
    }),
  ],
});
