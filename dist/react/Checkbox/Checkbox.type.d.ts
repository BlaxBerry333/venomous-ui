import { HTMLAttributes, InputHTMLAttributes, ReactNode } from 'react';
export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
    /** 半选状态（如"部分子项已选"）；读屏器读作 mixed */
    indeterminate?: boolean;
    /** 在 CheckboxGroup 内时作为该项的值 */
    value?: string;
    /** 跟在框后面的文字标签 */
    children?: ReactNode;
}
export interface CheckboxGroupProps extends Omit<HTMLAttributes<HTMLDivElement>, 'defaultValue' | 'onChange' | 'children'> {
    /** 非受控初始选中值 */
    defaultValue?: string[];
    /** 受控选中值；省略走非受控 */
    value?: string[];
    /** 选中值变化通知（受控/非受控都触发） */
    onValueChange?: (value: string[]) => void;
    /** 组内所有 Checkbox 的 name */
    name?: string;
    /** 禁用整组 */
    disabled?: boolean;
    /** 排列方向，默认 'vertical' */
    orientation?: 'vertical' | 'horizontal';
    children?: ReactNode;
}
//# sourceMappingURL=Checkbox.type.d.ts.map