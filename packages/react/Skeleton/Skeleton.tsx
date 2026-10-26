import { forwardRef } from 'react';
import { mergeClassName } from '@internal/style';
import '@packages/styles/components/Skeleton.scss';
import type { SkeletonProps } from './Skeleton.type';

const BLOCK = 'venomous--Skeleton';

const toCss = (value: number | string | undefined) =>
  typeof value === 'number' ? `${value}px` : value;

/**
 * Skeleton — 加载占位。对读屏器隐藏；加载状态应由外层容器用 aria-busy 或文字说明表达。
 * 用户设置减少动态效果时不播放动画。
 */
export const Skeleton = forwardRef<HTMLSpanElement, SkeletonProps>(function Skeleton(
  { shape = 'text', width, height, className, style, ...rest },
  ref,
) {
  return (
    <span
      aria-hidden="true"
      {...rest}
      ref={ref}
      className={mergeClassName(BLOCK, `${BLOCK}--${shape}`, className)}
      style={{ width: toCss(width), height: toCss(height), ...style }}
    />
  );
});
