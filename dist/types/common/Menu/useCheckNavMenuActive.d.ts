import type { NavMenuItemProps } from '@packages/common';
export default function useCheckNavMenuActive({ currentPath }: {
    currentPath: string;
}): {
    checkIsParentItemActive: (item: NavMenuItemProps) => boolean;
    checkIsSubItemActive: (subItem: NavMenuItemProps) => boolean;
};
