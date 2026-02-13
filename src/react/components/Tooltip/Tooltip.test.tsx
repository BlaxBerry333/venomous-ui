import { COMPONENT_NAMES, CSS_CLASSES } from "@/core/constants";
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { Tooltip } from "./index";

const classes = CSS_CLASSES.tooltip;

describe("Tooltip", () => {
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
        <Tooltip content="Test tooltip">
          <button>Hover me</button>
        </Tooltip>,
      );

      expect(screen.getByRole("button", { name: "Hover me" })).toBeInTheDocument();
    });

    it("does not show tooltip initially", () => {
      render(
        <Tooltip content="Test tooltip">
          <button>Hover me</button>
        </Tooltip>,
      );

      expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
    });

    it("shows tooltip on hover after delay", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });

      render(
        <Tooltip content="Test tooltip">
          <button>Hover me</button>
        </Tooltip>,
      );

      await user.hover(screen.getByRole("button"));

      act(() => {
        vi.advanceTimersByTime(200);
      });

      expect(screen.getByRole("tooltip")).toBeInTheDocument();
      expect(screen.getByText("Test tooltip")).toBeInTheDocument();
    });

    it("hides tooltip on mouse leave", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });

      render(
        <Tooltip content="Test tooltip">
          <button>Hover me</button>
        </Tooltip>,
      );

      // Show tooltip
      await user.hover(screen.getByRole("button"));
      act(() => {
        vi.advanceTimersByTime(200);
      });
      expect(screen.getByRole("tooltip")).toBeInTheDocument();

      // Hide tooltip
      await user.unhover(screen.getByRole("button"));
      act(() => {
        vi.advanceTimersByTime(100);
      });

      expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
    });
  });

  // Focus trigger
  describe("focus trigger", () => {
    it("shows tooltip on focus", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });

      render(
        <Tooltip content="Test tooltip">
          <button>Focus me</button>
        </Tooltip>,
      );

      await user.tab();
      expect(screen.getByRole("button")).toHaveFocus();

      act(() => {
        vi.advanceTimersByTime(200);
      });

      expect(screen.getByRole("tooltip")).toBeInTheDocument();
    });

    it("hides tooltip on blur", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });

      render(
        <>
          <Tooltip content="Test tooltip">
            <button>Focus me</button>
          </Tooltip>
          <button>Other</button>
        </>,
      );

      // Focus to show
      await user.tab();
      act(() => {
        vi.advanceTimersByTime(200);
      });
      expect(screen.getByRole("tooltip")).toBeInTheDocument();

      // Tab away to hide
      await user.tab();
      act(() => {
        vi.advanceTimersByTime(100);
      });

      expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
    });
  });

  // Placement
  describe("placement", () => {
    it("applies top placement by default", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });

      render(
        <Tooltip content="Test tooltip">
          <button>Hover me</button>
        </Tooltip>,
      );

      await user.hover(screen.getByRole("button"));
      await act(async () => {
        vi.advanceTimersByTime(200);
        await vi.advanceTimersToNextTimerAsync();
      });

      expect(screen.getByRole("tooltip")).toHaveClass(classes.placements.top);
    });

    it("applies bottom placement", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });

      render(
        <Tooltip content="Test tooltip" placement="bottom">
          <button>Hover me</button>
        </Tooltip>,
      );

      await user.hover(screen.getByRole("button"));
      await act(async () => {
        vi.advanceTimersByTime(200);
        await vi.advanceTimersToNextTimerAsync();
      });

      expect(screen.getByRole("tooltip")).toHaveClass(classes.placements.bottom);
    });

    it("applies left placement", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });

      render(
        <Tooltip content="Test tooltip" placement="left">
          <button>Hover me</button>
        </Tooltip>,
      );

      await user.hover(screen.getByRole("button"));
      await act(async () => {
        vi.advanceTimersByTime(200);
        await vi.advanceTimersToNextTimerAsync();
      });

      expect(screen.getByRole("tooltip")).toHaveClass(classes.placements.left);
    });

    it("applies right placement", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });

      render(
        <Tooltip content="Test tooltip" placement="right">
          <button>Hover me</button>
        </Tooltip>,
      );

      await user.hover(screen.getByRole("button"));
      await act(async () => {
        vi.advanceTimersByTime(200);
        await vi.advanceTimersToNextTimerAsync();
      });

      expect(screen.getByRole("tooltip")).toHaveClass(classes.placements.right);
    });
  });

  // Delay
  describe("delay", () => {
    it("uses default delay of 200ms", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });

      render(
        <Tooltip content="Test tooltip">
          <button>Hover me</button>
        </Tooltip>,
      );

      await user.hover(screen.getByRole("button"));

      // Before delay
      act(() => {
        vi.advanceTimersByTime(100);
      });
      expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();

      // After delay
      act(() => {
        vi.advanceTimersByTime(100);
      });
      expect(screen.getByRole("tooltip")).toBeInTheDocument();
    });

    it("uses custom delay", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });

      render(
        <Tooltip content="Test tooltip" delay={500}>
          <button>Hover me</button>
        </Tooltip>,
      );

      await user.hover(screen.getByRole("button"));

      // Before delay
      act(() => {
        vi.advanceTimersByTime(400);
      });
      expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();

      // After delay
      act(() => {
        vi.advanceTimersByTime(100);
      });
      expect(screen.getByRole("tooltip")).toBeInTheDocument();
    });
  });

  // Disabled
  describe("disabled", () => {
    it("does not show tooltip when disabled", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });

      render(
        <Tooltip content="Test tooltip" disabled>
          <button>Hover me</button>
        </Tooltip>,
      );

      await user.hover(screen.getByRole("button"));
      act(() => {
        vi.advanceTimersByTime(200);
      });

      expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
    });
  });

  // Accessibility
  describe("accessibility", () => {
    it("has correct ARIA attributes when visible", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });

      render(
        <Tooltip content="Test tooltip">
          <button>Hover me</button>
        </Tooltip>,
      );

      await user.hover(screen.getByRole("button"));
      act(() => {
        vi.advanceTimersByTime(200);
      });

      const tooltip = screen.getByRole("tooltip");
      expect(tooltip).toHaveAttribute("id");

      const button = screen.getByRole("button");
      expect(button).toHaveAttribute("aria-describedby", tooltip.id);
    });

    it("removes aria-describedby when hidden", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });

      render(
        <Tooltip content="Test tooltip">
          <button>Hover me</button>
        </Tooltip>,
      );

      // Show
      await user.hover(screen.getByRole("button"));
      act(() => {
        vi.advanceTimersByTime(200);
      });
      expect(screen.getByRole("button")).toHaveAttribute("aria-describedby");

      // Hide
      await user.unhover(screen.getByRole("button"));
      act(() => {
        vi.advanceTimersByTime(100);
      });

      expect(screen.getByRole("button")).not.toHaveAttribute("aria-describedby");
    });
  });

  // Arrow
  describe("arrow", () => {
    it("renders arrow element", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });

      render(
        <Tooltip content="Test tooltip">
          <button>Hover me</button>
        </Tooltip>,
      );

      await user.hover(screen.getByRole("button"));
      act(() => {
        vi.advanceTimersByTime(200);
      });

      const arrow = document.querySelector(`.${classes.arrow}`);
      expect(arrow).toBeInTheDocument();
    });
  });

  // Custom className
  describe("className prop", () => {
    it("applies custom className to tooltip", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });

      render(
        <Tooltip content="Test tooltip" className="custom-tooltip">
          <button>Hover me</button>
        </Tooltip>,
      );

      await user.hover(screen.getByRole("button"));
      act(() => {
        vi.advanceTimersByTime(200);
      });

      expect(screen.getByRole("tooltip")).toHaveClass("custom-tooltip");
    });
  });

  // Event passthrough
  describe("event passthrough", () => {
    it("calls original event handlers on trigger", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      const handleMouseEnter = vi.fn();
      const handleMouseLeave = vi.fn();

      render(
        <Tooltip content="Test tooltip">
          <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            Hover me
          </button>
        </Tooltip>,
      );

      await user.hover(screen.getByRole("button"));
      expect(handleMouseEnter).toHaveBeenCalled();

      await user.unhover(screen.getByRole("button"));
      expect(handleMouseLeave).toHaveBeenCalled();
    });
  });

  // displayName
  describe("displayName", () => {
    it("has correct displayName", () => {
      expect(Tooltip.displayName).toBe(COMPONENT_NAMES.Tooltip);
    });
  });

  // Ref forwarding
  describe("ref forwarding", () => {
    it("forwards ref to trigger element via callback ref", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      const refCallback = vi.fn();

      render(
        <Tooltip content="Test tooltip">
          <button ref={refCallback}>Hover me</button>
        </Tooltip>,
      );

      await user.hover(screen.getByRole("button"));
      act(() => {
        vi.advanceTimersByTime(200);
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
            <Tooltip content="Test tooltip">
              <button ref={ref}>Hover me</button>
            </Tooltip>
            <span data-testid="ref-check">{refValue ? "has-ref" : "no-ref"}</span>
          </>
        );
      }

      const React = await import("react");
      render(<TestComponent />);

      await user.hover(screen.getByRole("button"));
      act(() => {
        vi.advanceTimersByTime(200);
      });

      expect(screen.getByTestId("ref-check")).toHaveTextContent("has-ref");
    });
  });

  // Focus event passthrough
  describe("focus event passthrough", () => {
    it("calls original onFocus and onBlur handlers", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      const handleFocus = vi.fn();
      const handleBlur = vi.fn();

      render(
        <>
          <Tooltip content="Test tooltip">
            <button onFocus={handleFocus} onBlur={handleBlur}>
              Focus me
            </button>
          </Tooltip>
          <button>Other</button>
        </>,
      );

      // Focus
      await user.tab();
      expect(handleFocus).toHaveBeenCalled();

      // Blur
      await user.tab();
      expect(handleBlur).toHaveBeenCalled();
    });
  });

  // Timer cleanup
  describe("timer cleanup", () => {
    it("clears pending show timer when hide is triggered", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });

      render(
        <Tooltip content="Test tooltip" delay={500}>
          <button>Hover me</button>
        </Tooltip>,
      );

      // Hover to start show timer
      await user.hover(screen.getByRole("button"));
      act(() => {
        vi.advanceTimersByTime(100); // Not yet visible
      });
      expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();

      // Unhover before delay completes (clears show timer)
      await user.unhover(screen.getByRole("button"));
      act(() => {
        vi.advanceTimersByTime(500); // Past original delay
      });

      // Tooltip should still not be visible because show timer was cleared
      expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
    });

    it("clears pending hide timer when show is triggered", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });

      render(
        <Tooltip content="Test tooltip">
          <button>Hover me</button>
        </Tooltip>,
      );

      // Show tooltip
      await user.hover(screen.getByRole("button"));
      act(() => {
        vi.advanceTimersByTime(200);
      });
      expect(screen.getByRole("tooltip")).toBeInTheDocument();

      // Start hide timer
      await user.unhover(screen.getByRole("button"));
      act(() => {
        vi.advanceTimersByTime(50); // Partially through hide delay
      });

      // Re-hover before hide completes (clears hide timer)
      await user.hover(screen.getByRole("button"));
      act(() => {
        vi.advanceTimersByTime(200);
      });

      // Tooltip should still be visible
      expect(screen.getByRole("tooltip")).toBeInTheDocument();
    });
  });

  // Position update on scroll/resize
  describe("position update", () => {
    it("updates position on scroll", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });

      render(
        <Tooltip content="Test tooltip">
          <button>Hover me</button>
        </Tooltip>,
      );

      // Show tooltip
      await user.hover(screen.getByRole("button"));
      act(() => {
        vi.advanceTimersByTime(200);
      });
      expect(screen.getByRole("tooltip")).toBeInTheDocument();

      // Trigger scroll event
      act(() => {
        window.dispatchEvent(new Event("scroll"));
      });

      // Tooltip should still be visible after scroll
      expect(screen.getByRole("tooltip")).toBeInTheDocument();
    });

    it("updates position on resize", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });

      render(
        <Tooltip content="Test tooltip">
          <button>Hover me</button>
        </Tooltip>,
      );

      // Show tooltip
      await user.hover(screen.getByRole("button"));
      act(() => {
        vi.advanceTimersByTime(200);
      });
      expect(screen.getByRole("tooltip")).toBeInTheDocument();

      // Trigger resize event
      act(() => {
        window.dispatchEvent(new Event("resize"));
      });

      // Tooltip should still be visible after resize
      expect(screen.getByRole("tooltip")).toBeInTheDocument();
    });
  });
});
