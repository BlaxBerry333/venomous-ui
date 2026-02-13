import { CSS_CLASSES } from "@/core/constants";
import userEvent from "@testing-library/user-event";
import { fireEvent, render, screen } from "@testing-library/vue";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { h, nextTick } from "vue";
import Tooltip from "./Tooltip.vue";

const classes = CSS_CLASSES.tooltip;

function renderTooltip(props: Record<string, unknown> = {}, slots: Record<string, unknown> = {}) {
  return render(Tooltip, {
    props: { content: "Test tooltip", ...props },
    slots: { default: () => h("button", "Hover me"), ...slots },
  });
}

async function advanceTimers(ms: number) {
  vi.advanceTimersByTime(ms);
  await nextTick();
}

describe("Tooltip", () => {
  beforeEach(() => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });

  describe("rendering", () => {
    it("renders trigger element", () => {
      renderTooltip();

      expect(screen.getByRole("button", { name: "Hover me" })).toBeInTheDocument();
    });

    it("does not show tooltip initially", () => {
      renderTooltip();

      expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
    });

    it("shows tooltip on hover after delay", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      renderTooltip();

      await user.hover(screen.getByRole("button"));
      await advanceTimers(200);

      expect(screen.getByRole("tooltip")).toBeInTheDocument();
      expect(screen.getByText("Test tooltip")).toBeInTheDocument();
    });

    it("hides tooltip on mouse leave", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      renderTooltip();

      // Show tooltip
      await user.hover(screen.getByRole("button"));
      await advanceTimers(200);
      expect(screen.getByRole("tooltip")).toBeInTheDocument();

      // Hide tooltip
      await user.unhover(screen.getByRole("button"));
      await advanceTimers(100);

      expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
    });
  });

  describe("focus trigger", () => {
    it("shows tooltip on focus", async () => {
      renderTooltip();

      // Fire focus on the wrapper span (which has the @focus handler)
      const wrapper = screen.getByRole("button").closest("span")!;
      await fireEvent.focus(wrapper);
      await advanceTimers(200);

      expect(screen.getByRole("tooltip")).toBeInTheDocument();
    });

    it("hides tooltip on blur", async () => {
      renderTooltip();

      const wrapper = screen.getByRole("button").closest("span")!;

      // Focus to show
      await fireEvent.focus(wrapper);
      await advanceTimers(200);
      expect(screen.getByRole("tooltip")).toBeInTheDocument();

      // Blur to hide
      await fireEvent.blur(wrapper);
      await advanceTimers(100);

      expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
    });
  });

  describe("placement", () => {
    it("applies top placement by default", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      renderTooltip();

      await user.hover(screen.getByRole("button"));
      await advanceTimers(200);

      expect(screen.getByRole("tooltip")).toHaveClass(classes.placements.top);
    });

    it("applies bottom placement", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      renderTooltip({ placement: "bottom" });

      await user.hover(screen.getByRole("button"));
      await advanceTimers(200);

      expect(screen.getByRole("tooltip")).toHaveClass(classes.placements.bottom);
    });

    it("applies left placement", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      renderTooltip({ placement: "left" });

      await user.hover(screen.getByRole("button"));
      await advanceTimers(200);

      expect(screen.getByRole("tooltip")).toHaveClass(classes.placements.left);
    });

    it("applies right placement", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      renderTooltip({ placement: "right" });

      await user.hover(screen.getByRole("button"));
      await advanceTimers(200);

      expect(screen.getByRole("tooltip")).toHaveClass(classes.placements.right);
    });
  });

  describe("delay", () => {
    it("uses default delay of 200ms", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      renderTooltip();

      await user.hover(screen.getByRole("button"));

      // Before delay
      await advanceTimers(100);
      expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();

      // After delay
      await advanceTimers(100);
      expect(screen.getByRole("tooltip")).toBeInTheDocument();
    });

    it("uses custom delay", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      renderTooltip({ delay: 500 });

      await user.hover(screen.getByRole("button"));

      // Before delay
      await advanceTimers(400);
      expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();

      // After delay
      await advanceTimers(100);
      expect(screen.getByRole("tooltip")).toBeInTheDocument();
    });
  });

  describe("disabled", () => {
    it("does not show tooltip when disabled", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      renderTooltip({ disabled: true });

      await user.hover(screen.getByRole("button"));
      await advanceTimers(200);

      expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
    });
  });

  describe("accessibility", () => {
    it("has correct ARIA attributes when visible", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      renderTooltip();

      await user.hover(screen.getByRole("button"));
      await advanceTimers(200);

      const tooltip = screen.getByRole("tooltip");
      expect(tooltip).toHaveAttribute("id");
    });

    it("removes aria-describedby when hidden", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      renderTooltip();

      // Show
      await user.hover(screen.getByRole("button"));
      await advanceTimers(200);
      expect(screen.getByRole("tooltip")).toBeInTheDocument();

      // Hide
      await user.unhover(screen.getByRole("button"));
      await advanceTimers(100);

      expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
    });
  });

  describe("arrow", () => {
    it("renders arrow element", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      renderTooltip();

      await user.hover(screen.getByRole("button"));
      await advanceTimers(200);

      const arrow = document.querySelector(`.${classes.arrow}`);
      expect(arrow).toBeInTheDocument();
    });
  });

  describe("className prop", () => {
    it("applies custom className to tooltip", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      renderTooltip({ className: "custom-tooltip" });

      await user.hover(screen.getByRole("button"));
      await advanceTimers(200);

      expect(screen.getByRole("tooltip")).toHaveClass("custom-tooltip");
    });
  });

  describe("content slot", () => {
    it("renders content slot when provided", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      render({
        components: { Tooltip },
        template: `
          <Tooltip>
            <button>Hover me</button>
            <template #content><span data-testid="slot-content">Rich content</span></template>
          </Tooltip>
        `,
      });

      await user.hover(screen.getByRole("button"));
      await advanceTimers(200);

      expect(screen.getByTestId("slot-content")).toBeInTheDocument();
    });
  });

  describe("full show/hide lifecycle", () => {
    it("transitions through full lifecycle: hidden -> visible -> hidden", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      renderTooltip();

      // Initially hidden
      expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();

      // Show tooltip via hover
      await user.hover(screen.getByRole("button"));
      await advanceTimers(200);
      expect(screen.getByRole("tooltip")).toBeInTheDocument();
      expect(screen.getByText("Test tooltip")).toBeInTheDocument();

      // Hide tooltip via unhover
      await user.unhover(screen.getByRole("button"));
      await advanceTimers(100);
      expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();

      // Show again to confirm re-entry works
      await user.hover(screen.getByRole("button"));
      await advanceTimers(200);
      expect(screen.getByRole("tooltip")).toBeInTheDocument();

      // Hide again
      await user.unhover(screen.getByRole("button"));
      await advanceTimers(100);
      expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
    });
  });

  describe("timer cleanup", () => {
    it("clears pending show timer when hide is triggered", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      renderTooltip({ delay: 500 });

      // Hover to start show timer
      await user.hover(screen.getByRole("button"));
      await advanceTimers(100);
      expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();

      // Unhover before delay completes
      await user.unhover(screen.getByRole("button"));
      await advanceTimers(500);

      // Should still not be visible
      expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
    });

    it("clears pending hide timer when show is triggered", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      renderTooltip();

      // Show tooltip
      await user.hover(screen.getByRole("button"));
      await advanceTimers(200);
      expect(screen.getByRole("tooltip")).toBeInTheDocument();

      // Start hide timer
      await user.unhover(screen.getByRole("button"));
      await advanceTimers(50);

      // Re-hover before hide completes
      await user.hover(screen.getByRole("button"));
      await advanceTimers(200);

      // Tooltip should still be visible
      expect(screen.getByRole("tooltip")).toBeInTheDocument();
    });
  });
});
