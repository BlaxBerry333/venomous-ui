import { forwardRef } from "react";

import { COMPONENT_NAMES, CSS_CLASSES } from "@/core/constants";
import type { TInputProps } from "./Input.types";

const classes = CSS_CLASSES.input;

/**
 * Input component for React
 *
 * @example
 * ```tsx
 * <Input placeholder="Enter text" />
 * <Input prefix={<Icon icon="search" />} placeholder="Search..." />
 * <Input suffix={<Icon icon="eye" />} type="password" />
 * ```
 */
export const Input = forwardRef<HTMLInputElement, TInputProps>(function Input(
  { type = "text", size = "md", disabled = false, readOnly = false, error, className = "", prefix, suffix, ...rest },
  ref,
) {
  const wrapperClassNames = [
    classes.wrapper,
    classes.sizes[size],
    error ? classes.states.error : "",
    disabled ? classes.states.disabled : "",
    readOnly ? classes.states.readonly : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={wrapperClassNames}>
      {prefix && <span className={classes.prefix}>{prefix}</span>}
      <input
        ref={ref}
        type={type}
        className={classes.root}
        disabled={disabled}
        readOnly={readOnly}
        aria-invalid={error || undefined}
        {...rest}
      />
      {suffix && <span className={classes.suffix}>{suffix}</span>}
    </div>
  );
});

Input.displayName = COMPONENT_NAMES.Input;
