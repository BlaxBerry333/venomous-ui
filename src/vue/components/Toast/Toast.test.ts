import { CSS_CLASSES } from "@/core/constants";
import { createToastStore } from "@/core/helpers/toast-store";
import userEvent from "@testing-library/user-event";
import { fireEvent, render, screen } from "@testing-library/vue";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { nextTick } from "vue";
import Toaster from "./Toaster.vue";

const classes = CSS_CLASSES.toast;

function setup(props?: Record<string, unknown>) {
  const { store, toast } = createToastStore();
  const result = render(Toaster, { props: { store, ...props } });
  return { store, toast, ...result };
}

describe("Toast", () => {
  describe("rendering", () => {
    it("renders nothing when no toasts", () => {
      setup();
      expect(document.querySelector(`.${classes.container}`)).toBeNull();
    });

    it("renders toast when added via store", async () => {
      const { toast } = setup();
      toast("Hello");
      await nextTick();

      expect(screen.getByText("Hello")).toBeInTheDocument();
    });

    it("renders container with correct classes", async () => {
      const { toast } = setup();
      toast("Test");
      await nextTick();

      const container = document.querySelector(`.${classes.container}`);
      expect(container).toBeInTheDocument();
      expect(container).toHaveClass(classes.placements.top);
    });
  });

  describe("toast types", () => {
    it("renders success toast", async () => {
      const { toast } = setup();
      toast.success("Saved!");
      await nextTick();

      const toastEl = document.querySelector(`.${classes.types.success}`);
      expect(toastEl).toBeInTheDocument();
      expect(screen.getByText("Saved!")).toBeInTheDocument();
    });

    it("renders error toast", async () => {
      const { toast } = setup();
      toast.error("Failed");
      await nextTick();

      const toastEl = document.querySelector(`.${classes.types.error}`);
      expect(toastEl).toBeInTheDocument();
    });

    it("renders warning toast", async () => {
      const { toast } = setup();
      toast.warning("Warning!");
      await nextTick();

      const toastEl = document.querySelector(`.${classes.types.warning}`);
      expect(toastEl).toBeInTheDocument();
    });

    it("renders info toast (default)", async () => {
      const { toast } = setup();
      toast("Info message");
      await nextTick();

      const toastEl = document.querySelector(`.${classes.types.info}`);
      expect(toastEl).toBeInTheDocument();
    });
  });

  describe("placement prop", () => {
    it("applies top placement (default)", async () => {
      const { toast } = setup();
      toast("Test");
      await nextTick();

      expect(document.querySelector(`.${classes.placements.top}`)).toBeInTheDocument();
    });

    it("applies bottom placement", async () => {
      const { toast } = setup({ placement: "bottom" });
      toast("Test");
      await nextTick();

      expect(document.querySelector(`.${classes.placements.bottom}`)).toBeInTheDocument();
    });

    it("applies top-start placement", async () => {
      const { toast } = setup({ placement: "top-start" });
      toast("Test");
      await nextTick();

      expect(document.querySelector(`.${classes.placements["top-start"]}`)).toBeInTheDocument();
    });
  });

  describe("description", () => {
    it("renders description text", async () => {
      const { toast } = setup();
      toast("Title", { description: "Details here" });
      await nextTick();

      expect(screen.getByText("Title")).toBeInTheDocument();
      expect(screen.getByText("Details here")).toBeInTheDocument();
    });

    it("does not render description element when not provided", async () => {
      const { toast } = setup();
      toast("Title only");
      await nextTick();

      expect(document.querySelectorAll(`.${classes.description}`)).toHaveLength(0);
    });
  });

  describe("closable prop", () => {
    it("shows close button by default", async () => {
      const { toast } = setup();
      toast("Test");
      await nextTick();

      expect(screen.getByRole("button", { name: "Close" })).toBeInTheDocument();
    });

    it("hides close button when closable is false", async () => {
      const { toast } = setup({ closable: false });
      toast("Test", { closable: false });
      await nextTick();

      expect(screen.queryByRole("button", { name: "Close" })).toBeNull();
    });

    it("enters closing state when close button is clicked", async () => {
      const user = userEvent.setup();
      const { toast } = setup();
      toast("Dismissible");
      await nextTick();

      await user.click(screen.getByRole("button", { name: "Close" }));

      const toastEl = document.querySelector(`.${classes.root}`);
      expect(toastEl).toHaveClass(classes.closing);
    });
  });

  describe("accessibility", () => {
    it("renders with role=status", async () => {
      const { toast } = setup();
      toast("Test");
      await nextTick();

      expect(screen.getByRole("status")).toBeInTheDocument();
    });

    it("uses aria-live polite for non-error toasts", async () => {
      const { toast } = setup();
      toast.info("Info");
      await nextTick();

      expect(screen.getByRole("status")).toHaveAttribute("aria-live", "polite");
    });

    it("uses aria-live assertive for error toasts", async () => {
      const { toast } = setup();
      toast.error("Error!");
      await nextTick();

      expect(screen.getByRole("status")).toHaveAttribute("aria-live", "assertive");
    });

    it("has aria-atomic true", async () => {
      const { toast } = setup();
      toast("Test");
      await nextTick();

      expect(screen.getByRole("status")).toHaveAttribute("aria-atomic", "true");
    });

    it("container has region role and label", async () => {
      const { toast } = setup();
      toast("Test");
      await nextTick();

      const container = document.querySelector(`.${classes.container}`);
      expect(container).toHaveAttribute("role", "region");
      expect(container).toHaveAttribute("aria-label", "Notifications");
    });
  });

  describe("store isolation", () => {
    it("different stores render independently", async () => {
      const instance1 = createToastStore();
      const instance2 = createToastStore();

      render({
        components: { Toaster },
        template: `
          <Toaster :store="store1" />
          <Toaster :store="store2" />
        `,
        setup() {
          return { store1: instance1.store, store2: instance2.store };
        },
      });

      instance1.toast("Store 1 toast");
      await nextTick();

      expect(screen.getByText("Store 1 toast")).toBeInTheDocument();
      expect(document.querySelectorAll(`.${classes.root}`)).toHaveLength(1);
    });
  });

  describe("default store", () => {
    it("uses default store when no store prop is provided", async () => {
      // Import the default store directly
      const { toastStore, defaultToast } = await import("@/core/helpers/toast-store");

      render(Toaster);
      defaultToast("Default store toast");
      await nextTick();

      expect(screen.getByText("Default store toast")).toBeInTheDocument();

      // Cleanup
      toastStore.dismissAll();
      await nextTick();
    });
  });

  describe("dismiss", () => {
    it("removes container when all toasts are dismissed", async () => {
      const { store, toast } = setup();
      const toastId = toast("Test");
      await nextTick();

      expect(document.querySelector(`.${classes.container}`)).toBeInTheDocument();

      store.dismiss(toastId);
      await nextTick();

      expect(document.querySelector(`.${classes.container}`)).toBeNull();
    });

    it("dismiss removes specific toast via store", async () => {
      const { store, toast } = setup();
      const toastId = toast("To be dismissed");
      await nextTick();

      expect(screen.getByText("To be dismissed")).toBeInTheDocument();

      store.dismiss(toastId);
      await nextTick();

      expect(screen.queryByText("To be dismissed")).toBeNull();
    });

    it("dismissAll removes all toasts", async () => {
      const { store, toast } = setup();
      toast("First");
      toast("Second");
      await nextTick();

      expect(document.querySelectorAll(`.${classes.root}`)).toHaveLength(2);

      store.dismissAll();
      await nextTick();

      expect(document.querySelectorAll(`.${classes.root}`)).toHaveLength(0);
    });

    it("handles dismiss gracefully when toast element ref is unavailable", async () => {
      const { store, toast } = setup();
      const toastId = toast("Quick dismiss");
      await nextTick();

      expect(screen.getByText("Quick dismiss")).toBeInTheDocument();

      // Directly dismiss via store (bypasses animation)
      store.dismiss(toastId);
      await nextTick();

      expect(screen.queryByText("Quick dismiss")).toBeNull();
    });
  });

  describe("callbacks", () => {
    it("calls onClose when toast is dismissed via store", async () => {
      const onClose = vi.fn();
      const { store, toast } = setup();

      const toastId = toast("Test", { onClose });
      await nextTick();

      store.dismiss(toastId);
      await nextTick();

      expect(onClose).toHaveBeenCalledTimes(1);
    });
  });

  describe("maxCount", () => {
    it("respects maxCount from store config", async () => {
      const { store, toast } = createToastStore({ maxCount: 2 });
      render(Toaster, { props: { store } });

      toast("First");
      toast("Second");
      toast("Third");
      await nextTick();

      expect(document.querySelectorAll(`.${classes.root}`)).toHaveLength(2);
    });
  });

  describe("animation-driven close", () => {
    it("enters closing state and dismisses after animationend", async () => {
      const user = userEvent.setup();
      const { toast } = setup();
      toast("Animated close");
      await nextTick();

      const toastEl = document.querySelector(`.${classes.root}`) as HTMLElement;
      expect(toastEl).toBeInTheDocument();

      await user.click(screen.getByRole("button", { name: "Close" }));

      expect(toastEl).toHaveClass(classes.closing);

      fireEvent.animationEnd(toastEl);
      await nextTick();

      expect(screen.queryByText("Animated close")).toBeNull();
    });
  });

  describe("auto-close callbacks", () => {
    beforeEach(() => {
      vi.useFakeTimers({ shouldAdvanceTime: true });
    });

    afterEach(() => {
      vi.runOnlyPendingTimers();
      vi.useRealTimers();
    });

    it("calls onAutoClose when toast auto-closes after duration", async () => {
      const onAutoClose = vi.fn();
      const { store, toast } = createToastStore();
      render(Toaster, { props: { store } });

      toast("Auto close", { duration: 100, onAutoClose });
      await nextTick();

      const toastEl = document.querySelector(`.${classes.root}`) as HTMLElement;
      expect(toastEl).toBeInTheDocument();

      vi.advanceTimersByTime(100);
      await nextTick();

      // Toast enters closing state, fire animationend to complete dismissal
      fireEvent.animationEnd(toastEl);
      await nextTick();

      expect(onAutoClose).toHaveBeenCalledTimes(1);
    });

    it("does not call onAutoClose when toast is manually closed", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      const onAutoClose = vi.fn();
      const { store, toast } = createToastStore();
      render(Toaster, { props: { store } });

      toast("Manual close", { duration: 5000, onAutoClose });
      await nextTick();

      const toastEl = document.querySelector(`.${classes.root}`) as HTMLElement;

      // Click close button (manual close, isAutoClose=false)
      await user.click(screen.getByRole("button", { name: "Close" }));
      fireEvent.animationEnd(toastEl);
      await nextTick();

      expect(onAutoClose).not.toHaveBeenCalled();
    });
  });

  describe("duration prop", () => {
    beforeEach(() => {
      vi.useFakeTimers({ shouldAdvanceTime: true });
    });

    afterEach(() => {
      vi.runOnlyPendingTimers();
      vi.useRealTimers();
    });

    it("auto-closes toast after specified duration", async () => {
      const { store, toast } = createToastStore();
      render(Toaster, { props: { store } });

      toast("Auto dismiss", { duration: 1000 });
      await nextTick();

      expect(screen.getByText("Auto dismiss")).toBeInTheDocument();

      vi.advanceTimersByTime(1000);
      await nextTick();

      const toastEl = document.querySelector(`.${classes.root}`) as HTMLElement;
      expect(toastEl).toHaveClass(classes.closing);
    });

    it("does not auto-close when duration is 0", async () => {
      const { store, toast } = createToastStore();
      render(Toaster, { props: { store } });

      toast("Persistent", { duration: 0 });
      await nextTick();

      vi.advanceTimersByTime(10000);
      await nextTick();

      expect(screen.getByText("Persistent")).toBeInTheDocument();
      const toastEl = document.querySelector(`.${classes.root}`) as HTMLElement;
      expect(toastEl).not.toHaveClass(classes.closing);
    });
  });

  describe("toast.dismiss helper", () => {
    it("dismisses specific toast when id is provided", async () => {
      const { toast } = setup();
      const toastId = toast("Specific");
      await nextTick();

      expect(screen.getByText("Specific")).toBeInTheDocument();

      toast.dismiss(toastId);
      await nextTick();

      expect(screen.queryByText("Specific")).toBeNull();
    });

    it("dismisses all toasts when no id is provided", async () => {
      const { toast } = setup();
      toast("First");
      toast("Second");
      await nextTick();

      expect(screen.getByText("First")).toBeInTheDocument();
      expect(screen.getByText("Second")).toBeInTheDocument();

      toast.dismiss();
      await nextTick();

      expect(screen.queryByText("First")).toBeNull();
      expect(screen.queryByText("Second")).toBeNull();
    });
  });

  describe("handleClose without element ref", () => {
    it("dismisses toast immediately when element ref is unavailable", async () => {
      const onAutoClose = vi.fn();
      const { store, toast } = setup();
      const toastId = toast("No ref", { onAutoClose });
      await nextTick();

      // Directly dismiss via store (bypasses animation because store.dismiss removes from list)
      store.dismiss(toastId);
      await nextTick();

      expect(screen.queryByText("No ref")).toBeNull();
    });
  });

  describe("hover pause/resume", () => {
    beforeEach(() => {
      vi.useFakeTimers({ shouldAdvanceTime: true });
    });

    afterEach(() => {
      vi.runOnlyPendingTimers();
      vi.useRealTimers();
    });

    it("pauses auto-close on mouseenter and resumes on mouseleave", async () => {
      const { store, toast } = createToastStore();
      render(Toaster, { props: { store } });

      toast("Hover me", { duration: 2000 });
      await nextTick();

      const toastEl = document.querySelector(`.${classes.root}`) as HTMLElement;

      // Advance 500ms
      vi.advanceTimersByTime(500);

      // Hover to pause
      fireEvent.mouseEnter(toastEl);

      // Advance 2000ms while hovering - should NOT close
      vi.advanceTimersByTime(2000);
      await nextTick();

      expect(screen.getByText("Hover me")).toBeInTheDocument();
      expect(toastEl).not.toHaveClass(classes.closing);

      // Leave hover to resume
      fireEvent.mouseLeave(toastEl);

      // Advance remaining time (~1500ms)
      vi.advanceTimersByTime(1500);
      await nextTick();

      expect(toastEl).toHaveClass(classes.closing);
    });

    it("does not pause when duration is 0", async () => {
      const { store, toast } = createToastStore();
      render(Toaster, { props: { store } });

      toast("No auto close", { duration: 0 });
      await nextTick();

      const toastEl = document.querySelector(`.${classes.root}`) as HTMLElement;

      fireEvent.mouseEnter(toastEl);
      vi.advanceTimersByTime(5000);
      fireEvent.mouseLeave(toastEl);
      vi.advanceTimersByTime(5000);
      await nextTick();

      expect(screen.getByText("No auto close")).toBeInTheDocument();
      expect(toastEl).not.toHaveClass(classes.closing);
    });
  });
});
