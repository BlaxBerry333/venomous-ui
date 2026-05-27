/**
 * @file Vitest 配置。
 *
 * coverage.include 通配 packages 全量源码，新增模块默认计入阈值，
 * 没测就红 CI；阈值常驻 100，强制新模块同步补测。纯类型文件走 exclude 豁免。
 */

import { fileURLToPath, URL } from 'node:url';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@packages': fileURLToPath(new URL('../packages', import.meta.url)),
    },
  },
  test: {
    environment: 'happy-dom',
    include: ['tests/**/*.test.ts', 'tests/**/*.test.tsx'],
    globals: false,
    setupFiles: [
      fileURLToPath(new URL('../tests/__setup__/rtl-cleanup.ts', import.meta.url)),
      fileURLToPath(new URL('../tests/__setup__/dom-shims.ts', import.meta.url)),
    ],
    coverage: {
      provider: 'v8',
      include: ['packages/**/*.{ts,tsx,vue}'],
      exclude: ['**/index.ts', '**/*.type.ts', '**/*.d.ts', 'packages/utils/types/**'],
      reporter: ['text', 'html'],
      thresholds: {
        lines: 100,
        functions: 100,
        branches: 100,
        statements: 100,
      },
    },
  },
});
