import { CSS_CLASSES } from "@/core/constants";
import { createToastStore } from "@/core/helpers/toast-store";
import { act, fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Toaster } from "./Toaster";

const classes = CSS_CLASSES.toast;

/**
 * Helper: create an isolated store+toast pair and render Toaster.
 */
function setup(props?: Partial<Parameters<typeof Toaster>[0]>) {
  const { store, toast } = createToastStore();
  const result = render(<Toaster store={store} {...props} />);
  return { store, toast, ...result };
}

describe("Toast", () => {
  describe("rendering", () => {
    it("renders nothing when no toasts", () => {
      const { container } = setup();
      expect(container.innerHTML).toBe("");
    });

    it("renders toast when added via store", () => {
      const { toast } = setup();
      act(() => {
        toast("Hello");
      });

      expect(screen.getByText("Hello")).toBeInTheDocument();
    });

    it("renders container with correct classes", () => {
      const { toast } = setup();
      act(() => {
        toast("Test");
      });

      const container = document.querySelector(`.${classes.container}`);
      expect(container).toBeInTheDocument();
      expect(container).toHaveClass(classes.placements.top);
    });
  });

  describe("toast types", () => {
    it("renders success toast", () => {
      const { toast } = setup();
      act(() => {
        toast.success("Saved!");
      });

      const toastEl = document.querySelector(`.${classes.types.success}`);
      expect(toastEl).toBeInTheDocument();
      expect(screen.getByText("Saved!")).toBeInTheDocument();
    });

    it("renders error toast", () => {
      const { toast } = setup();
      act(() => {
        toast.error("Failed");
      });

      const toastEl = document.querySelector(`.${classes.types.error}`);
      expect(toastEl).toBeInTheDocument();
    });

    it("renders warning toast", () => {
      const { toast } = setup();
      act(() => {
        toast.warning("Warning!");
      });

      const toastEl = document.querySelector(`.${classes.types.warning}`);
      expect(toastEl).toBeInTheDocument();
    });

    it("renders info toast (default)", () => {
      const { toast } = setup();
      act(() => {
        toast("Info message");
      });

      const toastEl = document.querySelector(`.${classes.types.info}`);
      expect(toastEl).toBeInTheDocument();
    });
  });

  describe("placement prop", () => {
    it("applies top placement (default)", () => {
      const { toast } = setup();
      act(() => {
        toast("Test");
      });

      expect(document.querySelector(`.${classes.placements.top}`)).toBeInTheDocument();
    });

    it("applies bottom placement", () => {
      const { toast } = setup({ placement: "bottom" });
      act(() => {
        toast("Test");
      });

      expect(document.querySelector(`.${classes.placements.bottom}`)).toBeInTheDocument();
    });

    it("applies top-start placement", () => {
      const { toast } = setup({ placement: "top-start" });
      act(() => {
        toast("Test");
      });

      expect(document.querySelector(`.${classes.placements["top-start"]}`)).toBeInTheDocument();
    });
  });

  describe("description", () => {
    it("renders description text", () => {
      const { toast } = setup();
      act(() => {
        toast("Title", { description: "Details here" });
      });

      expect(screen.getByText("Title")).toBeInTheDocument();
      expect(screen.getByText("Details here")).toBeInTheDocument();
    });

    it("does not render description element when not provided", () => {
      const { toast } = setup();
      act(() => {
        toast("Title only");
      });

      expect(document.querySelectorAll(`.${classes.description}`)).toHaveLength(0);
    });
  });

  describe("closable prop", () => {
    it("shows close button by default", () => {
      const { toast } = setup();
      act(() => {
        toast("Test");
      });

      expect(screen.getByRole("button", { name: "Close" })).toBeInTheDocument();
    });

    it("hides close button when closable is false", () => {
      const { toast } = setup({ closable: false });
      act(() => {
        toast("Test", { closable: false });
      });

      expect(screen.queryByRole("button", { name: "Close" })).toBeNull();
    });

    it("dismisses toast when close button is clicked", async () => {
      const user = userEvent.setup();
      const { toast } = setup();
      act(() => {
        toast("Dismissible");
      });

      expect(screen.getByText("Dismissible")).toBeInTheDocument();

      await user.click(screen.getByRole("button", { name: "Close" }));

      // After click, the toast enters closing state (animation-driven)
      const toastEl = document.querySelector(`.${classes.root}`);
      expect(toastEl).toHaveClass(classes.closing);
    });
  });

  describe("accessibility", () => {
    it("renders with role=status", () => {
      const { toast } = setup();
      act(() => {
        toast("Test");
      });

      expect(screen.getByRole("status")).toBeInTheDocument();
    });

    it("uses aria-live polite for non-error toasts", () => {
      const { toast } = setup();
      act(() => {
        toast.info("Info");
      });

      expect(screen.getByRole("status")).toHaveAttribute("aria-live", "polite");
    });

    it("uses aria-live assertive for error toasts", () => {
      const { toast } = setup();
      act(() => {
        toast.error("Error!");
      });

      expect(screen.getByRole("status")).toHaveAttribute("aria-live", "assertive");
    });

    it("has aria-atomic true", () => {
      const { toast } = setup();
      act(() => {
        toast("Test");
      });

      expect(screen.getByRole("status")).toHaveAttribute("aria-atomic", "true");
    });

    it("container has region role and label", () => {
      const { toast } = setup();
      act(() => {
        toast("Test");
      });

      const container = document.querySelector(`.${classes.container}`);
      expect(container).toHaveAttribute("role", "region");
      expect(container).toHaveAttribute("aria-label", "Notifications");
    });
  });

  describe("icons prop", () => {
    it("renders default unicode icons when no icons prop", () => {
      const { toast } = setup();
      act(() => {
        toast.success("Done");
      });

      const iconEl = document.querySelector(`.${classes.icon}`);
      expect(iconEl).toHaveTextContent("✓");
    });

    it("renders custom type icon when provided", () => {
      const { toast } = setup({
        icons: { success: <span data-testid="custom-success">OK</span> },
      });
      act(() => {
        toast.success("Done");
      });

      expect(screen.getByTestId("custom-success")).toBeInTheDocument();
    });

    it("renders custom close icon when provided", async () => {
      const { toast } = setup({
        icons: { close: <span data-testid="custom-close">X</span> },
      });
      act(() => {
        toast("Test");
      });

      expect(screen.getByTestId("custom-close")).toBeInTheDocument();
    });
  });

  describe("store isolation", () => {
    it("different stores render independently", () => {
      const instance1 = createToastStore();
      const instance2 = createToastStore();

      render(
        <>
          <Toaster store={instance1.store} />
          <Toaster store={instance2.store} />
        </>,
      );

      act(() => {
        instance1.toast("Store 1 toast");
      });

      expect(screen.getByText("Store 1 toast")).toBeInTheDocument();
      // Only 1 toast element should exist
      expect(document.querySelectorAll(`.${classes.root}`)).toHaveLength(1);
    });
  });

  describe("dismiss", () => {
    it("dismiss removes specific toast via store", () => {
      const { store, toast } = setup();
      let toastId = "";
      act(() => {
        toastId = toast("To be dismissed");
      });

      expect(screen.getByText("To be dismissed")).toBeInTheDocument();

      act(() => {
        store.dismiss(toastId);
      });

      expect(screen.queryByText("To be dismissed")).toBeNull();
    });

    it("dismissAll removes all toasts", () => {
      const { store, toast } = setup();
      act(() => {
        toast("First");
        toast("Second");
      });

      expect(document.querySelectorAll(`.${classes.root}`)).toHaveLength(2);

      act(() => {
        store.dismissAll();
      });

      expect(document.querySelectorAll(`.${classes.root}`)).toHaveLength(0);
    });
  });

  describe("callbacks", () => {
    it("calls onClose when toast is dismissed via store", () => {
      const onClose = vi.fn();
      const { store, toast } = setup();

      let toastId = "";
      act(() => {
        toastId = toast("Test", { onClose });
      });

      act(() => {
        store.dismiss(toastId);
      });

      expect(onClose).toHaveBeenCalledTimes(1);
    });
  });

  describe("maxCount", () => {
    it("respects maxCount from store config", () => {
      const { store, toast } = createToastStore({ maxCount: 2 });
      render(<Toaster store={store} />);

      act(() => {
        toast("First");
        toast("Second");
        toast("Third");
      });

      expect(document.querySelectorAll(`.${classes.root}`)).toHaveLength(2);
    });
  });

  describe("animation-driven close", () => {
    it("enters closing state and dismisses after animationend", async () => {
      const user = userEvent.setup();
      const { toast } = setup();
      act(() => {
        toast("Animated close");
      });

      const toastEl = document.querySelector(`.${classes.root}`) as HTMLElement;
      expect(toastEl).toBeInTheDocument();

      // Click close button to trigger closing animation
      await user.click(screen.getByRole("button", { name: "Close" }));

      // Should be in closing state
      expect(toastEl).toHaveClass(classes.closing);

      // Fire animationend to complete dismiss
      act(() => {
        toastEl.dispatchEvent(new Event("animationend", { bubbles: true }));
      });

      // Toast should now be removed
      expect(screen.queryByText("Animated close")).toBeNull();
    });

    it("ignores second close when already closing (double-close guard)", async () => {
      const user = userEvent.setup();
      const { toast } = setup();
      act(() => {
        toast("Double close");
      });

      const toastEl = document.querySelector(`.${classes.root}`) as HTMLElement;

      // First close
      await user.click(screen.getByRole("button", { name: "Close" }));
      expect(toastEl).toHaveClass(classes.closing);

      // Spy on addEventListener to verify no additional animationend listener is added
      const addEventSpy = vi.spyOn(toastEl, "addEventListener");

      // Second close attempt — should be ignored by the isClosing guard
      await user.click(screen.getByRole("button", { name: "Close" }));

      // No new animationend listener should be added
      expect(addEventSpy).not.toHaveBeenCalledWith("animationend", expect.any(Function));
      addEventSpy.mockRestore();

      // Fire animationend to complete dismiss
      act(() => {
        toastEl.dispatchEvent(new Event("animationend", { bubbles: true }));
      });

      expect(screen.queryByText("Double close")).toBeNull();
    });

    it("calls onAutoClose after auto-close animationend", () => {
      vi.useFakeTimers();
      const onAutoClose = vi.fn();
      const { store, toast } = createToastStore();
      render(<Toaster store={store} />);

      act(() => {
        toast("Auto", { duration: 1000, onAutoClose });
      });

      const toastEl = document.querySelector(`.${classes.root}`) as HTMLElement;

      // Advance timer to trigger auto-close
      act(() => {
        vi.advanceTimersByTime(1000);
      });

      // Should be in closing state
      expect(toastEl).toHaveClass(classes.closing);

      // Fire animationend
      act(() => {
        toastEl.dispatchEvent(new Event("animationend", { bubbles: true }));
      });

      expect(onAutoClose).toHaveBeenCalledTimes(1);
      vi.useRealTimers();
    });
  });

  describe("toast.dismiss helper", () => {
    it("dismisses specific toast when id is provided", () => {
      const { toast } = setup();
      let toastId = "";
      act(() => {
        toastId = toast("Specific");
      });

      expect(screen.getByText("Specific")).toBeInTheDocument();

      act(() => {
        toast.dismiss(toastId);
      });

      expect(screen.queryByText("Specific")).toBeNull();
    });

    it("dismisses all toasts when no id is provided", () => {
      const { toast } = setup();
      act(() => {
        toast("First");
        toast("Second");
      });

      expect(screen.getByText("First")).toBeInTheDocument();
      expect(screen.getByText("Second")).toBeInTheDocument();

      act(() => {
        toast.dismiss();
      });

      expect(screen.queryByText("First")).toBeNull();
      expect(screen.queryByText("Second")).toBeNull();
    });
  });

  describe("hover pause/resume", () => {
    it("pauses auto-close on mouseenter and resumes on mouseleave", () => {
      vi.useFakeTimers();
      const { store, toast } = createToastStore();
      render(<Toaster store={store} />);

      act(() => {
        toast("Hover me", { duration: 2000 });
      });

      const toastEl = document.querySelector(`.${classes.root}`) as HTMLElement;

      // Advance 500ms (25% of duration)
      act(() => {
        vi.advanceTimersByTime(500);
      });

      // Hover to pause
      fireEvent.mouseEnter(toastEl);

      // Advance another 2000ms while hovering - should NOT close
      act(() => {
        vi.advanceTimersByTime(2000);
      });

      expect(screen.getByText("Hover me")).toBeInTheDocument();
      expect(toastEl).not.toHaveClass(classes.closing);

      // Leave hover to resume
      fireEvent.mouseLeave(toastEl);

      // Advance remaining time (~1500ms)
      act(() => {
        vi.advanceTimersByTime(1500);
      });

      // Should now be in closing state
      expect(toastEl).toHaveClass(classes.closing);

      vi.useRealTimers();
    });

    it("does not pause when duration is 0", () => {
      vi.useFakeTimers();
      const { store, toast } = createToastStore();
      render(<Toaster store={store} />);

      act(() => {
        toast("No auto close", { duration: 0 });
      });

      const toastEl = document.querySelector(`.${classes.root}`) as HTMLElement;

      // Hover should not cause issues
      fireEvent.mouseEnter(toastEl);
      fireEvent.mouseLeave(toastEl);

      // Toast should still be visible
      expect(screen.getByText("No auto close")).toBeInTheDocument();

      vi.useRealTimers();
    });
  });

  describe("duration prop", () => {
    it("auto-closes toast after specified duration", () => {
      vi.useFakeTimers();
      const { store, toast } = createToastStore();
      render(<Toaster store={store} />);

      act(() => {
        toast("Auto dismiss", { duration: 1000 });
      });

      expect(screen.getByText("Auto dismiss")).toBeInTheDocument();

      // Advance timer
      act(() => {
        vi.advanceTimersByTime(1000);
      });

      const toastEl = document.querySelector(`.${classes.root}`) as HTMLElement;
      expect(toastEl).toHaveClass(classes.closing);

      vi.useRealTimers();
    });

    it("does not auto-close when duration is 0", () => {
      vi.useFakeTimers();
      const { store, toast } = createToastStore();
      render(<Toaster store={store} />);

      act(() => {
        toast("Persistent", { duration: 0 });
      });

      act(() => {
        vi.advanceTimersByTime(10000);
      });

      // Should still be visible
      expect(screen.getByText("Persistent")).toBeInTheDocument();
      const toastEl = document.querySelector(`.${classes.root}`) as HTMLElement;
      expect(toastEl).not.toHaveClass(classes.closing);

      vi.useRealTimers();
    });

    it("per-toast duration overrides store default", () => {
      vi.useFakeTimers();
      const { store, toast } = createToastStore();
      render(<Toaster store={store} />);

      act(() => {
        toast("Fast", { duration: 500 });
      });

      act(() => {
        vi.advanceTimersByTime(500);
      });

      const toastEl = document.querySelector(`.${classes.root}`) as HTMLElement;
      expect(toastEl).toHaveClass(classes.closing);

      vi.useRealTimers();
    });
  });
});
