/**
 * | Key        | Value | Usage                     |
 * |:-----------|:------|:--------------------------|
 * | none       | 1     | Headings, single line     |
 * | small      | 1.25  | Tight spacing             |
 * | medium     | 1.5   | Normal body text          |
 * | large      | 1.75  | Loose/relaxed text.       |
 */
export const LINE_HEIGHTS: ILineHeights = {
  none: "1",
  small: "1.25",
  medium: "1.5",
  large: "1.75",
};

export type ILineHeights = {
  /** No extra line height (1) */
  none: string;
  /** Tight spacing (1.25) */
  small: string;
  /** Normal body text (1.5) */
  medium: string;
  /** Loose/relaxed text (1.75) */
  large: string;
};
