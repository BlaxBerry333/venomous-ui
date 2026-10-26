import { describe, expect, it, vi } from 'vitest';
import { createToastStore } from '@internal/dom';

describe('createToastStore', () => {
  it('add / remove / clear 更新快照并通知订阅者', () => {
    const store = createToastStore<string>();
    const listener = vi.fn();
    const unsubscribe = store.subscribe(listener);

    const a = store.add('a');
    const b = store.add('b');
    expect(a).not.toBe(b);
    expect(store.getSnapshot().map((t) => t.data)).toEqual(['a', 'b']);

    const before = store.getSnapshot();
    expect(store.remove(a)?.data).toBe('a');
    expect(store.getSnapshot()).not.toBe(before);
    expect(store.remove('missing')).toBeUndefined();

    expect(store.clear().map((t) => t.data)).toEqual(['b']);
    expect(store.clear()).toEqual([]);
    expect(listener).toHaveBeenCalledTimes(4);

    unsubscribe();
    store.add('c');
    expect(listener).toHaveBeenCalledTimes(4);
  });
});
