import { InputHTMLAttributes, ReactNode } from 'react';
export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
    /** 尺寸，默认 'md' */
    size?: 'sm' | 'md';
    /** 跟在开关后面的文字标签 */
    children?: ReactNode;
}
//# sourceMappingURL=Switch.type.d.ts.map