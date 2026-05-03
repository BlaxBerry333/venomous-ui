import type { ButtonHTMLAttributes } from 'vue';
import type { ComponentBaseButtonProps } from '@packages/utils/types/components';

// ButtonHTMLAttributes 整个 @vue-ignore（不进 props 声明，走 attrs fallthrough），
// 但 disabled / type 组件内部要参与 isInactive 计算和模板 binding，必须显式声明为 prop。
export interface ButtonProps
  extends ComponentBaseButtonProps, /* @vue-ignore */ ButtonHTMLAttributes {
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

/** defineExpose 暴露的实例形状 —— 父组件用 ref<ButtonInstance> 获取。 */
export interface ButtonInstance {
  /** 真实 button DOM 元素，挂载前为 null */
  el: HTMLButtonElement | null;
}
