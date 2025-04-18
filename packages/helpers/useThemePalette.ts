import { alpha, darken, lighten } from '@mui/material/styles';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export enum ThemePaletteName {
  Skyblue = 'Skyblue',
  Teal = 'Teal',
}

const THEME_PALETTES_MAIN_COLORS: Record<ThemePaletteName, string> = {
  [ThemePaletteName.Skyblue]: '#0097a7',
  [ThemePaletteName.Teal]: '#009688',
};

export function generateThemePalette(name: ThemePaletteName) {
  const mainColor = THEME_PALETTES_MAIN_COLORS[name];
  return {
    main: mainColor,
    light: lighten(mainColor, 0.5),
    dark: darken(mainColor, 0.5),
    opacity: alpha(mainColor, 0.5),
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
