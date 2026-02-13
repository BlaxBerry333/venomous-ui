import type { TToastFunction, TToastStore, TToastStoreConfig, TToastStoreInstance } from "../../core/types";
/**
 * Create an isolated toast store instance.
 *
 * Each instance manages its own toast list, so multiple Toasters
 * can operate independently (useful in Storybook, multiple app instances, etc.).
 *
 * @example
 * ```ts
 * const { store, toast } = createToastStore({ maxCount: 3 });
 * <Toaster store={store} />
 * toast.success("Saved!");
 * ```
 */
export declare function createToastStore(config?: TToastStoreConfig): TToastStoreInstance;
/** Global toast store — use when a single Toaster suffices */
export declare const toastStore: TToastStore;
/** Global toast API bound to the default store */
export declare const defaultToast: TToastFunction;
//# sourceMappingURL=toast-store.d.ts.map