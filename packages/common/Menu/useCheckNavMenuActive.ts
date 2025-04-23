import type { NavMenuItemProps } from '@packages/common';
import { useCallback } from 'react';

export default function useCheckNavMenuActive({ currentPath }: { currentPath: string }) {
  /**
   * Check if the current path is active for a parent item.
   * @param item - The parent item to check.
   * @returns True if the parent item is active, false otherwise.
   */
  const checkIsParentItemActive = useCallback(
    (item: NavMenuItemProps): boolean => {
      let parentPrefix = item.url;
      if (!parentPrefix && item.subItems && item.subItems.length > 0) {
        const subUrls = item.subItems.map((sub: NavMenuItemProps) => sub.url).filter(Boolean);
        parentPrefix = getCommonPrefix(subUrls as string[]);
      }
      const isParentActive =
        (parentPrefix && currentPath?.startsWith(parentPrefix)) ||
        (item.subItems &&
          item.subItems.some(
            (sub: NavMenuItemProps) => sub.url && currentPath?.startsWith(sub.url),
          ));
      return Boolean(isParentActive);
    },
    [currentPath],
  );

  /**
   * Check if the current path is active for a sub item.
   * @param subItem - The sub item to check.
   * @returns True if the sub item is active, false otherwise.
   */
  const checkIsSubItemActive = useCallback(
    (subItem: NavMenuItemProps): boolean => {
      return Boolean(subItem.url && currentPath?.startsWith(subItem.url));
    },
    [currentPath],
  );

  return {
    checkIsParentItemActive,
    checkIsSubItemActive,
  };
}

/**
 * Get the common prefix of a list of URLs.
 * @param urls - The list of URLs.
 * @returns The common prefix.
 */
function getCommonPrefix(urls: string[]): string {
  if (urls.length === 0) return '';
  let prefix = urls[0];
  for (let i = 1; i < urls.length; i++) {
    while (urls[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1);
      if (!prefix) return '';
    }
  }
  // Avoid having a prefix that ends with a slash
  if (!prefix.endsWith('/')) {
    const lastSlash = prefix.lastIndexOf('/');
    prefix = prefix.slice(0, lastSlash + 1);
  }
  return prefix;
}
