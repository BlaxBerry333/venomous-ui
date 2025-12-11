/**
 * | Key  | Value | Calculation  |
 * |:-----|:------|:-------------|
 * | 0    | 0px   | 0 * 4px      |
 * | 1    | 4px   | 1 * 4px      |
 * | 2    | 8px   | 2 * 4px      |
 * | 3    | 12px  | 3 * 4px      |
 * | 4    | 16px  | 4 * 4px      |
 * | 5    | 20px  | 5 * 4px      |
 * | 6    | 24px  | 6 * 4px      |
 * | 7    | 28px  | 7 * 4px      |
 * | 8    | 32px  | 8 * 4px      |
 * | 9    | 36px  | 9 * 4px      |
 * | 10   | 40px  | 10 * 4px     |
 */
export const SPACINGS: ISpacings = {
  0: "0px",
  1: "4px",
  2: "8px",
  3: "12px",
  4: "16px",
  5: "20px",
  6: "24px",
  7: "28px",
  8: "32px",
  9: "36px",
  10: "40px",
};

export type ISpacings = Record<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10, string>;
