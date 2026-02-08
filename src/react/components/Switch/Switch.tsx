import { forwardRef } from "react";

import { COMPONENT_NAMES, CSS_CLASSES } from "@/core/constants";
import type { TSwitchProps } from "./Switch.types";

const classes = CSS_CLASSES.switch;

/**
 * Switch component for React
 *
 * @example
 * ```tsx
 * <Switch checked={isOn} onChange={(e) => setIsOn(e.target.checked)} />
 * ```
 */
export const Switch = forwardRef<HTMLInputElement, TSwitchProps>(function Switch(
  { size = "md", checked, disabled = false, label, className = "", ...rest },
  ref,
) {
  // Support both controlled (checked prop) and uncontrolled (defaultChecked) modes
  const isControlled = checked !== undefined;

  const classNames = [
    classes.root,
    classes.sizes[size],
    checked ? classes.states.checked : "",
    disabled ? classes.states.disabled : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <label className={classNames}>
      <input ref={ref} type="checkbox" checked={isControlled ? checked : undefined} disabled={disabled} {...rest} />
      <span className={classes.track}>
        <span className={classes.thumb} />
      </span>
      {label && <span className={classes.label}>{label}</span>}
    </label>
  );
});

Switch.displayName = COMPONENT_NAMES.Switch;
