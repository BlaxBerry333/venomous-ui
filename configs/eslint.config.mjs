// @ts-check
/**
 * @file ESLint Flat Config (eslint v9+/v10)
 *
 * 包边界强制：通过 no-restricted-imports 实现 design §3.3.2 所定义的依赖方向。
 *   - react / vue → utils, styles
 *   - utils ⇄ styles 互不依赖
 *   - react ⇄ vue 互不引用
 */

import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';

export default tseslint.config(
  {
    ignores: ['node_modules', 'dist', 'coverage', 'pnpm-lock.yaml', '**/*.d.ts'],
  },

  js.configs.recommended,
  ...tseslint.configs.recommended,
  prettier,

  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports', fixStyle: 'inline-type-imports' },
      ],
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      'no-restricted-syntax': [
        'error',
        {
          selector: 'TSEnumDeclaration',
          message: '禁用 enum；改用 `as const` 联合类型',
        },
      ],
    },
  },

  // utils 包：禁止反向依赖框架/styles 包
  {
    files: ['packages/utils/**/*.ts', 'packages/utils/**/*.tsx'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          paths: [
            { name: 'react', message: 'utils 不得依赖 react' },
            { name: 'react-dom', message: 'utils 不得依赖 react-dom' },
            { name: 'vue', message: 'utils 不得依赖 vue' },
          ],
          patterns: [
            { group: ['@react/*'], message: 'utils 不得反向引用 @react/*' },
            { group: ['@vue/*'], message: 'utils 不得反向引用 @vue/*' },
            { group: ['packages/styles/*'], message: 'utils 不得依赖 packages/styles/*' },
          ],
        },
      ],
    },
  },

  // styles 包：保留兜底（当前无 TS 文件）
  {
    files: ['packages/styles/**/*.ts', 'packages/styles/**/*.tsx'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          paths: [
            { name: 'react', message: 'styles 不得依赖 react' },
            { name: 'react-dom', message: 'styles 不得依赖 react-dom' },
            { name: 'vue', message: 'styles 不得依赖 vue' },
          ],
          patterns: [
            { group: ['@react/*'], message: 'styles 不得反向引用 @react/*' },
            { group: ['@vue/*'], message: 'styles 不得反向引用 @vue/*' },
            { group: ['@utils/*'], message: 'styles 不得依赖 @utils/*' },
          ],
        },
      ],
    },
  },

  // react 包：禁止引用 vue
  {
    files: ['packages/react/**/*.ts', 'packages/react/**/*.tsx'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          paths: [{ name: 'vue', message: 'react 包不得引用 vue' }],
          patterns: [{ group: ['@vue/*'], message: 'react 包不得引用 @vue/*' }],
        },
      ],
    },
  },

  // vue 包：禁止引用 react
  {
    files: ['packages/vue/**/*.ts', 'packages/vue/**/*.tsx'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          paths: [
            { name: 'react', message: 'vue 包不得引用 react' },
            { name: 'react-dom', message: 'vue 包不得引用 react-dom' },
          ],
          patterns: [{ group: ['@react/*'], message: 'vue 包不得引用 @react/*' }],
        },
      ],
    },
  },

  // 测试文件：放宽 any
  {
    files: ['**/__tests__/**/*.{ts,tsx}', '**/*.test.{ts,tsx}'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
);
