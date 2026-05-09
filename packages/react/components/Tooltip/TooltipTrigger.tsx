import { forwardRef, type HTMLAttributes } from 'react';
import { useTooltipContext } from '@packages/react/hooks';
import { COMPONENTS } from '@packages/utils/classnames';
import { mergeClassName } from '@packages/utils/helpers';
import type { TooltipTriggerProps } from './Tooltip.type';

// 容器组件：渲染为 span（inline，包裹 icon button / 链接 / label 等不破坏布局）。
// 不写 role / tabindex —— focus 与可点击语义由 children 实际承担，避免双 tab stop。
export const TooltipTrigger = forwardRef<HTMLSpanElement, TooltipTriggerProps>(
  function TooltipTrigger({ className, children, ...rest }, ref) {
    const { tooltip } = useTooltipContext('TooltipTrigger');
    const triggerProps = tooltip.getTriggerProps({
      ...(rest as HTMLAttributes<HTMLElement>),
      ref,
      className: mergeClassName(COMPONENTS.TOOLTIP_TRIGGER, className),
    });
    return <span {...(triggerProps as HTMLAttributes<HTMLSpanElement>)}>{children}</span>;
  },
);
