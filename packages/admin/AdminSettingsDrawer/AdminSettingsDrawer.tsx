import {
  Button,
  Card,
  Drawer,
  DrawerHeader,
  Grid,
  Icon,
  Switch,
  Text,
  useDrawer,
} from '@packages/common';
import { useThemeMode, useThemePalette } from '@packages/helpers';
import { generateThemePalette } from '@packages/helpers/useThemePalette';
import { memo } from 'react';
import type { AdminSettingsDrawerComponentType } from './AdminSettingsDrawer.types';

const AdminSettingsDrawer: AdminSettingsDrawerComponentType = memo(
  ({
    children,
    width = 300,
    title = 'Settings',
    labelOfThemeMode = 'ThemeMode',
    labelOfThemePalettes = 'ThemePalettes',
  }) => {
    const { isOpen, openDrawer, closeDrawer } = useDrawer();

    return (
      <>
        <Button
          isCircle
          isGhost
          icon="solar:settings-line-duotone"
          iconWidth={28}
          onClick={openDrawer}
          color="auto"
        />
        <Drawer width={width} position="right" isOpen={isOpen} closeDrawer={closeDrawer}>
          <DrawerHeader title={title} closeDrawer={closeDrawer} />

          <Text text={labelOfThemeMode} isLabel />
          <SettingBlockOfThemeMode />
          <br />

          <Text text={labelOfThemePalettes} isLabel />
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
        justifyContent: 'space-between',
        height: '60px',
      }}
    >
      <Icon
        icon={isDarkMode ? 'solar:moon-bold-duotone' : 'solar:sun-2-bold-duotone'}
        width={24}
        color="primary"
      />
      <Switch value={isDarkMode} onChange={() => {}} />
    </Card>
  );
}

function SettingBlockOfThemePalettes() {
  const { allPaletteNames, themePaletteName, setThemePaletteName } = useThemePalette();
  return (
    <Grid
      cols={{ xs: 3, sm: 3, md: 3, lg: 3, xl: 3 }}
      height={(60 + 8) * Math.ceil(allPaletteNames.length / 3)}
      items={allPaletteNames.map((name) => name)}
      renderGridItem={(name) => (
        <Card
          isOutlined
          clickable
          disabled={name === themePaletteName}
          onClick={() => setThemePaletteName(name)}
          sx={{
            width: '100%',
            height: '60px',
            m: '4px',
            p: '8px',
            border: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor:
              name === themePaletteName ? generateThemePalette(name).opacity : 'transparent',
          }}
        >
          <Icon
            icon="solar:siderbar-bold-duotone"
            width={32}
            sx={{
              color: generateThemePalette(name).main,
            }}
          />
        </Card>
      )}
    />
  );
}
