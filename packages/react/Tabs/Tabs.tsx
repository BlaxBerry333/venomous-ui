'use client';

import {
  createContext,
  forwardRef,
  useContext,
  type ButtonHTMLAttributes,
  type HTMLAttributes,
  type Ref,
} from 'react';
import { useTabs, type UseTabsReturn } from '@internal/react';
import { mergeClassName } from '@internal/style';
import '@packages/styles/components/Tabs.scss';
import type { TabListProps, TabPanelProps, TabsProps, TabTitleProps } from './Tabs.type';

const BLOCK = 'venomous--Tabs';

const TabsContext = createContext<UseTabsReturn | null>(null);

function useTabsContext(component: string): UseTabsReturn {
  const context = useContext(TabsContext);
  if (!context) throw new Error(`[venomous-ui] <${component}> must be used inside <Tabs>.`);
  return context;
}

/**
 * Tabs — ARIA tabs：方向键 / Home / End 切换，roving tabindex，可选手动激活。
 *
 * 结构显式书写（TabList 包 TabTitle，TabPanel 与之平级，用 value 配对），
 * 不靠扫描 children 的组件类型：在 Next.js 服务端组件里传入的子元素类型是客户端引用，扫描会失效。
 */
export const Tabs = forwardRef<HTMLDivElement, TabsProps>(function Tabs(
  { defaultValue, value, onValueChange, activationMode, loop, className, children, ...rest },
  ref,
) {
  const tabs = useTabs({
    ...(defaultValue !== undefined ? { defaultValue } : {}),
    ...(value !== undefined ? { value } : {}),
    ...(onValueChange !== undefined ? { onValueChange } : {}),
    ...(activationMode !== undefined ? { activationMode } : {}),
    ...(loop !== undefined ? { loop } : {}),
  });

  return (
    <TabsContext.Provider value={tabs}>
      <div {...rest} ref={ref} className={mergeClassName(BLOCK, className)}>
        {children}
      </div>
    </TabsContext.Provider>
  );
});

export const TabList = forwardRef<HTMLDivElement, TabListProps>(function TabList(
  { className, children, ...rest },
  ref,
) {
  const tabs = useTabsContext('TabList');
  return (
    <div
      {...tabs.getListProps({ ...rest, className: mergeClassName(`${BLOCK}__list`, className) })}
      ref={ref}
    >
      {children}
    </div>
  );
});

export const TabTitle = forwardRef<HTMLButtonElement, TabTitleProps>(function TabTitle(
  { value, disabled = false, className, children, ...rest },
  ref,
) {
  const tabs = useTabsContext('TabTitle');
  const triggerProps = tabs.getTriggerProps(
    { value, disabled },
    {
      ...(rest as ButtonHTMLAttributes<HTMLButtonElement> & { ref?: Ref<HTMLButtonElement> }),
      ref,
      className: mergeClassName(`${BLOCK}__title`, className),
    },
  );
  return <button {...triggerProps}>{children}</button>;
});

export const TabPanel = forwardRef<HTMLDivElement, TabPanelProps>(function TabPanel(
  { value, keepMounted = false, className, children, ...rest },
  ref,
) {
  const tabs = useTabsContext('TabPanel');

  // keepMounted=true：未激活仍渲染（hidden 切换）。默认 false 直接 unmount。
  if (!tabs.isPanelMounted(value, keepMounted)) return null;

  const panelProps = tabs.getPanelProps(
    { value, keepMounted },
    {
      ...(rest as HTMLAttributes<HTMLDivElement>),
      className: mergeClassName(`${BLOCK}__panel`, className),
    },
  );
  return (
    <div {...panelProps} ref={ref}>
      {children}
    </div>
  );
});
