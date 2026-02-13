import { forwardRef } from "react";

import { COMPONENT_NAMES, CSS_CLASSES } from "@/core/constants";
import type { TRadioProps } from "./Radio.types";

const classes = CSS_CLASSES.radio;

/**
 * Radio component for React
 *
 * Supports two modes:
 * - Native mode (default): Uses browser's native radio
 * - Custom mode: Uses custom icons when checkedIcon/uncheckedIcon are provided
 *
 * @example
 * ```tsx
 * // Native mode
 * <Radio name="option" value="a" label="Option A" />
 *
 * // Custom mode with icons
 * <Radio
 *   name="option"
 *   value="a"
 *   label="Option A"
 *   checkedIcon={<Icon icon="mdi:radiobox-marked" />}
 *   uncheckedIcon={<Icon icon="mdi:radiobox-blank" />}
 * />
 * ```
 */
export const Radio = forwardRef<HTMLInputElement, TRadioProps>(function Radio(
  { size = "md", checked, disabled = false, name, value, label, checkedIcon, uncheckedIcon, className = "", ...rest },
  ref,
) {
  const isCustomMode = Boolean(checkedIcon || uncheckedIcon);

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
        type="radio"
        className={classes.input}
        name={name}
        value={value}
        checked={checked}
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

Radio.displayName = COMPONENT_NAMES.Radio;
