import type { TToastData, TToastStore } from "../../../core/types";
import type { TToastIcons } from "./Toast.types";
interface TToastItemProps {
    toast: TToastData;
    store: TToastStore;
    defaultDuration: number;
    defaultClosable: boolean;
    icons?: TToastIcons;
}
export declare function ToastItem({ toast: toastData, store, defaultDuration, defaultClosable, icons }: TToastItemProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=ToastItem.d.ts.map