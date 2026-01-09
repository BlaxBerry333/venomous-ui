import React from "react";
import type { ToastAPIContextValue } from "./Toast.types";
/**
 * Toast API Context
 *
 * Contains dispatch and config - stable values that rarely change.
 * useToast hooks subscribe to this context only, preventing re-renders
 * when toast state changes.
 */
export declare const ToastAPIContext: React.Context<ToastAPIContextValue | null>;
/**
 * @deprecated Use ToastAPIContext instead
 */
export declare const ToastContext: React.Context<ToastAPIContextValue | null>;
//# sourceMappingURL=ToastContext.d.ts.map