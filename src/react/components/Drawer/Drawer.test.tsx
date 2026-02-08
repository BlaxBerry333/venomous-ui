import { COMPONENT_NAMES, CSS_CLASSES } from "@/core/constants";
import { act, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useRef } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { Button } from "../Button";
import { Drawer } from "./index";

const classes = CSS_CLASSES.drawer;

describe("Drawer", () => {
  beforeEach(() => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
    document.body.style.overflow = "";
  });

  // Basic rendering
  describe("rendering", () => {
    it("renders when open is true", () => {
      render(
        <Drawer open onClose={() => {}}>
          Drawer content
        </Drawer>,
      );

      expect(screen.getByRole("dialog")).toBeInTheDocument();
      expect(screen.getByText("Drawer content")).toBeInTheDocument();
    });

    it("does not render when open is false", () => {
      render(
        <Drawer open={false} onClose={() => {}}>
          Drawer content
        </Drawer>,
      );

      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });

    it("renders with title and default structure", () => {
      render(
        <Drawer open onClose={() => {}} title="Test Title">
          Body content
        </Drawer>,
      );

      expect(screen.getByText("Test Title")).toBeInTheDocument();
      expect(screen.getByText("Body content")).toBeInTheDocument();
      expect(screen.getByRole("button", { name: "Close" })).toBeInTheDocument();
    });

    it("renders footer when provided via slot", () => {
      render(
        <Drawer open onClose={() => {}} title="Title" footer={<Button>Save</Button>}>
          Content
        </Drawer>,
      );

      expect(screen.getByRole("button", { name: "Save" })).toBeInTheDocument();
    });
  });

  // Placement
  describe("placement", () => {
    it("applies right placement by default", () => {
      render(
        <Drawer open onClose={() => {}}>
          Content
        </Drawer>,
      );

      expect(screen.getByRole("dialog")).toHaveClass(classes.placements.right);
    });

    it("applies left placement", () => {
      render(
        <Drawer open onClose={() => {}} placement="left">
          Content
        </Drawer>,
      );

      expect(screen.getByRole("dialog")).toHaveClass(classes.placements.left);
    });

    it("applies top placement", () => {
      render(
        <Drawer open onClose={() => {}} placement="top">
          Content
        </Drawer>,
      );

      expect(screen.getByRole("dialog")).toHaveClass(classes.placements.top);
    });

    it("applies bottom placement", () => {
      render(
        <Drawer open onClose={() => {}} placement="bottom">
          Content
        </Drawer>,
      );

      expect(screen.getByRole("dialog")).toHaveClass(classes.placements.bottom);
    });
  });

  // Size
  describe("size", () => {
    it("applies md size by default", () => {
      render(
        <Drawer open onClose={() => {}}>
          Content
        </Drawer>,
      );

      expect(screen.getByRole("dialog")).toHaveClass(classes.sizes.md);
    });

    it("applies sm size", () => {
      render(
        <Drawer open onClose={() => {}} size="sm">
          Content
        </Drawer>,
      );

      expect(screen.getByRole("dialog")).toHaveClass(classes.sizes.sm);
    });

    it("applies lg size", () => {
      render(
        <Drawer open onClose={() => {}} size="lg">
          Content
        </Drawer>,
      );

      expect(screen.getByRole("dialog")).toHaveClass(classes.sizes.lg);
    });

    it("applies xl size", () => {
      render(
        <Drawer open onClose={() => {}} size="xl">
          Content
        </Drawer>,
      );

      expect(screen.getByRole("dialog")).toHaveClass(classes.sizes.xl);
    });

    it("applies full size", () => {
      render(
        <Drawer open onClose={() => {}} size="full">
          Content
        </Drawer>,
      );

      expect(screen.getByRole("dialog")).toHaveClass(classes.sizes.full);
    });
  });

  // Close button
  describe("close button", () => {
    it("shows close button by default when title is provided", () => {
      render(
        <Drawer open onClose={() => {}} title="Title">
          Content
        </Drawer>,
      );

      expect(screen.getByRole("button", { name: "Close" })).toBeInTheDocument();
    });

    it("hides close button when showCloseButton is false", () => {
      render(
        <Drawer open onClose={() => {}} title="Title" showCloseButton={false}>
          Content
        </Drawer>,
      );

      expect(screen.queryByRole("button", { name: "Close" })).not.toBeInTheDocument();
    });

    it("calls onClose when close button is clicked", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      const handleClose = vi.fn();

      render(
        <Drawer open onClose={handleClose} title="Title">
          Content
        </Drawer>,
      );

      await user.click(screen.getByRole("button", { name: "Close" }));
      expect(handleClose).toHaveBeenCalledTimes(1);
    });

    it("renders custom close icon", () => {
      render(
        <Drawer open onClose={() => {}} title="Title" closeIcon={<span data-testid="custom-icon">X</span>}>
          Content
        </Drawer>,
      );

      expect(screen.getByTestId("custom-icon")).toBeInTheDocument();
    });
  });

  // Backdrop
  describe("backdrop", () => {
    it("closes when backdrop is clicked by default", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      const handleClose = vi.fn();

      render(
        <Drawer open onClose={handleClose}>
          Content
        </Drawer>,
      );

      // Find and click the backdrop
      const backdrop = document.querySelector(`.${classes.backdrop}`);
      expect(backdrop).toBeInTheDocument();
      await user.click(backdrop!);

      expect(handleClose).toHaveBeenCalledTimes(1);
    });

    it("does not close when closeOnBackdrop is false", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      const handleClose = vi.fn();

      render(
        <Drawer open onClose={handleClose} closeOnBackdrop={false}>
          Content
        </Drawer>,
      );

      const backdrop = document.querySelector(`.${classes.backdrop}`);
      await user.click(backdrop!);

      expect(handleClose).not.toHaveBeenCalled();
    });
  });

  // ESC key
  describe("ESC key", () => {
    it("closes when ESC is pressed by default", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      const handleClose = vi.fn();

      render(
        <Drawer open onClose={handleClose}>
          Content
        </Drawer>,
      );

      await user.keyboard("{Escape}");
      expect(handleClose).toHaveBeenCalledTimes(1);
    });

    it("does not close when closeOnEsc is false", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      const handleClose = vi.fn();

      render(
        <Drawer open onClose={handleClose} closeOnEsc={false}>
          Content
        </Drawer>,
      );

      await user.keyboard("{Escape}");
      expect(handleClose).not.toHaveBeenCalled();
    });
  });

  // Body scroll lock
  describe("body scroll lock", () => {
    it("locks body scroll when open", () => {
      render(
        <Drawer open onClose={() => {}}>
          Content
        </Drawer>,
      );

      expect(document.body.style.overflow).toBe("hidden");
    });

    it("restores body scroll when closed", () => {
      const { rerender } = render(
        <Drawer open onClose={() => {}}>
          Content
        </Drawer>,
      );

      expect(document.body.style.overflow).toBe("hidden");

      rerender(
        <Drawer open={false} onClose={() => {}}>
          Content
        </Drawer>,
      );

      act(() => {
        vi.advanceTimersByTime(200);
      });

      expect(document.body.style.overflow).toBe("");
    });
  });

  // Focus management
  describe("focus management", () => {
    it("focuses first focusable element when opened", async () => {
      render(
        <Drawer open onClose={() => {}} title="Title">
          <input data-testid="input" />
        </Drawer>,
      );

      await waitFor(() => {
        expect(screen.getByRole("button", { name: "Close" })).toHaveFocus();
      });
    });

    it("restores focus to trigger element when closed", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });

      function TestComponent() {
        const [open, setOpen] = React.useState(false);
        return (
          <>
            <button data-testid="trigger" onClick={() => setOpen(true)}>
              Open
            </button>
            <Drawer open={open} onClose={() => setOpen(false)} title="Title">
              <button data-testid="drawer-button">In Drawer</button>
            </Drawer>
          </>
        );
      }

      // Need React for useState
      const React = await import("react");
      render(<TestComponent />);

      const trigger = screen.getByTestId("trigger");
      await user.click(trigger);

      // Wait for drawer to open and focus to shift
      await waitFor(() => {
        expect(screen.getByRole("dialog")).toBeInTheDocument();
      });

      // Press ESC to close
      await user.keyboard("{Escape}");

      act(() => {
        vi.advanceTimersByTime(200);
      });

      // Focus should return to trigger
      await waitFor(() => {
        expect(trigger).toHaveFocus();
      });
    });
  });

  // Focus trap
  describe("focus trap", () => {
    it("traps focus within drawer", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });

      render(
        <Drawer open onClose={() => {}} title="Title">
          <button data-testid="first">First</button>
          <button data-testid="last">Last</button>
        </Drawer>,
      );

      // Close button should be focused first
      await waitFor(() => {
        expect(screen.getByRole("button", { name: "Close" })).toHaveFocus();
      });

      // Tab to last button
      await user.tab();
      expect(screen.getByTestId("first")).toHaveFocus();

      await user.tab();
      expect(screen.getByTestId("last")).toHaveFocus();

      // Tab from last should go to close button (first focusable)
      await user.tab();
      expect(screen.getByRole("button", { name: "Close" })).toHaveFocus();

      // Shift+Tab should go to last
      await user.tab({ shift: true });
      expect(screen.getByTestId("last")).toHaveFocus();
    });
  });

  // Closing animation
  describe("closing animation", () => {
    it("applies closing class during close animation", () => {
      const { rerender } = render(
        <Drawer open onClose={() => {}}>
          Content
        </Drawer>,
      );

      const drawer = screen.getByRole("dialog");
      expect(drawer).not.toHaveClass(classes.closing);

      rerender(
        <Drawer open={false} onClose={() => {}}>
          Content
        </Drawer>,
      );

      expect(drawer).toHaveClass(classes.closing);

      act(() => {
        vi.advanceTimersByTime(200);
      });

      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
  });

  // Accessibility
  describe("accessibility", () => {
    it("has correct ARIA attributes", () => {
      render(
        <Drawer open onClose={() => {}} title="Test Title">
          Content
        </Drawer>,
      );

      const dialog = screen.getByRole("dialog");
      expect(dialog).toHaveAttribute("aria-modal", "true");
      expect(dialog).toHaveAttribute("aria-labelledby");

      const titleId = dialog.getAttribute("aria-labelledby");
      const title = document.getElementById(titleId!);
      expect(title).toHaveTextContent("Test Title");
    });

    it("has backdrop with presentation role", () => {
      render(
        <Drawer open onClose={() => {}}>
          Content
        </Drawer>,
      );

      const backdrop = document.querySelector(`.${classes.backdrop}`);
      expect(backdrop).toHaveAttribute("role", "presentation");
      expect(backdrop).toHaveAttribute("aria-hidden", "true");
    });
  });

  // Custom className
  describe("className prop", () => {
    it("applies custom className", () => {
      render(
        <Drawer open onClose={() => {}} className="custom-class">
          Content
        </Drawer>,
      );

      expect(screen.getByRole("dialog")).toHaveClass("custom-class");
    });
  });

  // Ref forwarding
  describe("ref forwarding", () => {
    it("forwards ref correctly", () => {
      let drawerRef: HTMLDivElement | null = null;
      function TestComponent() {
        const ref = useRef<HTMLDivElement>(null);
        drawerRef = ref.current;
        return (
          <Drawer ref={ref} open onClose={() => {}}>
            Content
          </Drawer>
        );
      }
      const { rerender } = render(<TestComponent />);
      rerender(<TestComponent />);

      expect(drawerRef).toBeInstanceOf(HTMLDivElement);
    });

    it("forwards ref with callback", () => {
      const refCallback = vi.fn();
      render(
        <Drawer ref={refCallback} open onClose={() => {}}>
          Content
        </Drawer>,
      );

      expect(refCallback).toHaveBeenCalled();
      expect(refCallback.mock.calls[0][0]).toBeInstanceOf(HTMLDivElement);
    });
  });

  // displayName
  describe("displayName", () => {
    it("has correct displayName", () => {
      expect(Drawer.displayName).toBe(COMPONENT_NAMES.Drawer);
    });
  });

  // Custom mode (no title)
  describe("custom mode", () => {
    it("renders children directly when no title", () => {
      render(
        <Drawer open onClose={() => {}}>
          <div data-testid="custom-content">Custom</div>
        </Drawer>,
      );

      expect(screen.getByTestId("custom-content")).toBeInTheDocument();
      expect(screen.queryByRole("button", { name: "Close" })).not.toBeInTheDocument();
    });
  });

  // Timer cleanup
  describe("timer cleanup", () => {
    it("clears closing timer when reopened during close animation", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });

      function TestComponent() {
        const [open, setOpen] = React.useState(true);
        return (
          <>
            <button data-testid="toggle" onClick={() => setOpen((o) => !o)}>
              Toggle
            </button>
            <Drawer open={open} onClose={() => setOpen(false)} title="Title">
              <button data-testid="drawer-button">In Drawer</button>
            </Drawer>
          </>
        );
      }

      const React = await import("react");
      render(<TestComponent />);

      expect(screen.getByRole("dialog")).toBeInTheDocument();

      // Close drawer
      await user.click(screen.getByTestId("toggle"));
      act(() => {
        vi.advanceTimersByTime(100); // Halfway through close animation
      });

      // Drawer should still be visible (in closing state)
      expect(screen.getByRole("dialog")).toBeInTheDocument();
      expect(screen.getByRole("dialog")).toHaveClass(classes.closing);

      // Reopen before close animation completes
      await user.click(screen.getByTestId("toggle"));
      act(() => {
        vi.advanceTimersByTime(200);
      });

      // Drawer should be visible and not closing
      expect(screen.getByRole("dialog")).toBeInTheDocument();
      expect(screen.getByRole("dialog")).not.toHaveClass(classes.closing);
    });

    it("clears timer on unmount", async () => {
      function TestComponent() {
        const [mounted, setMounted] = React.useState(true);
        const [open, setOpen] = React.useState(true);
        return (
          <>
            <button data-testid="unmount" onClick={() => setMounted(false)}>
              Unmount
            </button>
            {mounted && (
              <Drawer open={open} onClose={() => setOpen(false)} title="Title">
                Content
              </Drawer>
            )}
          </>
        );
      }

      const React = await import("react");
      const { unmount } = render(<TestComponent />);

      expect(screen.getByRole("dialog")).toBeInTheDocument();

      // Unmount the entire component
      unmount();

      // Advance timers - should not cause errors
      act(() => {
        vi.advanceTimersByTime(300);
      });
    });
  });

  // Focus trap edge cases
  describe("focus trap edge cases", () => {
    it("handles drawer with no focusable elements", async () => {
      render(
        <Drawer open onClose={() => {}}>
          <span>Non-focusable content</span>
        </Drawer>,
      );

      // Should not throw an error
      await waitFor(() => {
        expect(screen.getByRole("dialog")).toBeInTheDocument();
      });
    });

    it("handles focus restore when trigger is not HTMLElement", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });

      function TestComponent() {
        const [open, setOpen] = React.useState(false);
        return (
          <>
            {/* Trigger opening without a focusable element as activeElement */}
            <span data-testid="non-focusable-trigger" onClick={() => setOpen(true)}>
              Open
            </span>
            <Drawer open={open} onClose={() => setOpen(false)} title="Title">
              <button data-testid="drawer-button">In Drawer</button>
            </Drawer>
          </>
        );
      }

      const React = await import("react");
      render(<TestComponent />);

      // Click the non-focusable span to open drawer
      await user.click(screen.getByTestId("non-focusable-trigger"));

      await waitFor(() => {
        expect(screen.getByRole("dialog")).toBeInTheDocument();
      });

      // Close the drawer
      await user.keyboard("{Escape}");

      act(() => {
        vi.advanceTimersByTime(200);
      });

      // Drawer should be closed without error
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
  });
});
