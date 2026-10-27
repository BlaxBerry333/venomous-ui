import { HTMLAttributes, ReactNode } from 'react';
export type ToastVariant = 'info' | 'success' | 'warning' | 'danger';
export interface ToastOptions {
    /** 颜色与播报方式；'danger' 用 role="alert" 立即播报，其余礼貌播报。默认 'info' */
    variant?: ToastVariant;
    /** 标题下方的补充说明 */
    description?: ReactNode;
    /** 自动关闭时间（ms）；0 或 Infinity 表示不自动关闭。默认 5000 */
    duration?: number;
    /** 显示关闭按钮，默认 true */
    closable?: boolean;
    /** 关闭（手动、自动或 dismiss）后回调 */
    onClose?: () => void;
}
export interface ToastData extends Required<Pick<ToastOptions, 'variant' | 'duration' | 'closable'>> {
    title: ReactNode;
    description?: ReactNode;
    onClose?: (() => void) | undefined;
}
type ToastShortcut = (title: ReactNode, options?: Omit<ToastOptions, 'variant'>) => string;
export interface ToastFunction {
    /** 弹出通知，返回 id */
    (title: ReactNode, options?: ToastOptions): string;
    info: ToastShortcut;
    success: ToastShortcut;
    warning: ToastShortcut;
    danger: ToastShortcut;
    /** 关闭指定通知；省略 id 时全部关闭 */
    dismiss: (id?: string) => void;
}
export type ToasterPlacement = 'top-start' | 'top' | 'top-end' | 'bottom-start' | 'bottom' | 'bottom-end';
export interface ToasterProps extends Omit<HTMLAttributes<HTMLElement>, 'children'> {
    /** 显示位置，默认 'bottom-end' */
    placement?: ToasterPlacement;
    /** 同时显示的最大条数，超出的排队等待；默认 3 */
    limit?: number;
    /** 通知区域的无障碍名称，默认 'Notifications' */
    label?: string;
    /** 关闭按钮的无障碍名称，默认 'Dismiss' */
    closeLabel?: string;
}
export {};
//# sourceMappingURL=Toast.type.d.ts.map