/**
 * Toast Types
 */
/** Toast type — determines color */
export type TToastType = "success" | "error" | "warning" | "info";
/** Toast display placement */
export type TToastPlacement = "top-start" | "top" | "top-end" | "bottom-start" | "bottom" | "bottom-end";
/** Options when creating a toast */
export interface TToastOptions {
    /** Toast type — determines color */
    type?: TToastType;
    /** Main title (required) */
    title: string;
    /** Description text */
    description?: string;
    /** Auto-close duration (ms), 0 to disable auto-close. Default 4000 */
    duration?: number;
    /** Show close button. Default true */
    closable?: boolean;
    /** Callback when toast is closed */
    onClose?: () => void;
    /** Callback when toast is auto-closed */
    onAutoClose?: () => void;
}
/** Complete toast data used by the store */
export interface TToastData extends Required<Pick<TToastOptions, "type" | "duration" | "closable">> {
    /** Unique identifier */
    id: string;
    /** Main title */
    title: string;
    /** Description text */
    description?: string;
    /** Creation timestamp */
    createdAt: number;
    /** Callback when toast is closed */
    onClose?: () => void;
    /** Callback when toast is auto-closed */
    onAutoClose?: () => void;
}
/** Toast store interface */
export interface TToastStore {
    /** Get all current toasts */
    getToasts(): TToastData[];
    /** Add a toast, returns its id */
    add(options: TToastOptions): string;
    /** Dismiss a specific toast */
    dismiss(id: string): void;
    /** Dismiss all toasts */
    dismissAll(): void;
    /** Subscribe to changes, returns unsubscribe function */
    subscribe(listener: () => void): () => void;
}
/** Configuration for creating a toast store */
export interface TToastStoreConfig {
    /** Maximum number of toasts shown simultaneously. Default 5 */
    maxCount?: number;
}
/** Return value of createToastStore */
export interface TToastStoreInstance {
    /** The toast store */
    store: TToastStore;
    /** Imperative toast API bound to this store */
    toast: TToastFunction;
}
/** Toaster container base props */
export interface TToasterBaseProps {
    /** Toast store instance. If omitted, uses the default global store */
    store?: TToastStore;
    /** Toast display placement. Default "top" */
    placement?: TToastPlacement;
    /** Default auto-close duration (ms). Default 4000 */
    duration?: number;
    /** Show close button by default. Default true */
    closable?: boolean;
    /** Additional CSS class names */
    className?: string;
}
/** Toast function signature */
export interface TToastFunction {
    /** Default toast (info type) */
    (title: string, options?: Omit<TToastOptions, "title">): string;
    /** Success toast */
    success(title: string, options?: Omit<TToastOptions, "title" | "type">): string;
    /** Error toast */
    error(title: string, options?: Omit<TToastOptions, "title" | "type">): string;
    /** Warning toast */
    warning(title: string, options?: Omit<TToastOptions, "title" | "type">): string;
    /** Info toast */
    info(title: string, options?: Omit<TToastOptions, "title" | "type">): string;
    /** Dismiss a specific toast, or all toasts if no id is provided */
    dismiss(id?: string): void;
}
//# sourceMappingURL=toast.d.ts.map