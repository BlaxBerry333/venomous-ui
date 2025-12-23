"use client";

import React from "react";

import clsx from "clsx";

import { COMPONENT_NAMES, TOAST_CSS_CLASS_NAMES } from "@/core/constants";
import { generateToastCSS } from "@/core/css";
import { Portal } from "@/react/components/Portal";
import { useStyleInjection } from "@/react/hooks";

import Toast from "./Toast";
import type {
  ToastAction,
  ToastAPIContextValue,
  ToastInstance,
  ToastOptions,
  ToastProviderProps,
  ToastState,
} from "./Toast.types";
import { ToastAPIContext } from "./ToastContext";

/**
 * Default configuration values
 */
const DEFAULT_CONFIG = {
  placement: "top-right" as const,
  duration: 4000,
  maxCount: 5,
  gap: 12,
  offset: 16,
};

/**
 * Animation duration in ms (should match CSS)
 */
const EXIT_ANIMATION_DURATION = 150;

/**
 * Toast reducer
 */
function toastReducer(state: ToastState, action: ToastAction): ToastState {
  switch (action.type) {
    case "ADD": {
      return {
        toasts: [...state.toasts, action.toast],
      };
    }
    case "SET": {
      return {
        toasts: state.toasts.map((toast) => {
          if (toast.id !== action.id) return toast;

          const updatedToast: ToastInstance = {
            ...toast,
            ...action.options,
            // Ensure variant is preserved if not provided
            variant:
              (action.options as Partial<ToastOptions> & { variant?: ToastInstance["variant"] }).variant ??
              toast.variant,
          };
          return updatedToast;
        }),
      };
    }
    case "SET_STATE": {
      return {
        toasts: state.toasts.map((toast) => (toast.id === action.id ? { ...toast, state: action.state } : toast)),
      };
    }
    case "REMOVE": {
      const removedToast = state.toasts.find((t) => t.id === action.id);
      if (removedToast?.resolve) {
        removedToast.resolve();
      }
      return {
        toasts: state.toasts.filter((toast) => toast.id !== action.id),
      };
    }
    case "REMOVE_ALL": {
      state.toasts.forEach((toast) => {
        if (toast.resolve) {
          toast.resolve();
        }
      });
      return {
        toasts: [],
      };
    }
    default:
      return state;
  }
}

/**
 * Get placement class name
 */
function getPlacementClassName(placement: ToastProviderProps["placement"]): string {
  switch (placement) {
    case "top-right":
      return TOAST_CSS_CLASS_NAMES.placementTopRight.className;
    case "top-center":
      return TOAST_CSS_CLASS_NAMES.placementTopCenter.className;
    case "top-left":
      return TOAST_CSS_CLASS_NAMES.placementTopLeft.className;
    case "bottom-right":
      return TOAST_CSS_CLASS_NAMES.placementBottomRight.className;
    case "bottom-center":
      return TOAST_CSS_CLASS_NAMES.placementBottomCenter.className;
    case "bottom-left":
      return TOAST_CSS_CLASS_NAMES.placementBottomLeft.className;
    default:
      return TOAST_CSS_CLASS_NAMES.placementTopRight.className;
  }
}

/**
 * ToastProvider component
 *
 * Provides toast context and renders the toast container.
 *
 * @example
 * ```tsx
 * <ThemeProvider>
 *   <ToastProvider placement="top-right" duration={4000} maxCount={5}>
 *     <App />
 *   </ToastProvider>
 * </ThemeProvider>
 * ```
 */
const ToastProvider = React.memo<ToastProviderProps>(
  ({
    children,
    placement = DEFAULT_CONFIG.placement,
    duration = DEFAULT_CONFIG.duration,
    maxCount = DEFAULT_CONFIG.maxCount,
    gap = DEFAULT_CONFIG.gap,
    offset = DEFAULT_CONFIG.offset,
  }) => {
    /**
     * Inject component CSS
     */
    const TOAST_CSS = generateToastCSS();
    useStyleInjection(COMPONENT_NAMES.Toast, TOAST_CSS);

    /**
     * Toast state
     */
    const [state, dispatch] = React.useReducer(toastReducer, { toasts: [] });

    /**
     * Timer refs for auto-dismiss
     */
    const timersRef = React.useRef<Map<string, ReturnType<typeof setTimeout>>>(new Map());
    const remainingTimeRef = React.useRef<Map<string, number>>(new Map());
    const pauseStartRef = React.useRef<Map<string, number>>(new Map());

    /**
     * Config object
     */
    const config = React.useMemo(
      () => ({
        placement,
        duration,
        maxCount,
        gap,
        offset,
      }),
      [placement, duration, maxCount, gap, offset],
    );

    /**
     * API Context value (stable - does not include toasts)
     * This prevents child components from re-rendering when toasts change
     */
    const apiContextValue = React.useMemo<ToastAPIContextValue>(
      () => ({
        dispatch,
        config,
      }),
      [config],
    );

    /**
     * Start auto-dismiss timer for a toast
     */
    const startTimer = React.useCallback((toast: ToastInstance) => {
      const toastDuration = toast.duration;
      if (!toastDuration || toastDuration <= 0) return;

      // Clear existing timer if any
      const existingTimer = timersRef.current.get(toast.id);
      if (existingTimer) {
        clearTimeout(existingTimer);
      }

      // Set remaining time
      const remaining = remainingTimeRef.current.get(toast.id) ?? toastDuration;
      remainingTimeRef.current.set(toast.id, remaining);

      const timer = setTimeout(() => {
        dispatch({ type: "SET_STATE", id: toast.id, state: "exiting" });
      }, remaining);

      timersRef.current.set(toast.id, timer);
    }, []);

    /**
     * Pause timer on hover/focus
     */
    const pauseTimer = React.useCallback((id: string) => {
      const timer = timersRef.current.get(id);
      if (timer) {
        clearTimeout(timer);
        timersRef.current.delete(id);

        // Calculate remaining time
        const remaining = remainingTimeRef.current.get(id);
        const pauseStart = pauseStartRef.current.get(id);
        if (remaining !== undefined && pauseStart === undefined) {
          pauseStartRef.current.set(id, Date.now());
        }
      }
    }, []);

    /**
     * Resume timer after hover/focus
     */
    const resumeTimer = React.useCallback(
      (toast: ToastInstance) => {
        const pauseStart = pauseStartRef.current.get(toast.id);
        if (pauseStart !== undefined) {
          const pauseDuration = Date.now() - pauseStart;
          const remaining = (remainingTimeRef.current.get(toast.id) ?? 0) - pauseDuration;

          if (remaining > 0) {
            remainingTimeRef.current.set(toast.id, remaining);
            pauseStartRef.current.delete(toast.id);
            startTimer({ ...toast, duration: remaining });
          } else {
            dispatch({ type: "SET_STATE", id: toast.id, state: "exiting" });
          }
        }
      },
      [startTimer],
    );

    /**
     * Handle toast close (with exit animation)
     */
    const handleClose = React.useCallback((id: string) => {
      dispatch({ type: "SET_STATE", id, state: "exiting" });
    }, []);

    /**
     * Handle animation end - remove toast after exit animation
     */
    React.useEffect(() => {
      const exitingToasts = state.toasts.filter((t) => t.state === "exiting");

      exitingToasts.forEach((toast) => {
        const timer = setTimeout(() => {
          dispatch({ type: "REMOVE", id: toast.id });
        }, EXIT_ANIMATION_DURATION);

        return () => clearTimeout(timer);
      });
    }, [state.toasts]);

    /**
     * Transition entering toasts to visible
     */
    React.useEffect(() => {
      const enteringToasts = state.toasts.filter((t) => t.state === "entering");

      enteringToasts.forEach((toast) => {
        // Transition to visible after enter animation
        const timer = setTimeout(() => {
          dispatch({ type: "SET_STATE", id: toast.id, state: "visible" });
        }, 200); // Match enter animation duration

        return () => clearTimeout(timer);
      });
    }, [state.toasts]);

    /**
     * Start timers for new toasts
     */
    React.useEffect(() => {
      state.toasts.forEach((toast) => {
        if (!timersRef.current.has(toast.id) && toast.state !== "exiting") {
          startTimer(toast);
        }
      });
    }, [state.toasts, startTimer]);

    /**
     * Enforce maxCount
     */
    React.useEffect(() => {
      const visibleToasts = state.toasts.filter((t) => t.state !== "exiting");
      if (visibleToasts.length > maxCount) {
        // Remove oldest toasts that exceed maxCount
        const toRemove = visibleToasts.slice(0, visibleToasts.length - maxCount);
        toRemove.forEach((toast) => {
          dispatch({ type: "SET_STATE", id: toast.id, state: "exiting" });
        });
      }
    }, [state.toasts, maxCount]);

    /**
     * Cleanup timers on unmount
     */
    React.useEffect(() => {
      const timers = timersRef.current;
      return () => {
        timers.forEach((timer) => clearTimeout(timer));
        timers.clear();
      };
    }, []);

    /**
     * Compute container style
     */
    const containerStyle = React.useMemo(() => {
      const offsetX = typeof offset === "number" ? offset : (offset?.x ?? 16);
      const offsetY = typeof offset === "number" ? offset : (offset?.y ?? 16);

      return {
        "--toast-offset": `${offsetY}px`,
        "--toast-gap": `${gap}px`,
        paddingLeft: placement.includes("left") ? offsetX : undefined,
        paddingRight: placement.includes("right") ? offsetX : undefined,
      } as React.CSSProperties;
    }, [offset, gap, placement]);

    const containerClassName = clsx(TOAST_CSS_CLASS_NAMES.container.className, getPlacementClassName(placement));

    return (
      <ToastAPIContext.Provider value={apiContextValue}>
        {children}
        <Portal>
          <div className={containerClassName} style={containerStyle}>
            {state.toasts.map((toast) => (
              <Toast
                key={toast.id}
                toast={toast}
                onClose={() => handleClose(toast.id)}
                onMouseEnter={() => pauseTimer(toast.id)}
                onMouseLeave={() => resumeTimer(toast)}
              />
            ))}
          </div>
        </Portal>
      </ToastAPIContext.Provider>
    );
  },
);

ToastProvider.displayName = COMPONENT_NAMES.ToastProvider;

export default ToastProvider;
