import {
  Button,
  Card,
  Drawer,
  DrawerHeader,
  Icon,
  Switch,
  Text,
  useDrawer,
} from '@packages/common';
import { useThemeMode, useThemePalette } from '@packages/helpers';
import { generateThemePalette } from '@packages/helpers/useThemePalette';
import { memo } from 'react';
import type {
  AdminSettingsDrawerComponentType,
  AdminSettingsDrawerProps,
} from './AdminSettingsDrawer.types';
import AdminSettingsDrawerBlock from './AdminSettingsDrawerBlock';

const AdminSettingsDrawer: AdminSettingsDrawerComponentType = memo(
  ({
    children,
    width = 300,
    title = 'Settings',
    labelOfThemeMode = 'ThemeMode',
    labelOfThemePalettes = 'ThemePalettes',

    onChangeThemeMode,
    onChangeThemePalette,
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
          <SettingBlockOfThemeMode onChangeThemeMode={onChangeThemeMode} />
          <br />

          <Text text={labelOfThemePalettes} isLabel />
          <SettingBlockOfThemePalettes onChangeThemePalette={onChangeThemePalette} />
          <br />

          {children}
        </Drawer>
      </>
    );
  },
);

AdminSettingsDrawer.displayName = 'AdminSettingsDrawer';
export default AdminSettingsDrawer;

function SettingBlockOfThemeMode({
  onChangeThemeMode,
}: Pick<AdminSettingsDrawerProps, 'onChangeThemeMode'>) {
  const { themeMode, isDarkMode, toggleThemeMode } = useThemeMode();
  return (
    <Card
      isOutlined
      clickable
      onClick={() => {
        toggleThemeMode();
        setTimeout(() => void onChangeThemeMode?.(themeMode), 200);
      }}
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

function SettingBlockOfThemePalettes({
  onChangeThemePalette,
}: Pick<AdminSettingsDrawerProps, 'onChangeThemePalette'>) {
  const { allPaletteNames, themePaletteName, setThemePaletteName } = useThemePalette();

  return (
    <AdminSettingsDrawerBlock
      items={allPaletteNames.map((name) => name)}
      isItemSelected={(name) => name === themePaletteName}
      isItemDisabled={(name) => name === themePaletteName}
      onItemClick={async (name) => {
        void setThemePaletteName(name);
        await new Promise((resolve) => setTimeout(resolve, 200));
        void onChangeThemePalette?.(name);
      }}
      renderItem={(name) => (
        <Icon
          icon="solar:siderbar-bold-duotone"
          width={32}
          sx={{
            color: generateThemePalette(name).main,
          }}
        />
      )}
    />
  );
}
