import type { AdminSideNavMenuItemProps } from '@packages/admin';

export function checkIsParentItemActive(
  currentPath: string,
  item: AdminSideNavMenuItemProps,
): boolean {
  const parentUrl =
    item.url ||
    (item.subItems && item.subItems[0]?.url
      ? item.subItems[0].url.split('/').slice(0, 2).join('/')
      : undefined);
  const isParentActive =
    (parentUrl && currentPath?.startsWith(parentUrl)) ||
    (item.subItems && item.subItems.some((sub) => sub.url && currentPath?.startsWith(sub.url)));
  return Boolean(isParentActive);
}

export function checkIsSubItemActive(
  currentPath: string,
  subItem: AdminSideNavMenuItemProps,
): boolean {
  return Boolean(subItem.url && currentPath?.startsWith(subItem.url));
}
