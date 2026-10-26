'use client';

import { createContext, forwardRef, useContext, useId, useMemo } from 'react';
import { mergeClassName } from '@internal/style';
import '@packages/styles/components/FormField.scss';
import type { FormFieldControlProps, FormFieldProps } from './FormField.type';

const BLOCK = 'venomous--FormField';

interface FormFieldContextValue {
  controlId: string;
  labelId: string | undefined;
  describedBy: string | undefined;
  invalid: boolean;
  disabled: boolean | undefined;
  required: boolean | undefined;
}

const FormFieldContext = createContext<FormFieldContextValue | null>(null);

/**
 * 表单控件读取所在 FormField 的关联信息，与自身 props 合并（自身 props 优先，aria-describedby 拼接）。
 * 不在 FormField 内时原样返回。
 */
export function useFormFieldControl<P extends FormFieldControlProps>(
  props: P,
): P & FormFieldControlProps {
  const field = useContext(FormFieldContext);
  if (!field) return props;
  return {
    ...props,
    id: props.id ?? field.controlId,
    disabled: props.disabled ?? field.disabled,
    required: props.required ?? field.required,
    'aria-describedby': mergeClassName(field.describedBy, props['aria-describedby']) || undefined,
    'aria-invalid': props['aria-invalid'] ?? (field.invalid || undefined),
  };
}

/** 分组类控件（RadioGroup 等）没有可被 label[for] 指向的元素，用 aria-labelledby 关联标题 */
export function useFormFieldLabelledBy(): string | undefined {
  return useContext(FormFieldContext)?.labelId;
}

export const FormField = forwardRef<HTMLDivElement, FormFieldProps>(function FormField(
  {
    label,
    description,
    error,
    required,
    disabled,
    controlId: controlIdProp,
    className,
    children,
    ...rest
  },
  ref,
) {
  const baseId = useId();
  const controlId = controlIdProp ?? `${baseId}-control`;
  const labelId = label ? `${baseId}-label` : undefined;
  const descriptionId = description ? `${baseId}-description` : undefined;
  const errorId = error ? `${baseId}-error` : undefined;
  const invalid = !!error;

  const context = useMemo<FormFieldContextValue>(
    () => ({
      controlId,
      labelId,
      describedBy: mergeClassName(descriptionId, errorId) || undefined,
      invalid,
      disabled,
      required,
    }),
    [controlId, labelId, descriptionId, errorId, invalid, disabled, required],
  );

  return (
    <FormFieldContext.Provider value={context}>
      <div
        {...rest}
        ref={ref}
        data-invalid={invalid || undefined}
        data-disabled={disabled || undefined}
        className={mergeClassName(BLOCK, className)}
      >
        {label && (
          <label id={labelId} htmlFor={controlId} className={`${BLOCK}__label`}>
            {label}
            {required && (
              <span aria-hidden="true" className={`${BLOCK}__required`}>
                *
              </span>
            )}
          </label>
        )}
        {children}
        {description && (
          <p id={descriptionId} className={`${BLOCK}__description`}>
            {description}
          </p>
        )}
        {error && (
          <p id={errorId} className={`${BLOCK}__error`}>
            {error}
          </p>
        )}
      </div>
    </FormFieldContext.Provider>
  );
});
