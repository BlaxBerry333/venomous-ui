import type { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from 'react';

export interface BreadcrumbProps extends HTMLAttributes<HTMLElement> {
  /** 层级之间的分隔符，默认 '/'；对读屏器隐藏 */
  separator?: ReactNode;
  /** 超过该数量时折叠中间层级，只显示第一项和最后 maxItems - 1 项，点省略号展开；默认不折叠 */
  maxItems?: number;
  /** 省略号按钮的无障碍名称，默认 'Show all' */
  expandLabel?: string;
  /** 导航区域的无障碍名称，默认 'Breadcrumb' */
  label?: string;
  children?: ReactNode;
}

export interface BreadcrumbItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** 当前页：渲染为文字并标记 aria-current="page" */
  current?: boolean;
  children?: ReactNode;
}
