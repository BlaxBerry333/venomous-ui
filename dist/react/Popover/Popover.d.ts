import { ReactElement } from 'react';
import { PopoverContentProps, PopoverProps, PopoverTriggerProps } from './Popover.type';
/**
 * Popover — 点击 trigger 打开的浮层。根组件不渲染 DOM，只提供状态。
 *
 * - content 带 `popover="manual"`，打开时进入 top layer：不被祖先 overflow / z-index 遮挡，
 *   在模态 Dialog 里也能正常显示与交互（content 渲染在 trigger 旁，仍是 Dialog 的后代，不会被设为 inert）。
 * - Esc / 点外部经全局浮层栈处理：嵌套时只关最上层，Esc 不会连带关闭外层 Dialog。
 */
export declare function Popover({ defaultOpen, open: openProp, onOpenChange, placement, offset, collisionPadding, flip, shift, matchTriggerWidth, closeOnOutsideClick, closeOnEsc, returnFocusOnClose, children, }: PopoverProps): ReactElement;
export declare const PopoverTrigger: import('react').ForwardRefExoticComponent<PopoverTriggerProps & import('react').RefAttributes<HTMLButtonElement>>;
export declare const PopoverContent: import('react').ForwardRefExoticComponent<PopoverContentProps & import('react').RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Popover.d.ts.map