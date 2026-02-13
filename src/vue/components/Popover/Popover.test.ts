import { CSS_CLASSES } from "@/core/constants";
import userEvent from "@testing-library/user-event";
import { fireEvent, render, screen } from "@testing-library/vue";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { h, nextTick } from "vue";
import Popover from "./Popover.vue";

const classes = CSS_CLASSES.popover;

function renderPopover(props: Record<string, unknown> = {}, slots: Record<string, unknown> = {}) {
  return render(Popover, {
    props: { ...props },
    slots: {
      default: () => h("button", "Toggle"),
      content: () => h("div", { "data-testid": "popover-content" }, "Popover content"),
      ...slots,
    },
  });
}

async function advanceTimers(ms: number) {
  vi.advanceTimersByTime(ms);
  await nextTick();
}

describe("Popover", () => {
  beforeEach(() => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });

  describe("rendering", () => {
    it("renders trigger element", () => {
      renderPopover();

      expect(screen.getByRole("button", { name: "Toggle" })).toBeInTheDocument();
    });

    it("does not show popover initially", () => {
      renderPopover();

      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
  });

  describe("click trigger (default)", () => {
    it("shows popover on click", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      renderPopover();

      await user.click(screen.getByRole("button", { name: "Toggle" }));

      expect(screen.getByRole("dialog")).toBeInTheDocument();
      expect(screen.getByTestId("popover-content")).toBeInTheDocument();
    });

    it("hides popover on second click", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      renderPopover();

      await user.click(screen.getByRole("button", { name: "Toggle" }));
      expect(screen.getByRole("dialog")).toBeInTheDocument();

      await user.click(screen.getByRole("button", { name: "Toggle" }));
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });

    it("does not show on hover in click mode", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      renderPopover();

      await user.hover(screen.getByRole("button", { name: "Toggle" }));
      await advanceTimers(200);

      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });

    it("does not close on mouseleave in click mode", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      renderPopover();

      await user.click(screen.getByRole("button", { name: "Toggle" }));
      expect(screen.getByRole("dialog")).toBeInTheDocument();

      await user.unhover(screen.getByRole("button", { name: "Toggle" }));
      await advanceTimers(200);

      expect(screen.getByRole("dialog")).toBeInTheDocument();
    });

    it("ignores popover mouseenter/mouseleave in click mode", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      renderPopover();

      await user.click(screen.getByRole("button", { name: "Toggle" }));
      const popoverEl = screen.getByRole("dialog");

      await fireEvent.mouseEnter(popoverEl);
      await fireEvent.mouseLeave(popoverEl);
      await advanceTimers(200);

      // Popover should remain open - hover handlers are no-ops in click mode
      expect(screen.getByRole("dialog")).toBeInTheDocument();
    });
  });

  describe("hover trigger", () => {
    it("shows popover on hover", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      renderPopover({ trigger: "hover" });

      await user.hover(screen.getByRole("button", { name: "Toggle" }));
      await advanceTimers(100);

      expect(screen.getByRole("dialog")).toBeInTheDocument();
    });

    it("hides popover on mouse leave", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      renderPopover({ trigger: "hover" });

      await user.hover(screen.getByRole("button", { name: "Toggle" }));
      await advanceTimers(100);
      expect(screen.getByRole("dialog")).toBeInTheDocument();

      await user.unhover(screen.getByRole("button", { name: "Toggle" }));
      await advanceTimers(150);

      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });

    it("keeps popover open when hovering over popover content", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      renderPopover({ trigger: "hover" });

      await user.hover(screen.getByRole("button", { name: "Toggle" }));
      await advanceTimers(100);
      expect(screen.getByRole("dialog")).toBeInTheDocument();

      // Move to popover content (cancelHide)
      const popoverEl = screen.getByRole("dialog");
      await user.unhover(screen.getByRole("button", { name: "Toggle" }));
      await fireEvent.mouseEnter(popoverEl);

      await advanceTimers(200);
      // Should still be visible because cancelHide was called
      expect(screen.getByRole("dialog")).toBeInTheDocument();
    });

    it("closes popover when leaving popover content", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      renderPopover({ trigger: "hover" });

      await user.hover(screen.getByRole("button", { name: "Toggle" }));
      await advanceTimers(100);
      expect(screen.getByRole("dialog")).toBeInTheDocument();

      // Move to popover, then leave
      const popoverEl = screen.getByRole("dialog");
      await fireEvent.mouseEnter(popoverEl);
      await fireEvent.mouseLeave(popoverEl);
      await advanceTimers(150);

      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });

    it("does not show on click in hover mode", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      renderPopover({ trigger: "hover" });

      await user.click(screen.getByRole("button", { name: "Toggle" }));

      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
  });

  describe("placement", () => {
    it("applies bottom placement by default", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      renderPopover();

      await user.click(screen.getByRole("button", { name: "Toggle" }));

      expect(screen.getByRole("dialog")).toHaveClass(classes.placements.bottom);
    });

    it("applies top placement", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      renderPopover({ placement: "top" });

      await user.click(screen.getByRole("button", { name: "Toggle" }));

      expect(screen.getByRole("dialog")).toHaveClass(classes.placements.top);
    });

    it("applies left placement", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      renderPopover({ placement: "left" });

      await user.click(screen.getByRole("button", { name: "Toggle" }));

      expect(screen.getByRole("dialog")).toHaveClass(classes.placements.left);
    });

    it("applies right placement", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      renderPopover({ placement: "right" });

      await user.click(screen.getByRole("button", { name: "Toggle" }));

      expect(screen.getByRole("dialog")).toHaveClass(classes.placements.right);
    });
  });

  describe("close on Escape", () => {
    it("closes on Escape by default", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      renderPopover();

      await user.click(screen.getByRole("button", { name: "Toggle" }));
      expect(screen.getByRole("dialog")).toBeInTheDocument();

      await user.keyboard("{Escape}");

      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });

    it("does not close on Escape when closeOnEsc is false", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      renderPopover({ closeOnEsc: false });

      await user.click(screen.getByRole("button", { name: "Toggle" }));
      expect(screen.getByRole("dialog")).toBeInTheDocument();

      await user.keyboard("{Escape}");

      expect(screen.getByRole("dialog")).toBeInTheDocument();
    });
  });

  describe("close on click outside", () => {
    it("closes when clicking outside the popover", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      renderPopover();

      await user.click(screen.getByRole("button", { name: "Toggle" }));
      expect(screen.getByRole("dialog")).toBeInTheDocument();

      // useClickOutside listens on mousedown
      await fireEvent.mouseDown(document.body);

      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });

    it("does not close when closeOnClickOutside is false", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      renderPopover({ closeOnClickOutside: false });

      await user.click(screen.getByRole("button", { name: "Toggle" }));
      expect(screen.getByRole("dialog")).toBeInTheDocument();

      // useClickOutside listens on mousedown
      await fireEvent.mouseDown(document.body);

      expect(screen.getByRole("dialog")).toBeInTheDocument();
    });
  });

  describe("disabled", () => {
    it("does not open when disabled", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      renderPopover({ disabled: true });

      await user.click(screen.getByRole("button", { name: "Toggle" }));

      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
  });

  describe("accessibility", () => {
    it("has aria-haspopup on trigger", () => {
      renderPopover();

      const trigger = screen.getByRole("button", { name: "Toggle" }).closest("[aria-haspopup]");
      expect(trigger).toHaveAttribute("aria-haspopup", "dialog");
    });

    it("has aria-expanded=false when closed", () => {
      renderPopover();

      const trigger = screen.getByRole("button", { name: "Toggle" }).closest("[aria-expanded]");
      expect(trigger).toHaveAttribute("aria-expanded", "false");
    });

    it("has aria-expanded=true when open", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      renderPopover();

      await user.click(screen.getByRole("button", { name: "Toggle" }));

      const trigger = screen.getByRole("button", { name: "Toggle" }).closest("[aria-expanded]");
      expect(trigger).toHaveAttribute("aria-expanded", "true");
    });

    it("has aria-controls when open", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      renderPopover();

      await user.click(screen.getByRole("button", { name: "Toggle" }));

      const trigger = screen.getByRole("button", { name: "Toggle" }).closest("[aria-controls]");
      const popover = screen.getByRole("dialog");
      expect(trigger).toHaveAttribute("aria-controls", popover.id);
    });

    it("popover has dialog role", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      renderPopover();

      await user.click(screen.getByRole("button", { name: "Toggle" }));

      expect(screen.getByRole("dialog")).toBeInTheDocument();
    });
  });

  describe("arrow", () => {
    it("renders arrow element", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      renderPopover();

      await user.click(screen.getByRole("button", { name: "Toggle" }));

      const arrow = document.querySelector(`.${classes.arrow}`);
      expect(arrow).toBeInTheDocument();
    });
  });

  describe("className prop", () => {
    it("applies custom className to popover", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      renderPopover({ className: "custom-popover" });

      await user.click(screen.getByRole("button", { name: "Toggle" }));

      expect(screen.getByRole("dialog")).toHaveClass("custom-popover");
    });
  });

  describe("update:open emit", () => {
    it("emits update:open when opening", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      const { emitted } = renderPopover();

      await user.click(screen.getByRole("button", { name: "Toggle" }));

      expect(emitted()).toHaveProperty("update:open");
      expect(emitted()["update:open"][0]).toEqual([true]);
    });

    it("emits update:open when closing", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      const { emitted } = renderPopover();

      await user.click(screen.getByRole("button", { name: "Toggle" }));
      await user.click(screen.getByRole("button", { name: "Toggle" }));

      expect(emitted()["update:open"][1]).toEqual([false]);
    });
  });

  describe("controlled mode", () => {
    it("respects controlled open prop", async () => {
      renderPopover({ open: true });

      expect(screen.getByRole("dialog")).toBeInTheDocument();
    });

    it("does not show when controlled open is false", () => {
      renderPopover({ open: false });

      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });

    it("emits update:open on click in controlled mode", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      const { emitted } = renderPopover({ open: false });

      await user.click(screen.getByRole("button", { name: "Toggle" }));

      expect(emitted()["update:open"][0]).toEqual([true]);
    });
  });

  describe("hover disabled", () => {
    it("does not show popover on hover when disabled", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      renderPopover({ trigger: "hover", disabled: true });

      await user.hover(screen.getByRole("button", { name: "Toggle" }));
      await advanceTimers(200);

      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
  });

  describe("scroll/resize update", () => {
    it("popover stays visible after scroll event", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      renderPopover();

      await user.click(screen.getByRole("button", { name: "Toggle" }));
      expect(screen.getByRole("dialog")).toBeInTheDocument();

      window.dispatchEvent(new Event("scroll"));
      await nextTick();

      expect(screen.getByRole("dialog")).toBeInTheDocument();
    });

    it("popover stays visible after resize event", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      renderPopover();

      await user.click(screen.getByRole("button", { name: "Toggle" }));
      expect(screen.getByRole("dialog")).toBeInTheDocument();

      window.dispatchEvent(new Event("resize"));
      await nextTick();

      expect(screen.getByRole("dialog")).toBeInTheDocument();
    });
  });
});
