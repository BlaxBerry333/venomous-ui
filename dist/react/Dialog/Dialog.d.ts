import { DialogHandle, DialogProps, DialogSectionProps, DialogTitleProps } from './Dialog.type';
/**
 * Dialog — 基于原生 `<dialog>` + `showModal()` 的模态框。
 *
 * - 焦点锁定、背景 inert、top layer 都交给浏览器。
 * - 不绑 `<dialog open>` 属性：属性只能非模态展示，模态必须调 showModal()。
 * - Esc 走原生 cancel 事件；preventDefault 后由 setOpen 统一关闭，避免重复通知 onOpenChange。
 * - backdrop 点击按坐标是否落在 dialog 矩形外判定，对任意尺寸（含全屏）都成立。
 */
export declare const Dialog: import('react').ForwardRefExoticComponent<DialogProps & import('react').RefAttributes<DialogHandle>>;
export declare const DialogHeader: import('react').ForwardRefExoticComponent<DialogSectionProps & import('react').RefAttributes<HTMLDivElement>>;
/** 对话框标题；在 Dialog 内使用时自动成为 Dialog 的无障碍名称（aria-labelledby） */
export declare const DialogTitle: import('react').ForwardRefExoticComponent<DialogTitleProps & import('react').RefAttributes<HTMLHeadingElement>>;
export declare const DialogBody: import('react').ForwardRefExoticComponent<DialogSectionProps & import('react').RefAttributes<HTMLDivElement>>;
export declare const DialogFooter: import('react').ForwardRefExoticComponent<DialogSectionProps & import('react').RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Dialog.d.ts.map