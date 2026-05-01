/**
 * @file StoryScopedStyleDecorator —— 把组件 SCSS 编译产物以「容器命名空间」隔离的方式注入到 Canvas。
 *
 * 用途：演示「消费方 import 'venomous-ui/styles/components/Xxx.css' 后的视觉」时，
 *       让样式只对当前 story 容器生效，不污染同页其他 Canvas（多个 story 共享一个 iframe）。
 *
 * 工作方式：
 * 1. 把传入 css 中所有 `.venomous--{componentName}` 选择器加上 `.{scopeClass}` 前缀
 * 2. 注入 `<style>` 到 document.head（按 styleNodeId 去重，组件卸载时移除）
 * 3. 渲染一个带 scopeClass 的 wrapper `<div>` 包住 children
 *
 * 选择器改写仅匹配以 `.venomous--{name}` 开头的行，避免破坏 @charset / 注释 / @rule 等非选择器。
 */

import { useEffect, type ReactNode } from 'react';

interface Props {
  /** 组件 SCSS 编译后的 CSS 文本，通常通过 `import css from '...?inline'` 取得 */
  css: string;
  /** 组件名（首字母大写），例如 `'Button'`。用于匹配 `.venomous--{componentName}` 选择器 */
  componentName: string;
  children: ReactNode;
}

export function StoryScopedStyleDecorator({ css, componentName, children }: Props) {
  const scopeClass = `venomous-${componentName.toLowerCase()}-with-style-demo`;
  const styleNodeId = `${scopeClass}-css`;
  const scopedCss = scopeCss(css, componentName, scopeClass);

  useEffect(() => {
    if (document.getElementById(styleNodeId)) return;
    const node = document.createElement('style');
    node.id = styleNodeId;
    node.textContent = scopedCss;
    document.head.appendChild(node);
    return () => {
      node.remove();
    };
  }, [styleNodeId, scopedCss]);

  return <div className={scopeClass}>{children}</div>;
}

function scopeCss(css: string, componentName: string, scopeClass: string): string {
  const selector = `\\.venomous--${componentName}`;
  const re = new RegExp(`(^|[}\\s,])(${selector})`, 'g');
  return css.replace(re, `$1.${scopeClass} $2`);
}
