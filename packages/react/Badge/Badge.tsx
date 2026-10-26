import { forwardRef } from 'react';
import { mergeClassName } from '@internal/style';
import '@packages/styles/components/Badge.scss';
import type { BadgeProps } from './Badge.type';

const BLOCK = 'venomous--Badge';

/**
 * Badge — 状态 / 计数标签。纯展示组件，无 hooks。
 * 颜色本身不传达信息给读屏器，文字里要写清状态（如 "Failed" 而不是只用红色）。
 */
export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(function Badge(
  { variant = 'neutral', className, ...rest },
  ref,
) {
  return (
    <span
      {...rest}
      ref={ref}
      className={mergeClassName(BLOCK, `${BLOCK}--${variant}`, className)}
    />
  );
});
