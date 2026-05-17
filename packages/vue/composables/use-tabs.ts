import {
  computed,
  onBeforeUnmount,
  ref,
  shallowRef,
  useId,
  watch,
  type ComputedRef,
  type HTMLAttributes,
  type ButtonHTMLAttributes,
} from 'vue';
import type { ComponentBaseTabsOptions } from '@packages/utils/types';

/** ARIA tabs pattern 键盘语义里关心的所有按键 */
type TabsArrowKey = 'ArrowLeft' | 'ArrowRight' | 'ArrowUp' | 'ArrowDown' | 'Home' | 'End';

interface TriggerEntry {
  el: HTMLButtonElement;
  disabled: boolean;
}

/**
 * 入参形态：裸对象 **或** getter 函数。
 *
 * Vue composable 在 setup 阶段只跑一次——直接解构裸对象会把 `options.value`（受控）
 * 这类来自 props 的响应式字段拍成 primitive 快照，computed 之后追踪不到父组件的更新。
 * 因此受控场景必须通过 getter 形式传入：`useTabs(() => ({ value: props.value, ... }))`，
 * 这样内部 computed 每次重求值都重新调 getter 拿当下最新值。
 *
 * 非受控场景两种形态等价（裸对象更省事）：`useTabs({ defaultValue: 'a' })`。
 *
 * 这与 React hook「每次 render 重跑函数体、props 自然新鲜」的语义对齐——
 * Vue 没有 React 那种语义，故借 getter 显式补齐。
 */
export type UseTabsOptions = ComponentBaseTabsOptions;
export type UseTabsOptionsInput = UseTabsOptions | (() => UseTabsOptions);

export interface UseTabsReturn {
  /** 当前选中（响应式） */
  value: ComputedRef<string | undefined>;
  /** 命令式切换：受控只 emit、非受控写内部并 emit */
  setValue: (next: string) => void;
  /** 根容器 props（透传 userProps；hook 不输出任何样式钩子）。
   *  排版布局（横排/竖排）由 consumer 自己用 class/style 决定——本 composable 只管 a11y 与键盘语义。 */
  getRootProps: (userProps?: HTMLAttributes & Record<string, unknown>) => Record<string, unknown>;
  /** tablist 容器 props：role=tablist */
  getListProps: (userProps?: HTMLAttributes & Record<string, unknown>) => Record<string, unknown>;
  /** trigger props：role=tab + 完整 ARIA + roving tabindex + onClick + onKeydown + ref */
  getTriggerProps: (
    args: { value: string; disabled?: boolean },
    userProps?: ButtonHTMLAttributes & Record<string, unknown>,
  ) => Record<string, unknown>;
  /** panel props：role=tabpanel + aria-labelledby + id + hidden（仅 keepMounted + 未激活时为 true） */
  getPanelProps: (
    args: { value: string; keepMounted?: boolean },
    userProps?: HTMLAttributes & Record<string, unknown>,
  ) => Record<string, unknown>;
  /** 未激活且未 keepMounted 时返回 false，consumer 用 v-if 短路实现真 unmount */
  isPanelMounted: (value: string, keepMounted?: boolean) => boolean;
}

/**
 * Headless tabs composable —— SSR 安全、零 provide/inject、不输出 className。
 *
 * 用法（非受控）：
 *   const tabs = useTabs({ defaultValue: 'a' });
 *
 * 用法（受控；必须 getter 形式才能保住响应性）：
 *   const tabs = useTabs(() => ({ value: props.value, onValueChange: emit.bind(null, 'update:value') }));
 *
 * SSR 路径：所有 id 走 vue 3.5+ 内置 `useId`、状态初始值纯函数计算、setup 阶段不触达
 * `window/document/navigator`。DOM 操作（focus 派发）只在浏览器事件 handler 内执行。
 */
export function useTabs(input: UseTabsOptionsInput = {}): UseTabsReturn {
  // 统一入参：裸对象包成稳定 getter；函数形式直接用——内部所有 options 字段读取都走它，
  // 保证受控 props 的响应式追踪不被解构截断。
  const getOpts: () => UseTabsOptions = typeof input === 'function' ? input : () => input;

  // defaultValue 取首次 setup 时的快照——非受控初始值是约定语义，
  // 后续 defaultValue 变化不影响已挂载的组件（与 React 同型）。
  const initialOpts = getOpts();
  const defaultValue = initialOpts.defaultValue;

  // 受控/非受控判定每次都从最新 options 读——consumer 切换 value undefined↔有值会动态改判定。
  // computed 闭包追踪 getOpts() 内访问的字段：getter 内访问 props.value 时，
  // Vue 响应式系统把当前 effect 注册到该 prop 的依赖里，prop 变 → computed 失效 → 重求值。
  const optsValue = computed(() => getOpts().value);
  const isControlled = computed(() => optsValue.value !== undefined);

  const uncontrolledValue = ref<string | undefined>(defaultValue);
  const value = computed(() => (isControlled.value ? optsValue.value : uncontrolledValue.value));

  // 派生配置：每次访问都从最新 options 读；带默认值。
  const activationMode = computed(() => getOpts().activationMode ?? 'automatic');
  const loop = computed(() => getOpts().loop ?? true);

  // dev 警告：仅 dev 构建保留，生产被 vite define 剥离。
  // 与 Dialog.vue 同型——`(import.meta as ImportMeta & { env? }).env?.DEV` 局部 cast。
  // 在首次 setup 时跑一次（最常见场景：consumer 同时把 defaultValue 与 value 写在初始 options）。
  // vitest 永远 DEV=true，else 分支被构建剥离后才走，测试期不可达。
  /* v8 ignore next */
  if ((import.meta as ImportMeta & { env?: { DEV?: boolean } }).env?.DEV) {
    if (initialOpts.defaultValue !== undefined && initialOpts.value !== undefined) {
      console.warn(
        '[venomous-ui Tabs] `defaultValue` is ignored when `value` is controlled. Remove `defaultValue` or stop passing `value`.',
      );
    }
  }

  // 状态变更归一入口：与 React 同型——受控只通知，非受控写内部状态并通知。
  // onValueChange 每次都从最新 options 读——consumer 换回调函数也能跟上。
  // 同值短路：避免受控 consumer 的 onValueChange 被重复触发。
  const setValue = (next: string) => {
    if (next === value.value) return;
    if (!isControlled.value) uncontrolledValue.value = next;
    getOpts().onValueChange?.(next);
  };

  // 单次拿稳定 id 前缀；trigger/panel 用 `${baseId}-trigger-${v}` / `${baseId}-panel-${v}`
  // 拼成稳定 id —— vue 3.5+ useId 在 SSR/CSR 输出一致，hydration 不 mismatch。
  const baseId = useId();
  const makeTriggerId = (v: string) => `${baseId}-trigger-${v}`;
  const makePanelId = (v: string) => `${baseId}-panel-${v}`;

  // triggers 注册表：用 shallowRef 持 Map——纯键盘派发用，不参与 render。
  // 不用普通 ref：Map 不是 vue 深响应式默认友好的形态，shallowRef 引用语义更清晰。
  const triggersRef = shallowRef<Map<string, TriggerEntry>>(new Map());

  // 按 DOM 顺序排序当前已注册 triggers——卸载/重挂会乱注册顺序，compareDocumentPosition 永远稳。
  // 仅在键盘事件 handler 内调用——服务端不触达。
  const getOrderedTriggers = (): Array<{ value: string; entry: TriggerEntry }> => {
    const list: Array<{ value: string; entry: TriggerEntry }> = [];
    triggersRef.value.forEach((entry, v) => list.push({ value: v, entry }));
    // sort 比较器分支取决于 V8 + Map insertion 顺序：happy-dom + Vue ref 重挂顺序让
    // FOLLOWING / return 0 几乎不达；环境差异大，整段 ignore 与 React 版同型。
    /* v8 ignore start */
    return list.sort((a, b) => {
      const pos = a.entry.el.compareDocumentPosition(b.entry.el);
      if (pos & Node.DOCUMENT_POSITION_FOLLOWING) return -1;
      if (pos & Node.DOCUMENT_POSITION_PRECEDING) return 1;
      return 0;
    });
    /* v8 ignore stop */
  };

  // manual 模式下「focus 但未 select」的 value，决定 tabIndex=0 归属。
  // SSR 阶段无 focus 概念，初始 undefined。
  const manualFocusValue = ref<string | undefined>(undefined);
  const rovingValue = computed(() =>
    activationMode.value === 'manual' && manualFocusValue.value !== undefined
      ? manualFocusValue.value
      : value.value,
  );

  // 键盘导航：横排默认（←/→ + Home/End）。布局由 consumer 决定，本 composable 不假设方向。
  const navKeys: { prev: TabsArrowKey; next: TabsArrowKey } = {
    prev: 'ArrowLeft',
    next: 'ArrowRight',
  };

  const findNextEnabled = (
    ordered: Array<{ value: string; entry: TriggerEntry }>,
    fromIndex: number,
    direction: 1 | -1,
  ): { value: string; entry: TriggerEntry } | null => {
    const total = ordered.length;
    // 上游 isNav 块用 `ordered.length > 0` 守护；此早返仅为类型/兜底
    /* v8 ignore next */
    if (total === 0) return null;
    const allowLoop = loop.value;
    let i = fromIndex;
    for (let step = 0; step < total; step++) {
      i += direction;
      if (i < 0) {
        if (!allowLoop) return null;
        i = total - 1;
      } else if (i >= total) {
        if (!allowLoop) return null;
        i = 0;
      }
      const candidate = ordered[i];
      if (candidate && !candidate.entry.disabled) return candidate;
    }
    // 走完全部 trigger 都 disabled 时才到这；Home/End 单独走兜底分支，方向键里通常 ≥1 启用
    /* v8 ignore next */
    return null;
  };

  const focusTrigger = (target: { value: string; entry: TriggerEntry }) => {
    target.entry.el.focus();
    if (activationMode.value === 'automatic') {
      setValue(target.value);
    } else {
      manualFocusValue.value = target.value;
    }
  };

  // ── props 工厂区 ────────────────────────────────────────────
  // handler 在工厂内现造——consumer 的 v-bind 每次 patch 重调工厂，listener 引用每次新建。
  // 这是 Vue 模板与 React JSX 的固有差异，listener 重绑成本可控，本 hook 不强求引用稳定。

  const getRootProps: UseTabsReturn['getRootProps'] = (userProps) => ({ ...userProps });

  const getListProps: UseTabsReturn['getListProps'] = (userProps) => ({
    ...userProps,
    role: 'tablist',
  });

  const getTriggerProps: UseTabsReturn['getTriggerProps'] = (args, userProps) => {
    const { value: triggerValue, disabled = false } = args;
    const isSelected = value.value === triggerValue;
    const isRoving = rovingValue.value === triggerValue;

    // ref 函数：vue 3 支持 :ref="fn" 模板语法，挂载/卸载时被调用。
    // 与 React refCallback 同型——挂载时塞入注册表、卸载时清除。
    //
    // node 形态有 3 种，按优先级解开：
    // 1. 裸 HTML 元素：consumer 用 `<button v-bind="...">`，node 直接是 HTMLButtonElement
    // 2. venomous Vue 组件实例：consumer 用内置 `<Button>` 等，node 是 PublicInstance 且
    //    `defineExpose({ el: ref<HTMLElement> })` —— 仓库约定，所有命令式组件都暴露 `el`
    //    （参 Button.vue:9 / Dialog.vue:117）
    // 3. 通用 Vue 组件实例：node.$el 指根 DOM —— vue 内置兜底
    const resolveButtonEl = (node: unknown): HTMLButtonElement | null => {
      if (node instanceof HTMLButtonElement) return node;
      if (node && typeof node === 'object') {
        const expose = (node as { el?: unknown }).el;
        // 仓库约定的 `el` 字段：可能是裸 element 或 vue ref 自动 unwrap 后的 element
        if (expose instanceof HTMLButtonElement) return expose;
        if (expose && typeof expose === 'object' && 'value' in (expose as object)) {
          const inner = (expose as { value: unknown }).value;
          if (inner instanceof HTMLButtonElement) return inner;
        }
        // vue runtime 兜底：所有组件实例有 $el
        const dollarEl = (node as { $el?: unknown }).$el;
        if (dollarEl instanceof HTMLButtonElement) return dollarEl;
      }
      return null;
    };

    const refFn = (node: unknown) => {
      const map = triggersRef.value;
      const el = resolveButtonEl(node);
      if (el) {
        map.set(triggerValue, { el, disabled });
      } else {
        // node 为 null（卸载）或解不出 button —— 清掉注册即可
        map.delete(triggerValue);
      }
      // 链 consumer 自己的 ref（如有）
      const userRef = (userProps as { ref?: unknown } | undefined)?.ref;
      if (typeof userRef === 'function') {
        (userRef as (n: unknown) => void)(node);
      }
      // vue ref 字符串 / ref 对象由 vue runtime 自己处理，不在这里 forward
    };

    const onClick = (event: MouseEvent) => {
      if (!disabled) {
        setValue(triggerValue);
        if (activationMode.value === 'manual') manualFocusValue.value = triggerValue;
      }
      const userOnClick = (userProps as { onClick?: (e: MouseEvent) => void } | undefined)?.onClick;
      userOnClick?.(event);
    };

    const onKeydown = (event: KeyboardEvent) => {
      const key = event.key;
      const { prev: prevKey, next: nextKey } = navKeys;
      const isNav = key === prevKey || key === nextKey || key === 'Home' || key === 'End';
      const isActivate = activationMode.value === 'manual' && (key === 'Enter' || key === ' ');

      if (isNav) {
        const ordered = getOrderedTriggers();
        // ordered 必含至少当前 trigger（事件由其本身触发），else 仅理论防御
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
            // isNav 已穷举 Home/End/prev/next，nextKey 是兜底 else 分支不可达
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
        event.preventDefault();
        setValue(triggerValue);
      }

      // Vue runtime 把 `onKeydown` 与 `onKeyDown` 都规范化为同一 `keydown` 事件——
      // 同一元素同一事件只挂一个 listener，后写覆盖前写。consumer 按 React 习惯写 onKeyDown（大写 D）
      // 时若不在这里手动转发，会被本工厂返回对象里的 `onKeydown` 在 vue 内规范化时覆盖 →
      // consumer handler 失效。两个变体都读、都转发。
      const u = userProps as
        | { onKeydown?: (e: KeyboardEvent) => void; onKeyDown?: (e: KeyboardEvent) => void }
        | undefined;
      u?.onKeydown?.(event);
      u?.onKeyDown?.(event);
    };

    // 解构出 ref / onClick / onKeydown / onKeyDown 不进 spread——
    // 后三者都已合并到内置 handler 内调用，留在 rest 里会与本工厂返回的 onKeydown 在 vue runtime
    // 内规范化冲突（onKeyDown 与 onKeydown 都被解析为 keydown 事件，后写覆盖前写）。
    const rest: Record<string, unknown> = { ...(userProps as Record<string, unknown> | undefined) };
    delete rest.ref;
    delete rest.onClick;
    delete rest.onKeydown;
    delete rest.onKeyDown;

    return {
      ...rest,
      ref: refFn,
      type: rest.type ?? 'button',
      role: 'tab',
      id: makeTriggerId(triggerValue),
      'aria-selected': isSelected,
      'aria-controls': makePanelId(triggerValue),
      'aria-disabled': disabled || undefined,
      'data-state': isSelected ? 'active' : 'inactive',
      'data-disabled': disabled || undefined,
      disabled,
      tabindex: isRoving ? 0 : -1,
      onClick,
      onKeydown,
    };
  };

  const getPanelProps: UseTabsReturn['getPanelProps'] = (args, userProps) => {
    const { value: panelValue, keepMounted } = args;
    const isActive = value.value === panelValue;
    return {
      ...(userProps as Record<string, unknown> | undefined),
      role: 'tabpanel',
      id: makePanelId(panelValue),
      'aria-labelledby': makeTriggerId(panelValue),
      tabindex: 0,
      hidden: !isActive && keepMounted ? true : undefined,
      'data-state': isActive ? 'active' : 'inactive',
    };
  };

  const isPanelMounted: UseTabsReturn['isPanelMounted'] = (panelValue, keepMounted) =>
    keepMounted === true || value.value === panelValue;

  // manualFocusValue 跟随 selected：受控外部把 value 切到别的项时把 manual focus 也对齐过去。
  // flush:'sync' 保证 manualFocusValue 与 value 同帧更新——避免下一次 keydown 事件读到一帧前的旧
  // rovingValue（默认 lazy 异步会让 tabIndex=0 归属在一个 microtask 内错位到旧值上）。
  watch(
    value,
    (next) => {
      if (activationMode.value === 'manual' && next !== undefined) {
        manualFocusValue.value = next;
      }
    },
    { flush: 'sync' },
  );

  // 卸载时清空 triggers 注册表——避免 watcher 对已卸载元素持引用。
  onBeforeUnmount(() => {
    triggersRef.value.clear();
  });

  return {
    value,
    setValue,
    getRootProps,
    getListProps,
    getTriggerProps,
    getPanelProps,
    isPanelMounted,
  };
}
