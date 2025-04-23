import { Flex, Menu, MenuItem, Paper, Popper } from '@packages/common';
import { memo } from 'react';
import type {
  AdminSideNavMenuComponentType,
  AdminSideNavMenuItemProps,
} from './AdminSideNavMenu.types';

const AdminSideNavMenu: AdminSideNavMenuComponentType = memo(
  ({
    menuHeaderHeight = 50,
    menuWidth = 220,
    menuItems,
    activedMenuItemUrl,
    menuHeaderElement,
    sx,
  }) => {
    return (
      <Paper
        id="VenomousUI-AdminSideNavMenu"
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
          renderItem={(item: AdminSideNavMenuItemProps) => (
            <Popper
              id={item.label}
              position="right"
              sx={{ width: '100%' }}
              contentSx={{ p: '8px' }}
              renderPopperHandler={({ isOpen, openPopper }) => (
                <MenuItem
                  label={item.label}
                  isActive={isOpen || item.url === activedMenuItemUrl}
                  icon={item.icon}
                  clickable
                  onClick={openPopper}
                  onMouseEnter={openPopper}
                />
              )}
            >
              <Menu
                items={item.subItems}
                renderItem={(subItem) => (
                  <MenuItem
                    key={subItem.label}
                    label={subItem.label}
                    isActive={subItem.label === activedMenuItemUrl}
                    icon={subItem.icon}
                    clickable
                    onClick={subItem.onClick}
                  />
                )}
              />
            </Popper>
          )}
        />
      </Paper>
    );
  },
);

AdminSideNavMenu.displayName = 'AdminSideNavMenu';
export default AdminSideNavMenu;
