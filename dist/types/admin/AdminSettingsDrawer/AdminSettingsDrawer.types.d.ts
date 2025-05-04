import type { ThemeModeType, ThemePaletteName } from '@packages/helpers';
import type { NamedExoticComponent, PropsWithChildren } from 'react';
export type AdminSettingsDrawerProps = PropsWithChildren<{
    width?: number;
    title?: string;
    labelOfThemeMode?: string;
    labelOfThemePalettes?: string;
    onChangeThemeMode?: (mode: ThemeModeType) => void;
    onChangeThemePalette?: (palette: ThemePaletteName) => void;
}>;
export type AdminSettingsDrawerBlockProps<T> = {
    items: T[];
    renderItem: (item: T) => React.ReactNode;
    isItemSelected: (item: T) => boolean;
    isItemDisabled?: (item: T) => boolean;
    onItemClick?: (item: T) => Promise<void>;
};
export type AdminSettingsDrawerComponentType = NamedExoticComponent<AdminSettingsDrawerProps>;
