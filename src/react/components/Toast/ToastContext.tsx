"use client";

import React from "react";

import type { ToastAPIContextValue } from "./Toast.types";

/**
 * Toast API Context
 *
 * Contains dispatch and config - stable values that rarely change.
 * useToast hooks subscribe to this context only, preventing re-renders
 * when toast state changes.
 */
// eslint-disable-next-line react-refresh/only-export-components
export const ToastAPIContext = React.createContext<ToastAPIContextValue | null>(null);

ToastAPIContext.displayName = "ToastAPIContext";

/**
 * @deprecated Use ToastAPIContext instead
 */
export const ToastContext = ToastAPIContext;
