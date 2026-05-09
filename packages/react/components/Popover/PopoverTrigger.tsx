import { forwardRef, type HTMLAttributes } from 'react';
import { usePopoverContext } from '@packages/react/hooks';
import { COMPONENTS } from '@packages/utils/classnames';
import { mergeClassName } from '@packages/utils/helpers';
import type { PopoverTriggerProps } from './Popover.type';

// 容器组件：渲染一个 div，把 trigger props（onClick / aria-* / role / tabIndex / anchorName）
// 注入到 div 上。children 任意，由其撑大容器尺寸（matchTriggerWidth 会读容器宽度）。
export const PopoverTrigger = forwardRef<HTMLDivElement, PopoverTriggerProps>(
  function PopoverTrigger({ className, children, ...rest }, ref) {
    const { popover } = usePopoverContext('PopoverTrigger');
    const triggerProps = popover.getTriggerProps({
      ...(rest as HTMLAttributes<HTMLElement>),
      ref,
      className: mergeClassName(COMPONENTS.POPOVER_TRIGGER, className),
    });
    return <div {...(triggerProps as HTMLAttributes<HTMLDivElement>)}>{children}</div>;
  },
);
