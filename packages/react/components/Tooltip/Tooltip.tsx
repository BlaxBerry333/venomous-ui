import { useMemo, type ReactElement } from 'react';
import { TooltipContext, useTooltip, type TooltipContextValue } from '@packages/react/hooks';
import type { TooltipRootProps } from './Tooltip.type';

// 不渲染额外 DOM——content 走 portal，套 wrapper 会破坏消费方布局
export function Tooltip({ children, ...options }: TooltipRootProps): ReactElement {
  const tooltip = useTooltip(options);
  const ctx = useMemo<TooltipContextValue>(() => ({ tooltip }), [tooltip]);
  return <TooltipContext.Provider value={ctx}>{children}</TooltipContext.Provider>;
}
