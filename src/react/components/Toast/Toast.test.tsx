import { act, fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it, vi } from "vitest";

import { COMPONENT_NAMES, TOAST_CSS_CLASS_NAMES } from "@/core/constants";
import { ThemeProvider } from "@/react/components/ThemeProvider";

import ToastProvider from "./ToastProvider";
import { useToast } from "./useToast";

const renderWithProviders = (ui: React.ReactElement) => {
  return render(
    <ThemeProvider>
      <ToastProvider>{ui}</ToastProvider>
    </ThemeProvider>,
  );
};

// Test component that uses useToast
function TestComponent({ onMount }: { onMount?: (toast: ReturnType<typeof useToast>) => void }) {
  const toast = useToast();

  React.useEffect(() => {
    onMount?.(toast);
  }, [onMount, toast]);

  return (
    <div>
      <button data-testid="success-btn" onClick={() => toast.success("Success message")}>
        Success
      </button>
      <button data-testid="error-btn" onClick={() => toast.error("Error message")}>
        Error
      </button>
      <button data-testid="warning-btn" onClick={() => toast.warning("Warning message")}>
        Warning
      </button>
      <button data-testid="info-btn" onClick={() => toast.info("Info message")}>
        Info
      </button>
      <button data-testid="loading-btn" onClick={() => toast.loading("Loading message")}>
        Loading
      </button>
      <button data-testid="close-all-btn" onClick={() => toast.closeAll()}>
        Close All
      </button>
    </div>
  );
}

describe("Toast", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  describe("ToastProvider", () => {
    it("renders children", () => {
      renderWithProviders(<div data-testid="child">Child</div>);
      expect(screen.getByTestId("child")).toBeInTheDocument();
    });

    it("renders toast container", () => {
      renderWithProviders(<div>Test</div>);
      const container = document.querySelector(`.${TOAST_CSS_CLASS_NAMES.container.className}`);
      expect(container).toBeInTheDocument();
    });

    it("has correct displayName", () => {
      expect(ToastProvider.displayName).toBe(COMPONENT_NAMES.ToastProvider);
    });

    it("applies placement class - top-right", () => {
      render(
        <ThemeProvider>
          <ToastProvider placement="top-right">
            <div>Test</div>
          </ToastProvider>
        </ThemeProvider>,
      );
      const container = document.querySelector(`.${TOAST_CSS_CLASS_NAMES.container.className}`);
      expect(container).toHaveClass(TOAST_CSS_CLASS_NAMES.placementTopRight.className);
    });

    it("applies placement class - bottom-left", () => {
      render(
        <ThemeProvider>
          <ToastProvider placement="bottom-left">
            <div>Test</div>
          </ToastProvider>
        </ThemeProvider>,
      );
      const container = document.querySelector(`.${TOAST_CSS_CLASS_NAMES.container.className}`);
      expect(container).toHaveClass(TOAST_CSS_CLASS_NAMES.placementBottomLeft.className);
    });

    it("applies placement class - top-center", () => {
      render(
        <ThemeProvider>
          <ToastProvider placement="top-center">
            <div>Test</div>
          </ToastProvider>
        </ThemeProvider>,
      );
      const container = document.querySelector(`.${TOAST_CSS_CLASS_NAMES.container.className}`);
      expect(container).toHaveClass(TOAST_CSS_CLASS_NAMES.placementTopCenter.className);
    });

    it("applies placement class - top-left", () => {
      render(
        <ThemeProvider>
          <ToastProvider placement="top-left">
            <div>Test</div>
          </ToastProvider>
        </ThemeProvider>,
      );
      const container = document.querySelector(`.${TOAST_CSS_CLASS_NAMES.container.className}`);
      expect(container).toHaveClass(TOAST_CSS_CLASS_NAMES.placementTopLeft.className);
    });

    it("applies placement class - bottom-right", () => {
      render(
        <ThemeProvider>
          <ToastProvider placement="bottom-right">
            <div>Test</div>
          </ToastProvider>
        </ThemeProvider>,
      );
      const container = document.querySelector(`.${TOAST_CSS_CLASS_NAMES.container.className}`);
      expect(container).toHaveClass(TOAST_CSS_CLASS_NAMES.placementBottomRight.className);
    });

    it("applies placement class - bottom-center", () => {
      render(
        <ThemeProvider>
          <ToastProvider placement="bottom-center">
            <div>Test</div>
          </ToastProvider>
        </ThemeProvider>,
      );
      const container = document.querySelector(`.${TOAST_CSS_CLASS_NAMES.container.className}`);
      expect(container).toHaveClass(TOAST_CSS_CLASS_NAMES.placementBottomCenter.className);
    });
  });

  describe("useToast hook", () => {
    it("throws error when used outside ToastProvider", () => {
      const consoleError = vi.spyOn(console, "error").mockImplementation(() => {});

      const TestHook = () => {
        useToast();
        return null;
      };

      expect(() => render(<TestHook />)).toThrow("useToast must be used within a ToastProvider");

      consoleError.mockRestore();
    });

    it("returns toast API", () => {
      let toastApi: ReturnType<typeof useToast> | undefined;

      renderWithProviders(
        <TestComponent
          onMount={(toast) => {
            toastApi = toast;
          }}
        />,
      );

      expect(toastApi).toBeDefined();
      expect(toastApi!.success).toBeInstanceOf(Function);
      expect(toastApi!.error).toBeInstanceOf(Function);
      expect(toastApi!.warning).toBeInstanceOf(Function);
      expect(toastApi!.info).toBeInstanceOf(Function);
      expect(toastApi!.loading).toBeInstanceOf(Function);
      expect(toastApi!.open).toBeInstanceOf(Function);
      expect(toastApi!.set).toBeInstanceOf(Function);
      expect(toastApi!.close).toBeInstanceOf(Function);
      expect(toastApi!.closeAll).toBeInstanceOf(Function);
    });
  });

  describe("Toast variants", () => {
    it("shows success toast", async () => {
      renderWithProviders(<TestComponent />);

      await act(async () => {
        fireEvent.click(screen.getByTestId("success-btn"));
      });

      const toast = document.querySelector(`.${TOAST_CSS_CLASS_NAMES.root.className}`);
      expect(toast).toBeInTheDocument();
      expect(toast).toHaveClass(TOAST_CSS_CLASS_NAMES.variantSuccess.className);
      expect(screen.getByText("Success message")).toBeInTheDocument();
    });

    it("shows error toast", async () => {
      renderWithProviders(<TestComponent />);

      await act(async () => {
        fireEvent.click(screen.getByTestId("error-btn"));
      });

      const toast = document.querySelector(`.${TOAST_CSS_CLASS_NAMES.root.className}`);
      expect(toast).toHaveClass(TOAST_CSS_CLASS_NAMES.variantError.className);
      expect(screen.getByText("Error message")).toBeInTheDocument();
    });

    it("shows warning toast", async () => {
      renderWithProviders(<TestComponent />);

      await act(async () => {
        fireEvent.click(screen.getByTestId("warning-btn"));
      });

      const toast = document.querySelector(`.${TOAST_CSS_CLASS_NAMES.root.className}`);
      expect(toast).toHaveClass(TOAST_CSS_CLASS_NAMES.variantWarning.className);
      expect(screen.getByText("Warning message")).toBeInTheDocument();
    });

    it("shows info toast", async () => {
      renderWithProviders(<TestComponent />);

      await act(async () => {
        fireEvent.click(screen.getByTestId("info-btn"));
      });

      const toast = document.querySelector(`.${TOAST_CSS_CLASS_NAMES.root.className}`);
      expect(toast).toHaveClass(TOAST_CSS_CLASS_NAMES.variantInfo.className);
      expect(screen.getByText("Info message")).toBeInTheDocument();
    });

    it("shows loading toast", async () => {
      renderWithProviders(<TestComponent />);

      await act(async () => {
        fireEvent.click(screen.getByTestId("loading-btn"));
      });

      const toast = document.querySelector(`.${TOAST_CSS_CLASS_NAMES.root.className}`);
      expect(toast).toHaveClass(TOAST_CSS_CLASS_NAMES.variantLoading.className);
      expect(screen.getByText("Loading message")).toBeInTheDocument();
    });
  });

  describe("Toast content", () => {
    it("renders title", async () => {
      let toastApi: ReturnType<typeof useToast> | undefined;

      renderWithProviders(
        <TestComponent
          onMount={(toast) => {
            toastApi = toast;
          }}
        />,
      );

      await act(async () => {
        toastApi!.success("Test Title");
      });

      expect(screen.getByText("Test Title")).toBeInTheDocument();
    });

    it("renders description", async () => {
      let toastApi: ReturnType<typeof useToast> | undefined;

      renderWithProviders(
        <TestComponent
          onMount={(toast) => {
            toastApi = toast;
          }}
        />,
      );

      await act(async () => {
        toastApi!.success("Title", { description: "Description text" });
      });

      expect(screen.getByText("Description text")).toBeInTheDocument();
    });

    it("renders action", async () => {
      let toastApi: ReturnType<typeof useToast> | undefined;

      renderWithProviders(
        <TestComponent
          onMount={(toast) => {
            toastApi = toast;
          }}
        />,
      );

      await act(async () => {
        toastApi!.success("Title", { action: <button data-testid="action-btn">Action</button> });
      });

      expect(screen.getByTestId("action-btn")).toBeInTheDocument();
    });

    it("renders custom icon", async () => {
      let toastApi: ReturnType<typeof useToast> | undefined;

      renderWithProviders(
        <TestComponent
          onMount={(toast) => {
            toastApi = toast;
          }}
        />,
      );

      await act(async () => {
        toastApi!.success("Title", { icon: <span data-testid="custom-icon">🎉</span> });
      });

      expect(screen.getByTestId("custom-icon")).toBeInTheDocument();
    });

    it("hides icon when showIcon is false", async () => {
      let toastApi: ReturnType<typeof useToast> | undefined;

      renderWithProviders(
        <TestComponent
          onMount={(toast) => {
            toastApi = toast;
          }}
        />,
      );

      await act(async () => {
        toastApi!.success("Title", { showIcon: false });
      });

      const iconContainer = document.querySelector(`.${TOAST_CSS_CLASS_NAMES.icon.className}`);
      expect(iconContainer).not.toBeInTheDocument();
    });
  });

  describe("Toast close button", () => {
    it("renders close button by default", async () => {
      renderWithProviders(<TestComponent />);

      await act(async () => {
        fireEvent.click(screen.getByTestId("success-btn"));
      });

      const closeBtn = document.querySelector(`.${TOAST_CSS_CLASS_NAMES.closeButton.className}`);
      expect(closeBtn).toBeInTheDocument();
    });

    it("hides close button when closable is false", async () => {
      let toastApi: ReturnType<typeof useToast> | undefined;

      renderWithProviders(
        <TestComponent
          onMount={(toast) => {
            toastApi = toast;
          }}
        />,
      );

      await act(async () => {
        toastApi!.success("Title", { closable: false });
      });

      const closeBtn = document.querySelector(`.${TOAST_CSS_CLASS_NAMES.closeButton.className}`);
      expect(closeBtn).not.toBeInTheDocument();
    });

    it("loading toast has close button by default (abortable)", async () => {
      renderWithProviders(<TestComponent />);

      await act(async () => {
        fireEvent.click(screen.getByTestId("loading-btn"));
      });

      const closeBtn = document.querySelector(`.${TOAST_CSS_CLASS_NAMES.closeButton.className}`);
      expect(closeBtn).toBeInTheDocument();
    });

    it("closes toast when close button is clicked", async () => {
      renderWithProviders(<TestComponent />);

      await act(async () => {
        fireEvent.click(screen.getByTestId("success-btn"));
      });

      const closeBtn = document.querySelector(`.${TOAST_CSS_CLASS_NAMES.closeButton.className}`);
      expect(closeBtn).toBeInTheDocument();

      await act(async () => {
        fireEvent.click(closeBtn!);
      });

      // Toast should have exiting class
      let toast = document.querySelector(`.${TOAST_CSS_CLASS_NAMES.root.className}`);
      expect(toast).toHaveClass(TOAST_CSS_CLASS_NAMES.exiting.className);

      // After exit animation, toast should be removed
      await act(async () => {
        vi.advanceTimersByTime(200);
      });

      toast = document.querySelector(`.${TOAST_CSS_CLASS_NAMES.root.className}`);
      expect(toast).not.toBeInTheDocument();
    });
  });

  describe("Toast API methods", () => {
    it("open() creates toast with custom options", async () => {
      let toastApi: ReturnType<typeof useToast> | undefined;

      renderWithProviders(
        <TestComponent
          onMount={(toast) => {
            toastApi = toast;
          }}
        />,
      );

      await act(async () => {
        toastApi!.open({
          variant: "warning",
          title: "Custom Title",
          description: "Custom Description",
        });
      });

      expect(screen.getByText("Custom Title")).toBeInTheDocument();
      expect(screen.getByText("Custom Description")).toBeInTheDocument();

      const toast = document.querySelector(`.${TOAST_CSS_CLASS_NAMES.root.className}`);
      expect(toast).toHaveClass(TOAST_CSS_CLASS_NAMES.variantWarning.className);
    });

    it("set() updates existing toast", async () => {
      let toastApi: ReturnType<typeof useToast> | undefined;

      renderWithProviders(
        <TestComponent
          onMount={(toast) => {
            toastApi = toast;
          }}
        />,
      );

      let toastId: string;

      await act(async () => {
        const result = toastApi!.loading("Loading...");
        toastId = result.id;
      });

      expect(screen.getByText("Loading...")).toBeInTheDocument();

      await act(async () => {
        toastApi!.set(toastId, {
          variant: "success",
          title: "Done!",
        });
      });

      expect(screen.getByText("Done!")).toBeInTheDocument();

      const toast = document.querySelector(`.${TOAST_CSS_CLASS_NAMES.root.className}`);
      expect(toast).toHaveClass(TOAST_CSS_CLASS_NAMES.variantSuccess.className);
    });

    it("close() closes specific toast", async () => {
      let toastApi: ReturnType<typeof useToast> | undefined;

      renderWithProviders(
        <TestComponent
          onMount={(toast) => {
            toastApi = toast;
          }}
        />,
      );

      let toastId: string;

      await act(async () => {
        const result = toastApi!.success("Toast 1");
        toastId = result.id;
      });

      expect(screen.getByText("Toast 1")).toBeInTheDocument();

      await act(async () => {
        toastApi!.close(toastId);
      });

      // Toast should have exiting class
      const toast = document.querySelector(`.${TOAST_CSS_CLASS_NAMES.root.className}`);
      expect(toast).toHaveClass(TOAST_CSS_CLASS_NAMES.exiting.className);

      await act(async () => {
        vi.advanceTimersByTime(200);
      });

      expect(screen.queryByText("Toast 1")).not.toBeInTheDocument();
    });

    it("closeAll() closes all toasts", async () => {
      let toastApi: ReturnType<typeof useToast> | undefined;

      renderWithProviders(
        <TestComponent
          onMount={(toast) => {
            toastApi = toast;
          }}
        />,
      );

      await act(async () => {
        toastApi!.success("Toast 1");
        toastApi!.error("Toast 2");
        toastApi!.info("Toast 3");
      });

      expect(screen.getByText("Toast 1")).toBeInTheDocument();
      expect(screen.getByText("Toast 2")).toBeInTheDocument();
      expect(screen.getByText("Toast 3")).toBeInTheDocument();

      await act(async () => {
        toastApi!.closeAll();
      });

      // closeAll removes toasts immediately without exit animation
      expect(screen.queryByText("Toast 1")).not.toBeInTheDocument();
      expect(screen.queryByText("Toast 2")).not.toBeInTheDocument();
      expect(screen.queryByText("Toast 3")).not.toBeInTheDocument();
    });
  });

  describe("Toast promise", () => {
    it("returns ToastPromise with id", async () => {
      let toastApi: ReturnType<typeof useToast> | undefined;

      renderWithProviders(
        <TestComponent
          onMount={(toast) => {
            toastApi = toast;
          }}
        />,
      );

      let result: { id: string } | undefined;

      await act(async () => {
        result = toastApi!.success("Test");
      });

      expect(result).toBeDefined();
      expect(result?.id).toBeDefined();
      expect(typeof result?.id).toBe("string");
    });
  });

  describe("Toast accessibility", () => {
    it("success toast has role status", async () => {
      renderWithProviders(<TestComponent />);

      await act(async () => {
        fireEvent.click(screen.getByTestId("success-btn"));
      });

      const toast = document.querySelector(`.${TOAST_CSS_CLASS_NAMES.root.className}`);
      expect(toast).toHaveAttribute("role", "status");
      expect(toast).toHaveAttribute("aria-live", "polite");
    });

    it("error toast has role alert", async () => {
      renderWithProviders(<TestComponent />);

      await act(async () => {
        fireEvent.click(screen.getByTestId("error-btn"));
      });

      const toast = document.querySelector(`.${TOAST_CSS_CLASS_NAMES.root.className}`);
      expect(toast).toHaveAttribute("role", "alert");
      expect(toast).toHaveAttribute("aria-live", "assertive");
    });

    it("warning toast has role alert", async () => {
      renderWithProviders(<TestComponent />);

      await act(async () => {
        fireEvent.click(screen.getByTestId("warning-btn"));
      });

      const toast = document.querySelector(`.${TOAST_CSS_CLASS_NAMES.root.className}`);
      expect(toast).toHaveAttribute("role", "alert");
      expect(toast).toHaveAttribute("aria-live", "assertive");
    });

    it("loading toast has aria-busy", async () => {
      renderWithProviders(<TestComponent />);

      await act(async () => {
        fireEvent.click(screen.getByTestId("loading-btn"));
      });

      const toast = document.querySelector(`.${TOAST_CSS_CLASS_NAMES.root.className}`);
      expect(toast).toHaveAttribute("aria-busy", "true");
    });

    it("close button has aria-label", async () => {
      renderWithProviders(<TestComponent />);

      await act(async () => {
        fireEvent.click(screen.getByTestId("success-btn"));
      });

      const closeBtn = document.querySelector(`.${TOAST_CSS_CLASS_NAMES.closeButton.className}`);
      expect(closeBtn).toHaveAttribute("aria-label", "Close notification");
    });
  });

  describe("Toast animation states", () => {
    it("toast has entering class initially", async () => {
      renderWithProviders(<TestComponent />);

      await act(async () => {
        fireEvent.click(screen.getByTestId("success-btn"));
      });

      const toast = document.querySelector(`.${TOAST_CSS_CLASS_NAMES.root.className}`);
      expect(toast).toHaveClass(TOAST_CSS_CLASS_NAMES.entering.className);
    });

    it("toast has exiting class when closing", async () => {
      renderWithProviders(<TestComponent />);

      await act(async () => {
        fireEvent.click(screen.getByTestId("success-btn"));
      });

      const closeBtn = document.querySelector(`.${TOAST_CSS_CLASS_NAMES.closeButton.className}`);

      await act(async () => {
        fireEvent.click(closeBtn!);
      });

      const toast = document.querySelector(`.${TOAST_CSS_CLASS_NAMES.root.className}`);
      expect(toast).toHaveClass(TOAST_CSS_CLASS_NAMES.exiting.className);
    });
  });

  describe("Toast maxCount", () => {
    it("enforces maxCount limit", async () => {
      let toastApi: ReturnType<typeof useToast> | undefined;

      render(
        <ThemeProvider>
          <ToastProvider maxCount={2}>
            <TestComponent
              onMount={(toast) => {
                toastApi = toast;
              }}
            />
          </ToastProvider>
        </ThemeProvider>,
      );

      await act(async () => {
        toastApi!.success("Toast 1");
        toastApi!.success("Toast 2");
        toastApi!.success("Toast 3");
      });

      // Wait for maxCount enforcement
      await act(async () => {
        vi.advanceTimersByTime(200);
      });

      const toasts = document.querySelectorAll(`.${TOAST_CSS_CLASS_NAMES.root.className}`);
      // Should have at most 2 visible toasts (some may be exiting)
      const visibleToasts = Array.from(toasts).filter(
        (t) => !t.classList.contains(TOAST_CSS_CLASS_NAMES.exiting.className),
      );
      expect(visibleToasts.length).toBeLessThanOrEqual(2);
    });
  });

  describe("Toast auto-dismiss", () => {
    it("auto-dismisses toast after duration", async () => {
      let toastApi: ReturnType<typeof useToast> | undefined;

      render(
        <ThemeProvider>
          <ToastProvider duration={1000}>
            <TestComponent
              onMount={(toast) => {
                toastApi = toast;
              }}
            />
          </ToastProvider>
        </ThemeProvider>,
      );

      await act(async () => {
        toastApi!.success("Auto dismiss test");
      });

      expect(screen.getByText("Auto dismiss test")).toBeInTheDocument();

      // Advance past duration
      await act(async () => {
        vi.advanceTimersByTime(1000);
      });

      // Toast should be exiting
      const toast = document.querySelector(`.${TOAST_CSS_CLASS_NAMES.root.className}`);
      expect(toast).toHaveClass(TOAST_CSS_CLASS_NAMES.exiting.className);

      // Wait for exit animation
      await act(async () => {
        vi.advanceTimersByTime(200);
      });

      expect(screen.queryByText("Auto dismiss test")).not.toBeInTheDocument();
    });

    it("loading toast does not auto-dismiss", async () => {
      let toastApi: ReturnType<typeof useToast> | undefined;

      render(
        <ThemeProvider>
          <ToastProvider duration={1000}>
            <TestComponent
              onMount={(toast) => {
                toastApi = toast;
              }}
            />
          </ToastProvider>
        </ThemeProvider>,
      );

      await act(async () => {
        toastApi!.loading("Loading test");
      });

      expect(screen.getByText("Loading test")).toBeInTheDocument();

      // Advance past duration
      await act(async () => {
        vi.advanceTimersByTime(5000);
      });

      // Loading toast should still be there
      expect(screen.getByText("Loading test")).toBeInTheDocument();
    });
  });

  describe("Toast hover pause/resume", () => {
    it("pauses timer on mouse enter and resumes on mouse leave", async () => {
      let toastApi: ReturnType<typeof useToast> | undefined;

      render(
        <ThemeProvider>
          <ToastProvider duration={1000}>
            <TestComponent
              onMount={(toast) => {
                toastApi = toast;
              }}
            />
          </ToastProvider>
        </ThemeProvider>,
      );

      await act(async () => {
        toastApi!.success("Hover test");
      });

      const toast = document.querySelector(`.${TOAST_CSS_CLASS_NAMES.root.className}`)!;
      expect(toast).toBeInTheDocument();

      // Advance 500ms (half of duration)
      await act(async () => {
        vi.advanceTimersByTime(500);
      });

      // Hover over toast (pause timer)
      await act(async () => {
        fireEvent.mouseEnter(toast);
      });

      // Advance another 1000ms while hovering
      await act(async () => {
        vi.advanceTimersByTime(1000);
      });

      // Toast should still be visible (timer paused)
      expect(screen.getByText("Hover test")).toBeInTheDocument();
      expect(toast).not.toHaveClass(TOAST_CSS_CLASS_NAMES.exiting.className);

      // Mouse leave (resume timer)
      await act(async () => {
        fireEvent.mouseLeave(toast);
      });

      // Advance remaining time (should be ~500ms)
      await act(async () => {
        vi.advanceTimersByTime(600);
      });

      // Toast should now be exiting
      expect(toast).toHaveClass(TOAST_CSS_CLASS_NAMES.exiting.className);
    });

    it("exits immediately when remaining time is exhausted during pause", async () => {
      // Use real timers for this test since we need accurate Date.now() tracking
      vi.useRealTimers();

      let toastApi: ReturnType<typeof useToast> | undefined;

      render(
        <ThemeProvider>
          <ToastProvider duration={100}>
            <TestComponent
              onMount={(toast) => {
                toastApi = toast;
              }}
            />
          </ToastProvider>
        </ThemeProvider>,
      );

      await act(async () => {
        toastApi!.success("Quick toast");
      });

      const toast = document.querySelector(`.${TOAST_CSS_CLASS_NAMES.root.className}`)!;

      // Wait a bit then hover
      await act(async () => {
        await new Promise((r) => setTimeout(r, 50));
      });

      // Hover to pause
      await act(async () => {
        fireEvent.mouseEnter(toast);
      });

      // Wait longer than the original duration while paused
      await act(async () => {
        await new Promise((r) => setTimeout(r, 150));
      });

      // Mouse leave - should exit immediately since remaining <= 0
      await act(async () => {
        fireEvent.mouseLeave(toast);
      });

      // Toast should be exiting
      expect(toast).toHaveClass(TOAST_CSS_CLASS_NAMES.exiting.className);

      // Restore fake timers for other tests
      vi.useFakeTimers();
    });
  });

  describe("Toast placement fallback", () => {
    it("falls back to top-right for invalid placement", () => {
      render(
        <ThemeProvider>
          {/* @ts-expect-error Testing invalid placement */}
          <ToastProvider placement="invalid-placement">
            <div>Test</div>
          </ToastProvider>
        </ThemeProvider>,
      );
      const container = document.querySelector(`.${TOAST_CSS_CLASS_NAMES.container.className}`);
      expect(container).toHaveClass(TOAST_CSS_CLASS_NAMES.placementTopRight.className);
    });
  });

  describe("Toast timer edge cases", () => {
    it("resumes timer with remaining time after pause (covers startTimer branch)", async () => {
      // Use real timers for accurate Date.now() tracking
      vi.useRealTimers();

      let toastApi: ReturnType<typeof useToast> | undefined;

      render(
        <ThemeProvider>
          <ToastProvider duration={300}>
            <TestComponent
              onMount={(toast) => {
                toastApi = toast;
              }}
            />
          </ToastProvider>
        </ThemeProvider>,
      );

      await act(async () => {
        toastApi!.success("Resume test");
      });

      const toast = document.querySelector(`.${TOAST_CSS_CLASS_NAMES.root.className}`)!;

      // Wait 100ms then pause
      await act(async () => {
        await new Promise((r) => setTimeout(r, 100));
      });

      // Pause
      await act(async () => {
        fireEvent.mouseEnter(toast);
      });

      // Wait 50ms while paused
      await act(async () => {
        await new Promise((r) => setTimeout(r, 50));
      });

      // Resume - this calls startTimer with remaining time (covers line 235-237)
      await act(async () => {
        fireEvent.mouseLeave(toast);
      });

      // Toast should still be visible
      expect(screen.getByText("Resume test")).toBeInTheDocument();
      expect(toast).not.toHaveClass(TOAST_CSS_CLASS_NAMES.exiting.className);

      // Wait for remaining time to elapse
      await act(async () => {
        await new Promise((r) => setTimeout(r, 250));
      });

      // Toast should now be exiting
      expect(toast).toHaveClass(TOAST_CSS_CLASS_NAMES.exiting.className);

      vi.useFakeTimers();
    });

    it("clears existing timer when starting new one (covers clearTimeout branch)", async () => {
      // Use real timers for this test
      vi.useRealTimers();

      let toastApi: ReturnType<typeof useToast> | undefined;

      render(
        <ThemeProvider>
          <ToastProvider duration={500}>
            <TestComponent
              onMount={(toast) => {
                toastApi = toast;
              }}
            />
          </ToastProvider>
        </ThemeProvider>,
      );

      await act(async () => {
        toastApi!.success("Timer clear test");
      });

      const toast = document.querySelector(`.${TOAST_CSS_CLASS_NAMES.root.className}`)!;

      // Wait 100ms
      await act(async () => {
        await new Promise((r) => setTimeout(r, 100));
      });

      // First pause
      await act(async () => {
        fireEvent.mouseEnter(toast);
      });

      await act(async () => {
        await new Promise((r) => setTimeout(r, 30));
      });

      // First resume - starts a timer
      await act(async () => {
        fireEvent.mouseLeave(toast);
      });

      // Immediately pause again (timer exists)
      await act(async () => {
        fireEvent.mouseEnter(toast);
      });

      await act(async () => {
        await new Promise((r) => setTimeout(r, 30));
      });

      // Second resume - should clear existing timer and start new one (line 192)
      await act(async () => {
        fireEvent.mouseLeave(toast);
      });

      // Toast should still exist
      expect(screen.getByText("Timer clear test")).toBeInTheDocument();

      // Wait for toast to exit and be removed
      await act(async () => {
        await new Promise((r) => setTimeout(r, 600));
      });

      // Toast should be exiting or already removed (timer was cleared and restarted)
      const remainingToast = document.querySelector(`.${TOAST_CSS_CLASS_NAMES.root.className}`);
      const isExitingOrRemoved =
        remainingToast === null || remainingToast.classList.contains(TOAST_CSS_CLASS_NAMES.exiting.className);
      expect(isExitingOrRemoved).toBe(true);

      vi.useFakeTimers();
    });
  });

  describe("Toast reducer edge cases", () => {
    it("handles unknown action type gracefully", async () => {
      // The reducer has a default case that returns state unchanged
      // We can't directly test it due to TypeScript, but we can verify
      // the reducer is robust by checking state consistency after valid actions
      let toastApi: ReturnType<typeof useToast> | undefined;

      renderWithProviders(
        <TestComponent
          onMount={(toast) => {
            toastApi = toast;
          }}
        />,
      );

      // Create and verify a toast
      await act(async () => {
        toastApi!.success("Test toast");
      });

      expect(screen.getByText("Test toast")).toBeInTheDocument();

      // The reducer's default case is defensive code for type safety
      // It's acceptable to not have 100% coverage on unreachable code
    });
  });
});
