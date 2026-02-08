import { forwardRef, useCallback } from "react";

import { COMPONENT_NAMES, CSS_CLASSES } from "@/core/constants";
import type { TCardProps } from "./Card.types";

const classes = CSS_CLASSES.card;

/**
 * Card component for React
 *
 * A styled container with variant styles and optional clickable behavior.
 * Use CSS classes for internal structure (header, body, footer).
 */
export const Card = forwardRef<HTMLDivElement, TCardProps>(function Card(
  { variant = "elevated", clickable = false, className = "", children, onClick, onKeyDown, ...rest },
  ref,
) {
  const classNames = [classes.root, classes.variants[variant], clickable ? classes.states.clickable : "", className]
    .filter(Boolean)
    .join(" ");

  // Handle keyboard interaction for clickable cards
  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (clickable && (event.key === "Enter" || event.key === " ")) {
        event.preventDefault();
        // Trigger click event
        onClick?.(event as unknown as React.MouseEvent<HTMLDivElement>);
      }
      onKeyDown?.(event);
    },
    [clickable, onClick, onKeyDown],
  );

  // a11y attributes for clickable cards
  const a11yProps = clickable
    ? {
        role: "button" as const,
        tabIndex: 0,
        onKeyDown: handleKeyDown,
        onClick,
      }
    : { onClick };

  return (
    <div ref={ref} className={classNames} {...a11yProps} {...rest}>
      {children}
    </div>
  );
});

Card.displayName = COMPONENT_NAMES.Card;
