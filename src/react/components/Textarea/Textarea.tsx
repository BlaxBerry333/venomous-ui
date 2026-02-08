import { forwardRef, useCallback, useEffect, useRef } from "react";

import { COMPONENT_NAMES, CSS_CLASSES } from "@/core/constants";
import { useMergeRefs } from "@/react/hooks";
import type { TTextareaProps } from "./Textarea.types";

const classes = CSS_CLASSES.textarea;

/**
 * Textarea component for React
 *
 * @example
 * ```tsx
 * <Textarea placeholder="Enter description" />
 * <Textarea rows={5} resize="none" />
 * <Textarea autoResize placeholder="Auto-growing textarea" />
 * ```
 */
export const Textarea = forwardRef<HTMLTextAreaElement, TTextareaProps>(function Textarea(
  {
    size = "md",
    resize = "vertical",
    autoResize = false,
    disabled = false,
    readOnly = false,
    error,
    rows = 3,
    className = "",
    onChange,
    ...rest
  },
  ref,
) {
  const internalRef = useRef<HTMLTextAreaElement>(null);
  const mergedRef = useMergeRefs(internalRef, ref);

  const adjustHeight = useCallback(() => {
    const textarea = internalRef.current;
    if (!textarea || !autoResize) return;

    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  }, [autoResize]);

  useEffect(() => {
    adjustHeight();
  }, [adjustHeight]);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (autoResize) {
      adjustHeight();
    }
    onChange?.(event);
  };

  const classNames = [
    classes.root,
    classes.sizes[size],
    !autoResize ? classes.resize[resize] : classes.resize.none,
    error ? classes.states.error : "",
    disabled ? classes.states.disabled : "",
    readOnly ? classes.states.readonly : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <textarea
      ref={mergedRef}
      className={classNames}
      disabled={disabled}
      readOnly={readOnly}
      rows={rows}
      aria-invalid={error || undefined}
      onChange={handleChange}
      {...rest}
    />
  );
});

Textarea.displayName = COMPONENT_NAMES.Textarea;
