'use client';

import { Children, forwardRef, isValidElement, useState } from 'react';
import { mergeClassName } from '@internal/style';
import '@packages/styles/components/Breadcrumb.scss';
import type { BreadcrumbItemProps, BreadcrumbProps } from './Breadcrumb.type';

const BLOCK = 'venomous--Breadcrumb';

/**
 * Breadcrumb — 层级导航：nav[aria-label] > ol > li。
 * 分隔符对读屏器隐藏；层级多时可折叠中间部分，展开按钮可用键盘操作。
 */
export const Breadcrumb = forwardRef<HTMLElement, BreadcrumbProps>(function Breadcrumb(
  {
    separator = '/',
    maxItems,
    expandLabel = 'Show all',
    label = 'Breadcrumb',
    className,
    children,
    ...rest
  },
  ref,
) {
  const [expanded, setExpanded] = useState(false);
  const items = Children.toArray(children).filter(isValidElement);
  const collapse = !expanded && maxItems !== undefined && maxItems >= 2 && items.length > maxItems;

  const entries = collapse
    ? [items[0]!, 'ellipsis' as const, ...items.slice(items.length - (maxItems - 1))]
    : items;

  return (
    <nav {...rest} ref={ref} aria-label={label} className={mergeClassName(BLOCK, className)}>
      <ol className={`${BLOCK}__list`}>
        {entries.map((entry, index) => (
          <li key={entry === 'ellipsis' ? 'ellipsis' : entry.key} className={`${BLOCK}__item`}>
            {index > 0 && (
              <span className={`${BLOCK}__separator`} aria-hidden="true">
                {separator}
              </span>
            )}
            {entry === 'ellipsis' ? (
              <button
                type="button"
                className={`${BLOCK}__ellipsis`}
                aria-label={expandLabel}
                onClick={() => setExpanded(true)}
              >
                …
              </button>
            ) : (
              entry
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
});

/** 单个层级：有 href 且不是当前页时渲染链接，否则渲染文字 */
export const BreadcrumbItem = forwardRef<HTMLAnchorElement, BreadcrumbItemProps>(
  function BreadcrumbItem({ current = false, href, className, children, ...rest }, ref) {
    if (current || href === undefined) {
      return (
        <span
          aria-current={current ? 'page' : undefined}
          className={mergeClassName(`${BLOCK}__current`, className)}
        >
          {children}
        </span>
      );
    }
    return (
      <a {...rest} ref={ref} href={href} className={mergeClassName(`${BLOCK}__link`, className)}>
        {children}
      </a>
    );
  },
);
