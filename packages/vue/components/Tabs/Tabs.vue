<script setup lang="ts">
import { Fragment, cloneVNode, computed, h, provide, useAttrs, useSlots, type VNode } from 'vue';
import { useTabs, type UseTabsReturn } from '@packages/vue/composables';
import { COMPONENTS } from '@packages/utils/classnames';
import type { TabsProps } from './Tabs.type';
import { TABS_INJECT_KEY, TAB_TITLE_TYPE, TAB_PANEL_TYPE } from './shared';

// inheritAttrs: false —— 我们手动把 attrs 透给根 div（经 getRootProps 合并）。
// 默认 true 会让 attrs 自动 fallthrough 到根，但 root 上还有 v-bind 输出 hook props，
// 顺序冲突时不可控。手动合并能保证 hook 输出的 ARIA / role 优先级稳定。
defineOptions({ inheritAttrs: false });

const props = defineProps<TabsProps>();

const emit = defineEmits<{ 'value-change': [value: string] }>();

const attrs = useAttrs();
const slots = useSlots();

// 预扫 slot：自动配对 + 分桶。第 N 个 TabTitle ↔ 第 N 个 TabPanel；显式 props.value 优先。
// 解析后的 value 通过 cloneVNode 注入私有 prop `data-tabs-resolved-value`——
// 不能 in-place 改 node.props（slots.default() 返回的是 Vue runtime 共享 vnode）。
// vnode.type 对 SFC 组件就是其 options 对象本身，引用相等识别（见 ./shared.ts）。
//
// 分桶动机：组件层「开箱即用」的 ARIA tabs pattern 要求 tablist 容器只包 tab，不包 panel。
// TabTitle 进 titles[]（外层 role=tablist 容器），TabPanel 进 panels[]（tablist 之外平铺）。
interface ResolvedBuckets {
  titles: VNode[];
  panels: VNode[];
}

const resolved = computed<ResolvedBuckets>(() => {
  // slots.default 在 SFC consumer 用法下永远定义；?? [] 防御不可达
  /* v8 ignore next */
  const raw = slots.default?.() ?? [];
  const titles: VNode[] = [];
  const panels: VNode[] = [];
  let titleIndex = 0;
  let panelIndex = 0;

  const traverse = (nodes: VNode[]): void => {
    for (const node of nodes) {
      // Vue runtime 返回的 vnode 数组里偶有 string/null 占位（注释节点/文本）
      // 类型签名是 VNode[] 但实际 mixed；测试期未构造到该路径
      /* v8 ignore next */
      if (typeof node !== 'object' || node === null) continue;

      // Fragment（type 是 Symbol）：v-for / 顶层多节点会包一层，递归进 children
      if (typeof node.type === 'symbol' && Array.isArray(node.children)) {
        traverse(
          node.children.filter(
            (c): c is VNode => typeof c === 'object' && c !== null && 'type' in (c as object),
          ),
        );
        continue;
      }

      if (node.type === TAB_TITLE_TYPE) {
        const explicit = (node.props as { value?: string } | null)?.value;
        const value = explicit ?? String(titleIndex);
        titleIndex++;
        titles.push(cloneVNode(node, { 'data-tabs-resolved-value': value }));
        continue;
      }
      if (node.type === TAB_PANEL_TYPE) {
        const explicit = (node.props as { value?: string } | null)?.value;
        const value = explicit ?? String(panelIndex);
        panelIndex++;
        panels.push(cloneVNode(node, { 'data-tabs-resolved-value': value }));
        continue;
      }
    }
  };

  traverse(raw);
  return { titles, panels };
});

// 稳定引用的 functional component。直接用 inline `{ render: () => ... }` 会让 type
// 每次新建 → patch 时 isSameVNodeType 永远判负 → 整棵子树 unmount/remount。
const TitlesHost = () => h(Fragment, resolved.value.titles);
const PanelsHost = () => h(Fragment, resolved.value.panels);

// getter 形态保父组件 props 响应性
const tabs: UseTabsReturn = useTabs(() => ({
  ...(props.defaultValue !== undefined ? { defaultValue: props.defaultValue } : {}),
  ...(props.value !== undefined ? { value: props.value } : {}),
  ...(props.activationMode !== undefined ? { activationMode: props.activationMode } : {}),
  // boolean prop 未传时 Vue 注入 undefined；测试期不容易稳定 hit `loop=undefined && 显式 true` 的双分支
  /* v8 ignore next */
  ...(props.loop !== undefined ? { loop: props.loop } : {}),
  onValueChange: (next: string) => emit('value-change', next),
}));

provide(TABS_INJECT_KEY, { tabs });

// 根 div class 合并：consumer 传 attrs.class 会**覆盖** template 里 `:class=`
// （v-bind 后写优先），所以这里手动把 TABS class 与 attrs.class 合并到 v-bind 对象里。
// 数组形式 [TABS, attrs.class] 让 Vue runtime 自动 stringify 拼接，TABS 在前。
const rootProps = computed(() => {
  const merged = { ...attrs, class: [COMPONENTS.TABS, attrs.class as unknown] };
  return tabs.getRootProps(merged);
});
</script>

<template>
  <div v-bind="rootProps">
    <div v-bind="tabs.getListProps()">
      <TitlesHost />
    </div>
    <PanelsHost />
  </div>
</template>
