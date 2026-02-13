import { CSS_CLASSES } from "@/core/constants";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/vue";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { nextTick } from "vue";
import Drawer from "./Drawer.vue";

const classes = CSS_CLASSES.drawer;

describe("Drawer", () => {
  beforeEach(() => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });

  describe("rendering", () => {
    it("does not render when open is false", () => {
      render(Drawer, {
        props: { open: false },
        slots: { default: "Content" },
      });

      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });

    it("renders when open is true", () => {
      render(Drawer, {
        props: { open: true },
        slots: { default: "Content" },
      });

      expect(screen.getByRole("dialog")).toBeInTheDocument();
    });

    it("has aria-modal attribute", () => {
      render(Drawer, {
        props: { open: true },
        slots: { default: "Content" },
      });

      expect(screen.getByRole("dialog")).toHaveAttribute("aria-modal", "true");
    });
  });

  describe("simple mode (title prop)", () => {
    it("renders title", () => {
      render(Drawer, {
        props: { open: true, title: "Drawer Title" },
        slots: { default: "Body content" },
      });

      expect(screen.getByText("Drawer Title")).toBeInTheDocument();
    });

    it("renders title as h2", () => {
      render(Drawer, {
        props: { open: true, title: "Drawer Title" },
        slots: { default: "Body content" },
      });

      const title = screen.getByText("Drawer Title");
      expect(title.tagName).toBe("H2");
      expect(title).toHaveClass(classes.title);
    });

    it("renders body content", () => {
      render(Drawer, {
        props: { open: true, title: "Drawer Title" },
        slots: { default: "Body content" },
      });

      expect(screen.getByText("Body content")).toBeInTheDocument();
    });

    it("renders footer slot when provided", () => {
      render(Drawer, {
        props: { open: true, title: "Drawer Title" },
        slots: {
          default: "Body content",
          footer: '<div data-testid="footer">Footer</div>',
        },
      });

      expect(screen.getByTestId("footer")).toBeInTheDocument();
    });

    it("does not render footer when slot is not provided", () => {
      render(Drawer, {
        props: { open: true, title: "Drawer Title" },
        slots: { default: "Body content" },
      });

      expect(document.querySelector(`.${classes.footer}`)).not.toBeInTheDocument();
    });

    it("renders close button by default", () => {
      render(Drawer, {
        props: { open: true, title: "Drawer Title" },
        slots: { default: "Body content" },
      });

      expect(screen.getByLabelText("Close")).toBeInTheDocument();
    });

    it("hides close button when showCloseButton is false", () => {
      render(Drawer, {
        props: { open: true, title: "Drawer Title", showCloseButton: false },
        slots: { default: "Body content" },
      });

      expect(screen.queryByLabelText("Close")).not.toBeInTheDocument();
    });

    it("has aria-labelledby linking to title", () => {
      render(Drawer, {
        props: { open: true, title: "Drawer Title" },
        slots: { default: "Body content" },
      });

      const dialog = screen.getByRole("dialog");
      const titleId = dialog.getAttribute("aria-labelledby");
      expect(titleId).toBeTruthy();

      const title = document.getElementById(titleId!);
      expect(title).toHaveTextContent("Drawer Title");
    });
  });

  describe("custom mode (no title)", () => {
    it("renders slot content directly", () => {
      render(Drawer, {
        props: { open: true },
        slots: { default: '<div data-testid="custom">Custom Content</div>' },
      });

      expect(screen.getByTestId("custom")).toBeInTheDocument();
    });

    it("does not render header", () => {
      render(Drawer, {
        props: { open: true },
        slots: { default: "Custom Content" },
      });

      expect(document.querySelector(`.${classes.header}`)).not.toBeInTheDocument();
    });

    it("does not have aria-labelledby without title", () => {
      render(Drawer, {
        props: { open: true },
        slots: { default: "Custom Content" },
      });

      expect(screen.getByRole("dialog")).not.toHaveAttribute("aria-labelledby");
    });
  });

  describe("placement prop", () => {
    it("applies right placement by default", () => {
      render(Drawer, {
        props: { open: true },
        slots: { default: "Content" },
      });

      expect(screen.getByRole("dialog")).toHaveClass(classes.placements.right);
    });

    it("applies left placement", () => {
      render(Drawer, {
        props: { open: true, placement: "left" },
        slots: { default: "Content" },
      });

      expect(screen.getByRole("dialog")).toHaveClass(classes.placements.left);
    });

    it("applies top placement", () => {
      render(Drawer, {
        props: { open: true, placement: "top" },
        slots: { default: "Content" },
      });

      expect(screen.getByRole("dialog")).toHaveClass(classes.placements.top);
    });

    it("applies bottom placement", () => {
      render(Drawer, {
        props: { open: true, placement: "bottom" },
        slots: { default: "Content" },
      });

      expect(screen.getByRole("dialog")).toHaveClass(classes.placements.bottom);
    });
  });

  describe("size prop", () => {
    it("applies md size by default", () => {
      render(Drawer, {
        props: { open: true },
        slots: { default: "Content" },
      });

      expect(screen.getByRole("dialog")).toHaveClass(classes.sizes.md);
    });

    it("applies sm size", () => {
      render(Drawer, {
        props: { open: true, size: "sm" },
        slots: { default: "Content" },
      });

      expect(screen.getByRole("dialog")).toHaveClass(classes.sizes.sm);
    });

    it("applies lg size", () => {
      render(Drawer, {
        props: { open: true, size: "lg" },
        slots: { default: "Content" },
      });

      expect(screen.getByRole("dialog")).toHaveClass(classes.sizes.lg);
    });

    it("applies full size", () => {
      render(Drawer, {
        props: { open: true, size: "full" },
        slots: { default: "Content" },
      });

      expect(screen.getByRole("dialog")).toHaveClass(classes.sizes.full);
    });
  });

  describe("close behavior", () => {
    it("emits close when close button is clicked", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      const { emitted } = render(Drawer, {
        props: { open: true, title: "Title" },
        slots: { default: "Content" },
      });

      await user.click(screen.getByLabelText("Close"));

      expect(emitted()).toHaveProperty("close");
    });

    it("emits close when backdrop is clicked", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      const { emitted } = render(Drawer, {
        props: { open: true, title: "Title" },
        slots: { default: "Content" },
      });

      const backdrop = document.querySelector(`.${classes.backdrop}`)!;
      await user.click(backdrop);

      expect(emitted()).toHaveProperty("close");
    });

    it("does not emit close on backdrop click when closeOnBackdrop is false", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      const { emitted } = render(Drawer, {
        props: { open: true, title: "Title", closeOnBackdrop: false },
        slots: { default: "Content" },
      });

      const backdrop = document.querySelector(`.${classes.backdrop}`)!;
      await user.click(backdrop);

      expect(emitted()).not.toHaveProperty("close");
    });

    it("emits close when Escape is pressed", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      const { emitted } = render(Drawer, {
        props: { open: true, title: "Title" },
        slots: { default: "Content" },
      });

      await user.keyboard("{Escape}");

      expect(emitted()).toHaveProperty("close");
    });

    it("does not emit close on Escape when closeOnEsc is false", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      const { emitted } = render(Drawer, {
        props: { open: true, title: "Title", closeOnEsc: false },
        slots: { default: "Content" },
      });

      await user.keyboard("{Escape}");

      expect(emitted()).not.toHaveProperty("close");
    });
  });

  describe("backdrop", () => {
    it("renders backdrop", () => {
      render(Drawer, {
        props: { open: true },
        slots: { default: "Content" },
      });

      const backdrop = document.querySelector(`.${classes.backdrop}`);
      expect(backdrop).toBeInTheDocument();
    });

    it("backdrop has aria-hidden", () => {
      render(Drawer, {
        props: { open: true },
        slots: { default: "Content" },
      });

      const backdrop = document.querySelector(`.${classes.backdrop}`);
      expect(backdrop).toHaveAttribute("aria-hidden", "true");
    });
  });

  describe("className prop", () => {
    it("applies custom className", () => {
      render(Drawer, {
        props: { open: true, className: "custom-drawer" },
        slots: { default: "Content" },
      });

      expect(screen.getByRole("dialog")).toHaveClass("custom-drawer");
    });
  });

  describe("closing animation", () => {
    it("applies closing class during close animation", async () => {
      const { rerender } = render(Drawer, {
        props: { open: true },
        slots: { default: "Content" },
      });

      expect(screen.getByRole("dialog")).toBeInTheDocument();
      expect(screen.getByRole("dialog")).not.toHaveClass(classes.closing);

      await rerender({ open: false });

      expect(screen.getByRole("dialog")).toHaveClass(classes.closing);

      const backdrop = document.querySelector(`.${classes.backdrop}`);
      expect(backdrop).toHaveClass(classes.backdropClosing);

      vi.advanceTimersByTime(300);
      await nextTick();

      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
  });

  describe("full lifecycle", () => {
    it("transitions through full lifecycle: closed -> open -> close animation -> removed", async () => {
      const { rerender } = render(Drawer, {
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

  describe("body scroll lock", () => {
    it("locks body scroll when open", () => {
      render(Drawer, {
        props: { open: true },
        slots: { default: "Content" },
      });

      expect(document.body.style.overflow).toBe("hidden");
    });

    it("unlocks body scroll when closed", () => {
      const { unmount } = render(Drawer, {
        props: { open: true },
        slots: { default: "Content" },
      });

      unmount();

      expect(document.body.style.overflow).not.toBe("hidden");
    });
  });
});
