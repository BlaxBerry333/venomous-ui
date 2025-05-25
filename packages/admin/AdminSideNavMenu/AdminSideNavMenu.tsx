import {
  Flex,
  Menu,
  MenuItem,
  Paper,
  Popper,
  useCheckNavMenuActive,
  type NavMenuItemProps,
} from '@packages/common';
import { memo } from 'react';
import type { AdminSideNavMenuComponentType } from './AdminSideNavMenu.types';

const AdminSideNavMenu: AdminSideNavMenuComponentType = memo(
  ({ menuHeaderHeight = 50, menuWidth = 220, menuItems, currentPath, menuHeaderElement, sx }) => {
    const { checkIsParentItemActive, checkIsSubItemActive } = useCheckNavMenuActive({
      currentPath,
    });

    return (
      <Paper
        className="VenomousUI-AdminSideNavMenu"
        isOutlined
        sx={{ width: menuWidth, height: '100svh', ...sx }}
      >
        <Flex row gap={0} height={menuHeaderHeight} px={'8px'} mb={'8px'}>
          {menuHeaderElement}
        </Flex>

        <Menu
          width="100%"
          height={`calc(100svh - ${menuHeaderHeight}px - 16px)`}
          items={menuItems}
          renderItem={(item: NavMenuItemProps) => {
            if (!item.subItems)
              return (
                <MenuItem
                  key={item.label}
                  label={item.label}
                  isActive={checkIsParentItemActive(item)}
                  icon={item.icon}
                  clickable
                  ellipsis
                  onClick={item.onClick}
                />
              );

            return (
              <Popper
                id={item.label}
                position="right"
                sx={{ width: '100%' }}
                contentSx={{ p: '8px' }}
                renderPopperHandler={({ isOpen, openPopper }) => (
                  <MenuItem
                    label={item.label}
                    isActive={checkIsParentItemActive(item)}
                    icon={item.icon}
                    clickable
                    ellipsis
                    onClick={openPopper}
                    onMouseEnter={openPopper}
                    sx={{ backgroundColor: isOpen ? 'divider' : 'transparent' }}
                  />
                )}
              >
                <Menu
                  width={menuWidth}
                  items={item.subItems}
                  renderItem={(subItem) => (
                    <MenuItem
                      key={subItem.label}
                      label={subItem.label}
                      isActive={checkIsSubItemActive(subItem)}
                      icon={subItem.icon}
                      clickable
                      ellipsis
                      onClick={subItem.onClick}
                    />
                  )}
                />
              </Popper>
            );
          }}
        />
      </Paper>
    );
  },
);

AdminSideNavMenu.displayName = 'AdminSideNavMenu';
export default AdminSideNavMenu;
