'use client';

import { forwardRef } from 'react';
import { mergeClassName } from '@internal/style';
import '@packages/styles/components/Select.scss';
import { useFormFieldControl } from '../FormField/FormField';
import type { SelectProps } from './Select.type';

const BLOCK = 'venomous--Select';

/**
 * Select — 原生 `<select>` 加样式。下拉列表由浏览器 / 系统绘制，键盘、读屏、移动端体验都是原生的。
 * 在 FormField 内自动关联 label / 说明 / 错误信息。
 */
export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { size = 'md', placeholder, className, style, children, ...props },
  ref,
) {
  const rest = useFormFieldControl(props);
  const showPlaceholderByDefault =
    placeholder !== undefined && rest.value === undefined && rest.defaultValue === undefined;

  return (
    <span
      className={mergeClassName(BLOCK, `${BLOCK}--size-${size}`, className)}
      style={style}
      data-disabled={rest.disabled || undefined}
    >
      <select
        {...(showPlaceholderByDefault ? { defaultValue: '' } : {})}
        {...rest}
        ref={ref}
        className={`${BLOCK}__field`}
      >
        {placeholder !== undefined && (
          <option value="" disabled hidden>
            {placeholder}
          </option>
        )}
        {children}
      </select>
      <span className={`${BLOCK}__icon`} aria-hidden="true" />
    </span>
  );
});
