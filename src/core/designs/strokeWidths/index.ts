/**
 * | Key    | Value | Usage                               |
 * |:-------|:------|:------------------------------------|
 * | none   | 0px   | No stroke                           |
 * | small  | 1px   | Subtle strokes (borders, outlines)  |
 * | medium | 2px   | Normal strokes                      |
 * | large  | 4px   | Emphasized strokes                  |
 */
export const STROKE_WIDTHS: IStrokeWidths = {
  none: "0px",
  small: "1px",
  medium: "2px",
  large: "4px",
};

export type IStrokeWidths = {
  /** No stroke */
  none: string;
  /** Subtle strokes */
  small: string;
  /** Normal strokes */
  medium: string;
  /** Emphasized strokes */
  large: string;
};
