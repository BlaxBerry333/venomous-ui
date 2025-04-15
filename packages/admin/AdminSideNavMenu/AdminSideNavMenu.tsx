import MuiBox from '@mui/material/Box';
import { Flex, Menu, MenuItem, Paper, Popper, Text } from '@packages/common';
import { memo } from 'react';
import type {
  AdminSideNavMenuComponentType,
  AdminSideNavMenuItemProps,
} from './AdminSideNavMenu.types';

const AdminSideNavMenu: AdminSideNavMenuComponentType = memo(
  ({ menuHeaderHeight = 50, menuWidth = 200, menuItems, activedItemUrl, logoSrc, appName }) => {
    return (
      <Paper id="VenomousUI-AdminSideNavMenu" sx={{ p: '8px', border: 1, borderColor: 'divider' }}>
        <Flex row gap={0} height={menuHeaderHeight} mb={'8px'}>
          <MuiBox
            height={32}
            width={32}
            component="img"
            alt={appName}
            src={logoSrc}
            loading="lazy"
            sx={{ m: '10px' }}
          />
          <Text text={appName} isTitle />
        </Flex>

        <Menu
          height={`calc(100svh - ${menuHeaderHeight}px)`}
          width={menuWidth}
          items={menuItems}
          renderItem={(item: AdminSideNavMenuItemProps) => (
            <Popper
              id={item.label}
              position="right"
              sx={{ p: '8px', border: 1, borderColor: 'divider' }}
              renderPopperHandler={({ isOpen, openPopper }) => (
                <MenuItem
                  label={item.label}
                  isActive={isOpen || item.url === activedItemUrl}
                  icon={item.icon}
                  clickable
                  onClick={openPopper}
                  onMouseEnter={openPopper}
                  sx={{ width: '100%', justifyContent: 'flex-start', mb: '2px' }}
                />
              )}
            >
              <Flex
                gap={0}
                sx={{
                  '& #VenomousUI-MenuItem': { mb: '2px' },
                  '& #VenomousUI-MenuItem:last-child': { mb: 0 },
                }}
              >
                {item.subItems?.map((subItem) => (
                  <MenuItem
                    key={subItem.label}
                    label={subItem.label}
                    isActive={subItem.label === activedItemUrl}
                    icon={subItem.icon}
                    clickable
                    onClick={subItem.onClick}
                    sx={{ width: '100%', justifyContent: 'flex-start' }}
                  />
                ))}
              </Flex>
            </Popper>
          )}
        />
      </Paper>
    );
  },
);

AdminSideNavMenu.displayName = 'AdminSideNavMenu';
export default AdminSideNavMenu;
