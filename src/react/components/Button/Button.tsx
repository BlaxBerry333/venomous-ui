import { forwardRef } from "react";

import { COMPONENT_NAMES, CSS_CLASSES } from "@/core/constants";
import type { TButtonProps } from "./Button.types";

const classes = CSS_CLASSES.button;

/**
 * Button component for React
 */
export const Button = forwardRef<HTMLButtonElement, TButtonProps>(function Button(
  {
    size = "md",
    variant = "solid",
    colorScheme = "theme",
    disabled = false,
    fullWidth = false,
    className = "",
    children,
    ...rest
  },
  ref,
) {
  const classNames = [
    classes.root,
    classes.sizes[size],
    classes.variants[variant],
    colorScheme !== "theme" ? classes.colors[colorScheme] : "",
    fullWidth ? classes.states.fullWidth : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button ref={ref} className={classNames} disabled={disabled} {...rest}>
      {children}
    </button>
  );
});

Button.displayName = COMPONENT_NAMES.Button;
