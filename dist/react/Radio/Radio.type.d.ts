import { HTMLAttributes, InputHTMLAttributes, ReactNode } from 'react';
export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
    /** 该项的值；在 RadioGroup 内时与组的 value 比较决定选中 */
    value: string;
    /** 跟在圆点后面的文字标签 */
    children?: ReactNode;
}
export interface RadioGroupProps extends Omit<HTMLAttributes<HTMLDivElement>, 'defaultValue' | 'onChange' | 'children'> {
    /** 非受控初始选中值 */
    defaultValue?: string;
    /** 受控选中值；省略走非受控 */
    value?: string;
    /** 选中值变化通知（受控/非受控都触发） */
    onValueChange?: (value: string) => void;
    /** 组内所有 Radio 的 name；省略时自动生成 */
    name?: string;
    /** 禁用整组 */
    disabled?: boolean;
    /** 必填（表单提交校验） */
    required?: boolean;
    /** 排列方向，默认 'vertical' */
    orientation?: 'vertical' | 'horizontal';
    children?: ReactNode;
}
//# sourceMappingURL=Radio.type.d.ts.map