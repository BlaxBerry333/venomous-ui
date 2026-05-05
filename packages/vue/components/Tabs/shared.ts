import type { InjectionKey } from 'vue';
import type { UseTabsReturn } from '@packages/vue/composables';
import TabTitle from './TabTitle.vue';
import TabPanel from './TabPanel.vue';

/**
 * Tabs 的 provide/inject 通道：跨子组件共享 useTabs 返回值。
 *
 * 与 React Context 同语义：Tabs 在 setup 顶层 provide，TabTitle/TabPanel 在 setup
 * 内 inject。setup 同步路径无副作用 → SSR 安全。
 */
export interface TabsInjectValue {
  tabs: UseTabsReturn;
}

export const TABS_INJECT_KEY: InjectionKey<TabsInjectValue> = Symbol('venomous-ui:Tabs');

// 把子组件 SFC 的 options 对象暴露给 Tabs.vue 内部 vnode.type 比较——
// 用于在 default slot 里识别哪个 vnode 是 TabTitle/TabPanel 并自动配对 value。
// 这是 vue 等价于 React 的「组件函数 + Symbol 标记」做法。
export const TAB_TITLE_TYPE = TabTitle;
export const TAB_PANEL_TYPE = TabPanel;
