import { HTMLAttributes, ReactNode } from 'react';
export interface FormFieldProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
    /** 字段标题；关联到内部控件（单个控件用 label[for]，RadioGroup 等分组用 aria-labelledby） */
    label?: ReactNode;
    /** 补充说明，通过 aria-describedby 关联到控件 */
    description?: ReactNode;
    /** 错误信息；有值时控件标记 aria-invalid，并通过 aria-describedby 关联 */
    error?: ReactNode;
    /** 必填：控件加 required，标题旁显示星号 */
    required?: boolean;
    /** 禁用内部控件 */
    disabled?: boolean;
    /** 内部控件的 id；省略时自动生成 */
    controlId?: string;
    children?: ReactNode;
}
/** 表单控件可从 FormField 继承的属性 */
export interface FormFieldControlProps {
    id?: string | undefined;
    disabled?: boolean | undefined;
    required?: boolean | undefined;
    'aria-describedby'?: string | undefined;
    'aria-invalid'?: boolean | 'true' | 'false' | 'grammar' | 'spelling' | undefined;
    'aria-labelledby'?: string | undefined;
}
//# sourceMappingURL=FormField.type.d.ts.map