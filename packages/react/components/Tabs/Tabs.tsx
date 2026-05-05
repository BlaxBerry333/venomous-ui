import {
  Children,
  Fragment,
  cloneElement,
  createContext,
  forwardRef,
  isValidElement,
  useContext,
  useMemo,
  type ButtonHTMLAttributes,
  type HTMLAttributes,
  type ReactElement,
  type ReactNode,
  type Ref,
} from 'react';

import { useTabs, type UseTabsReturn } from '@packages/react/hooks';
import { COMPONENTS } from '@packages/utils/classnames';
import { mergeClassName } from '@packages/utils/helpers';
import type { TabPanelProps, TabsProps, TabTitleProps } from './Tabs.type';

// ── Context ────────────────────────────────────────────────────────────────
// 共享 hook 返回值。子组件读 selected 状态、注册键盘 trigger，全部经此一处。
// SSR 安全：React Context 在 renderToString 链路与 hydration 都 OK。
interface TabsContextValue {
  tabs: UseTabsReturn;
}
const TabsContext = createContext<TabsContextValue | null>(null);

function useTabsContext(componentName: string): TabsContextValue {
  const ctx = useContext(TabsContext);
  if (!ctx) {
    throw new Error(`[venomous-ui] <${componentName}> must be used inside <Tabs>.`);
  }
  return ctx;
}

// ── 组件类型标记 ───────────────────────────────────────────────────────────
// 用 Symbol 挂在组件函数上做识别——比 displayName 字符串比较稳（后者 minify 后可能丢）。
// Tabs 内部预扫 children 时按此标记分桶 TabTitle / TabPanel。
const COMPONENT_TYPE = Symbol('venomous-ui:Tabs:component-type');
type ComponentTypeTag = 'TabTitle' | 'TabPanel';

function getComponentType(element: ReactElement): ComponentTypeTag | null {
  const type = element.type as { [COMPONENT_TYPE]?: ComponentTypeTag };
  return type?.[COMPONENT_TYPE] ?? null;
}

// ── 预扫 children：自动配对 + 分桶 ───────────────────────────────────────
// 第 N 个 TabTitle ↔ 第 N 个 TabPanel；显式 props.value 优先，省略则取 String(index)。
// 通过 cloneElement 注入 `data-tabs-resolved-value`，子组件 render 时直接读。
//
// 分桶动机：组件层「开箱即用」的 ARIA tabs pattern 要求 tablist 容器只包 tab，
// 不包 panel——所以 TabTitle 进 titles[]（外层 role=tablist 容器），TabPanel 进
// panels[]（tablist 之外平铺）。consumer 仍按扁平 `<Tabs><TabTitle/><TabPanel/></Tabs>` 写。
//
// Fragment 透明递归：consumer 用 <> 包一组也能正常分桶。其他容器（div / 自定义组件）
// 不递归——避免误把深层 TabTitle 当成 Tabs 的直接子，破坏自动配对语义。
interface ResolvedChildren {
  titles: ReactNode[];
  panels: ReactNode[];
}

function resolveChildren(children: ReactNode): ResolvedChildren {
  const titles: ReactNode[] = [];
  const panels: ReactNode[] = [];
  let titleIndex = 0;
  let panelIndex = 0;

  const traverse = (nodes: ReactNode): void => {
    Children.forEach(nodes, (child) => {
      if (!isValidElement(child)) return;

      const compType = getComponentType(child);
      if (compType === 'TabTitle') {
        const props = child.props as TabTitleProps;
        const value = props.value ?? String(titleIndex);
        titleIndex++;
        titles.push(
          cloneElement(child, {
            'data-tabs-resolved-value': value,
          } as Partial<TabTitleProps>),
        );
        return;
      }
      if (compType === 'TabPanel') {
        const props = child.props as TabPanelProps;
        const value = props.value ?? String(panelIndex);
        panelIndex++;
        panels.push(
          cloneElement(child, {
            'data-tabs-resolved-value': value,
          } as Partial<TabPanelProps>),
        );
        return;
      }
      if (child.type === Fragment) {
        const fragChildren = (child.props as { children?: ReactNode }).children;
        traverse(fragChildren);
      }
    });
  };

  traverse(children);
  return { titles, panels };
}

// ── 内部 helper：从 props 中取已解析 value ─────────────────────────────────
function readResolvedValue(props: object, explicit: string | undefined): string {
  const fromCtx = (props as { 'data-tabs-resolved-value'?: string })['data-tabs-resolved-value'];
  const value = explicit ?? fromCtx;
  if (value === undefined) {
    throw new Error(
      '[venomous-ui] <TabTitle> / <TabPanel> 必须是 <Tabs> 的直接子（或在 Fragment 内），或显式传 `value`。',
    );
  }
  return value;
}

// ── Tabs 根组件 ───────────────────────────────────────────────────────────
export const Tabs = forwardRef<HTMLDivElement, TabsProps>(function Tabs(
  { defaultValue, value, onValueChange, activationMode, loop, className, children, ...rest },
  ref,
) {
  const { titles, panels } = resolveChildren(children);

  const tabs = useTabs({
    ...(defaultValue !== undefined ? { defaultValue } : {}),
    ...(value !== undefined ? { value } : {}),
    ...(onValueChange !== undefined ? { onValueChange } : {}),
    ...(activationMode !== undefined ? { activationMode } : {}),
    ...(loop !== undefined ? { loop } : {}),
  });

  const ctx = useMemo<TabsContextValue>(() => ({ tabs }), [tabs]);

  // tablist 必须只包 TabTitle 不含 TabPanel（ARIA tabs pattern）。
  return (
    <TabsContext.Provider value={ctx}>
      <div
        {...tabs.getRootProps(rest)}
        ref={ref}
        className={mergeClassName(COMPONENTS.TABS, className)}
      >
        <div {...tabs.getListProps()}>{titles}</div>
        {panels}
      </div>
    </TabsContext.Provider>
  );
});

// ── TabTitle（trigger 壳） ────────────────────────────────────────────────
export const TabTitle = forwardRef<HTMLButtonElement, TabTitleProps>(function TabTitle(
  { value, className, children, ...rest },
  ref,
) {
  const { tabs } = useTabsContext('TabTitle');
  const resolvedValue = readResolvedValue(rest, value);

  // 剥离 Tabs 内部注入的 data-* 私有 prop，不让它出到 DOM
  const cleanRest = { ...(rest as Record<string, unknown>) };
  delete cleanRest['data-tabs-resolved-value'];
  // disabled 直接走 hook：它输出 aria-disabled + native disabled 由 hook 决定。
  // 不需要从 cleanRest 删 disabled —— getTriggerProps 在返回对象末尾用 args.disabled 覆盖
  // spread 出来的 disabled，DOM 上拿到的永远是 hook 决定的那一份。
  const disabled = (cleanRest as { disabled?: boolean }).disabled === true;

  const triggerProps = tabs.getTriggerProps(
    disabled ? { value: resolvedValue, disabled: true } : { value: resolvedValue },
    {
      ...(cleanRest as ButtonHTMLAttributes<HTMLButtonElement> & { ref?: Ref<HTMLButtonElement> }),
      ref,
      className: mergeClassName(COMPONENTS.TABS_TITLE, className),
    },
  );

  return <button {...triggerProps}>{children}</button>;
});
(TabTitle as unknown as { [k: symbol]: ComponentTypeTag })[COMPONENT_TYPE] = 'TabTitle';

// ── TabPanel ──────────────────────────────────────────────────────────────
export const TabPanel = forwardRef<HTMLDivElement, TabPanelProps>(function TabPanel(
  { value, keepMounted = false, className, children, ...rest },
  ref,
) {
  const { tabs } = useTabsContext('TabPanel');
  const resolvedValue = readResolvedValue(rest, value);

  const cleanRest = { ...(rest as Record<string, unknown>) };
  delete cleanRest['data-tabs-resolved-value'];

  // keepMounted=true：未激活仍渲染（hidden 切换）。默认 false 直接 unmount。
  if (!tabs.isPanelMounted(resolvedValue, keepMounted)) return null;

  const panelProps = tabs.getPanelProps(
    keepMounted ? { value: resolvedValue, keepMounted: true } : { value: resolvedValue },
    {
      ...(cleanRest as HTMLAttributes<HTMLDivElement>),
      className: mergeClassName(COMPONENTS.TABS_PANEL, className),
    },
  );
  return (
    <div {...panelProps} ref={ref}>
      {children}
    </div>
  );
});
(TabPanel as unknown as { [k: symbol]: ComponentTypeTag })[COMPONENT_TYPE] = 'TabPanel';
