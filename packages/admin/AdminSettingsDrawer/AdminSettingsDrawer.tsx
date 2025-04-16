import { Tooltip } from '@mui/material';
import { Button, Card, Drawer, DrawerHeader, Grid, Icon, Text, useDrawer } from '@packages/common';
import { useThemeMode, useThemePalette } from '@packages/helpers';
import { generateThemePalette } from '@packages/helpers/useThemePalette';
import { memo } from 'react';
import type { AdminSettingsDrawerComponentType } from './AdminSettingsDrawer.types';

const AdminSettingsDrawer: AdminSettingsDrawerComponentType = memo(
  ({ children, width = 300, title = 'Settings' }) => {
    const { isOpen, openDrawer, closeDrawer } = useDrawer();

    return (
      <>
        <Button
          isCircle
          isGhost
          icon="solar:settings-line-duotone"
          iconWidth={28}
          onClick={openDrawer}
        />
        <Drawer width={width} position="right" isOpen={isOpen} closeDrawer={closeDrawer}>
          <DrawerHeader title={title} closeDrawer={closeDrawer} />

          <Text text="ThemeMode" isLabel ellipsis />
          <SettingBlockOfThemeMode />
          <br />

          <Text text="ThemePalettes" isLabel ellipsis />
          <SettingBlockOfThemePalettes />
          <br />

          {children}
        </Drawer>
      </>
    );
  },
);

AdminSettingsDrawer.displayName = 'AdminSettingsDrawer';
export default AdminSettingsDrawer;

function SettingBlockOfThemeMode() {
  const { isDarkMode, toggleThemeMode } = useThemeMode();
  return (
    <Card
      isOutlined
      clickable
      onClick={toggleThemeMode}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}
    >
      <Icon
        icon={isDarkMode ? 'solar:moon-bold-duotone' : 'solar:sun-2-bold-duotone'}
        width={24}
        color="primary"
      />
    </Card>
  );
}

function SettingBlockOfThemePalettes() {
  const { allPaletteNames, themePaletteName, setThemePaletteName } = useThemePalette();
  return (
    <Grid
      cols={{ xs: 3, sm: 3, md: 3, lg: 3, xl: 3 }}
      height={80 * Math.ceil(allPaletteNames.length / 3)}
      items={allPaletteNames.map((name) => name)}
      renderGridItem={(name) => (
        <Tooltip title={name} arrow>
          <div style={{ margin: '4px', width: '100%' }}>
            <Card
              isOutlined
              clickable
              disabled={name === themePaletteName}
              onClick={() => setThemePaletteName(name)}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor:
                  name === themePaletteName ? generateThemePalette(name).main : 'transparent',
              }}
            >
              <Icon
                icon="solar:siderbar-bold-duotone"
                width={40}
                sx={{
                  color: name === themePaletteName ? 'white' : generateThemePalette(name).main,
                }}
              />
            </Card>
          </div>
        </Tooltip>
      )}
    />
  );
}
