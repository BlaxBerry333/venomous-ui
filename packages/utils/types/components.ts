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
