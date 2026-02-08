import type { TToastFunction, TToastOptions, TToastStore, TToastStoreConfig, TToastStoreInstance } from "@/core/types";

let toastCount = 0;

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
export function createToastStore(config?: TToastStoreConfig): TToastStoreInstance {
  const maxCount = config?.maxCount ?? 5;
  let toasts: import("@/core/types").TToastData[] = [];
  const listeners = new Set<() => void>();

  function notify() {
    listeners.forEach((listener) => listener());
  }

  const store: TToastStore = {
    getToasts() {
      return toasts;
    },

    add(options) {
      const id = String(toastCount++);
      const toast: import("@/core/types").TToastData = {
        id,
        type: options.type ?? "info",
        title: options.title,
        description: options.description,
        duration: options.duration ?? 4000,
        closable: options.closable ?? true,
        createdAt: Date.now(),
        onClose: options.onClose,
        onAutoClose: options.onAutoClose,
      };
      toasts = [...toasts, toast];

      // Dismiss excess toasts that overflow maxCount
      if (toasts.length > maxCount) {
        const excess = toasts.slice(0, toasts.length - maxCount);
        toasts = toasts.slice(-maxCount);
        excess.forEach((t) => t.onAutoClose?.());
      }

      notify();
      return id;
    },

    dismiss(id) {
      const target = toasts.find((t) => t.id === id);
      if (!target) return;
      toasts = toasts.filter((t) => t.id !== id);
      notify();
      target.onClose?.();
    },

    dismissAll() {
      const old = toasts;
      toasts = [];
      notify();
      old.forEach((t) => t.onClose?.());
    },

    subscribe(listener) {
      listeners.add(listener);
      return () => {
        listeners.delete(listener);
      };
    },
  };

  // Create toast function bound to this store
  function createToast(title: string, options?: Omit<TToastOptions, "title">): string {
    return store.add({ title, ...options });
  }

  const toast: TToastFunction = Object.assign(createToast, {
    success: (title: string, options?: Omit<TToastOptions, "title" | "type">) =>
      store.add({ title, type: "success", ...options }),
    error: (title: string, options?: Omit<TToastOptions, "title" | "type">) =>
      store.add({ title, type: "error", ...options }),
    warning: (title: string, options?: Omit<TToastOptions, "title" | "type">) =>
      store.add({ title, type: "warning", ...options }),
    info: (title: string, options?: Omit<TToastOptions, "title" | "type">) =>
      store.add({ title, type: "info", ...options }),
    dismiss: (id?: string) => {
      if (id) {
        store.dismiss(id);
      } else {
        store.dismissAll();
      }
    },
  });

  return { store, toast };
}

/** Default global toast store instance */
const defaultInstance = createToastStore();

/** Global toast store — use when a single Toaster suffices */
export const toastStore = defaultInstance.store;

/** Global toast API bound to the default store */
export const defaultToast = defaultInstance.toast;
