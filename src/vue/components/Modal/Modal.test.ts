import { CSS_CLASSES } from "@/core/constants";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/vue";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { nextTick } from "vue";
import Modal from "./Modal.vue";

const classes = CSS_CLASSES.modal;

describe("Modal", () => {
  beforeEach(() => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });

  describe("rendering", () => {
    it("does not render when open is false", () => {
      render(Modal, {
        props: { open: false },
        slots: { default: "Content" },
      });

      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });

    it("renders when open is true", () => {
      render(Modal, {
        props: { open: true },
        slots: { default: "Content" },
      });

      expect(screen.getByRole("dialog")).toBeInTheDocument();
    });

    it("has aria-modal attribute", () => {
      render(Modal, {
        props: { open: true },
        slots: { default: "Content" },
      });

      expect(screen.getByRole("dialog")).toHaveAttribute("aria-modal", "true");
    });
  });

  describe("simple mode (title prop)", () => {
    it("renders title", () => {
      render(Modal, {
        props: { open: true, title: "Test Title" },
        slots: { default: "Body content" },
      });

      expect(screen.getByText("Test Title")).toBeInTheDocument();
    });

    it("renders title as h2", () => {
      render(Modal, {
        props: { open: true, title: "Test Title" },
        slots: { default: "Body content" },
      });

      const title = screen.getByText("Test Title");
      expect(title.tagName).toBe("H2");
      expect(title).toHaveClass(classes.title);
    });

    it("renders body content", () => {
      render(Modal, {
        props: { open: true, title: "Test Title" },
        slots: { default: "Body content" },
      });

      expect(screen.getByText("Body content")).toBeInTheDocument();
    });

    it("renders footer slot when provided", () => {
      render(Modal, {
        props: { open: true, title: "Test Title" },
        slots: {
          default: "Body content",
          footer: '<div data-testid="footer">Footer</div>',
        },
      });

      expect(screen.getByTestId("footer")).toBeInTheDocument();
    });

    it("does not render footer when slot is not provided", () => {
      render(Modal, {
        props: { open: true, title: "Test Title" },
        slots: { default: "Body content" },
      });

      expect(document.querySelector(`.${classes.footer}`)).not.toBeInTheDocument();
    });

    it("renders close button by default", () => {
      render(Modal, {
        props: { open: true, title: "Test Title" },
        slots: { default: "Body content" },
      });

      expect(screen.getByLabelText("Close")).toBeInTheDocument();
    });

    it("hides close button when showCloseButton is false", () => {
      render(Modal, {
        props: { open: true, title: "Test Title", showCloseButton: false },
        slots: { default: "Body content" },
      });

      expect(screen.queryByLabelText("Close")).not.toBeInTheDocument();
    });

    it("has aria-labelledby linking to title", () => {
      render(Modal, {
        props: { open: true, title: "Test Title" },
        slots: { default: "Body content" },
      });

      const dialog = screen.getByRole("dialog");
      const titleId = dialog.getAttribute("aria-labelledby");
      expect(titleId).toBeTruthy();

      const title = document.getElementById(titleId!);
      expect(title).toHaveTextContent("Test Title");
    });
  });

  describe("custom mode (no title)", () => {
    it("renders slot content directly", () => {
      render(Modal, {
        props: { open: true },
        slots: { default: '<div data-testid="custom">Custom Content</div>' },
      });

      expect(screen.getByTestId("custom")).toBeInTheDocument();
    });

    it("does not render header", () => {
      render(Modal, {
        props: { open: true },
        slots: { default: "Custom Content" },
      });

      expect(document.querySelector(`.${classes.header}`)).not.toBeInTheDocument();
    });

    it("does not have aria-labelledby without title", () => {
      render(Modal, {
        props: { open: true },
        slots: { default: "Custom Content" },
      });

      expect(screen.getByRole("dialog")).not.toHaveAttribute("aria-labelledby");
    });
  });

  describe("size prop", () => {
    it("applies md size by default", () => {
      render(Modal, {
        props: { open: true },
        slots: { default: "Content" },
      });

      expect(screen.getByRole("dialog")).toHaveClass(classes.sizes.md);
    });

    it("applies sm size", () => {
      render(Modal, {
        props: { open: true, size: "sm" },
        slots: { default: "Content" },
      });

      expect(screen.getByRole("dialog")).toHaveClass(classes.sizes.sm);
    });

    it("applies lg size", () => {
      render(Modal, {
        props: { open: true, size: "lg" },
        slots: { default: "Content" },
      });

      expect(screen.getByRole("dialog")).toHaveClass(classes.sizes.lg);
    });

    it("applies full size", () => {
      render(Modal, {
        props: { open: true, size: "full" },
        slots: { default: "Content" },
      });

      expect(screen.getByRole("dialog")).toHaveClass(classes.sizes.full);
    });
  });

  describe("close behavior", () => {
    it("emits close when close button is clicked", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      const { emitted } = render(Modal, {
        props: { open: true, title: "Title" },
        slots: { default: "Content" },
      });

      await user.click(screen.getByLabelText("Close"));

      expect(emitted()).toHaveProperty("close");
    });

    it("emits close when backdrop is clicked", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      const { emitted } = render(Modal, {
        props: { open: true, title: "Title" },
        slots: { default: "Content" },
      });

      const backdrop = document.querySelector(`.${classes.backdrop}`)!;
      await user.click(backdrop);

      expect(emitted()).toHaveProperty("close");
    });

    it("does not emit close on backdrop click when closeOnBackdrop is false", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      const { emitted } = render(Modal, {
        props: { open: true, title: "Title", closeOnBackdrop: false },
        slots: { default: "Content" },
      });

      const backdrop = document.querySelector(`.${classes.backdrop}`)!;
      await user.click(backdrop);

      expect(emitted()).not.toHaveProperty("close");
    });

    it("emits close when Escape is pressed", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      const { emitted } = render(Modal, {
        props: { open: true, title: "Title" },
        slots: { default: "Content" },
      });

      await user.keyboard("{Escape}");

      expect(emitted()).toHaveProperty("close");
    });

    it("does not emit close on Escape when closeOnEsc is false", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      const { emitted } = render(Modal, {
        props: { open: true, title: "Title", closeOnEsc: false },
        slots: { default: "Content" },
      });

      await user.keyboard("{Escape}");

      expect(emitted()).not.toHaveProperty("close");
    });

    it("does not emit close when clicking dialog content (not backdrop)", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      const { emitted } = render(Modal, {
        props: { open: true, title: "Title" },
        slots: { default: "Content" },
      });

      await user.click(screen.getByRole("dialog"));

      expect(emitted()).not.toHaveProperty("close");
    });
  });

  describe("backdrop", () => {
    it("renders backdrop", () => {
      render(Modal, {
        props: { open: true },
        slots: { default: "Content" },
      });

      const backdrop = document.querySelector(`.${classes.backdrop}`);
      expect(backdrop).toBeInTheDocument();
    });

    it("backdrop has presentation role", () => {
      render(Modal, {
        props: { open: true },
        slots: { default: "Content" },
      });

      const backdrop = document.querySelector(`.${classes.backdrop}`);
      expect(backdrop).toHaveAttribute("role", "presentation");
    });
  });

  describe("className prop", () => {
    it("applies custom className", () => {
      render(Modal, {
        props: { open: true, className: "custom-modal" },
        slots: { default: "Content" },
      });

      expect(screen.getByRole("dialog")).toHaveClass("custom-modal");
    });
  });

  describe("closing animation", () => {
    it("applies closing class during close animation", async () => {
      const { rerender } = render(Modal, {
        props: { open: true },
        slots: { default: "Content" },
      });

      expect(screen.getByRole("dialog")).toBeInTheDocument();
      expect(screen.getByRole("dialog")).not.toHaveClass(classes.closing);

      // Close the modal
      await rerender({ open: false });

      // During closing animation, dialog should still be visible with closing class
      expect(screen.getByRole("dialog")).toHaveClass(classes.closing);

      // Backdrop should also have closing class
      const backdrop = document.querySelector(`.${classes.backdrop}`);
      expect(backdrop).toHaveClass(classes.backdropClosing);

      // After animation timer completes, should be removed
      vi.advanceTimersByTime(300);
      await nextTick();

      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
  });

  describe("focus trap", () => {
    it("traps focus within modal on Tab key", () => {
      render(Modal, {
        props: { open: true, title: "Title" },
        slots: {
          default: '<button data-testid="btn1">Button 1</button><button data-testid="btn2">Button 2</button>',
        },
      });

      const closeBtn = screen.getByLabelText("Close");
      const btn2 = screen.getByTestId("btn2");

      // Focus last button, then Tab should cycle back to first focusable
      btn2.focus();
      expect(document.activeElement).toBe(btn2);

      // Dispatch Tab keydown — useFocusTrap listens on document
      const tabEvent = new KeyboardEvent("keydown", { key: "Tab", bubbles: true });
      const preventDefaultSpy = vi.spyOn(tabEvent, "preventDefault");
      document.dispatchEvent(tabEvent);

      expect(preventDefaultSpy).toHaveBeenCalled();
      expect(document.activeElement).toBe(closeBtn);
    });

    it("does not trap focus when no focusable elements exist", () => {
      render(Modal, {
        props: { open: true, showCloseButton: false },
        slots: { default: "<p>No focusable content</p>" },
      });

      const tabEvent = new KeyboardEvent("keydown", { key: "Tab", bubbles: true });
      const preventDefaultSpy = vi.spyOn(tabEvent, "preventDefault");
      document.dispatchEvent(tabEvent);

      expect(preventDefaultSpy).not.toHaveBeenCalled();
    });

    it("traps focus within modal on Shift+Tab key", () => {
      render(Modal, {
        props: { open: true, title: "Title" },
        slots: {
          default: '<button data-testid="btn1">Button 1</button><button data-testid="btn2">Button 2</button>',
        },
      });

      const closeBtn = screen.getByLabelText("Close");
      const btn2 = screen.getByTestId("btn2");

      // Focus first focusable element, then Shift+Tab should cycle to last
      closeBtn.focus();
      expect(document.activeElement).toBe(closeBtn);

      const shiftTabEvent = new KeyboardEvent("keydown", { key: "Tab", shiftKey: true, bubbles: true });
      const preventDefaultSpy = vi.spyOn(shiftTabEvent, "preventDefault");
      document.dispatchEvent(shiftTabEvent);

      expect(preventDefaultSpy).toHaveBeenCalled();
      expect(document.activeElement).toBe(btn2);
    });
  });

  describe("focus restore", () => {
    it("restores focus to trigger element when closed", async () => {
      const triggerButton = document.createElement("button");
      triggerButton.textContent = "Trigger";
      document.body.appendChild(triggerButton);
      triggerButton.focus();
      expect(document.activeElement).toBe(triggerButton);

      const { rerender } = render(Modal, {
        props: { open: true, title: "Title" },
        slots: { default: "Content" },
      });

      // Close the modal
      await rerender({ open: false, title: "Title" });

      // Wait for closing animation to complete
      vi.advanceTimersByTime(300);
      await nextTick();

      // Focus should be restored to the trigger button
      expect(document.activeElement).toBe(triggerButton);

      document.body.removeChild(triggerButton);
    });
  });

  describe("re-open during closing", () => {
    it("cancels closing animation when re-opened during close", async () => {
      const { rerender } = render(Modal, {
        props: { open: true },
        slots: { default: "Content" },
      });

      // Start closing
      await rerender({ open: false });
      expect(screen.getByRole("dialog")).toHaveClass(classes.closing);

      // Re-open before animation completes (clears closing timer)
      await rerender({ open: true });

      expect(screen.getByRole("dialog")).toBeInTheDocument();
      expect(screen.getByRole("dialog")).not.toHaveClass(classes.closing);

      // Advance past the original animation time — should still be visible
      vi.advanceTimersByTime(300);
      await nextTick();

      expect(screen.getByRole("dialog")).toBeInTheDocument();
    });
  });

  describe("full lifecycle", () => {
    it("transitions through full lifecycle: closed -> open -> close animation -> removed", async () => {
      const { rerender } = render(Modal, {
        props: { open: false, title: "Title", showCloseButton: true },
        slots: {
          default: "Body content",
          footer: '<div data-testid="footer">Footer</div>',
        },
      });

      // Initially not visible
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

      // Open - all elements should be visible
      await rerender({ open: true, title: "Title", showCloseButton: true });
      expect(screen.getByRole("dialog")).toBeInTheDocument();
      expect(screen.getByText("Title")).toBeInTheDocument();
      expect(screen.getByText("Body content")).toBeInTheDocument();
      expect(screen.getByTestId("footer")).toBeInTheDocument();
      expect(screen.getByLabelText("Close")).toBeInTheDocument();

      // Close - should animate then remove
      await rerender({ open: false, title: "Title", showCloseButton: true });
      expect(screen.getByRole("dialog")).toHaveClass(classes.closing);

      vi.advanceTimersByTime(300);
      await nextTick();

      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
  });

  describe("unmount during closing", () => {
    it("cleans up closing timer when unmounted during close animation", async () => {
      const { rerender, unmount } = render(Modal, {
        props: { open: true },
        slots: { default: "Content" },
      });

      // Start closing animation
      await rerender({ open: false });
      expect(screen.getByRole("dialog")).toHaveClass(classes.closing);

      // Unmount while closing (should cleanup timer without error)
      unmount();

      // Advance past animation time to ensure no errors from orphaned timer
      vi.advanceTimersByTime(500);
      await nextTick();
    });
  });

  describe("body scroll lock", () => {
    it("locks body scroll when open", () => {
      render(Modal, {
        props: { open: true },
        slots: { default: "Content" },
      });

      expect(document.body.style.overflow).toBe("hidden");
    });

    it("unlocks body scroll when closed", () => {
      const { unmount } = render(Modal, {
        props: { open: true },
        slots: { default: "Content" },
      });

      unmount();

      expect(document.body.style.overflow).not.toBe("hidden");
    });
  });
});
