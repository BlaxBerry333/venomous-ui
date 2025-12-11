/**
 * | Level  | Value | Usage                                 |
 * |:-------|:------|:--------------------------------------|
 * | small  | 100   | Dropdown, popover, menu, tooltip      |
 * | medium | 200   | Modal backdrop                        |
 * | large  | 300   | Modal, drawer, dialog, notification   |
 */
export const Z_INDEXS: IZIndexs = {
  small: 100,
  medium: 200,
  large: 300,
};

export type IZIndexs = {
  /** Dropdown, popover, menu, tooltip */
  small: number;
  /** Modal backdrop */
  medium: number;
  /** Modal, drawer, dialog, notification */
  large: number;
};
