/**
 * @file 跨框架共享的组件业务语义 props（不含框架原生 HTML 属性继承）。
 *       各框架包基于这些 base props 再叠加自己的 HTMLAttributes。
 *
 * 命名约定：基础类型一律使用 `ComponentBase{ComponentName}Props` 形式
 */

export interface ComponentBaseButtonProps {
  /** 加载中：禁用交互并标记 aria-busy */
  loading?: boolean;
}
