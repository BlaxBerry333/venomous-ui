import MuiBox from '@mui/material/Box';
import { Flex, Menu, MenuItem, Paper, Popper, Text } from '@packages/common';
import { memo } from 'react';
import type {
  AdminSideNavMenuComponentType,
  AdminSideNavMenuItemProps,
} from './AdminSideNavMenu.types';

const AdminSideNavMenu: AdminSideNavMenuComponentType = memo(
  ({ menuHeaderHeight = 50, menuWidth = 220, menuItems, activedItemUrl, logoSrc, appName }) => {
    return (
      <Paper
        id="VenomousUI-AdminSideNavMenu"
        isOutlined
        sx={{ width: menuWidth, height: '100svh' }}
      >
        <Flex row gap={0} height={menuHeaderHeight} mb={'8px'}>
          <MuiBox
            width={32}
            height={32}
            component="img"
            alt={appName}
            src={logoSrc}
            draggable={false}
            loading="lazy"
            sx={{ m: '10px' }}
          />
          <Text text={appName} isTitle />
        </Flex>

        <Menu
          width="100%"
          height={`calc(100svh - ${menuHeaderHeight}px)`}
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
                  isActive={isOpen || item.url === activedItemUrl}
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
                    isActive={subItem.label === activedItemUrl}
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
