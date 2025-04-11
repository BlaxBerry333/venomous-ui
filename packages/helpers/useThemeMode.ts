import { create, useStore } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export type ThemeModeType = 'dark' | 'light';

function getSystemColorMode(): ThemeModeType {
  const isDark = window.matchMedia('(prefers-color-scheme: dark)');
  if (isDark.matches) return 'dark';
  return 'light';
}

const themeModeStore = create<{
  themeMode: ThemeModeType;
  setThemeMode: (themeMode: ThemeModeType) => void;
  toggleThemeMode: VoidFunction;
  resetThemeMode: VoidFunction;
}>()(
  devtools(
    persist(
      (set) => ({
        themeMode: getSystemColorMode(),
        setThemeMode: (themeMode) => set({ themeMode }),
        toggleThemeMode: () =>
          set((state) => ({ themeMode: state.themeMode === 'dark' ? 'light' : 'dark' })),
        resetThemeMode: () => set({ themeMode: getSystemColorMode() }),
      }),
      {
        name: 'VENOMOUS_UI__THEME_MODE',
      },
    ),
  ),
);

export default function useThemeMode() {
  const store = useStore(themeModeStore);
  return {
    ...store,
    isDarkMode: store.themeMode === 'dark',
  };
}
