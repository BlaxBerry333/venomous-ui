import type { ReactNode, SelectHTMLAttributes } from 'react';

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  /** 尺寸，与 Button / Input 同高；默认 'md' */
  size?: 'sm' | 'md' | 'lg';
  /** 未选择时显示的提示文字（不可再次选中）；非受控且没给 defaultValue 时默认显示它 */
  placeholder?: string;
  /** `<option>` / `<optgroup>` */
  children?: ReactNode;
}
