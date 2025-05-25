export declare enum ThemePaletteName {
    Iron = "Iron",
    Cyan = "Cyan",
    Teal = "Teal",
    Coral = "Coral",
    Amber = "Amber",
    Ochre = "Ochre"
}
export declare function generateThemePalette(name: ThemePaletteName): {
    main: string;
    light: string;
    dark: string;
    opacity: string;
    contrastText: string;
    error: string;
};
export type ThemePaletteType = ReturnType<typeof generateThemePalette>;
export default function useThemePalette(): {
    allPaletteNames: ThemePaletteName[];
    allPaletteMainColors: Record<ThemePaletteName, string>;
    themePaletteName: ThemePaletteName;
    themePalette: ThemePaletteType;
    setThemePaletteName: (themePaletteName: ThemePaletteName) => void;
};
