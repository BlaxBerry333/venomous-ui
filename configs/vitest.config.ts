/**
 * @file Vitest 配置 —— 测试模板。
 *
 * 当前无业务测试，待真实测试落地后扩展（参考 conventions.md §4 测试策略）。
 */

import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    alias: {
      '@utils': fileURLToPath(new URL('../packages/utils', import.meta.url)),
      '@react': fileURLToPath(new URL('../packages/react', import.meta.url)),
      '@vue': fileURLToPath(new URL('../packages/vue', import.meta.url)),
    },
  },
  test: {
    environment: 'happy-dom',
    include: ['packages/**/__tests__/**/*.test.ts', 'packages/**/__tests__/**/*.test.tsx'],
    globals: false,
  },
});
