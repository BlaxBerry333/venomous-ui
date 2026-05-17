/**
 * @file Vitest 配置。
 *
 * coverage.include 按"已覆盖"模块增量扩张：写一批测试就把对应源码纳入统计，
 * 避免未测模块拖低阈值；阈值常驻 100，强制新增模块同步补测。
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
      include: [
        'packages/utils/helpers/**/*.ts',
        'packages/utils/classnames/**/*.ts',
        'packages/utils/tokens/**/*.ts',
        'packages/react/hooks/use-tabs.ts',
        'packages/react/hooks/use-isomorphic-layout-effect.ts',
        'packages/react/hooks/use-tooltip.ts',
        'packages/react/hooks/use-popover.ts',
        'packages/vue/composables/use-tabs.ts',
        'packages/vue/composables/use-tooltip.ts',
        'packages/vue/composables/use-popover.ts',
        'packages/react/components/Button/Button.tsx',
        'packages/react/components/Tabs/Tabs.tsx',
        'packages/react/components/Tooltip/Tooltip.tsx',
        'packages/react/components/Tooltip/TooltipTrigger.tsx',
        'packages/react/components/Tooltip/TooltipContent.tsx',
        'packages/react/components/Popover/Popover.tsx',
        'packages/react/components/Popover/PopoverTrigger.tsx',
        'packages/react/components/Popover/PopoverContent.tsx',
        'packages/react/components/Dialog/Dialog.tsx',
        'packages/vue/components/Button/Button.vue',
        'packages/vue/components/Tabs/Tabs.vue',
        'packages/vue/components/Tabs/TabTitle.vue',
        'packages/vue/components/Tabs/TabPanel.vue',
        'packages/vue/components/Tabs/shared.ts',
        'packages/vue/components/Tooltip/Tooltip.vue',
        'packages/vue/components/Tooltip/TooltipTrigger.vue',
        'packages/vue/components/Tooltip/TooltipContent.vue',
        'packages/vue/components/Popover/Popover.vue',
        'packages/vue/components/Popover/PopoverTrigger.vue',
        'packages/vue/components/Popover/PopoverContent.vue',
        'packages/vue/components/Dialog/Dialog.vue',
      ],
      exclude: ['**/index.ts', '**/*.d.ts'],
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
