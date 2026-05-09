/**
 * @file 跨框架共享的组件业务语义 props（不含框架原生 HTML 属性继承）。
 *       各框架包基于这些 base props 再叠加自己的 HTMLAttributes。
 *
 * 命名约定：基础类型一律使用 `ComponentBase{ComponentName}Props` 形式
 */

import type { VirtualAnchorElement } from '@packages/utils/helpers';

export interface ComponentBaseButtonProps {
  /** 加载中：禁用交互并标记 aria-busy */
  loading?: boolean;
}

export interface ComponentBaseDialogProps {
  /** 非受控初始开关，默认 false；与 open 互斥（同时给以 open 为准并 dev 警告） */
  defaultOpen?: boolean;
  /** 受控开关；省略走非受控（内部状态） */
  open?: boolean;
  /** 开关变更通知（受控/非受控都触发，用于消费方同步状态或埋点） */
  onOpenChange?: (open: boolean) => void;
  /** 点 backdrop 是否关闭，默认 true */
  closeOnBackdropClick?: boolean;
  /** Esc 是否关闭，默认 true */
  closeOnEsc?: boolean;
  /** 打开时是否锁 body 滚动，默认 true */
  lockScroll?: boolean;
  /** a11y label：与 ariaLabelledBy 二选一，皆缺给 dev 警告 */
  ariaLabel?: string;
  /** a11y label：与 ariaLabel 二选一 */
  ariaLabelledBy?: string;
}

export interface ComponentBaseTabsOptions {
  /** 非受控初始选中；与 value 互斥，同时给以 value 为准并 dev 警告 */
  defaultValue?: string;
  /** 受控选中；省略走非受控 */
  value?: string;
  /** 选中变更通知（受控/非受控都触发） */
  onValueChange?: (value: string) => void;
  /** automatic 移焦即切换 / manual Enter|Space 才切，默认 automatic */
  activationMode?: 'automatic' | 'manual';
  /** 末尾是否回环，默认 true */
  loop?: boolean;
}

export type ComponentBasePlacement =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'left-start'
  | 'left-end'
  | 'right'
  | 'right-start'
  | 'right-end';

/** 关闭来源；派生组件可据此区分用户主动关闭 vs 受控外部置 false */
export type PopoverOpenChangeReason =
  | 'trigger-click'
  | 'outside-click'
  | 'esc-key'
  | 'scroll'
  | 'imperative';

/** 关闭来源；区分用户主动 vs 受控外部置 false */
export type TooltipOpenChangeReason = 'hover' | 'unhover' | 'click' | 'esc-key' | 'imperative';

export interface ComponentBaseTooltipProps {
  /** 非受控初始开关，默认 false */
  defaultOpen?: boolean;
  /** 受控开关 */
  open?: boolean;
  onOpenChange?: (open: boolean, reason?: TooltipOpenChangeReason) => void;
  /** 默认 'top' */
  placement?: ComponentBasePlacement;
  /** trigger 与 content 主轴间距（px），默认 6 */
  offset?: number;
  /** 视口边距（px），默认 8 */
  collisionPadding?: number;
  /** 空间不够翻面，默认 true */
  flip?: boolean;
  /** 副轴贴边保留视口内，默认 true */
  shift?: boolean;
  /** 打开延迟（ms），默认 200 */
  openDelay?: number;
  /** 关闭延迟（ms），默认 200 */
  closeDelay?: number;
  /** Esc 关闭，默认 true */
  closeOnEsc?: boolean;
  /** 触发方式，默认 'hover'。'hover' 含键盘聚焦（a11y 内置）；'click' 点击切换 */
  trigger?: Extract<TooltipOpenChangeReason, 'hover' | 'click'>;
  /** 禁用：所有触发路径都不打开，默认 false */
  disabled?: boolean;
}

export interface ComponentBasePopoverProps {
  /** 非受控初始开关，默认 false */
  defaultOpen?: boolean;
  /** 受控开关 */
  open?: boolean;
  onOpenChange?: (open: boolean, reason?: PopoverOpenChangeReason) => void;
  /** 默认 'bottom' */
  placement?: ComponentBasePlacement;
  /** trigger 与 content 的主轴间距（px），默认 8 */
  offset?: number;
  /** 视口边距（px），默认 8 */
  collisionPadding?: number;
  /** 空间不够时翻面，默认 true */
  flip?: boolean;
  /** 副轴贴边保留在视口内，默认 true */
  shift?: boolean;
  closeOnOutsideClick?: boolean;
  closeOnEsc?: boolean;
  /** trigger 滚出视口时关闭，默认 false */
  closeOnScroll?: boolean;
  /** 关闭后归还 focus 给打开前的 activeElement，默认 true */
  returnFocusOnClose?: boolean;
  /** 覆盖默认 trigger 锚定（优先级：anchorEl > triggerEl） */
  anchorEl?: HTMLElement | VirtualAnchorElement | null;
  /** 写到 content 上的 role；决定 trigger 的 aria-haspopup */
  ariaRole?: 'dialog' | 'tooltip' | 'menu' | 'listbox' | 'grid' | 'tree';
  /** 与 ariaLabelledBy 二选一；ariaRole='dialog' 缺失会 dev 警告 */
  ariaLabel?: string;
  /** 与 ariaLabel 二选一 */
  ariaLabelledBy?: string;
}
