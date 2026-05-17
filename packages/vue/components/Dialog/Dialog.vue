<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, useAttrs, watch } from 'vue';
import { COMPONENTS } from '@packages/utils/classnames';
import { scrollLock } from '@packages/utils/helpers';
import type { DialogProps } from './Dialog.type';

// `open` 不在 defineProps 类型里声明——Vue 对 boolean 类型 prop 在父未传时
// 自动注入 false，会让「受控判定」`props.open !== undefined` 错误成立（永远受控）。
// 改走 attrs 通道：父组件传 :open="x" 就出现在 attrs.open，不传则 undefined。
// （DialogProps 类型仍含 open，仅作为消费方静态契约——template 里的接收靠 useAttrs）
type DialogTypedProps = Omit<DialogProps, 'open'>;
const props = withDefaults(defineProps<DialogTypedProps>(), {
  defaultOpen: false,
  closeOnBackdropClick: true,
  closeOnEsc: true,
  lockScroll: true,
});

// open 不能给默认值——undefined 是「非受控」哨兵。
// emits 用 kebab-case；vue 模板 `@open-change` 与 stories `onOpenChange` 监听键名都映射到这个事件。
const emit = defineEmits<{ 'open-change': [open: boolean] }>();

// 通过 attrs 取 `open`：父组件传 :open="x" 时 attrs.open 是 x；不传时是 undefined。
// 用 attrs 而非 defineProps 是为了规避 Vue 对 boolean 类 prop 「未传 → false」的自动转换，
// 否则 `isControlled` 永远 true，非受控分支走不到。
//
// inheritAttrs: false——禁掉默认 fallthrough，否则 `open` attr 会落到根 <dialog>
// 触发原生非模态展示，与 showModal() 的模态路径冲突。
// 模板里手动 v-bind="forwardedAttrs" 透其他 attrs。
//
// forwardedAttrs 主动剔除：
// - `open`：受控状态自身，绝不能落到 DOM 当 HTML attr
// - `onOpenChange`：Vue emit 监听器（v-bind 直接 spread 会被注册为 `openchange` DOM 监听器，无意义噪音）
// - `class`：模板下方 `:class="COMPONENTS.DIALOG"` 显式绑定会覆盖同名后绑，消费方 class 在这里合并到外部
defineOptions({ inheritAttrs: false });
const attrs = useAttrs() as {
  open?: boolean;
  onOpenChange?: unknown;
  class?: unknown;
} & Record<string, unknown>;
const forwardedAttrs = computed(() => {
  const { open: _o, onOpenChange: _e, class: _c, ...rest } = attrs;
  return rest;
});

const dialogRef = ref<HTMLDialogElement | null>(null);
const uncontrolledOpen = ref(props.defaultOpen);
const isControlled = computed(() => attrs.open !== undefined);
const open = computed(() =>
  isControlled.value ? (attrs.open as boolean) : uncontrolledOpen.value,
);

// dev 警告：仅 dev 构建保留，生产被 vite define 剥离。
// 局部 cast 避免在 tsconfig 全局引入 vite/client 类型（其他包未用到 import.meta.env）。
// vitest 永远 DEV=true，else 不可达
/* v8 ignore next */
if ((import.meta as ImportMeta & { env?: { DEV?: boolean } }).env?.DEV) {
  if (props.defaultOpen && attrs.open !== undefined) {
    // 受控/非受控冲突：受控优先，提示开发者去掉 defaultOpen
    console.warn(
      '[venomous-ui Dialog] `defaultOpen` is ignored when `open` is controlled. Remove `defaultOpen` or stop passing `open`.',
    );
  }
  if (!props.ariaLabel && !props.ariaLabelledBy) {
    console.warn(
      '[venomous-ui Dialog] missing `ariaLabel` or `ariaLabelledBy` — dialog has no accessible name.',
    );
  }
}

// 状态变更归一入口：所有想改 open 的来源（命令式 / Esc / backdrop）走这里。
// 受控分支只通知，不改内部状态——DOM 等 props 回流；非受控直接改内部状态触发 watcher。
const setOpen = (next: boolean) => {
  if (!isControlled.value) uncontrolledOpen.value = next;
  emit('open-change', next);
};

// 同步 open 真相到 DOM 命令式 API。
// 不绑 <dialog open> 属性——属性受控只触发非模态展示，模态必须 showModal()。
//
// 不用 watch 的 immediate:true：immediate 首次回调是同步跑在 setup 阶段的，
// 此时 dialogRef.value 还是 null，showModal 调不到 → defaultOpen=true 的非受控
// 初始打开语义失效（实证：watch 首次跑 hasEl: false）。改用 onMounted 显式
// 跑一次首次同步（此时 <dialog> DOM 已挂载，dialogRef.value 已就位）。
// flush:'post' 仍保留：后续 open 变化时确保 DOM patch 完再 show/close。
const syncDialogToOpen = (value: boolean) => {
  const el = dialogRef.value;
  // onMounted/watch 跑时 ref 已就位；防御不可达
  /* v8 ignore next */
  if (!el) return;
  if (value && !el.open) el.showModal();
  else if (!value && el.open) el.close();
};
watch(open, syncDialogToOpen, { flush: 'post' });
onMounted(() => syncDialogToOpen(open.value));

// 滚动锁独立 watcher：仅在 open=true && lockScroll=true 时持有一份引用计数。
// onCleanup 在 source 变化前 / 卸载时释放——保证 lockScroll 运行期切换、open 切换、卸载三种场景都对称。
watch(
  () => open.value && props.lockScroll,
  (active, _prev, onCleanup) => {
    if (!active) return;
    scrollLock.acquire();
    onCleanup(() => scrollLock.release());
  },
  { immediate: true },
);

// 卸载兜底：仅在卸载时若 dialog 仍 open 强制关闭，避免 inert 残留。
// 不再 emit('open-change')——卸载场景下消费方已经在拆组件，多发一次反而可能踩到已卸载的 ref。
onBeforeUnmount(() => {
  const el = dialogRef.value;
  if (el?.open) el.close();
});

// 暴露 ref 本身让 `instance.el` 与 React 的 `handle.el` 同语义（取真实 DOM 节点）。
// Vue 的 defineExpose 在父组件读 `instance.el` 时会自动 unwrap ref → 拿到 HTMLDialogElement | null。
// defineExpose 不写泛型参数：写成 `el: typeof dialogRef` 会把对外类型标成 `Ref<...>`，
// 与 DialogInstance.el 的裸值契约不一致——靠运行时 unwrap 兜不住静态类型。
// 让 vue 自己从 DialogInstance 类型 + 实参做推断（dialogRef 自动 unwrap 成裸值）即可。
defineExpose({
  el: dialogRef,
  open: () => setOpen(true),
  close: () => setOpen(false),
  toggle: () => setOpen(!open.value),
});

// 原生 Esc 触发 cancel 事件。@cancel.prevent 模板修饰符兜底 preventDefault，
// 由 setOpen → watcher 路径统一关闭——避免浏览器自动 close 触发 close 事件再回流。
const handleCancel = () => {
  if (props.closeOnEsc) setOpen(false);
};

// backdrop 点击：原生没有 backdrop 事件，靠点击坐标是否落在 dialog 视口矩形外判定。
// 不能用 `event.target === dialog` —— 那种判法只在「dialog 比内容大、点击落在 padding 上」时
// 才碰巧 work；fullscreen / 用户用 inline style 撑满视口时 dialog 内任何空白点击都会误判成 backdrop。
// 矩形判定对任意尺寸都成立：fullscreen 时 rect 等于视口，永远点不到外面也就永远不会触发关闭。
const handleClick = (event: MouseEvent) => {
  const el = dialogRef.value;
  if (!props.closeOnBackdropClick || !el) return;
  const rect = el.getBoundingClientRect();
  const inside =
    event.clientX >= rect.left &&
    event.clientX <= rect.right &&
    event.clientY >= rect.top &&
    event.clientY <= rect.bottom;
  if (!inside) setOpen(false);
};
</script>

<template>
  <dialog
    ref="dialogRef"
    v-bind="forwardedAttrs"
    :aria-label="ariaLabel"
    :aria-labelledby="ariaLabelledBy"
    :class="[COMPONENTS.DIALOG, attrs.class]"
    @cancel.prevent="handleCancel"
    @click="handleClick"
  >
    <slot />
  </dialog>
</template>
