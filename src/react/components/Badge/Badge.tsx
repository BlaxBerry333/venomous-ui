import { forwardRef } from "react";

import { COMPONENT_NAMES, CSS_CLASSES } from "@/core/constants";
import type { TBadgeProps } from "./Badge.types";

const classes = CSS_CLASSES.badge;

/**
 * Badge component for React
 *
 * Displays a badge indicator, either attached to a child element
 * or as a standalone inline element.
 */
export const Badge = forwardRef<HTMLElement, TBadgeProps>(function Badge(
  { content, dot = false, max = 99, colorScheme = "error", hidden = false, className = "", children, ...rest },
  ref,
) {
  // Determine if badge should be visible and what to display
  const shouldShow = getShouldShow(dot, hidden, content);
  const displayContent = getDisplayContent(dot, content, max);

  const badgeClassNames = [classes.root, classes.colors[colorScheme], dot ? classes.dot : "", className]
    .filter(Boolean)
    .join(" ");

  const badge = shouldShow ? (
    <sup ref={ref} className={badgeClassNames} {...rest}>
      {displayContent}
    </sup>
  ) : null;

  // Standalone mode — no children
  if (!children) {
    return badge;
  }

  // Attached mode — wrap children
  return (
    <span className={classes.wrapper}>
      {children}
      {badge}
    </span>
  );
});

Badge.displayName = COMPONENT_NAMES.Badge;

/**
 * Determine if the badge should be visible
 */
function getShouldShow(dot: boolean, hidden: boolean, content: number | string | undefined): boolean {
  if (hidden) return false;
  if (dot) return true;
  if (content === undefined) return false;
  if (typeof content === "number" && content <= 0) return false;
  return true;
}

/**
 * Get the display content for the badge
 */
function getDisplayContent(dot: boolean, content: number | string | undefined, max: number): string | undefined {
  if (dot) return undefined;
  if (typeof content === "number" && content > max) return `${max}+`;
  if (content !== undefined) return String(content);
  return undefined;
}
