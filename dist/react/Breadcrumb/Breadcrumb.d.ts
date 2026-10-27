import { BreadcrumbItemProps, BreadcrumbProps } from './Breadcrumb.type';
/**
 * Breadcrumb — 层级导航：nav[aria-label] > ol > li。
 * 分隔符对读屏器隐藏；层级多时可折叠中间部分，展开按钮可用键盘操作。
 */
export declare const Breadcrumb: import('react').ForwardRefExoticComponent<BreadcrumbProps & import('react').RefAttributes<HTMLElement>>;
/** 单个层级：有 href 且不是当前页时渲染链接，否则渲染文字 */
export declare const BreadcrumbItem: import('react').ForwardRefExoticComponent<BreadcrumbItemProps & import('react').RefAttributes<HTMLAnchorElement>>;
//# sourceMappingURL=Breadcrumb.d.ts.map