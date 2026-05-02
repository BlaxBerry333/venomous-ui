/**
 * @file 1:1 镜像 packages/styles/tokens/colors.scss 的 CSS variable 名。
 * SCSS 是真相源；改 SCSS 必须同步本文件。
 */

export const COLORS = {
  // ============== 调色板 ==============
  BLUE_100: '--venomous-color-blue-100',
  BLUE_300: '--venomous-color-blue-300',
  BLUE_500: '--venomous-color-blue-500',
  BLUE_700: '--venomous-color-blue-700',
  BLUE_900: '--venomous-color-blue-900',

  RED_100: '--venomous-color-red-100',
  RED_300: '--venomous-color-red-300',
  RED_500: '--venomous-color-red-500',
  RED_700: '--venomous-color-red-700',
  RED_900: '--venomous-color-red-900',

  GREEN_100: '--venomous-color-green-100',
  GREEN_300: '--venomous-color-green-300',
  GREEN_500: '--venomous-color-green-500',
  GREEN_700: '--venomous-color-green-700',
  GREEN_900: '--venomous-color-green-900',

  YELLOW_100: '--venomous-color-yellow-100',
  YELLOW_300: '--venomous-color-yellow-300',
  YELLOW_500: '--venomous-color-yellow-500',
  YELLOW_700: '--venomous-color-yellow-700',
  YELLOW_900: '--venomous-color-yellow-900',

  GRAY_100: '--venomous-color-gray-100',
  GRAY_300: '--venomous-color-gray-300',
  GRAY_500: '--venomous-color-gray-500',
  GRAY_700: '--venomous-color-gray-700',
  GRAY_900: '--venomous-color-gray-900',

  // ============== 主题语义：品牌主色 ==============
  PRIMARY: '--venomous-color-primary',
  PRIMARY_HOVER: '--venomous-color-primary-hover',
  PRIMARY_ACTIVE: '--venomous-color-primary-active',
  ON_PRIMARY: '--venomous-color-on-primary',

  // ============== 主题语义：状态色 ==============
  DANGER: '--venomous-color-danger',
  SUCCESS: '--venomous-color-success',
  WARNING: '--venomous-color-warning',
  NEUTRAL: '--venomous-color-neutral',

  // ============== 主题语义：文本色 ==============
  TEXT_STRONG: '--venomous-color-text-strong',
  TEXT_DEFAULT: '--venomous-color-text-default',
  TEXT_WEAK: '--venomous-color-text-weak',
  TEXT_SUBTLE: '--venomous-color-text-subtle',

  // ============== 主题语义：背景色 ==============
  BG_STRONG: '--venomous-color-bg-strong',
  BG_DEFAULT: '--venomous-color-bg-default',
  BG_WEAK: '--venomous-color-bg-weak',
  BG_SUBTLE: '--venomous-color-bg-subtle',

  // ============== 主题语义：边框色 ==============
  BORDER_STRONG: '--venomous-color-border-strong',
  BORDER_DEFAULT: '--venomous-color-border-default',
  BORDER_WEAK: '--venomous-color-border-weak',
  BORDER_SUBTLE: '--venomous-color-border-subtle',
} as const;
