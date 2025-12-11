export * from "./getDarker";
export * from "./getLighter";
export * from "./hexToHsl";
export * from "./hexToRgba";
export * from "./hslToHex";
export * from "./isLightColor";

export type IColorsGroup = {
  main: string;
  light: string;
  lighter: string;
  dark: string;
  darker: string;
};
