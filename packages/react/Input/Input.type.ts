import type { InputHTMLAttributes } from 'react';

export type InputSize = 'sm' | 'md' | 'lg';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** 尺寸，与 Button 同高；默认 'md'。原生 `size` 属性（字符宽度）用 CSS 宽度代替 */
  size?: InputSize;
}
