import { cloneElement, isValidElement, useId } from "react";

import { COMPONENT_NAMES, CSS_CLASSES } from "@/core/constants";
import { Tooltip } from "../Tooltip";
import type { TFormFieldProps } from "./FormField.types";

// Components that don't use error prop (they don't display error styles)
const SKIP_ERROR_INJECTION: string[] = [COMPONENT_NAMES.Checkbox, COMPONENT_NAMES.Switch, COMPONENT_NAMES.Radio];

const classes = CSS_CLASSES.formField;

/**
 * FormField component for React
 *
 * A smart layout container that auto-injects id and aria props to form controls
 *
 * @example
 * ```tsx
 * <FormField label="Email" required error={errors.email}>
 *   <Input type="email" value={email} onChange={setEmail} />
 * </FormField>
 *
 * // Horizontal layout with control position
 * <FormField label="Remember me" orientation="horizontal" controlPosition="start">
 *   <Checkbox checked={remember} onChange={setRemember} />
 * </FormField>
 * ```
 */
export function FormField({
  label,
  required = false,
  error,
  tooltip,
  tooltipIcon,
  size = "md",
  orientation = "vertical",
  controlPosition,
  className = "",
  children,
}: TFormFieldProps) {
  const fieldId = useId();
  const errorId = useId();

  const hasError = Boolean(error);

  // Get props from child element
  const childProps = isValidElement(children) ? (children.props as Record<string, unknown>) : {};
  const existingId = childProps.id as string | undefined;

  // Clone child element with auto-injected props
  // Note: only inject error when true to avoid passing false to native elements
  // Skip error injection for Checkbox/Switch/Radio as they don't display error styles
  const childDisplayName = isValidElement(children)
    ? (children.type as { displayName?: string })?.displayName
    : undefined;
  const shouldInjectError = !SKIP_ERROR_INJECTION.includes(childDisplayName as string);

  const childWithProps = isValidElement(children)
    ? // eslint-disable-next-line react-x/no-clone-element -- intentional: inject a11y props
      cloneElement(children, {
        id: existingId || fieldId,
        "aria-describedby": hasError ? errorId : undefined,
        "aria-invalid": hasError || undefined,
        error: shouldInjectError && hasError ? true : undefined,
      } as Record<string, unknown>)
    : children;

  const rootClassNames = [
    classes.root,
    classes.sizes[size],
    classes.orientations[orientation],
    controlPosition ? classes.controlPositions[controlPosition] : "",
    hasError ? classes.states.error : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const controlId = existingId || fieldId;

  return (
    <div className={rootClassNames}>
      {label && (
        <div className={classes.labelRow}>
          <label htmlFor={controlId} className={classes.label}>
            {required && <span className={classes.required}>* </span>}
            {label}
          </label>
          {tooltip && tooltipIcon && (
            <Tooltip content={tooltip} placement="top">
              <span className={classes.tooltipTrigger}>{tooltipIcon}</span>
            </Tooltip>
          )}
        </div>
      )}
      <div className={classes.control}>{childWithProps}</div>
      {hasError && (
        <div id={errorId} className={classes.error} role="alert">
          {error}
        </div>
      )}
    </div>
  );
}

FormField.displayName = COMPONENT_NAMES.FormField;
