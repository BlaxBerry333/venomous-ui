import { render } from "@testing-library/vue";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { defineComponent } from "vue";
import { useDelayedToggle } from "./useDelayedToggle";

describe("useDelayedToggle", () => {
  beforeEach(() => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });

  function setup(options?: { disabled?: () => boolean }) {
    const onShow = vi.fn();
    const onHide = vi.fn();
    let result: ReturnType<typeof useDelayedToggle>;

    const Comp = defineComponent({
      setup() {
        // eslint-disable-next-line react-hooks/rules-of-hooks -- Vue composable, not React hook
        result = useDelayedToggle(onShow, onHide, 100, 150, options?.disabled);
        return () => null;
      },
    });

    const renderResult = render(Comp);

    return {
      onShow,
      onHide,
      get toggle() {
        return result!;
      },
      ...renderResult,
    };
  }

  it("uses default disabled function (always returns false) when not provided", () => {
    const { toggle, onShow } = setup();

    toggle.show();
    vi.advanceTimersByTime(100);

    expect(onShow).toHaveBeenCalledTimes(1);
  });

  it("does not show when disabled returns true", () => {
    const { toggle, onShow } = setup({ disabled: () => true });

    toggle.show();
    vi.advanceTimersByTime(100);

    expect(onShow).not.toHaveBeenCalled();
  });

  it("hides after hideDelay", () => {
    const { toggle, onHide } = setup();

    toggle.hide();
    vi.advanceTimersByTime(150);

    expect(onHide).toHaveBeenCalledTimes(1);
  });

  it("cancelHide prevents hide from firing", () => {
    const { toggle, onHide } = setup();

    toggle.hide();
    vi.advanceTimersByTime(50);
    toggle.cancelHide();
    vi.advanceTimersByTime(200);

    expect(onHide).not.toHaveBeenCalled();
  });

  it("clearTimers cancels both show and hide", () => {
    const { toggle, onShow, onHide } = setup();

    toggle.show();
    toggle.hide();
    toggle.clearTimers();
    vi.advanceTimersByTime(300);

    expect(onShow).not.toHaveBeenCalled();
    expect(onHide).not.toHaveBeenCalled();
  });

  it("show cancels pending hide", () => {
    const { toggle, onHide, onShow } = setup();

    toggle.hide();
    vi.advanceTimersByTime(50);
    toggle.show();
    vi.advanceTimersByTime(100);

    expect(onHide).not.toHaveBeenCalled();
    expect(onShow).toHaveBeenCalledTimes(1);
  });

  it("cleans up timers on unmount", () => {
    const { toggle, onShow, unmount } = setup();

    toggle.show();
    unmount();
    vi.advanceTimersByTime(200);

    expect(onShow).not.toHaveBeenCalled();
  });
});
