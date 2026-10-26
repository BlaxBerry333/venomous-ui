/**
 * @file internal — 项目内部实现细节，**不进 package.json exports**。
 *
 * 子目录：
 *   react/   — React 端内部 hooks（如 SSR-safe layout effect / id 兜底等）
 *   dom/     — 框架无关的 DOM 工具（overlay stack / scroll lock / 定位等）
 *   style/   — 样式辅助运行时（主题切换支持等）
 *
 * 源码通过 tsconfig paths `@internal/*` 引用；构建时被 inline 进对应框架产物，
 * 不作为独立 dist 子路径暴露。
 */

export {};
