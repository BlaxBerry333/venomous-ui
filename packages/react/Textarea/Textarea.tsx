'use client';

import { forwardRef } from 'react';
import { mergeClassName } from '@internal/style';
import '@packages/styles/components/Textarea.scss';
import { useFormFieldControl } from '../FormField/FormField';
import type { TextareaProps } from './Textarea.type';

const BLOCK = 'venomous--Textarea';

/** Textarea — 多行文本输入。在 FormField 内自动关联 label / 说明 / 错误信息。 */
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { resize = 'vertical', rows = 3, className, ...props },
  ref,
) {
  const rest = useFormFieldControl(props);
  return (
    <textarea
      {...rest}
      ref={ref}
      rows={rows}
      className={mergeClassName(BLOCK, `${BLOCK}--resize-${resize}`, className)}
    />
  );
});
