import { ReactElement } from 'react';
import { TooltipContentProps, TooltipProps, TooltipTriggerProps } from './Tooltip.type';
/**
 * Tooltip — 悬停 / 键盘聚焦显示的提示。根组件不渲染 DOM，只提供状态。
 *
 * - 指针从 trigger 移到提示内容上不会关闭（WCAG 1.4.13）。
 * - aria-describedby 写在真正获得焦点的元素上（TooltipTrigger 把属性合并到子元素）。
 * - 与 Popover 共用定位与 top layer；进入全局浮层栈，Esc 先关 tooltip，不连带关闭外层。
 */
export declare function Tooltip({ defaultOpen, open: openProp, onOpenChange, placement, offset, collisionPadding, flip, shift, openDelay, closeDelay, closeOnEsc, trigger, disabled, children, }: TooltipProps): ReactElement;
export declare const TooltipTrigger: import('react').ForwardRefExoticComponent<TooltipTriggerProps & import('react').RefAttributes<HTMLElement>>;
export declare const TooltipContent: import('react').ForwardRefExoticComponent<TooltipContentProps & import('react').RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Tooltip.d.ts.map