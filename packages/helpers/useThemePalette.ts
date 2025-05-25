import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import getColors from './getColors';

export enum ThemePaletteName {
  Iron = 'Iron',
  Cyan = 'Cyan',
  Teal = 'Teal',
  Coral = 'Coral',
  Amber = 'Amber',
  Ochre = 'Ochre',
}

const THEME_PALETTES_MAIN_COLORS: Record<ThemePaletteName, string> = {
  [ThemePaletteName.Iron]: '#90a4ae',
  [ThemePaletteName.Cyan]: '#00bcd4',
  [ThemePaletteName.Teal]: '#009688',
  [ThemePaletteName.Coral]: '#FFA07A',
  [ThemePaletteName.Amber]: '#ffb300',
  [ThemePaletteName.Ochre]: '#E3D026',
};
export function generateThemePalette(name: ThemePaletteName) {
  const mainColor = THEME_PALETTES_MAIN_COLORS[name];
  const { light, dark, opacity } = getColors(mainColor);
  return {
    main: mainColor,
    light,
    dark,
    opacity,
    contrastText: '#fff',
    error: '#f44336',
  };
}

export type ThemePaletteType = ReturnType<typeof generateThemePalette>;

const useThemePaletteStore = create<{
  themePaletteName: ThemePaletteName;
  themePalette: ThemePaletteType;
  setThemePaletteName: (themePaletteName: ThemePaletteName) => void;
}>()(
  devtools(
    persist(
      (set) => {
        return {
          themePaletteName: ThemePaletteName.Cyan,
          themePalette: generateThemePalette(ThemePaletteName.Cyan),
          setThemePaletteName: (themePaletteName: ThemePaletteName) =>
            set({ themePaletteName, themePalette: generateThemePalette(themePaletteName) }),
        };
      },
      {
        name: 'VENOMOUS_UI__THEME_PALETTE',
      },
    ),
  ),
);

export default function useThemePalette() {
  const store = useThemePaletteStore();
  return {
    ...store,
    allPaletteNames: Object.keys(ThemePaletteName) as ThemePaletteName[],
    allPaletteMainColors: THEME_PALETTES_MAIN_COLORS,
  };
}
