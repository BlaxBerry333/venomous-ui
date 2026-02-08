import { forwardRef } from "react";

import { COMPONENT_NAMES, CSS_CLASSES } from "@/core/constants";
import type { TCheckboxProps } from "./Checkbox.types";

const classes = CSS_CLASSES.checkbox;

/**
 * Checkbox component for React
 *
 * Supports two modes:
 * - Native mode (default): Uses browser's native checkbox
 * - Custom mode: Uses custom icons when checkedIcon/uncheckedIcon are provided
 *
 * @example
 * ```tsx
 * // Native mode
 * <Checkbox label="Accept terms" />
 *
 * // Custom mode with icons
 * <Checkbox
 *   label="Accept terms"
 *   checkedIcon={<Icon icon="mdi:checkbox-marked" />}
 *   uncheckedIcon={<Icon icon="mdi:checkbox-blank-outline" />}
 * />
 * ```
 */
export const Checkbox = forwardRef<HTMLInputElement, TCheckboxProps>(function Checkbox(
  { size = "md", checked, disabled = false, label, checkedIcon, uncheckedIcon, className = "", ...rest },
  ref,
) {
  const isCustomMode = Boolean(checkedIcon || uncheckedIcon);
  // Support both controlled (checked prop) and uncontrolled (defaultChecked) modes
  const isControlled = checked !== undefined;

  const classNames = [
    classes.root,
    classes.sizes[size],
    isCustomMode ? classes.custom : "",
    checked ? classes.states.checked : "",
    disabled ? classes.states.disabled : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <label className={classNames}>
      <input
        ref={ref}
        type="checkbox"
        className={classes.input}
        checked={isControlled ? checked : undefined}
        disabled={disabled}
        {...rest}
      />
      {isCustomMode && (
        <span className={classes.control}>
          <span className={classes.icon}>{checked ? checkedIcon : uncheckedIcon}</span>
        </span>
      )}
      {label && <span className={classes.label}>{label}</span>}
    </label>
  );
});

Checkbox.displayName = COMPONENT_NAMES.Checkbox;
