import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react';

export interface TabsOptions {
  /** 非受控初始选中；省略时默认选中第一个未禁用的 TabTitle。与 value 同时给时以 value 为准并 dev 警告 */
  defaultValue?: string;
  /** 受控选中；省略走非受控 */
  value?: string;
  /** 选中变更通知（受控/非受控都触发） */
  onValueChange?: (value: string) => void;
  /** automatic 方向键移焦即切换 / manual 移焦后按 Enter 或 Space 才切换，默认 automatic */
  activationMode?: 'automatic' | 'manual';
  /** 方向键到末尾是否回到开头，默认 true */
  loop?: boolean;
}

export interface TabsProps
  extends
    TabsOptions,
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
