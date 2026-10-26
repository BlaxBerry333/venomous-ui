'use client';

import { forwardRef } from 'react';
import { mergeClassName } from '@internal/style';
import '@packages/styles/components/Input.scss';
import { useFormFieldControl } from '../FormField/FormField';
import type { InputProps } from './Input.type';

const BLOCK = 'venomous--Input';

/**
 * Input — 单行文本输入。在 FormField 内自动关联 label / 说明 / 错误信息。
 * 错误态用 aria-invalid 表达，样式也挂在它上面。
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { size = 'md', className, ...props },
  ref,
) {
  const rest = useFormFieldControl(props);
  return (
    <input
      {...rest}
      ref={ref}
      className={mergeClassName(BLOCK, `${BLOCK}--size-${size}`, className)}
    />
  );
});
