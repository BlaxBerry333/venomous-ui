import { ButtonHTMLAttributes, ReactNode } from 'react';
export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /** 视觉变体；默认 'primary' */
    variant?: ButtonVariant;
    /** 尺寸；默认 'md' */
    size?: ButtonSize;
    /** 加载中：禁用交互、显示 spinner、设置 aria-busy */
    loading?: boolean;
    /** 起始 icon slot（loading 时被 spinner 替代） */
    startIcon?: ReactNode;
    /** 结束 icon slot */
    endIcon?: ReactNode;
}
//# sourceMappingURL=Button.type.d.ts.map