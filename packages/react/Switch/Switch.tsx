'use client';

import { forwardRef } from 'react';
import { mergeClassName } from '@internal/style';
import '@packages/styles/components/Switch.scss';
import { useFormFieldControl } from '../FormField/FormField';
import type { SwitchProps } from './Switch.type';

const BLOCK = 'venomous--Switch';

/**
 * Switch — 开关。原生 checkbox 加 role="switch"，读屏器读作"开 / 关"；
 * 外观由相邻的 __track / __thumb 绘制。在 FormField 内时自动关联说明与错误信息。
 */
export const Switch = forwardRef<HTMLInputElement, SwitchProps>(function Switch(
  { size = 'md', className, style, children, ...props },
  ref,
) {
  const rest = useFormFieldControl(props);
  return (
    <label
      className={mergeClassName(BLOCK, `${BLOCK}--size-${size}`, className)}
      style={style}
      data-disabled={rest.disabled || undefined}
    >
      <input {...rest} ref={ref} type="checkbox" role="switch" className={`${BLOCK}__input`} />
      <span className={`${BLOCK}__track`} aria-hidden="true">
        <span className={`${BLOCK}__thumb`} />
      </span>
      {children !== undefined && <span className={`${BLOCK}__label`}>{children}</span>}
    </label>
  );
});
