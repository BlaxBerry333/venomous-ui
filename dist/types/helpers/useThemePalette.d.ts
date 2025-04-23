export declare enum ThemePaletteName {
    Skyblue = "Skyblue",
    Teal = "Teal",
    Amber = "Amber"
}
export declare function generateThemePalette(name: ThemePaletteName): {
    main: string;
    light: string;
    dark: string;
    opacity: string;
    contrastText: string;
};
export type ThemePaletteType = ReturnType<typeof generateThemePalette>;
export default function useThemePalette(): {
    allPaletteNames: ThemePaletteName[];
    allPaletteMainColors: Record<ThemePaletteName, string>;
    themePaletteName: ThemePaletteName;
    themePalette: ThemePaletteType;
    setThemePaletteName: (themePaletteName: ThemePaletteName) => void;
};
