// @ts-check
/**
 * @file Stylelint 配置 —— SCSS 标准规则。
 *
 * 起步采用 stylelint-config-standard-scss 的默认规则。
 * 与 conventions.md §1.7 偏差的强制规则（不嵌套、引 token、单类名）后续按真实违例追加。
 */

/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard-scss'],
  rules: {
    // BEM-like 命名（venomous__{Name}-{role}），不强制选择器命名风格
    'selector-class-pattern': null,
    // 允许 -webkit-line-clamp / -webkit-overflow-scrolling 等业界通用前缀
    'property-no-vendor-prefix': null,
    'value-no-vendor-prefix': null,

    // 颜色风格类规则关闭：保留 rgba/小数透明度/6 位 hex 等显式写法
    'color-function-alias-notation': null,
    'color-function-notation': null,
    'alpha-value-notation': null,
    'color-hex-length': null,

    // font-family 关键字大小写关闭：保留 'Roboto' / 'Menlo' 等专有名词原样
    'value-keyword-case': null,

    // custom property 前空行关闭：允许用空行做语义分组（如 z-index-max 前空行）
    'custom-property-empty-line-before': null,

    // 不强制合并 padding/margin shorthand（safe-area 等场景展开 4 个方向更可读）
    'declaration-block-no-redundant-longhand-properties': null,
  },
};
