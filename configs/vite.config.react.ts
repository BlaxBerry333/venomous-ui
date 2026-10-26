/**
 * @file vite build config: react —— esm + d.ts。
 *
 * - preserveModules：一个源文件一个产物，模块级 'use client' 指令随之保留，也让用户按组件 tree-shake。
 * - 组件源码 `import '@packages/styles/components/<Name>.scss'` 在产物里改写成
 *   `import 'venomous-ui/styles/components/<Name>.css'`（外部依赖，走 package.json exports 自引用），
 *   CSS 本体由 vite.config.styles.ts 单独编译，用户 bundler 按 import 自动带上组件样式。
 * - `@internal/*` 打进 react 产物（不对外暴露）。
 */

import { resolve } from 'node:path';
import { globSync } from 'tinyglobby';
import { defineConfig, type Plugin } from 'vite';
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

// alias 先于插件执行，这里拿到的是已解析成绝对路径的 id
const COMPONENT_STYLE = /\/packages\/styles\/components\/([^/]+)\.scss$/;

function externalizeComponentStyles(): Plugin {
  return {
    name: 'venomous:externalize-component-styles',
    enforce: 'pre',
    resolveId(id) {
      const match = COMPONENT_STYLE.exec(id);
      if (!match) return null;
      return { id: `venomous-ui/styles/components/${match[1]}.css`, external: true };
    },
  };
}

export default defineConfig({
  resolve: {
    alias: {
      '@packages': resolve(root, 'packages'),
      '@internal': resolve(root, 'internal'),
    },
  },
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
        preserveModules: true,
        preserveModulesRoot: src,
        entryFileNames: '[name].js',
      },
    },
  },
  plugins: [
    externalizeComponentStyles(),
    dts({
      entryRoot: src,
      outDir: out,
      include: [resolve(src, '**/*.ts'), resolve(src, '**/*.tsx'), resolve(root, 'types/*.d.ts')],
      rollupTypes: false,
      tsconfigPath: resolve(root, 'tsconfig.json'),
      // 公开类型只在 packages/react 定义；internal 的实现会被 tsc 读到，rootDir 放宽到仓库根避免 TS6059
      compilerOptions: { rootDir: root },
    }),
  ],
});
