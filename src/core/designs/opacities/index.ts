/**
 * | Key         | Value | Usage              |
 * |:------------|:------|:-------------------|
 * | transparent | 0     | Fully transparent  |
 * | disabled    | 0.4   | Disabled state     |
 * | small       | 0.3   | Light overlay      |
 * | medium      | 0.6   | Medium overlay     |
 * | large       | 0.8   | Heavy overlay      |
 */
export const OPACITIES: IOpacities = {
  transparent: 0,
  disabled: 0.4,
  small: 0.3,
  medium: 0.6,
  large: 0.8,
};

export type IOpacities = {
  /** Fully transparent */
  transparent: number;
  /** Disabled state */
  disabled: number;
  /** Light overlay */
  small: number;
  /** Medium overlay */
  medium: number;
  /** Heavy overlay */
  large: number;
};
