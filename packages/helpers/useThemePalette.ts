import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import getColors from './getColors';

export enum ThemePaletteName {
  Skyblue = 'Skyblue',
  Teal = 'Teal',
  Amber = 'Amber',
}

const THEME_PALETTES_MAIN_COLORS: Record<ThemePaletteName, string> = {
  [ThemePaletteName.Skyblue]: '#0097a7',
  [ThemePaletteName.Teal]: '#009688',
  [ThemePaletteName.Amber]: '#ffb300',
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
          themePaletteName: ThemePaletteName.Skyblue,
          themePalette: generateThemePalette(ThemePaletteName.Skyblue),
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
