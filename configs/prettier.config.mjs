// @ts-check
/**
 * @file Prettier 配置 —— 项目统一格式化基线。
 *
 * 与 conventions.md §1.5 对齐：行宽 100、单引号、分号、trailingComma: 'all'、2 空格、LF。
 */

/** @type {import('prettier').Config} */
export default {
  printWidth: 100,
  singleQuote: true,
  semi: true,
  trailingComma: 'all',
  tabWidth: 2,
  useTabs: false,
  endOfLine: 'lf',
  arrowParens: 'always',
};
