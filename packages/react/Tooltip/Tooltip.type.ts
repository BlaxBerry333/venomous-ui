import type { HTMLAttributes, ReactNode } from 'react';
import type { Placement } from '../Popover/Popover.type';

/** 开关来源；hover 含键盘聚焦 */
export type TooltipOpenChangeReason = 'hover' | 'click' | 'outside-click' | 'esc-key';

export interface TooltipProps {
  /** 非受控初始开关，默认 false；与 open 同时给时以 open 为准并 dev 警告 */
  defaultOpen?: boolean;
  /** 受控开关；省略走非受控 */
  open?: boolean;
  /** 开关变更通知（受控/非受控都触发） */
  onOpenChange?: (open: boolean, reason: TooltipOpenChangeReason) => void;
  /** 默认 'top' */
  placement?: Placement;
  /** trigger 与 content 的间距（px），默认 6 */
  offset?: number;
  /** 与视口边缘保持的距离（px），默认 8 */
  collisionPadding?: number;
  /** 空间不够时翻到对侧，默认 true */
  flip?: boolean;
  /** 副轴方向推回视口内，默认 true */
  shift?: boolean;
  /** hover / 键盘聚焦后多久打开（ms），默认 200 */
  openDelay?: number;
  /** 离开后多久关闭（ms），默认 200；期间指针移到提示内容上会保持打开 */
  closeDelay?: number;
  /** Esc 关闭，默认 true */
  closeOnEsc?: boolean;
  /** 触发方式，默认 'hover'（含键盘聚焦）；'click' 点击切换、点外部关闭 */
  trigger?: 'hover' | 'click';
  /** 禁用：不会打开，打开中会立即关闭，默认 false */
  disabled?: boolean;
  children?: ReactNode;
}

export interface TooltipTriggerProps extends HTMLAttributes<HTMLElement> {
  /**
   * 单个元素时不额外包 DOM，trigger 属性（含 aria-describedby）直接合并到它上面，该元素应可聚焦并转发 ref 与 props；
   * 其他内容（文本等）会包一层可聚焦的 `<span tabindex="0">`
   */
  children?: ReactNode;
}

export interface TooltipContentProps extends HTMLAttributes<HTMLDivElement> {
  /** 关闭时保留 DOM（隐藏），默认 false */
  keepMounted?: boolean;
  children?: ReactNode;
}
