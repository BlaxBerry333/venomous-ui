/**
 * | Key    | Value | Usage                 |
 * |:-------|:------|:----------------------|
 * | light  | 300   | Light text            |
 * | medium | 500   | Slightly emphasized   |
 * | bold   | 700   | Strong emphasis       |
 */
export const FONT_WEIGHTS: IFontWeights = {
  light: 300,
  medium: 500,
  bold: 700,
};

export type IFontWeights = {
  /** Light text (300) */
  light: number;
  /** Slightly emphasized (500) */
  medium: number;
  /** Strong emphasis (700) */
  bold: number;
};
