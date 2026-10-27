import { FormFieldControlProps, FormFieldProps } from './FormField.type';
/**
 * 表单控件读取所在 FormField 的关联信息，与自身 props 合并（自身 props 优先，aria-describedby 拼接）。
 * 不在 FormField 内时原样返回。
 */
export declare function useFormFieldControl<P extends FormFieldControlProps>(props: P): P & FormFieldControlProps;
/** 分组类控件（RadioGroup 等）没有可被 label[for] 指向的元素，用 aria-labelledby 关联标题 */
export declare function useFormFieldLabelledBy(): string | undefined;
export declare const FormField: import('react').ForwardRefExoticComponent<FormFieldProps & import('react').RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=FormField.d.ts.map