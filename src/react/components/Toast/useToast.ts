"use client";

import React from "react";

import type { ReactNode } from "react";

import type { ToastAPI, ToastInstance, ToastOptions, ToastPromise } from "./Toast.types";
import { ToastAPIContext } from "./ToastContext";

let toastIdCounter = 0;

/**
 * Generate unique toast ID
 */
function generateToastId(): string {
  return `toast-${Date.now()}-${++toastIdCounter}`;
}

/**
 * Create a ToastPromise from a regular Promise
 */
function createToastPromise(id: string, promise: Promise<void>): ToastPromise {
  const toastPromise = promise as ToastPromise;
  toastPromise.id = id;
  return toastPromise;
}

/**
 * useToast hook - provides API to show/update/close toasts
 *
 * @returns ToastAPI object with methods to control toasts
 * @throws Error if used outside of ToastProvider
 *
 * @example
 * ```tsx
 * const toast = useToast();
 *
 * // Simple usage
 * toast.success("Saved successfully");
 * toast.error("Something went wrong");
 *
 * // With options
 * toast.info("New message", { description: "You have a new notification" });
 *
 * // Loading -> Success pattern
 * const { id } = toast.loading("Saving...");
 * await saveData();
 * toast.set(id, { variant: "success", title: "Saved!", duration: 3000 });
 *
 * // Wait for toast to close
 * await toast.success("Done!");
 * console.log("Toast closed");
 * ```
 */
export function useToast(): ToastAPI {
  const context = React.useContext(ToastAPIContext);

  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }

  const { dispatch, config } = context;

  /**
   * Create and add a toast
   */
  const createToast = React.useCallback(
    (variant: ToastInstance["variant"], title: ReactNode, options?: Omit<ToastOptions, "variant" | "title">) => {
      const id = generateToastId();

      let resolvePromise: () => void;
      const promise = new Promise<void>((resolve) => {
        resolvePromise = resolve;
      });

      // Determine duration based on variant
      let duration = options?.duration;
      if (duration === undefined) {
        duration = variant === "loading" ? 0 : config.duration;
      }

      // Determine closable - default to true for all variants
      const closable = options?.closable ?? true;

      const toast: ToastInstance = {
        id,
        variant,
        title,
        description: options?.description,
        duration,
        closable,
        showIcon: options?.showIcon ?? true,
        icon: options?.icon,
        action: options?.action,
        onClose: options?.onClose,
        createdAt: Date.now(),
        state: "entering",
        resolve: resolvePromise!,
      };

      dispatch({ type: "ADD", toast });

      return createToastPromise(id, promise);
    },
    [dispatch, config.duration],
  );

  const success = React.useCallback(
    (title: ReactNode, options?: Omit<ToastOptions, "variant" | "title">) => {
      return createToast("success", title, options);
    },
    [createToast],
  );

  const error = React.useCallback(
    (title: ReactNode, options?: Omit<ToastOptions, "variant" | "title">) => {
      return createToast("error", title, options);
    },
    [createToast],
  );

  const warning = React.useCallback(
    (title: ReactNode, options?: Omit<ToastOptions, "variant" | "title">) => {
      return createToast("warning", title, options);
    },
    [createToast],
  );

  const info = React.useCallback(
    (title: ReactNode, options?: Omit<ToastOptions, "variant" | "title">) => {
      return createToast("info", title, options);
    },
    [createToast],
  );

  const loading = React.useCallback(
    (title: ReactNode, options?: Omit<ToastOptions, "variant" | "title">) => {
      return createToast("loading", title, options);
    },
    [createToast],
  );

  const open = React.useCallback(
    (options: ToastOptions & { title: ReactNode }) => {
      const { variant = "info", title, ...rest } = options;
      return createToast(variant, title, rest);
    },
    [createToast],
  );

  const set = React.useCallback(
    (id: string, options: Partial<ToastOptions>) => {
      dispatch({ type: "SET", id, options });
    },
    [dispatch],
  );

  const close = React.useCallback(
    (id: string) => {
      dispatch({ type: "SET_STATE", id, state: "exiting" });
    },
    [dispatch],
  );

  const closeAll = React.useCallback(() => {
    dispatch({ type: "REMOVE_ALL" });
  }, [dispatch]);

  return React.useMemo(
    () => ({
      success,
      error,
      warning,
      info,
      loading,
      open,
      set,
      close,
      closeAll,
    }),
    [success, error, warning, info, loading, open, set, close, closeAll],
  );
}
