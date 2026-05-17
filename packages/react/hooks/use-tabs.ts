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
import type { ComponentBaseTabsOptions } from '@packages/utils/types';

/** ARIA tabs pattern 键盘语义里关心的所有按键 */
type TabsArrowKey = 'ArrowLeft' | 'ArrowRight' | 'ArrowUp' | 'ArrowDown' | 'Home' | 'End';

/**
 * React hook 入参类型 —— 与 Vue 侧的 `UseTabsOptions` 同型对称。
 *
 * Vue 侧入参可接受裸对象或 getter（`UseTabsOptionsInput`），React 侧只接裸对象——
 * React hook 每次 render 重跑函数体、props 自然新鲜，不需要 getter 形式补响应性。
 */
export type UseTabsOptions = ComponentBaseTabsOptions;

interface TriggerEntry {
  el: HTMLButtonElement;
  disabled: boolean;
}

export interface UseTabsReturn {
  /** 当前选中（受控/非受控统一出口） */
  value: string | undefined;
  /** 命令式切换（与受控 onValueChange 语义一致：受控只通知，非受控写内部并通知） */
  setValue: (next: string) => void;
  /** 根容器 props（透传 userProps，role 不强制；hook 不输出任何样式钩子）。
   *  排版布局（横排/竖排）由 consumer 自己用 className/style 决定——本 hook 只管 a11y 与键盘语义。 */
  getRootProps: (userProps?: HTMLAttributes<HTMLElement>) => HTMLAttributes<HTMLElement>;
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
  /** panel props：role=tabpanel + aria-labelledby + id + hidden（仅 keepMounted + 未激活时为 true）。
   *  返回类型沿用 `HTMLAttributes<HTMLElement>`（其本身已含 `hidden?: boolean | undefined`），
   *  spec 写的 `& { hidden?: boolean }` 交叉与本仓库 tsconfig `exactOptionalPropertyTypes: true`
   *  互斥——交叉要求严格 boolean，HTMLAttributes 是 boolean | undefined，加上会编译失败。 */
  getPanelProps: (
    args: { value: string; keepMounted?: boolean },
    userProps?: HTMLAttributes<HTMLElement>,
  ) => HTMLAttributes<HTMLElement>;
  /** 未激活且未 keepMounted 时返回 false，consumer 据此短路 render 实现真 unmount */
  isPanelMounted: (value: string, keepMounted?: boolean) => boolean;
}

/**
 * Headless tabs hook —— SSR 安全、零 Context、不输出 className。
 *
 * 用法：consumer 写自己的 DOM 结构，通过 `getRootProps / getListProps / getTriggerProps / getPanelProps`
 * 拿到带 ARIA 与键盘语义的 props 集合，自由 className / 自由嵌套。
 *
 * SSR 路径：所有 id 走 `useId`、状态初始值纯函数计算、render 阶段不触达 `window/document`。
 * DOM 操作（focus 派发）只发生在 `useEffect`（commit 后）回调里——服务端不执行。
 */
export function useTabs(options: ComponentBaseTabsOptions = {}): UseTabsReturn {
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

  // dev 警告：仅 dev 构建保留，生产被 vite define 剥离。
  // 与 Dialog 同型——`(import.meta as ImportMeta & { env? }).env?.DEV` 局部 cast，
  // 不在 tsconfig 全局引入 vite/client 类型（其他包未用到 import.meta.env）。
  // vitest 永远 DEV=true，else 分支被构建剥离后才走，测试期不可达。
  /* v8 ignore next */
  if ((import.meta as ImportMeta & { env?: { DEV?: boolean } }).env?.DEV) {
    if (defaultValue !== undefined && valueProp !== undefined) {
      console.warn(
        '[venomous-ui Tabs] `defaultValue` is ignored when `value` is controlled. Remove `defaultValue` or stop passing `value`.',
      );
    }
  }

  // 状态变更归一入口：所有想改 value 的来源（命令式 setValue / click / keyboard activation）都走这里。
  // 受控只通知不改内部状态——DOM 等 props 回流；非受控直接改内部状态触发 re-render。
  // 参 /packages/react/components/Dialog/Dialog.tsx:55 setOpen 同型。
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
    // sort 比较器分支取决于 V8 + Map insertion 顺序：实际 React 每次 rerender 都
    // 重挂 refCallback 让 Map 始终回到 DOM 顺序，sort 几乎只走 PRECEDING 分支；
    // FOLLOWING / return 0 是防御性兜底（消费方用 useCallback 包稳 ref 时才可能触达）。
    /* v8 ignore start */
    return list.sort((a, b) => {
      const pos = a.entry.el.compareDocumentPosition(b.entry.el);
      if (pos & Node.DOCUMENT_POSITION_FOLLOWING) return -1;
      if (pos & Node.DOCUMENT_POSITION_PRECEDING) return 1;
      return 0;
    });
    /* v8 ignore stop */
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
      // handleKeyDown 已用 `ordered.length > 0` 守护；此早返仅为类型/兜底。
      /* v8 ignore next */
      if (total === 0) return null;
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
  // 内置 handler 与 consumer handler 的合并约定（参 Button.tsx:14）：
  // 1. consumer 的 onClick / onKeyDown 永远调用，不被吞
  // 2. 内置逻辑先跑（处理 ARIA/键盘语义），consumer 后跑——consumer 可读到选中已变更后的状态
  // 3. consumer 在自己的 handler 内 preventDefault / stopPropagation 不影响内置已跑的副作用
  const getRootProps = useCallback<UseTabsReturn['getRootProps']>(
    (userProps) => ({ ...userProps }),
    [],
  );

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
          const ordered = getOrderedTriggers();
          // ordered 必含至少当前 trigger（事件由其本身触发），else 仅理论防御。
          /* v8 ignore next */
          if (ordered.length > 0) {
            const currentIndex = ordered.findIndex((o) => o.value === triggerValue);
            let target: { value: string; entry: TriggerEntry } | null = null;
            if (key === 'Home') {
              target = ordered.find((o) => !o.entry.disabled) ?? null;
            } else if (key === 'End') {
              for (let i = ordered.length - 1; i >= 0; i--) {
                const candidate = ordered[i];
                if (candidate && !candidate.entry.disabled) {
                  target = candidate;
                  break;
                }
              }
            } else if (key === prevKey) {
              target = findNextEnabled(ordered, currentIndex, -1);
              // isNav 已穷举 Home/End/prev/next，nextKey 是兜底 else 分支不可达。
              /* v8 ignore next */
            } else if (key === nextKey) {
              target = findNextEnabled(ordered, currentIndex, 1);
            }
            if (target) {
              event.preventDefault();
              focusTrigger(target);
            }
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
      getRootProps,
      getListProps,
      getTriggerProps,
      getPanelProps,
      isPanelMounted,
    }),
    [value, setValue, getRootProps, getListProps, getTriggerProps, getPanelProps, isPanelMounted],
  );
}
