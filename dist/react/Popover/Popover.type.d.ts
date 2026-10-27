import { HTMLAttributes, ReactNode } from 'react';
/** 浮层相对 trigger 的位置：方向 + 可选对齐（省略对齐即居中） */
export type Placement = 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end';
/** 开关来源 */
export type PopoverOpenChangeReason = 'trigger-click' | 'outside-click' | 'esc-key';
export interface PopoverProps {
    /** 非受控初始开关，默认 false；与 open 同时给时以 open 为准并 dev 警告 */
    defaultOpen?: boolean;
    /** 受控开关；省略走非受控 */
    open?: boolean;
    /** 开关变更通知（受控/非受控都触发） */
    onOpenChange?: (open: boolean, reason: PopoverOpenChangeReason) => void;
    /** 默认 'bottom' */
    placement?: Placement;
    /** trigger 与 content 的间距（px），默认 8 */
    offset?: number;
    /** 与视口边缘保持的距离（px），默认 8 */
    collisionPadding?: number;
    /** 空间不够时翻到对侧，默认 true */
    flip?: boolean;
    /** 副轴方向推回视口内，默认 true */
    shift?: boolean;
    /** content 最小宽度跟随 trigger（下拉选择类场景），默认 false */
    matchTriggerWidth?: boolean;
    /** 点外部关闭，默认 true */
    closeOnOutsideClick?: boolean;
    /** Esc 关闭，默认 true */
    closeOnEsc?: boolean;
    /** 关闭时若焦点在 content 内，把焦点还给 trigger，默认 true */
    returnFocusOnClose?: boolean;
    children?: ReactNode;
}
export interface PopoverTriggerProps extends HTMLAttributes<HTMLButtonElement> {
    /**
     * 单个元素时不额外包 DOM，trigger 属性直接合并到它上面（应是可聚焦的按钮类元素，并转发 ref 与 props）；
     * 其他内容（文本等）会包一层 `<button type="button">`
     */
    children?: ReactNode;
}
export interface PopoverContentProps extends HTMLAttributes<HTMLDivElement> {
    /** content 的 role，决定 trigger 的 aria-haspopup，默认 'dialog' */
    role?: 'dialog' | 'menu' | 'listbox' | 'grid' | 'tree';
    /** 关闭时保留 DOM（隐藏），默认 false */
    keepMounted?: boolean;
    children?: ReactNode;
}
//# sourceMappingURL=Popover.type.d.ts.map