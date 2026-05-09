import { forwardRef, useEffect, useState, type HTMLAttributes, type Ref } from 'react';
import { createPortal } from 'react-dom';
import { useTooltipContext } from '@packages/react/hooks';
import { COMPONENTS } from '@packages/utils/classnames';
import { mergeClassName } from '@packages/utils/helpers';
import type { TooltipContentProps } from './Tooltip.type';

// 默认 portal 到 body；container={null} 原地渲染。
// content 上不绑 hover/focus —— tooltip 非交互式，鼠标进 content 不延长打开。
export const TooltipContent = forwardRef<HTMLDivElement, TooltipContentProps>(
  function TooltipContent({ keepMounted = false, container, className, children, ...rest }, ref) {
    const { tooltip } = useTooltipContext('TooltipContent');
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
      setMounted(true);
    }, []);

    if (!tooltip.isContentMounted(keepMounted)) return null;

    const contentProps = tooltip.getContentProps({
      ...rest,
      ref: ref as Ref<HTMLElement>,
      className: mergeClassName(COMPONENTS.TOOLTIP_CONTENT, className),
      hidden: !tooltip.open && keepMounted ? true : undefined,
    } as HTMLAttributes<HTMLElement>);

    const node = <div {...(contentProps as HTMLAttributes<HTMLDivElement>)}>{children}</div>;

    if (container === null) return node;
    if (!mounted || typeof document === 'undefined') return null;

    const target = container ?? document.body;
    return createPortal(node, target);
  },
);
