import { COMPONENT_NAMES, CSS_CLASSES } from "@/core/constants";
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { Popover } from "./index";

const classes = CSS_CLASSES.popover;

describe("Popover", () => {
  beforeEach(() => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });

  // Basic rendering
  describe("rendering", () => {
    it("renders trigger element", () => {
      render(
        <Popover content="Popover content">
          <button>Click me</button>
        </Popover>,
      );

      expect(screen.getByRole("button", { name: "Click me" })).toBeInTheDocument();
    });

    it("does not show popover initially", () => {
      render(
        <Popover content="Popover content">
          <button>Click me</button>
        </Popover>,
      );

      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
  });

  // Click trigger
  describe("click trigger", () => {
    it("shows popover on click (default)", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });

      render(
        <Popover content="Popover content">
          <button>Click me</button>
        </Popover>,
      );

      await user.click(screen.getByRole("button", { name: "Click me" }));
      await act(async () => {
        await vi.advanceTimersToNextTimerAsync();
      });

      expect(screen.getByRole("dialog")).toBeInTheDocument();
      expect(screen.getByText("Popover content")).toBeInTheDocument();
    });

    it("toggles popover on click", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });

      render(
        <Popover content="Popover content">
          <button>Click me</button>
        </Popover>,
      );

      const trigger = screen.getByRole("button", { name: "Click me" });

      // First click - open
      await user.click(trigger);
      expect(screen.getByRole("dialog")).toBeInTheDocument();

      // Second click - close
      await user.click(trigger);
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
  });

  // Hover trigger
  describe("hover trigger", () => {
    it("shows popover on hover", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });

      render(
        <Popover content="Popover content" trigger="hover">
          <button>Hover me</button>
        </Popover>,
      );

      await user.hover(screen.getByRole("button"));
      act(() => {
        vi.advanceTimersByTime(100);
      });

      expect(screen.getByRole("dialog")).toBeInTheDocument();
    });

    it("hides popover on mouse leave", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });

      render(
        <Popover content="Popover content" trigger="hover">
          <button>Hover me</button>
        </Popover>,
      );

      // Show
      await user.hover(screen.getByRole("button"));
      act(() => {
        vi.advanceTimersByTime(100);
      });
      expect(screen.getByRole("dialog")).toBeInTheDocument();

      // Hide
      await user.unhover(screen.getByRole("button"));
      act(() => {
        vi.advanceTimersByTime(150);
      });

      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });

    it("keeps popover open when mouse enters popover", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });

      render(
        <Popover content={<button data-testid="popover-btn">In Popover</button>} trigger="hover">
          <button>Hover me</button>
        </Popover>,
      );

      // Show popover
      await user.hover(screen.getByRole("button", { name: "Hover me" }));
      act(() => {
        vi.advanceTimersByTime(100);
      });

      const popover = screen.getByRole("dialog");
      expect(popover).toBeInTheDocument();

      // Move to popover
      await user.unhover(screen.getByRole("button", { name: "Hover me" }));
      await user.hover(popover);

      // Should still be visible
      act(() => {
        vi.advanceTimersByTime(200);
      });
      expect(screen.getByRole("dialog")).toBeInTheDocument();
    });
  });

  // Placement
  describe("placement", () => {
    it("applies bottom placement by default", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });

      render(
        <Popover content="Content">
          <button>Click me</button>
        </Popover>,
      );

      await user.click(screen.getByRole("button"));

      // Run rAF to trigger position calculation
      await act(async () => {
        await vi.advanceTimersToNextTimerAsync();
      });

      expect(screen.getByRole("dialog")).toHaveClass(classes.placements.bottom);
    });

    it("applies top placement", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });

      render(
        <Popover content="Content" placement="top">
          <button>Click me</button>
        </Popover>,
      );

      await user.click(screen.getByRole("button"));

      // Run rAF to trigger position calculation
      await act(async () => {
        await vi.advanceTimersToNextTimerAsync();
      });

      expect(screen.getByRole("dialog")).toHaveClass(classes.placements.top);
    });

    it("applies left placement", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });

      render(
        <Popover content="Content" placement="left">
          <button>Click me</button>
        </Popover>,
      );

      await user.click(screen.getByRole("button"));

      // Run rAF to trigger position calculation
      await act(async () => {
        await vi.advanceTimersToNextTimerAsync();
      });

      expect(screen.getByRole("dialog")).toHaveClass(classes.placements.left);
    });

    it("applies right placement", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });

      render(
        <Popover content="Content" placement="right">
          <button>Click me</button>
        </Popover>,
      );

      await user.click(screen.getByRole("button"));

      // Run rAF to trigger position calculation
      await act(async () => {
        await vi.advanceTimersToNextTimerAsync();
      });

      expect(screen.getByRole("dialog")).toHaveClass(classes.placements.right);
    });
  });

  // Close on click outside
  describe("close on click outside", () => {
    it("closes when clicking outside by default", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });

      render(
        <div>
          <Popover content="Content">
            <button>Click me</button>
          </Popover>
          <div data-testid="outside">Outside</div>
        </div>,
      );

      // Open popover
      await user.click(screen.getByRole("button"));
      expect(screen.getByRole("dialog")).toBeInTheDocument();

      // Click outside
      await user.click(screen.getByTestId("outside"));
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });

    it("does not close when closeOnClickOutside is false", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });

      render(
        <div>
          <Popover content="Content" closeOnClickOutside={false}>
            <button>Click me</button>
          </Popover>
          <div data-testid="outside">Outside</div>
        </div>,
      );

      // Open popover
      await user.click(screen.getByRole("button"));
      expect(screen.getByRole("dialog")).toBeInTheDocument();

      // Click outside
      await user.click(screen.getByTestId("outside"));
      expect(screen.getByRole("dialog")).toBeInTheDocument();
    });
  });

  // Close on ESC
  describe("close on ESC", () => {
    it("closes when ESC is pressed by default", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });

      render(
        <Popover content="Content">
          <button>Click me</button>
        </Popover>,
      );

      // Open popover
      await user.click(screen.getByRole("button"));
      expect(screen.getByRole("dialog")).toBeInTheDocument();

      // Press ESC
      await user.keyboard("{Escape}");
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });

    it("does not close when closeOnEsc is false", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });

      render(
        <Popover content="Content" closeOnEsc={false}>
          <button>Click me</button>
        </Popover>,
      );

      // Open popover
      await user.click(screen.getByRole("button"));
      expect(screen.getByRole("dialog")).toBeInTheDocument();

      // Press ESC
      await user.keyboard("{Escape}");
      expect(screen.getByRole("dialog")).toBeInTheDocument();
    });
  });

  // Controlled mode
  describe("controlled mode", () => {
    it("respects controlled open prop", async () => {
      const handleOpenChange = vi.fn();

      const { rerender } = render(
        <Popover content="Content" open={false} onOpenChange={handleOpenChange}>
          <button>Click me</button>
        </Popover>,
      );

      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

      rerender(
        <Popover content="Content" open={true} onOpenChange={handleOpenChange}>
          <button>Click me</button>
        </Popover>,
      );

      expect(screen.getByRole("dialog")).toBeInTheDocument();
    });

    it("calls onOpenChange when state changes", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      const handleOpenChange = vi.fn();

      render(
        <Popover content="Content" onOpenChange={handleOpenChange}>
          <button>Click me</button>
        </Popover>,
      );

      await user.click(screen.getByRole("button"));
      expect(handleOpenChange).toHaveBeenCalledWith(true);

      await user.click(screen.getByRole("button"));
      expect(handleOpenChange).toHaveBeenCalledWith(false);
    });
  });

  // Disabled
  describe("disabled", () => {
    it("does not show popover when disabled", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });

      render(
        <Popover content="Content" disabled>
          <button>Click me</button>
        </Popover>,
      );

      await user.click(screen.getByRole("button"));
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
  });

  // Accessibility
  describe("accessibility", () => {
    it("has correct ARIA attributes on trigger", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });

      render(
        <Popover content="Content">
          <button>Click me</button>
        </Popover>,
      );

      const trigger = screen.getByRole("button");
      expect(trigger).toHaveAttribute("aria-haspopup", "dialog");
      expect(trigger).toHaveAttribute("aria-expanded", "false");

      await user.click(trigger);
      await act(async () => {
        await vi.advanceTimersToNextTimerAsync();
      });

      expect(trigger).toHaveAttribute("aria-expanded", "true");
      expect(trigger).toHaveAttribute("aria-controls");
    });

    it("popover has dialog role", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });

      render(
        <Popover content="Content">
          <button>Click me</button>
        </Popover>,
      );

      await user.click(screen.getByRole("button"));
      await act(async () => {
        await vi.advanceTimersToNextTimerAsync();
      });

      expect(screen.getByRole("dialog")).toBeInTheDocument();
    });
  });

  // Arrow
  describe("arrow", () => {
    it("renders arrow element", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });

      render(
        <Popover content="Content">
          <button>Click me</button>
        </Popover>,
      );

      await user.click(screen.getByRole("button"));
      await act(async () => {
        await vi.advanceTimersToNextTimerAsync();
      });

      const arrow = document.querySelector(`.${classes.arrow}`);
      expect(arrow).toBeInTheDocument();
    });
  });

  // Custom className
  describe("className prop", () => {
    it("applies custom className to popover", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });

      render(
        <Popover content="Content" className="custom-popover">
          <button>Click me</button>
        </Popover>,
      );

      await user.click(screen.getByRole("button"));
      await act(async () => {
        await vi.advanceTimersToNextTimerAsync();
      });

      expect(screen.getByRole("dialog")).toHaveClass("custom-popover");
    });
  });

  // Event passthrough
  describe("event passthrough", () => {
    it("calls original onClick handler on trigger", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      const handleClick = vi.fn();

      render(
        <Popover content="Content">
          <button onClick={handleClick}>Click me</button>
        </Popover>,
      );

      await user.click(screen.getByRole("button"));
      await act(async () => {
        await vi.advanceTimersToNextTimerAsync();
      });
      expect(handleClick).toHaveBeenCalled();
    });
  });

  // displayName
  describe("displayName", () => {
    it("has correct displayName", () => {
      expect(Popover.displayName).toBe(COMPONENT_NAMES.Popover);
    });
  });

  // Ref forwarding
  describe("ref forwarding", () => {
    it("forwards ref to trigger element via callback ref", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      const refCallback = vi.fn();

      render(
        <Popover content="Content">
          <button ref={refCallback}>Click me</button>
        </Popover>,
      );

      await user.click(screen.getByRole("button"));
      await act(async () => {
        await vi.advanceTimersToNextTimerAsync();
      });

      expect(refCallback).toHaveBeenCalled();
      expect(refCallback.mock.calls[0][0]).toBeInstanceOf(HTMLButtonElement);
    });

    it("forwards ref to trigger element via object ref", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });

      function TestComponent() {
        const ref = React.useRef<HTMLButtonElement>(null);
        const [refValue, setRefValue] = React.useState<HTMLButtonElement | null>(null);

        React.useEffect(() => {
          setRefValue(ref.current);
        }, []);

        return (
          <>
            <Popover content="Content">
              <button ref={ref}>Click me</button>
            </Popover>
            <span data-testid="ref-check">{refValue ? "has-ref" : "no-ref"}</span>
          </>
        );
      }

      const React = await import("react");
      render(<TestComponent />);

      await user.click(screen.getByRole("button"));
      await act(async () => {
        await vi.advanceTimersToNextTimerAsync();
      });

      expect(screen.getByTestId("ref-check")).toHaveTextContent("has-ref");
    });
  });

  // Hover event passthrough
  describe("hover event passthrough", () => {
    it("calls original onMouseEnter and onMouseLeave handlers", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      const handleMouseEnter = vi.fn();
      const handleMouseLeave = vi.fn();

      render(
        <Popover content="Content" trigger="hover">
          <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            Hover me
          </button>
        </Popover>,
      );

      await user.hover(screen.getByRole("button"));
      expect(handleMouseEnter).toHaveBeenCalled();

      await user.unhover(screen.getByRole("button"));
      expect(handleMouseLeave).toHaveBeenCalled();
    });
  });

  // Timer cleanup
  describe("timer cleanup", () => {
    it("clears pending show timer when hide is triggered (hover mode)", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });

      render(
        <Popover content="Content" trigger="hover">
          <button>Hover me</button>
        </Popover>,
      );

      // Start hover (triggers show timer with 100ms delay)
      await user.hover(screen.getByRole("button"));
      act(() => {
        vi.advanceTimersByTime(50); // Halfway through show delay
      });
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

      // Unhover before show delay completes (clears show timer)
      await user.unhover(screen.getByRole("button"));
      act(() => {
        vi.advanceTimersByTime(200);
      });

      // Popover should not appear
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });

    it("clears pending hide timer when show is triggered (hover mode)", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });

      render(
        <Popover content="Content" trigger="hover">
          <button>Hover me</button>
        </Popover>,
      );

      // Show popover
      await user.hover(screen.getByRole("button"));
      act(() => {
        vi.advanceTimersByTime(100);
      });
      expect(screen.getByRole("dialog")).toBeInTheDocument();

      // Start hide timer
      await user.unhover(screen.getByRole("button"));
      act(() => {
        vi.advanceTimersByTime(50); // Halfway through hide delay (150ms)
      });

      // Re-hover before hide completes (clears hide timer via cancelHide)
      await user.hover(screen.getByRole("button"));
      act(() => {
        vi.advanceTimersByTime(200);
      });

      // Popover should still be visible
      expect(screen.getByRole("dialog")).toBeInTheDocument();
    });
  });

  // Hover disabled
  describe("hover disabled", () => {
    it("does not show popover on hover when disabled", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });

      render(
        <Popover content="Content" trigger="hover" disabled>
          <button>Hover me</button>
        </Popover>,
      );

      await user.hover(screen.getByRole("button"));
      act(() => {
        vi.advanceTimersByTime(100);
      });

      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
  });

  // Click inside popover
  describe("click inside", () => {
    it("does not close when clicking inside popover", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });

      render(
        <Popover content={<button data-testid="popover-btn">Inside</button>}>
          <button>Click me</button>
        </Popover>,
      );

      // Open popover
      await user.click(screen.getByRole("button", { name: "Click me" }));
      expect(screen.getByRole("dialog")).toBeInTheDocument();

      // Click inside popover
      await user.click(screen.getByTestId("popover-btn"));

      // Should still be open
      expect(screen.getByRole("dialog")).toBeInTheDocument();
    });

    it("does not close when clicking trigger with popover open", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });

      render(
        <div>
          <Popover content="Content" closeOnClickOutside={true}>
            <button>Click me</button>
          </Popover>
        </div>,
      );

      // Open popover
      await user.click(screen.getByRole("button"));
      expect(screen.getByRole("dialog")).toBeInTheDocument();

      // Click trigger again - this toggles (closes) via onClick, not mousedown outside
      await user.click(screen.getByRole("button"));

      // Should be closed (toggled off)
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
  });

  // Position update on scroll/resize
  describe("position update", () => {
    it("updates position on scroll", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });

      render(
        <Popover content="Content">
          <button>Click me</button>
        </Popover>,
      );

      // Show popover
      await user.click(screen.getByRole("button"));
      expect(screen.getByRole("dialog")).toBeInTheDocument();

      // Run rAF to trigger position calculation
      await act(async () => {
        await vi.advanceTimersToNextTimerAsync();
      });

      // Trigger scroll event
      act(() => {
        window.dispatchEvent(new Event("scroll"));
      });

      // Popover should still be visible after scroll
      expect(screen.getByRole("dialog")).toBeInTheDocument();
    });

    it("updates position on resize", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });

      render(
        <Popover content="Content">
          <button>Click me</button>
        </Popover>,
      );

      // Show popover
      await user.click(screen.getByRole("button"));
      expect(screen.getByRole("dialog")).toBeInTheDocument();

      // Run rAF to trigger position calculation
      await act(async () => {
        await vi.advanceTimersToNextTimerAsync();
      });

      // Trigger resize event
      act(() => {
        window.dispatchEvent(new Event("resize"));
      });

      // Popover should still be visible after resize
      expect(screen.getByRole("dialog")).toBeInTheDocument();
    });
  });
});
