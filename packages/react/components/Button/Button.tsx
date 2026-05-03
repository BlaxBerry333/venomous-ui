import { forwardRef, type KeyboardEvent } from 'react';
import { COMPONENTS } from '@packages/utils/classnames';
import { mergeClassName } from '@packages/utils/helpers';
import type { ButtonProps } from './Button.type';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { loading, disabled, type = 'button', className, onClick, onKeyDown, children, ...rest },
  ref,
) {
  const isInactive = disabled || loading;
  // loading 不能用原生 disabled（会断 form submit / focus），用 aria-disabled 做语义屏蔽。
  // aria-disabled 不阻止 Enter/Space 触发 click，需在 keydown 显式 preventDefault。
  // 用户 onKeyDown 仍照常调用——监听器本身不会触发 click，preventDefault 阻的是浏览器派发的 click。
  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (isInactive && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
    }
    onKeyDown?.(event);
  };
  return (
    <button
      {...rest}
      ref={ref}
      type={type}
      disabled={disabled}
      aria-busy={loading || undefined}
      aria-disabled={isInactive || undefined}
      data-loading={loading || undefined}
      onClick={isInactive ? undefined : onClick}
      onKeyDown={handleKeyDown}
      className={mergeClassName(COMPONENTS.BUTTON, className)}
    >
      {children}
    </button>
  );
});
