import { useCallback, useEffect, useRef, useState } from "react";

import { CSS_CLASSES } from "@/core/constants";
import type { TToastData, TToastStore, TToastType } from "@/core/types";
import type { TToastIcons } from "./Toast.types";

const DEFAULT_TYPE_ICONS: Record<TToastType, string> = {
  success: "\u2713",
  error: "\u2715",
  warning: "\u26A0",
  info: "\u2139",
};

const classes = CSS_CLASSES.toast;

interface TToastItemProps {
  toast: TToastData;
  store: TToastStore;
  defaultDuration: number;
  defaultClosable: boolean;
  icons?: TToastIcons;
}

export function ToastItem({ toast: toastData, store, defaultDuration, defaultClosable, icons }: TToastItemProps) {
  const [isClosing, setIsClosing] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const remainingRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);
  const itemRef = useRef<HTMLLIElement>(null);

  const duration = toastData.duration ?? defaultDuration;
  const closable = toastData.closable ?? defaultClosable;
  const typeIcon = icons?.[toastData.type];

  const handleClose = useCallback(
    (isAutoClose = false) => {
      if (isClosing) return;
      setIsClosing(true);

      const element = itemRef.current;
      /* v8 ignore next -- defensive: element ref is always available after mount */
      if (!element) {
        store.dismiss(toastData.id);
        if (isAutoClose) toastData.onAutoClose?.();
        return;
      }

      const onAnimationEnd = () => {
        element.removeEventListener("animationend", onAnimationEnd);
        store.dismiss(toastData.id);
        if (isAutoClose) toastData.onAutoClose?.();
      };
      element.addEventListener("animationend", onAnimationEnd);
    },
    [isClosing, toastData, store],
  );

  const handleCloseRef = useRef(handleClose);
  handleCloseRef.current = handleClose;

  // Auto-close timer
  useEffect(() => {
    if (duration <= 0) return;

    remainingRef.current = duration;
    startTimeRef.current = Date.now();
    timerRef.current = setTimeout(() => handleCloseRef.current(true), duration);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [duration]);

  // Hover pause/resume
  const handleMouseEnter = useCallback(() => {
    if (duration <= 0 || !timerRef.current) return;
    clearTimeout(timerRef.current);
    timerRef.current = null;
    remainingRef.current -= Date.now() - startTimeRef.current;
  }, [duration]);

  const handleMouseLeave = useCallback(() => {
    if (duration <= 0 || remainingRef.current <= 0) return;
    startTimeRef.current = Date.now();
    timerRef.current = setTimeout(() => handleCloseRef.current(true), remainingRef.current);
  }, [duration]);

  const toastClassNames = [classes.root, classes.types[toastData.type], isClosing ? classes.closing : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <li
      ref={itemRef}
      className={toastClassNames}
      role="status"
      aria-live={toastData.type === "error" ? "assertive" : "polite"}
      aria-atomic="true"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className={classes.icon}>{typeIcon ?? DEFAULT_TYPE_ICONS[toastData.type]}</span>

      <div className={classes.content}>
        <p className={classes.title}>{toastData.title}</p>
        {toastData.description && <p className={classes.description}>{toastData.description}</p>}
      </div>

      {closable && (
        <button type="button" className={classes.close} aria-label="Close" onClick={() => handleClose(false)}>
          {icons?.close ?? "\u2715"}
        </button>
      )}
    </li>
  );
}
