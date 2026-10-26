/**
 * @file 通知队列：框架无关的极简 store（subscribe / snapshot），供各框架的 Toaster 订阅。
 */

export interface ToastRecord<T> {
  id: string;
  data: T;
}

export interface ToastStore<T> {
  /** 当前队列；每次变更都返回新数组，可直接作为 useSyncExternalStore 的 snapshot */
  getSnapshot: () => readonly ToastRecord<T>[];
  subscribe: (listener: () => void) => () => void;
  /** 入队，返回 id */
  add: (data: T) => string;
  /** 按 id 出队，返回被移除的记录；不存在时返回 undefined */
  remove: (id: string) => ToastRecord<T> | undefined;
  /** 清空，返回被移除的记录 */
  clear: () => readonly ToastRecord<T>[];
}

/**
 * @example
 * const store = createToastStore<{ title: string }>();
 * const id = store.add({ title: 'Saved' });
 * store.remove(id);
 */
export function createToastStore<T>(): ToastStore<T> {
  let items: readonly ToastRecord<T>[] = [];
  let seq = 0;
  const listeners = new Set<() => void>();
  const emit = () => {
    for (const listener of listeners) listener();
  };

  return {
    getSnapshot: () => items,
    subscribe(listener) {
      listeners.add(listener);
      return () => {
        listeners.delete(listener);
      };
    },
    add(data) {
      seq += 1;
      const id = `venomous-toast-${seq}`;
      items = [...items, { id, data }];
      emit();
      return id;
    },
    remove(id) {
      const record = items.find((item) => item.id === id);
      if (!record) return undefined;
      items = items.filter((item) => item.id !== id);
      emit();
      return record;
    },
    clear() {
      const removed = items;
      if (removed.length === 0) return removed;
      items = [];
      emit();
      return removed;
    },
  };
}
