export type ThemeModeType = 'dark' | 'light';
export default function useThemeMode(): {
    isDarkMode: boolean;
    themeMode: ThemeModeType;
    setThemeMode: (themeMode: ThemeModeType) => void;
    toggleThemeMode: VoidFunction;
    resetThemeMode: VoidFunction;
};
