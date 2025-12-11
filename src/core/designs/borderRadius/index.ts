/**
 * | Key    | Value | Usage                        |
 * |:-------|:------|:-----------------------------|
 * | none   | 0px   | No rounding                  |
 * | small  | 4px   | Subtle rounding              |
 * | medium | 8px   | Normal rounding              |
 * | large  | 16px  | Pronounced rounding          |
 * | full   | 9999px| Fully rounded (pill shape)   |
 */
export const BORDER_RADIUS: IBorderRadius = {
  none: "0px",
  small: "4px",
  medium: "8px",
  large: "16px",
  full: "9999px",
};

export type IBorderRadius = {
  /** No rounding */
  none: string;
  /** Subtle rounding */
  small: string;
  /** Normal rounding */
  medium: string;
  /** Pronounced rounding */
  large: string;
  /** Fully rounded (pill shape) */
  full: string;
};
