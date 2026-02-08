import { forwardRef, isValidElement } from "react";

import { COMPONENT_NAMES, CSS_CLASSES } from "@/core/constants";
import type { TBreadcrumbEllipsisProps, TBreadcrumbItemProps, TBreadcrumbProps } from "./Breadcrumb.types";

const classes = CSS_CLASSES.breadcrumb;

/**
 * Flatten children into a flat array of valid React elements.
 */
function flattenChildren(children: React.ReactNode): React.ReactNode[] {
  const result: React.ReactNode[] = [];
  const arr = Array.isArray(children) ? children : [children];
  for (const child of arr) {
    if (Array.isArray(child)) {
      result.push(...flattenChildren(child));
    } else if (isValidElement(child)) {
      result.push(child);
    }
  }
  return result;
}

/**
 * Breadcrumb root component
 * Renders a <nav> with an <ol> list inside
 * Automatically inserts separator nodes between children
 */
export const Breadcrumb = forwardRef<HTMLElement, TBreadcrumbProps>(function Breadcrumb(
  { separator = "/", className = "", children, ...rest },
  ref,
) {
  const items = flattenChildren(children);
  const withSeparators: React.ReactNode[] = [];

  items.forEach((child, index) => {
    if (index > 0) {
      withSeparators.push(
        // eslint-disable-next-line react-x/no-array-index-key -- separator is a static presentational element with no identity
        <li key={`sep-${index}`} className={classes.item} aria-hidden="true" role="presentation">
          <span className={classes.separator}>{separator}</span>
        </li>,
      );
    }
    withSeparators.push(child);
  });

  return (
    <nav ref={ref} aria-label="Breadcrumb" className={`${classes.root} ${className}`.trim()} {...rest}>
      <ol className={classes.list}>{withSeparators}</ol>
    </nav>
  );
}) as React.ForwardRefExoticComponent<TBreadcrumbProps & React.RefAttributes<HTMLElement>> & {
  Item: typeof BreadcrumbItem;
  Ellipsis: typeof BreadcrumbEllipsis;
};

Breadcrumb.displayName = COMPONENT_NAMES.Breadcrumb;

/**
 * Breadcrumb.Item component
 * Renders <li> with either <a> (when href provided) or <span>
 */
const BreadcrumbItem = forwardRef<HTMLLIElement, TBreadcrumbItemProps>(function BreadcrumbItem(
  { href, isCurrentPage = false, disabled = false, className = "", children, ...rest },
  ref,
) {
  const content =
    href && !isCurrentPage && !disabled ? (
      <a href={href} className={classes.link}>
        {children}
      </a>
    ) : (
      <span
        className={`${classes.text} ${isCurrentPage ? classes.textCurrent : ""}`.trim()}
        {...(isCurrentPage ? { "aria-current": "page" as const } : {})}
        {...(disabled ? { "aria-disabled": "true" as const } : {})}
      >
        {children}
      </span>
    );

  const liClassName = `${classes.item} ${disabled ? classes.itemDisabled : ""} ${className}`.trim();

  return (
    <li ref={ref} className={liClassName} {...rest}>
      {content}
    </li>
  );
});

BreadcrumbItem.displayName = `${COMPONENT_NAMES.Breadcrumb}.Item`;

/**
 * Breadcrumb.Ellipsis component
 * Renders <li> with ellipsis placeholder (…)
 */
const BreadcrumbEllipsis = forwardRef<HTMLLIElement, TBreadcrumbEllipsisProps>(function BreadcrumbEllipsis(
  { className = "", children, ...rest },
  ref,
) {
  return (
    <li ref={ref} className={`${classes.item} ${className}`.trim()} {...rest}>
      <span className={classes.ellipsis} role="presentation">
        {children ?? "\u2026"}
      </span>
    </li>
  );
});

BreadcrumbEllipsis.displayName = `${COMPONENT_NAMES.Breadcrumb}.Ellipsis`;

// Attach sub-components
Breadcrumb.Item = BreadcrumbItem;
Breadcrumb.Ellipsis = BreadcrumbEllipsis;

export { BreadcrumbEllipsis, BreadcrumbItem };
