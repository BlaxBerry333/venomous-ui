import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react';
import type { ComponentBaseTabsOptions } from '@packages/utils/types';

export interface TabsProps
  extends
    ComponentBaseTabsOptions,
    Omit<HTMLAttributes<HTMLDivElement>, 'onChange' | 'children' | 'defaultValue'> {
  children?: ReactNode;
}

export interface TabTitleProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'value'> {
  /** 显式 value；省略则按出现顺序自动取 String(index) 与同位 TabPanel 配对 */
  value?: string;
  children?: ReactNode;
}

export interface TabPanelProps extends Omit<HTMLAttributes<HTMLDivElement>, 'value'> {
  /** 显式 value；省略则按出现顺序自动取 String(index) 与同位 TabTitle 配对 */
  value?: string;
  /** 保留本 panel DOM（仅切 hidden）以保住表单输入等状态；默认 false 即未激活时直接 unmount。
   *  代价：开启的 panel 即使隐藏也持续渲染、effect 持续运行——复杂面板（图表 / 编辑器）会有性能 / 内存开销 */
  keepMounted?: boolean;
  children?: ReactNode;
}
