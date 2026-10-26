import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type ButtonHTMLAttributes,
  type HTMLAttributes,
  type KeyboardEvent,
  type MouseEvent,
  type RefCallback,
} from 'react';
import { devWarn } from '@internal/dev';
import type { TabsOptions } from '@packages/react/Tabs/Tabs.type';
import { useIsomorphicLayoutEffect } from './use-isomorphic-layout-effect';

/** ARIA tabs pattern 键盘语义里关心的所有按键 */
type TabsArrowKey = 'ArrowLeft' | 'ArrowRight' | 'ArrowUp' | 'ArrowDown' | 'Home' | 'End';

export type UseTabsOptions = TabsOptions;

interface TriggerEntry {
  el: HTMLButtonElement;
  disabled: boolean;
}

export interface UseTabsReturn {
  /** 当前选中（受控/非受控统一出口） */
  value: string | undefined;
  /** 命令式切换（与受控 onValueChange 语义一致：受控只通知，非受控写内部并通知） */
  setValue: (next: string) => void;
  /** tablist 容器 props：role=tablist */
  getListProps: (userProps?: HTMLAttributes<HTMLElement>) => HTMLAttributes<HTMLElement>;
  /** trigger props：role=tab + aria-selected + aria-controls + id + tabIndex + onClick + onKeyDown + ref。
   *  ref 用于 hook 内部 focus 派发；consumer 自己的 ref 通过 userProps.ref 合并。 */
  getTriggerProps: (
    args: { value: string; disabled?: boolean },
    userProps?: ButtonHTMLAttributes<HTMLButtonElement> & {
      ref?: React.Ref<HTMLButtonElement>;
    },
  ) => ButtonHTMLAttributes<HTMLButtonElement> & { ref: RefCallback<HTMLButtonElement> };
  /** panel props：role=tabpanel + aria-labelledby + id + hidden（仅 keepMounted + 未激活时为 true） */
  getPanelProps: (
    args: { value: string; keepMounted?: boolean },
    userProps?: HTMLAttributes<HTMLElement>,
  ) => HTMLAttributes<HTMLElement>;
  /** 未激活且未 keepMounted 时返回 false，consumer 据此短路 render 实现真 unmount */
  isPanelMounted: (value: string, keepMounted?: boolean) => boolean;
}

/**
 * Tabs 的状态与 ARIA tabs pattern 键盘语义（roving tabindex、方向键 / Home / End、manual 激活）。
 * 内部 hook，不对外导出；SSR 安全：id 走 useId，focus 只在事件回调里派发。
 */
export function useTabs(options: UseTabsOptions = {}): UseTabsReturn {
  const {
    defaultValue,
    value: valueProp,
    onValueChange,
    activationMode = 'automatic',
    loop = true,
  } = options;

  const isControlled = valueProp !== undefined;
  const [uncontrolledValue, setUncontrolledValue] = useState<string | undefined>(defaultValue);
  const value = isControlled ? valueProp : uncontrolledValue;

  useEffect(() => {
    if (defaultValue !== undefined && isControlled) {
      devWarn('Tabs', '`defaultValue` is ignored when `value` is controlled.');
    }
    // 仅首次挂载检查一次
  }, []);

  // 状态变更归一入口：所有想改 value 的来源（命令式 setValue / click / keyboard activation）都走这里。
  // 受控只通知不改内部状态——DOM 等 props 回流；非受控直接改内部状态触发 re-render。
  // 同值短路：避免受控 consumer 的 onValueChange（埋点 / URL sync / 网络请求）被重复触发。
  const setValue = useCallback(
    (next: string) => {
      if (next === value) return;
      if (!isControlled) setUncontrolledValue(next);
      onValueChange?.(next);
    },
    [value, isControlled, onValueChange],
  );

  // 单次拿一个稳定的 id 前缀；triggers / panels 用 `${baseId}-trigger-${value}` / `${baseId}-panel-${value}`
  // 构造稳定 id——SSR 与 CSR 两次渲染产物完全一致（useId 的设计目的）。
  const baseId = useId();
  const makeTriggerId = useCallback((v: string) => `${baseId}-trigger-${v}`, [baseId]);
  const makePanelId = useCallback((v: string) => `${baseId}-panel-${v}`, [baseId]);

  // triggers 注册表：refCallback 在挂载时塞入、卸载时移除。
  // 用 ref 而非 state——纯键盘事件派发用，不参与 render；改它无需触发 re-render。
  const triggersRef = useRef<Map<string, TriggerEntry>>(new Map());

  // 按 DOM 顺序对当前已注册 triggers 排序。
  // 注册顺序 ≠ DOM 顺序（卸载/重挂会乱）；compareDocumentPosition 是浏览器原生稳定 API。
  // 仅在键盘事件 handler 内调用——服务端不触达。
  const getOrderedTriggers = useCallback((): Array<{ value: string; entry: TriggerEntry }> => {
    const list: Array<{ value: string; entry: TriggerEntry }> = [];
    triggersRef.current.forEach((entry, v) => list.push({ value: v, entry }));
    return list.sort((a, b) =>
      a.entry.el.compareDocumentPosition(b.entry.el) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1,
    );
  }, []);

  // 非受控且没给 defaultValue：挂载后选中第一个未禁用的 trigger（子组件的 ref 回调此时已登记完）
  useIsomorphicLayoutEffect(() => {
    if (isControlled || uncontrolledValue !== undefined) return;
    const first = getOrderedTriggers().find((t) => !t.entry.disabled);
    if (first) setUncontrolledValue(first.value);
    // 仅挂载时执行一次
  }, []);

  // manual 模式下「当前 focus 但未 select」的 value，仅用于决定 tabIndex=0 的归属。
  // SSR 阶段无 focus 概念，初始 undefined；客户端首次聚焦才赋值。
  const [manualFocusValue, setManualFocusValue] = useState<string | undefined>(undefined);

  // tabIndex=0 归属：activationMode=automatic 时归 selected；manual 时归 manualFocusValue ?? selected。
  // 这是 roving tabindex 的核心——同一时刻只有一个 trigger 能 Tab 进来。
  const rovingValue =
    activationMode === 'manual' && manualFocusValue !== undefined ? manualFocusValue : value;

  // 键盘导航：从当前 value 在 ordered triggers 里找下一个非 disabled 的目标。
  // direction: -1（前）/ +1（后）；fromIndex: 起点索引；返回目标 entry 或 null（无可聚焦项）。
  const findNextEnabled = useCallback(
    (
      ordered: Array<{ value: string; entry: TriggerEntry }>,
      fromIndex: number,
      direction: 1 | -1,
    ): { value: string; entry: TriggerEntry } | null => {
      const total = ordered.length;
      let i = fromIndex;
      // 最多走 total 步——全 disabled 时不会无限循环。
      for (let step = 0; step < total; step++) {
        i += direction;
        if (i < 0) {
          if (!loop) return null;
          i = total - 1;
        } else if (i >= total) {
          if (!loop) return null;
          i = 0;
        }
        const candidate = ordered[i];
        if (candidate && !candidate.entry.disabled) return candidate;
      }
      return null;
    },
    [loop],
  );

  // 派发 focus + 按 activationMode 决定是否同时 setValue。
  // 服务端永不调用——getTriggerProps 返回的 onKeyDown 只在浏览器事件循环里触发。
  const focusTrigger = useCallback(
    (target: { value: string; entry: TriggerEntry }) => {
      target.entry.el.focus();
      if (activationMode === 'automatic') {
        setValue(target.value);
      } else {
        setManualFocusValue(target.value);
      }
    },
    [activationMode, setValue],
  );

  // 键盘导航：横排默认（←/→ + Home/End）。布局由 consumer 决定，本 hook 不假设方向。
  const prevKey: TabsArrowKey = 'ArrowLeft';
  const nextKey: TabsArrowKey = 'ArrowRight';

  // ── props 工厂区 ────────────────────────────────────────────
  // 内置 handler 与 consumer handler 的合并约定：
  // 1. consumer 的 onClick / onKeyDown 永远调用，不被吞
  // 2. 内置逻辑先跑（处理 ARIA/键盘语义），consumer 后跑——consumer 可读到选中已变更后的状态
  // 3. consumer 在自己的 handler 内 preventDefault / stopPropagation 不影响内置已跑的副作用
  const getListProps = useCallback<UseTabsReturn['getListProps']>(
    (userProps) => ({
      ...userProps,
      role: 'tablist',
    }),
    [],
  );

  const getTriggerProps = useCallback<UseTabsReturn['getTriggerProps']>(
    (args, userProps) => {
      const { value: triggerValue, disabled = false } = args;
      const isSelected = value === triggerValue;
      const isRoving = rovingValue === triggerValue;

      // refCallback：挂载时注册到 triggersRef，卸载时清除；同时调用 consumer 自己的 ref。
      // 不在 deps 列表里收 userProps.ref——每次 render 都是新闭包，consumer ref 也跟着重新挂；
      // 这是 React refCallback 的 trade-off，consumer 若需要稳定 ref 自行 useCallback 包裹。
      const refCallback: RefCallback<HTMLButtonElement> = (node) => {
        if (node) {
          triggersRef.current.set(triggerValue, { el: node, disabled });
        } else {
          triggersRef.current.delete(triggerValue);
        }
        const userRef = userProps?.ref;
        if (typeof userRef === 'function') {
          userRef(node);
        } else if (userRef && typeof userRef === 'object') {
          (userRef as React.MutableRefObject<HTMLButtonElement | null>).current = node;
        }
      };

      const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        if (!disabled) {
          setValue(triggerValue);
          if (activationMode === 'manual') setManualFocusValue(triggerValue);
        }
        userProps?.onClick?.(event);
      };

      const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
        // 只处理本组件关心的按键；其他放行给 consumer。
        const key = event.key;
        const isNav = key === prevKey || key === nextKey || key === 'Home' || key === 'End';
        const isActivate = activationMode === 'manual' && (key === 'Enter' || key === ' ');

        if (isNav) {
          // 事件由当前 trigger 触发，ordered 至少含它自己
          const ordered = getOrderedTriggers();
          const currentIndex = ordered.findIndex((o) => o.value === triggerValue);
          let target: { value: string; entry: TriggerEntry } | null;
          if (key === 'Home') {
            target = ordered.find((o) => !o.entry.disabled) ?? null;
          } else if (key === 'End') {
            target = [...ordered].reverse().find((o) => !o.entry.disabled) ?? null;
          } else {
            target = findNextEnabled(ordered, currentIndex, key === prevKey ? -1 : 1);
          }
          if (target) {
            event.preventDefault();
            focusTrigger(target);
          }
        } else if (isActivate && !disabled) {
          // manual 模式：Enter/Space 才把 focus 中的 value 提升为 selected。
          event.preventDefault();
          setValue(triggerValue);
        }

        userProps?.onKeyDown?.(event);
      };

      // 解构出 ref / onClick / onKeyDown 不进 spread，其他原生 attrs 透传。
      const {
        ref: _ignoredRef,
        onClick: _ignoredClick,
        onKeyDown: _ignoredKeyDown,
        ...restUserProps
      } = userProps ?? {};

      return {
        ...restUserProps,
        ref: refCallback,
        type: restUserProps.type ?? 'button',
        role: 'tab',
        id: makeTriggerId(triggerValue),
        'aria-selected': isSelected,
        'aria-controls': makePanelId(triggerValue),
        'aria-disabled': disabled || undefined,
        'data-state': isSelected ? 'active' : 'inactive',
        'data-disabled': disabled || undefined,
        disabled,
        tabIndex: isRoving ? 0 : -1,
        onClick: handleClick,
        onKeyDown: handleKeyDown,
      };
    },
    [
      value,
      rovingValue,
      activationMode,
      prevKey,
      nextKey,
      makeTriggerId,
      makePanelId,
      setValue,
      getOrderedTriggers,
      findNextEnabled,
      focusTrigger,
    ],
  );

  const getPanelProps = useCallback<UseTabsReturn['getPanelProps']>(
    (args, userProps) => {
      const { value: panelValue, keepMounted } = args;
      const isActive = value === panelValue;
      return {
        ...userProps,
        role: 'tabpanel',
        id: makePanelId(panelValue),
        'aria-labelledby': makeTriggerId(panelValue),
        tabIndex: 0,
        // keepMounted + 未激活时显式 hidden=true；激活时一律不写 hidden 属性（undefined 不渲染）。
        // 未挂载（keepMounted=false 且 inactive）由 isPanelMounted 在 consumer 侧短路，不会走到这里。
        hidden: !isActive && keepMounted ? true : undefined,
        'data-state': isActive ? 'active' : 'inactive',
      } as HTMLAttributes<HTMLElement>;
    },
    [value, makePanelId, makeTriggerId],
  );

  const isPanelMounted = useCallback<UseTabsReturn['isPanelMounted']>(
    (panelValue, keepMounted) => keepMounted === true || value === panelValue,
    [value],
  );

  // manualFocusValue 跟随 selected：受控外部把 value 切到别的项时，把 manual focus 也对齐过去——
  // 否则切完后下一次键盘事件还从旧 focus 起算，行为反直觉。仅在 manual 模式下生效。
  useEffect(() => {
    if (activationMode === 'manual' && value !== undefined) {
      setManualFocusValue(value);
    }
  }, [value, activationMode]);

  return useMemo<UseTabsReturn>(
    () => ({
      value,
      setValue,
      getListProps,
      getTriggerProps,
      getPanelProps,
      isPanelMounted,
    }),
    [value, setValue, getListProps, getTriggerProps, getPanelProps, isPanelMounted],
  );
}
