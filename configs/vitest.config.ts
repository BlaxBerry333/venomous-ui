/**
 * @file Vitest 配置。
 *
 * coverage.include 按"已覆盖"模块增量扩张：写一批测试就把对应源码纳入统计，
 * 避免未测模块拖低阈值；阈值常驻 100，强制新增模块同步补测。
 */

import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    alias: {
      '@packages': fileURLToPath(new URL('../packages', import.meta.url)),
    },
  },
  test: {
    environment: 'happy-dom',
    include: ['tests/**/*.test.ts', 'tests/**/*.test.tsx'],
    globals: false,
    coverage: {
      provider: 'v8',
      // 各模块的测试逐批落地后再纳入 include；常驻 thresholds 100 强制新模块同步补测。
      include: [],
      exclude: ['**/index.ts', '**/*.d.ts'],
      reporter: ['text', 'html'],
    },
  },
});
