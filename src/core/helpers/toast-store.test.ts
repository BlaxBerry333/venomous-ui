import { describe, expect, it, vi } from "vitest";
import { createToastStore } from "./toast-store";

describe("toast-store", () => {
  describe("dismiss", () => {
    it("does nothing when dismissing a non-existent id", () => {
      const { store, toast } = createToastStore();
      const onClose = vi.fn();

      toast("Test", { onClose });

      // Dismiss with a non-existent id — should not throw or remove any toast
      store.dismiss("non-existent-id");

      // The existing toast should still be there
      expect(store.getToasts()).toHaveLength(1);
      expect(onClose).not.toHaveBeenCalled();
    });

    it("dismisses and calls onClose for existing toast", () => {
      const { store, toast } = createToastStore();
      const onClose = vi.fn();

      const id = toast("Test", { onClose });
      store.dismiss(id);

      expect(store.getToasts()).toHaveLength(0);
      expect(onClose).toHaveBeenCalledTimes(1);
    });
  });

  describe("maxCount overflow", () => {
    it("calls onAutoClose (not onClose) for excess toasts when exceeding maxCount", () => {
      const onClose1 = vi.fn();
      const onAutoClose1 = vi.fn();
      const onClose2 = vi.fn();
      const { store, toast } = createToastStore({ maxCount: 2 });

      toast("First", { onClose: onClose1, onAutoClose: onAutoClose1 });
      toast("Second", { onClose: onClose2 });
      toast("Third");

      // First toast should be evicted by system, onAutoClose should be called (not onClose)
      expect(store.getToasts()).toHaveLength(2);
      expect(onAutoClose1).toHaveBeenCalledTimes(1);
      expect(onClose1).not.toHaveBeenCalled();
      expect(onClose2).not.toHaveBeenCalled();
    });
  });

  describe("dismissAll", () => {
    it("calls onClose for all dismissed toasts", () => {
      const onClose1 = vi.fn();
      const onClose2 = vi.fn();
      const { store, toast } = createToastStore();

      toast("First", { onClose: onClose1 });
      toast("Second", { onClose: onClose2 });

      store.dismissAll();

      expect(store.getToasts()).toHaveLength(0);
      expect(onClose1).toHaveBeenCalledTimes(1);
      expect(onClose2).toHaveBeenCalledTimes(1);
    });
  });

  describe("subscribe", () => {
    it("notifies listeners when toasts change", () => {
      const { store, toast } = createToastStore();
      const listener = vi.fn();

      const unsubscribe = store.subscribe(listener);
      toast("Test");

      expect(listener).toHaveBeenCalled();

      unsubscribe();
      listener.mockClear();

      toast("Another");
      expect(listener).not.toHaveBeenCalled();
    });
  });
});
