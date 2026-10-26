/**
 * @file packages/react — React 端入口（barrel）
 *
 * 用户路径 `venomous-ui/react`：从这里 re-export 所有对外组件 + hooks。
 * 单组件子路径 `venomous-ui/react/<Name>` 走 packages/react/<Name>/index.ts
 * （组件子目录平铺在 packages/react/ 下，与产物 dist/react/<Name>/ 一一对齐，
 * 不再有 `components/` 中间层 —— 让 vite-plugin-dts 能直接镜像产物结构）。
 *
 * 对外 hooks（如 useTheme）平铺在 packages/react/use-*.ts，仅通过此 barrel 暴露，
 * 不开单组件子路径（hook 无需 tree-shake 到单文件粒度）。
 *
 * 内部实现工具（不对外）位于 internal/react/。
 */

export { useTheme } from './use-theme';
export type { ColorScheme, UseThemeOptions, UseThemeReturn } from './use-theme';

export { ThemeScript } from './ThemeScript';
export type { ThemeScriptProps } from './ThemeScript';

export { Button } from './Button';
export type { ButtonProps, ButtonVariant, ButtonSize } from './Button';

export { Dialog, DialogBody, DialogFooter, DialogHeader, DialogTitle } from './Dialog';
export type { DialogHandle, DialogProps, DialogSectionProps, DialogTitleProps } from './Dialog';

export { Portal } from './Portal';
export type { PortalContainer, PortalProps } from './Portal';

export { Tabs, TabPanel, TabTitle } from './Tabs';
export type { TabPanelProps, TabsOptions, TabsProps, TabTitleProps } from './Tabs';

export { Popover, PopoverContent, PopoverTrigger } from './Popover';
export type {
  Placement,
  PopoverContentProps,
  PopoverOpenChangeReason,
  PopoverProps,
  PopoverTriggerProps,
} from './Popover';

export { Tooltip, TooltipContent, TooltipTrigger } from './Tooltip';
export type {
  TooltipContentProps,
  TooltipOpenChangeReason,
  TooltipProps,
  TooltipTriggerProps,
} from './Tooltip';
