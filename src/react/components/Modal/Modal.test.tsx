import { COMPONENT_NAMES, CSS_CLASSES } from "@/core/constants";
import { act, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useRef } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { Button } from "../Button";
import { Modal } from "./index";

const classes = CSS_CLASSES.modal;

// Animation duration used in Modal component
const ANIMATION_DURATION = 200;

describe("Modal", () => {
  beforeEach(() => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
    // Clean up any remaining body overflow styles
    document.body.style.overflow = "";
  });

  // Render control
  describe("rendering", () => {
    it("renders when open is true", () => {
      render(
        <Modal open onClose={() => {}}>
          Content
        </Modal>,
      );

      expect(screen.getByRole("dialog")).toBeInTheDocument();
      expect(screen.getByText("Content")).toBeInTheDocument();
    });

    it("does not render when open is false", () => {
      render(
        <Modal open={false} onClose={() => {}}>
          Content
        </Modal>,
      );

      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });

    it("applies default size class (md)", () => {
      render(
        <Modal open onClose={() => {}}>
          Content
        </Modal>,
      );

      expect(screen.getByRole("dialog")).toHaveClass(classes.sizes.md);
    });

    it("applies custom size class", () => {
      render(
        <Modal open size="lg" onClose={() => {}}>
          Content
        </Modal>,
      );

      expect(screen.getByRole("dialog")).toHaveClass(classes.sizes.lg);
    });

    it("applies custom className", () => {
      render(
        <Modal open className="custom-modal" onClose={() => {}}>
          Content
        </Modal>,
      );

      expect(screen.getByRole("dialog")).toHaveClass("custom-modal");
    });
  });

  // Simple mode (with title prop)
  describe("simple mode", () => {
    it("renders header with title when title prop is provided", () => {
      render(
        <Modal open title="Modal Title" onClose={() => {}}>
          Content
        </Modal>,
      );

      expect(screen.getByRole("heading", { name: "Modal Title" })).toBeInTheDocument();
      expect(screen.getByText("Content")).toBeInTheDocument();
    });

    it("renders close button by default when title is provided", () => {
      render(
        <Modal open title="Modal Title" onClose={() => {}}>
          Content
        </Modal>,
      );

      expect(screen.getByRole("button", { name: "Close" })).toBeInTheDocument();
    });

    it("hides close button when showCloseButton is false", () => {
      render(
        <Modal open title="Modal Title" showCloseButton={false} onClose={() => {}}>
          Content
        </Modal>,
      );

      expect(screen.queryByRole("button", { name: "Close" })).not.toBeInTheDocument();
    });

    it("calls onClose when close button is clicked", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      const handleClose = vi.fn();

      render(
        <Modal open title="Modal Title" onClose={handleClose}>
          Content
        </Modal>,
      );

      await user.click(screen.getByRole("button", { name: "Close" }));
      expect(handleClose).toHaveBeenCalledTimes(1);
    });

    it("renders footer when footer prop is provided", () => {
      render(
        <Modal open title="Modal Title" footer={<Button>Confirm</Button>} onClose={() => {}}>
          Content
        </Modal>,
      );

      expect(screen.getByRole("button", { name: "Confirm" })).toBeInTheDocument();
    });

    it("has aria-labelledby linked to title", () => {
      render(
        <Modal open title="Modal Title" onClose={() => {}}>
          Content
        </Modal>,
      );

      const dialog = screen.getByRole("dialog");
      const title = screen.getByRole("heading", { name: "Modal Title" });

      expect(dialog).toHaveAttribute("aria-labelledby");
      expect(title).toHaveAttribute("id");
      expect(dialog.getAttribute("aria-labelledby")).toBe(title.getAttribute("id"));
    });

    it("renders custom close icon when closeIcon prop is provided", () => {
      render(
        <Modal open title="Modal Title" closeIcon={<span data-testid="custom-icon">×</span>} onClose={() => {}}>
          Content
        </Modal>,
      );

      expect(screen.getByTestId("custom-icon")).toBeInTheDocument();
    });

    it("renders empty close button when closeIcon prop is not provided", () => {
      render(
        <Modal open title="Modal Title" onClose={() => {}}>
          Content
        </Modal>,
      );

      const closeButton = screen.getByRole("button", { name: "Close" });
      expect(closeButton).toBeInTheDocument();
      expect(closeButton.children.length).toBe(0);
    });
  });

  // Custom mode (without title)
  describe("custom mode", () => {
    it("renders children directly when no title prop", () => {
      render(
        <Modal open onClose={() => {}}>
          <div data-testid="custom-content">Custom layout</div>
        </Modal>,
      );

      expect(screen.getByTestId("custom-content")).toBeInTheDocument();
    });

    it("does not have aria-labelledby when no title", () => {
      render(
        <Modal open onClose={() => {}}>
          Custom content
        </Modal>,
      );

      expect(screen.getByRole("dialog")).not.toHaveAttribute("aria-labelledby");
    });
  });

  // Close behavior
  describe("close behavior", () => {
    it("calls onClose when backdrop is clicked", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      const handleClose = vi.fn();

      render(
        <Modal open onClose={handleClose}>
          Content
        </Modal>,
      );

      // Click on the backdrop (role="presentation")
      const backdrop = screen.getByRole("presentation");
      await user.click(backdrop);

      expect(handleClose).toHaveBeenCalledTimes(1);
    });

    it("does not close on backdrop when closeOnBackdrop is false", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      const handleClose = vi.fn();

      render(
        <Modal open closeOnBackdrop={false} onClose={handleClose}>
          Content
        </Modal>,
      );

      const backdrop = screen.getByRole("presentation");
      await user.click(backdrop);

      expect(handleClose).not.toHaveBeenCalled();
    });

    it("does not call onClose when clicking inside modal", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      const handleClose = vi.fn();

      render(
        <Modal open onClose={handleClose}>
          <div data-testid="content">Content</div>
        </Modal>,
      );

      await user.click(screen.getByTestId("content"));

      expect(handleClose).not.toHaveBeenCalled();
    });

    it("calls onClose when ESC key is pressed", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      const handleClose = vi.fn();

      render(
        <Modal open onClose={handleClose}>
          Content
        </Modal>,
      );

      await user.keyboard("{Escape}");

      expect(handleClose).toHaveBeenCalledTimes(1);
    });

    it("does not close on ESC when closeOnEsc is false", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      const handleClose = vi.fn();

      render(
        <Modal open closeOnEsc={false} onClose={handleClose}>
          Content
        </Modal>,
      );

      await user.keyboard("{Escape}");

      expect(handleClose).not.toHaveBeenCalled();
    });
  });

  // Accessibility
  describe("accessibility", () => {
    it("has role='dialog' and aria-modal='true'", () => {
      render(
        <Modal open onClose={() => {}}>
          Content
        </Modal>,
      );

      const dialog = screen.getByRole("dialog");
      expect(dialog).toHaveAttribute("aria-modal", "true");
    });
  });

  // Body scroll lock
  describe("body scroll lock", () => {
    it("locks body scroll when modal is open", () => {
      render(
        <Modal open onClose={() => {}}>
          Content
        </Modal>,
      );

      expect(document.body.style.overflow).toBe("hidden");
    });

    it("unlocks body scroll when modal closes", async () => {
      const { rerender } = render(
        <Modal open onClose={() => {}}>
          Content
        </Modal>,
      );

      expect(document.body.style.overflow).toBe("hidden");

      rerender(
        <Modal open={false} onClose={() => {}}>
          Content
        </Modal>,
      );

      // Wait for animation to complete
      await act(async () => {
        vi.advanceTimersByTime(ANIMATION_DURATION);
      });

      expect(document.body.style.overflow).toBe("");
    });
  });

  // Animation
  describe("animation", () => {
    it("applies closing class during close animation", async () => {
      const { rerender } = render(
        <Modal open onClose={() => {}}>
          Content
        </Modal>,
      );

      const dialog = screen.getByRole("dialog");
      expect(dialog).not.toHaveClass(classes.closing);

      rerender(
        <Modal open={false} onClose={() => {}}>
          Content
        </Modal>,
      );

      // During animation, closing class should be applied
      expect(screen.getByRole("dialog")).toHaveClass(classes.closing);

      // After animation completes, modal should be gone
      await act(async () => {
        vi.advanceTimersByTime(ANIMATION_DURATION);
      });

      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });

    it("clears pending close timer when reopened quickly", async () => {
      const { rerender } = render(
        <Modal open onClose={() => {}}>
          Content
        </Modal>,
      );

      // Start closing
      rerender(
        <Modal open={false} onClose={() => {}}>
          Content
        </Modal>,
      );

      // Modal should be closing
      expect(screen.getByRole("dialog")).toHaveClass(classes.closing);

      // Advance partially through animation
      await act(async () => {
        vi.advanceTimersByTime(ANIMATION_DURATION / 2);
      });

      // Reopen before animation completes
      rerender(
        <Modal open onClose={() => {}}>
          Content
        </Modal>,
      );

      // Modal should not have closing class anymore
      expect(screen.getByRole("dialog")).not.toHaveClass(classes.closing);

      // Complete the remaining time - modal should still be visible
      await act(async () => {
        vi.advanceTimersByTime(ANIMATION_DURATION);
      });

      expect(screen.getByRole("dialog")).toBeInTheDocument();
    });

    it("clears timer on unmount during closing animation", async () => {
      const { rerender, unmount } = render(
        <Modal open onClose={() => {}}>
          Content
        </Modal>,
      );

      // Start closing
      rerender(
        <Modal open={false} onClose={() => {}}>
          Content
        </Modal>,
      );

      // Unmount before animation completes
      unmount();

      // Advance timers - should not throw
      await act(async () => {
        vi.advanceTimersByTime(ANIMATION_DURATION);
      });
    });
  });

  // Focus management
  describe("focus management", () => {
    it("focuses first interactive element when opened", async () => {
      render(
        <Modal open title="Title" onClose={() => {}}>
          Content
        </Modal>,
      );

      // Close button should be focused (first interactive element)
      await waitFor(() => {
        expect(screen.getByRole("button", { name: "Close" })).toHaveFocus();
      });
    });

    it("handles modal with no focusable elements", async () => {
      render(
        <Modal open onClose={() => {}}>
          <p>Just text, no buttons</p>
        </Modal>,
      );

      // Modal should render without errors
      expect(screen.getByRole("dialog")).toBeInTheDocument();
      expect(screen.getByText("Just text, no buttons")).toBeInTheDocument();
    });

    it("restores focus to trigger element when closed", async () => {
      // Create and focus a trigger button
      const triggerButton = document.createElement("button");
      triggerButton.textContent = "Trigger";
      triggerButton.setAttribute("data-testid", "trigger");
      document.body.appendChild(triggerButton);
      triggerButton.focus();

      const { rerender } = render(
        <Modal open title="Title" onClose={() => {}}>
          Content
        </Modal>,
      );

      // Close modal
      rerender(
        <Modal open={false} title="Title" onClose={() => {}}>
          Content
        </Modal>,
      );

      // Wait for animation to complete and focus to restore
      await act(async () => {
        vi.advanceTimersByTime(ANIMATION_DURATION);
      });

      expect(triggerButton).toHaveFocus();

      // Cleanup
      document.body.removeChild(triggerButton);
    });

    it("traps focus within modal (Tab cycles inside)", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });

      render(
        <Modal
          open
          title="Title"
          footer={
            <>
              <Button data-testid="btn1">Button 1</Button>
              <Button data-testid="btn2">Button 2</Button>
            </>
          }
          onClose={() => {}}
        >
          Content
        </Modal>,
      );

      // Wait for initial focus on close button
      await waitFor(() => {
        expect(screen.getByRole("button", { name: "Close" })).toHaveFocus();
      });

      // Tab through elements
      await user.tab();
      expect(screen.getByTestId("btn1")).toHaveFocus();

      await user.tab();
      expect(screen.getByTestId("btn2")).toHaveFocus();

      // Tab from last element should cycle to first
      await user.tab();
      expect(screen.getByRole("button", { name: "Close" })).toHaveFocus();
    });

    it("traps focus in reverse (Shift+Tab cycles backwards)", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });

      render(
        <Modal
          open
          title="Title"
          footer={
            <>
              <Button data-testid="btn1">Button 1</Button>
              <Button data-testid="btn2">Button 2</Button>
            </>
          }
          onClose={() => {}}
        >
          Content
        </Modal>,
      );

      // Wait for initial focus
      await waitFor(() => {
        expect(screen.getByRole("button", { name: "Close" })).toHaveFocus();
      });

      // Shift+Tab from first element should go to last
      await user.tab({ shift: true });
      expect(screen.getByTestId("btn2")).toHaveFocus();
    });

    it("allows normal Shift+Tab when not on first element", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });

      render(
        <Modal
          open
          title="Title"
          footer={
            <>
              <Button data-testid="btn1">Button 1</Button>
              <Button data-testid="btn2">Button 2</Button>
            </>
          }
          onClose={() => {}}
        >
          Content
        </Modal>,
      );

      // Wait for initial focus
      await waitFor(() => {
        expect(screen.getByRole("button", { name: "Close" })).toHaveFocus();
      });

      // Tab to btn1
      await user.tab();
      expect(screen.getByTestId("btn1")).toHaveFocus();

      // Shift+Tab from middle element should go to previous (normal behavior)
      await user.tab({ shift: true });
      expect(screen.getByRole("button", { name: "Close" })).toHaveFocus();
    });
  });

  // Ref forwarding
  describe("ref forwarding", () => {
    it("forwards ref correctly with useRef", () => {
      let modalRef: HTMLDivElement | null = null;
      function TestComponent() {
        const ref = useRef<HTMLDivElement>(null);
        modalRef = ref.current;
        return (
          <Modal ref={ref} open onClose={() => {}}>
            Content
          </Modal>
        );
      }
      const { rerender } = render(<TestComponent />);
      rerender(<TestComponent />);

      expect(modalRef).toBeInstanceOf(HTMLDivElement);
      expect(modalRef).toBe(screen.getByRole("dialog"));
    });

    it("forwards ref correctly with callback ref", () => {
      const refCallback = vi.fn();
      render(
        <Modal ref={refCallback} open onClose={() => {}}>
          Content
        </Modal>,
      );

      expect(refCallback).toHaveBeenCalled();
      expect(refCallback.mock.calls[0][0]).toBeInstanceOf(HTMLDivElement);
    });
  });

  // displayName
  describe("displayName", () => {
    it("has correct displayName", () => {
      expect(Modal.displayName).toBe(COMPONENT_NAMES.Modal);
    });
  });

  // Edge cases
  describe("edge cases", () => {
    it("handles modal with no focusable elements", async () => {
      render(
        <Modal open onClose={() => {}}>
          <span>Non-focusable content only</span>
        </Modal>,
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
            <Modal open={open} onClose={() => setOpen(false)} title="Title">
              <button data-testid="modal-button">In Modal</button>
            </Modal>
          </>
        );
      }

      const React = await import("react");
      render(<TestComponent />);

      // Click the non-focusable span to open modal
      // This tests the case where document.activeElement is not an HTMLElement
      await user.click(screen.getByTestId("non-focusable-trigger"));

      await waitFor(() => {
        expect(screen.getByRole("dialog")).toBeInTheDocument();
      });

      // Close the modal
      await user.keyboard("{Escape}");

      act(() => {
        vi.advanceTimersByTime(ANIMATION_DURATION);
      });

      // Modal should be closed without error
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
  });
});
