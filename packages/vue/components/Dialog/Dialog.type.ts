import type { DialogHTMLAttributes } from 'vue';
import type { ComponentBaseDialogProps } from '@packages/utils/types/components';

// DialogHTMLAttributes 整个 @vue-ignore（不进 props 声明，走 attrs fallthrough）；
// ComponentBaseDialogProps 全字段进 props（组件内部参与开关 / a11y / 行为开关计算）。
// Omit 掉原生 open：Vue 的 DialogHTMLAttributes.open 是 Booleanish，与本包 boolean 收紧版冲突。
export interface DialogProps
  extends ComponentBaseDialogProps, /* @vue-ignore */ Omit<DialogHTMLAttributes, 'open'> {}

/** defineExpose 暴露的实例形状 —— 父组件用 ref<DialogInstance> 命令式控制开关。 */
export interface DialogInstance {
  /** 真实 dialog DOM 元素，挂载前为 null */
  el: HTMLDialogElement | null;
  open: () => void;
  close: () => void;
  toggle: () => void;
}
