import type { HTMLAttributes, ButtonHTMLAttributes } from 'vue';
import type { ComponentBaseTabsOptions } from '@packages/utils/types';

// HTMLAttributes 走 @vue-ignore fallthrough；ComponentBaseTabsOptions 进 props 参与行为/状态。
// Omit defaultValue：HTMLAttributes 同名字段是 string 表单属性，与本包语义冲突。
export interface TabsProps
  extends ComponentBaseTabsOptions, /* @vue-ignore */ Omit<HTMLAttributes, 'defaultValue'> {}

export interface TabTitleProps extends /* @vue-ignore */ ButtonHTMLAttributes {
  /** 显式 value；省略则按出现顺序自动取 String(index) 与同位 TabPanel 配对 */
  value?: string;
  /** 单独禁用此项 */
  disabled?: boolean;
}

export interface TabPanelProps extends /* @vue-ignore */ HTMLAttributes {
  /** 显式 value；省略则按出现顺序自动取 String(index) 与同位 TabTitle 配对 */
  value?: string;
  /** 保留本 panel DOM（仅切 hidden）以保住表单输入等状态；默认 false 即未激活时直接 unmount。
   *  代价：开启的 panel 即使隐藏也持续渲染、effect 持续运行——复杂面板（图表 / 编辑器）会有性能 / 内存开销 */
  keepMounted?: boolean;
}
