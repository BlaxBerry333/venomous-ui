import {
  Collapse,
  CollapsedSidebar,
  Icon,
  Menu,
  MenuItem,
  Popper,
  useCheckNavMenuActive,
  type NavMenuItemProps,
} from '@packages/common';
import { memo } from 'react';
import type { AdminSideNavMenuComponentType } from './index.types';

const AdminSideNavMenu: AdminSideNavMenuComponentType = memo(
  ({
    menuHeaderHeight = 50,
    menuWidth = 220,
    collapsedWidth = 64,
    menuItems,
    currentPath,
    renderHeader,
    sx,
    collapseButtonSx,
  }) => {
    const { checkIsParentItemActive, checkIsSubItemActive } = useCheckNavMenuActive({
      currentPath,
    });

    return (
      <CollapsedSidebar
        width={menuWidth}
        headerHeight={menuHeaderHeight}
        collapsedWidth={collapsedWidth}
        defaultIsCollapsed={false}
        sx={sx}
        collapseButtonSx={collapseButtonSx}
        renderHeader={renderHeader}
        renderContent={({ isCollapsed }) => (
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

              if (!isCollapsed && item.subItems?.length) {
                return (
                  <Collapse
                    defaultIsCollapsed={true}
                    renderTrigger={(itemTrigger) => (
                      <MenuItem
                        label={item.label}
                        isActive={checkIsParentItemActive(item)}
                        icon={item.icon}
                        clickable
                        ellipsis
                        onClick={itemTrigger.toggleCollapsed}
                        endIcon={
                          <Icon
                            icon={
                              itemTrigger.isCollapsed
                                ? 'solar:alt-arrow-down-bold-duotone'
                                : 'solar:alt-arrow-up-bold-duotone'
                            }
                          />
                        }
                        sx={{
                          backgroundColor: itemTrigger.isCollapsed ? 'transparent' : 'divider',
                        }}
                      />
                    )}
                    style={
                      {
                        // width: 'calc(100% - 26px)',
                        // marginLeft: '26px',
                      }
                    }
                  >
                    <Menu
                      width={'100%'}
                      items={item.subItems}
                      renderItem={(subItem) => (
                        <MenuItem
                          key={subItem.label}
                          label={subItem.label}
                          isActive={checkIsSubItemActive(subItem)}
                          startIconPlaceholder
                          clickable
                          ellipsis
                          onClick={subItem.onClick}
                          sx={{}}
                        />
                      )}
                    />
                  </Collapse>
                );
              }

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
        )}
      />
    );
  },
);

AdminSideNavMenu.displayName = 'AdminSideNavMenu';
export default AdminSideNavMenu;
