import { forwardRef, useEffect, useState, type HTMLAttributes, type Ref } from 'react';
import { createPortal } from 'react-dom';
import { usePopoverContext } from '@packages/react/hooks';
import { COMPONENTS } from '@packages/utils/classnames';
import { mergeClassName } from '@packages/utils/helpers';
import type { PopoverContentProps } from './Popover.type';

// 默认 portal 到 body；container={null} 原地渲染。
// SSR/hydrate 首帧 mounted=false 时不渲染，避免「无定位 → 0,0 闪 → 切 portal」的视觉抖动。
export const PopoverContent = forwardRef<HTMLDivElement, PopoverContentProps>(
  function PopoverContent(
    { keepMounted = false, container, matchTriggerWidth = true, className, children, ...rest },
    ref,
  ) {
    const { popover } = usePopoverContext('PopoverContent');
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
      setMounted(true);
    }, []);

    // 让 hook 知道 JS 路径下要挂 ResizeObserver；anchor 路径仅靠 getContentProps 的 style 即可
    useEffect(() => {
      popover.setMatchTriggerWidth(matchTriggerWidth);
      return () => popover.setMatchTriggerWidth(false);
    }, [popover, matchTriggerWidth]);

    if (!popover.isContentMounted(keepMounted)) return null;

    const contentProps = popover.getContentProps(
      {
        ...rest,
        ref: ref as Ref<HTMLElement>,
        className: mergeClassName(COMPONENTS.POPOVER_CONTENT, className),
        hidden: !popover.open && keepMounted ? true : undefined,
      } as HTMLAttributes<HTMLElement>,
      { matchTriggerWidth },
    );

    const node = <div {...(contentProps as HTMLAttributes<HTMLDivElement>)}>{children}</div>;

    if (container === null) return node;
    if (!mounted || typeof document === 'undefined') return null;

    const target = container ?? document.body;
    return createPortal(node, target);
  },
);
