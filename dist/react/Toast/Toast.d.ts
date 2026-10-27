import { ToastFunction, ToasterProps } from './Toast.type';
/**
 * 弹出通知。需要在应用里渲染一次 `<Toaster />`。
 *
 * @example
 * toast('Saved');
 * toast.danger('Upload failed', { description: 'File is larger than 10 MB.' });
 */
export declare const toast: ToastFunction;
/**
 * Toaster — 通知的渲染位置，应用里渲染一次。
 * 鼠标悬停或焦点在通知区内时暂停自动关闭，方便阅读与操作。
 */
export declare const Toaster: import('react').ForwardRefExoticComponent<ToasterProps & import('react').RefAttributes<HTMLElement>>;
//# sourceMappingURL=Toast.d.ts.map