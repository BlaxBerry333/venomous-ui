import { useSyncExternalStore } from "react";

import { CSS_CLASSES } from "@/core/constants";
import { toastStore as defaultStore } from "@/core/helpers/toast-store";
import type { TToastData } from "@/core/types";
import { Portal } from "../Portal";
import type { TToasterProps } from "./Toast.types";
import { ToastItem } from "./ToastItem";

const classes = CSS_CLASSES.toast;

const SERVER_SNAPSHOT: TToastData[] = [];

/**
 * Toaster container component for React
 *
 * Place once in your app to render toast notifications.
 * Use the `toast` function from `venomous-ui/core/helpers` to trigger toasts.
 */
export function Toaster({
  store = defaultStore,
  placement = "top",
  duration = 4000,
  closable = true,
  className = "",
  icons,
}: TToasterProps) {
  const toasts = useSyncExternalStore(store.subscribe, store.getToasts, () => SERVER_SNAPSHOT);

  if (toasts.length === 0) {
    return null;
  }

  const containerClassNames = [classes.container, classes.placements[placement], className].filter(Boolean).join(" ");

  return (
    <Portal>
      <ol className={containerClassNames} role="region" aria-label="Notifications" tabIndex={-1}>
        {toasts.map((t) => (
          <ToastItem
            key={t.id}
            toast={t}
            store={store}
            defaultDuration={duration}
            defaultClosable={closable}
            icons={icons}
          />
        ))}
      </ol>
    </Portal>
  );
}
