import { useMemo, type ReactElement } from 'react';
import { PopoverContext, usePopover, type PopoverContextValue } from '@packages/react/hooks';
import type { PopoverRootProps } from './Popover.type';

// 不渲染额外 DOM——content 走 portal 与 trigger 分离，套 wrapper 会破坏消费方布局
export function Popover({ children, ...options }: PopoverRootProps): ReactElement {
  const popover = usePopover(options);
  const ctx = useMemo<PopoverContextValue>(() => ({ popover }), [popover]);
  return <PopoverContext.Provider value={ctx}>{children}</PopoverContext.Provider>;
}
