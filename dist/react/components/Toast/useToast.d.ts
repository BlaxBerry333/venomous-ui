import type { ToastAPI } from "./Toast.types";
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
export declare function useToast(): ToastAPI;
//# sourceMappingURL=useToast.d.ts.map