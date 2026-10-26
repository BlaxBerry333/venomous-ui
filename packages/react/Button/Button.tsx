import { forwardRef, type MouseEvent, type ReactNode } from 'react';
import { mergeClassName } from '@internal/style';
import '@packages/styles/components/Button.scss';
import type { ButtonProps } from './Button.type';

const BLOCK = 'venomous--Button';

function hasContent(node: ReactNode): boolean {
  return node !== undefined && node !== null && typeof node !== 'boolean' && node !== '';
}

/**
 * Button — 基础按钮。
 *
 * 设计要点：
 * - server component 友好：纯 forwardRef，无 hooks，不需要 'use client'。
 * - state 用 `data-venomous-loading`（运行时变化）；variant / size 用 className（永久属性）。
 * - 样式自动副作用：import 'Button.scss'，用户无需手动 import 组件 CSS。
 * - 默认 type='button' —— 避免在 <form> 内意外提交。
 * - loading 不用原生 disabled（切换瞬间会丢焦点），改用 aria-disabled + 在 click 上 preventDefault。
 *   键盘 Enter / Space 与表单隐式提交最终都派发 click，拦 click 一处即可，同时阻止 submit。
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    variant = 'primary',
    size = 'md',
    loading = false,
    disabled,
    startIcon,
    endIcon,
    children,
    className,
    type = 'button',
    onClick,
    ...rest
  },
  ref,
) {
  const classes = mergeClassName(
    BLOCK,
    `${BLOCK}--${variant}`,
    `${BLOCK}--size-${size}`,
    className,
  );

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (loading) {
      event.preventDefault();
      return;
    }
    onClick?.(event);
  };

  return (
    <button
      ref={ref}
      type={type}
      className={classes}
      disabled={disabled}
      aria-disabled={loading || undefined}
      aria-busy={loading || undefined}
      data-venomous-loading={loading ? 'true' : undefined}
      {...rest}
      onClick={handleClick}
    >
      {loading ? (
        <span className={`${BLOCK}__spinner`} aria-hidden="true" />
      ) : (
        hasContent(startIcon) && <span className={`${BLOCK}__icon`}>{startIcon}</span>
      )}
      {hasContent(children) && <span className={`${BLOCK}__label`}>{children}</span>}
      {!loading && hasContent(endIcon) && <span className={`${BLOCK}__icon`}>{endIcon}</span>}
    </button>
  );
});
