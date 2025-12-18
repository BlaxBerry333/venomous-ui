import { COMPONENT_NAMES } from "./componentNames";

/**
 * Avatar
 */
export const AVATAR_CSS_CLASS_NAMES = {
  base: {
    className: `${COMPONENT_NAMES.Avatar}__base`,
    description: "Avatar root class",
  },
  sizeSmall: {
    className: `${COMPONENT_NAMES.Avatar}__sizeSmall`,
    description: "if `Avatar.size='small'`",
  },
  sizeMedium: {
    className: `${COMPONENT_NAMES.Avatar}__sizeMedium`,
    description: "if `Avatar.size='medium'`",
  },
  sizeLarge: {
    className: `${COMPONENT_NAMES.Avatar}__sizeLarge`,
    description: "if `Avatar.size='large'`",
  },
  variantCircular: {
    className: `${COMPONENT_NAMES.Avatar}__variantCircular`,
    description: "if `Avatar.variant='circular'`",
  },
  variantRounded: {
    className: `${COMPONENT_NAMES.Avatar}__variantRounded`,
    description: "if `Avatar.variant='rounded'`",
  },
  variantSquare: {
    className: `${COMPONENT_NAMES.Avatar}__variantSquare`,
    description: "if `Avatar.variant='square'`",
  },
  hasImage: {
    className: `${COMPONENT_NAMES.Avatar}__hasImage`,
    description: "if Avatar has valid image",
  },
  image: {
    className: `${COMPONENT_NAMES.Avatar}__image`,
    description: "Avatar image element",
  },
  fallback: {
    className: `${COMPONENT_NAMES.Avatar}__fallback`,
    description: "Avatar fallback content (text or icon)",
  },
} as const;

/**
 * Backdrop
 */
export const BACKDROP_CSS_CLASS_NAMES = {
  base: {
    className: `${COMPONENT_NAMES.Backdrop}__base`,
    description: "Backdrop root class",
  },
} as const;

/**
 * Box
 */
export const BOX_CSS_CLASS_NAMES = {
  base: {
    className: `${COMPONENT_NAMES.Box}__base`,
    description: "Box root class",
  },
} as const;

/**
 * Button
 */
export const BUTTON_CSS_CLASS_NAMES = {
  base: {
    className: `${COMPONENT_NAMES.Button}__base`,
    description: "Button root class",
  },
  disabled: {
    className: `${COMPONENT_NAMES.Button}__disabled`,
    description: "if `Button.disabled={true}`",
  },
  loading: {
    className: `${COMPONENT_NAMES.Button}__loading`,
    description: "if `Button.loading={true}`",
  },
  fullWidth: {
    className: `${COMPONENT_NAMES.Button}__fullwidth`,
    description: "if `Button.fullWidth={true}`",
  },
  variantContained: {
    className: `${COMPONENT_NAMES.Button}__variantContained`,
    description: "if `Button.variant='contained'`",
  },
  variantOutlined: {
    className: `${COMPONENT_NAMES.Button}__variantOutlined`,
    description: "if `Button.variant='outlined'`",
  },
  variantText: {
    className: `${COMPONENT_NAMES.Button}__variantText`,
    description: "if `Button.variant='text'`",
  },
  sizeSmall: {
    className: `${COMPONENT_NAMES.Button}__sizeSmall`,
    description: "if `Button.size='small'`",
  },
  sizeMedium: {
    className: `${COMPONENT_NAMES.Button}__sizeMedium`,
    description: "if `Button.size='medium'`",
  },
  sizeLarge: {
    className: `${COMPONENT_NAMES.Button}__sizeLarge`,
    description: "if `Button.size='large'`",
  },
} as const;

/**
 * Card
 */
export const CARD_CSS_CLASS_NAMES = {
  base: {
    className: `${COMPONENT_NAMES.Card}__base`,
    description: "Card root class",
  },
  disabled: {
    className: `${COMPONENT_NAMES.Card}__disabled`,
    description: "if `Card.disabled={true}`",
  },
  loading: {
    className: `${COMPONENT_NAMES.Card}__loading`,
    description: "if `Card.loading={true}`",
  },
  clickable: {
    className: `${COMPONENT_NAMES.Card}__clickable`,
    description: "if `Card.clickable={true}`",
  },
  variantElevated: {
    className: `${COMPONENT_NAMES.Card}__variantElevated`,
    description: "if `Card.variant='elevated'`",
  },
  variantOutlined: {
    className: `${COMPONENT_NAMES.Card}__variantOutlined`,
    description: "if `Card.variant='outlined'`",
  },
  variantFilled: {
    className: `${COMPONENT_NAMES.Card}__variantFilled`,
    description: "if `Card.variant='filled'`",
  },
  paddingNone: {
    className: `${COMPONENT_NAMES.Card}__paddingNone`,
    description: "if `Card.padding='none'`",
  },
  paddingSmall: {
    className: `${COMPONENT_NAMES.Card}__paddingSmall`,
    description: "if `Card.padding='small'`",
  },
  paddingMedium: {
    className: `${COMPONENT_NAMES.Card}__paddingMedium`,
    description: "if `Card.padding='medium'`",
  },
  paddingLarge: {
    className: `${COMPONENT_NAMES.Card}__paddingLarge`,
    description: "if `Card.padding='large'`",
  },
  radiusNone: {
    className: `${COMPONENT_NAMES.Card}__radiusNone`,
    description: "if `Card.radius='none'`",
  },
  radiusSmall: {
    className: `${COMPONENT_NAMES.Card}__radiusSmall`,
    description: "if `Card.radius='small'`",
  },
  radiusMedium: {
    className: `${COMPONENT_NAMES.Card}__radiusMedium`,
    description: "if `Card.radius='medium'`",
  },
  radiusLarge: {
    className: `${COMPONENT_NAMES.Card}__radiusLarge`,
    description: "if `Card.radius='large'`",
  },
} as const;

/**
 * Icon
 */
export const ICON_CSS_CLASS_NAMES = {
  base: {
    className: `${COMPONENT_NAMES.Icon}__base`,
    description: "Icon root class",
  },
} as const;

/**
 * Modal
 */
export const MODAL_CSS_CLASS_NAMES = {
  base: {
    className: `${COMPONENT_NAMES.Modal}__base`,
    description: "Modal root class (content container)",
  },
} as const;

/**
 * Space.Flex
 */
export const SPACE_FLEX_CSS_CLASS_NAMES = {
  base: {
    className: `${COMPONENT_NAMES.SpaceFlex}__base`,
    description: "Space.Flex root class",
  },
  column: {
    className: `${COMPONENT_NAMES.SpaceFlex}__column`,
    description: "if `SpaceFlex.column={true}`",
  },
  spacing0: {
    className: `${COMPONENT_NAMES.SpaceFlex}__spacing0`,
    description: "if `SpaceFlex.spacing={0}`",
  },
  spacing1: {
    className: `${COMPONENT_NAMES.SpaceFlex}__spacing1`,
    description: "if `SpaceFlex.spacing={1}`",
  },
  spacing2: {
    className: `${COMPONENT_NAMES.SpaceFlex}__spacing2`,
    description: "if `SpaceFlex.spacing={2}`",
  },
  spacing3: {
    className: `${COMPONENT_NAMES.SpaceFlex}__spacing3`,
    description: "if `SpaceFlex.spacing={3}`",
  },
  spacing4: {
    className: `${COMPONENT_NAMES.SpaceFlex}__spacing4`,
    description: "if `SpaceFlex.spacing={4}`",
  },
  spacing5: {
    className: `${COMPONENT_NAMES.SpaceFlex}__spacing5`,
    description: "if `SpaceFlex.spacing={5}`",
  },
  spacing6: {
    className: `${COMPONENT_NAMES.SpaceFlex}__spacing6`,
    description: "if `SpaceFlex.spacing={6}`",
  },
  spacing7: {
    className: `${COMPONENT_NAMES.SpaceFlex}__spacing7`,
    description: "if `SpaceFlex.spacing={7}`",
  },
  spacing8: {
    className: `${COMPONENT_NAMES.SpaceFlex}__spacing8`,
    description: "if `SpaceFlex.spacing={8}`",
  },
  spacing9: {
    className: `${COMPONENT_NAMES.SpaceFlex}__spacing9`,
    description: "if `SpaceFlex.spacing={9}`",
  },
  spacing10: {
    className: `${COMPONENT_NAMES.SpaceFlex}__spacing10`,
    description: "if `SpaceFlex.spacing={10}`",
  },
} as const;

/**
 * Space.Grid
 */
export const SPACE_GRID_CSS_CLASS_NAMES = {
  base: {
    className: `${COMPONENT_NAMES.SpaceGrid}__base`,
    description: "Space.Grid root class",
  },
  spacing0: {
    className: `${COMPONENT_NAMES.SpaceGrid}__spacing0`,
    description: "if `SpaceGrid.spacing={0}`",
  },
  spacing1: {
    className: `${COMPONENT_NAMES.SpaceGrid}__spacing1`,
    description: "if `SpaceGrid.spacing={1}`",
  },
  spacing2: {
    className: `${COMPONENT_NAMES.SpaceGrid}__spacing2`,
    description: "if `SpaceGrid.spacing={2}`",
  },
  spacing3: {
    className: `${COMPONENT_NAMES.SpaceGrid}__spacing3`,
    description: "if `SpaceGrid.spacing={3}`",
  },
  spacing4: {
    className: `${COMPONENT_NAMES.SpaceGrid}__spacing4`,
    description: "if `SpaceGrid.spacing={4}`",
  },
  spacing5: {
    className: `${COMPONENT_NAMES.SpaceGrid}__spacing5`,
    description: "if `SpaceGrid.spacing={5}`",
  },
  spacing6: {
    className: `${COMPONENT_NAMES.SpaceGrid}__spacing6`,
    description: "if `SpaceGrid.spacing={6}`",
  },
  spacing7: {
    className: `${COMPONENT_NAMES.SpaceGrid}__spacing7`,
    description: "if `SpaceGrid.spacing={7}`",
  },
  spacing8: {
    className: `${COMPONENT_NAMES.SpaceGrid}__spacing8`,
    description: "if `SpaceGrid.spacing={8}`",
  },
  spacing9: {
    className: `${COMPONENT_NAMES.SpaceGrid}__spacing9`,
    description: "if `SpaceGrid.spacing={9}`",
  },
  spacing10: {
    className: `${COMPONENT_NAMES.SpaceGrid}__spacing10`,
    description: "if `SpaceGrid.spacing={10}`",
  },
  columns1: {
    className: `${COMPONENT_NAMES.SpaceGrid}__columns1`,
    description: "if `SpaceGrid.columns={1}`",
  },
  columns2: {
    className: `${COMPONENT_NAMES.SpaceGrid}__columns2`,
    description: "if `SpaceGrid.columns={2}`",
  },
  columns3: {
    className: `${COMPONENT_NAMES.SpaceGrid}__columns3`,
    description: "if `SpaceGrid.columns={3}`",
  },
  columns4: {
    className: `${COMPONENT_NAMES.SpaceGrid}__columns4`,
    description: "if `SpaceGrid.columns={4}`",
  },
  columns5: {
    className: `${COMPONENT_NAMES.SpaceGrid}__columns5`,
    description: "if `SpaceGrid.columns={5}`",
  },
  columns6: {
    className: `${COMPONENT_NAMES.SpaceGrid}__columns6`,
    description: "if `SpaceGrid.columns={6}`",
  },
  columns7: {
    className: `${COMPONENT_NAMES.SpaceGrid}__columns7`,
    description: "if `SpaceGrid.columns={7}`",
  },
  columns8: {
    className: `${COMPONENT_NAMES.SpaceGrid}__columns8`,
    description: "if `SpaceGrid.columns={8}`",
  },
  columns9: {
    className: `${COMPONENT_NAMES.SpaceGrid}__columns9`,
    description: "if `SpaceGrid.columns={9}`",
  },
  columns10: {
    className: `${COMPONENT_NAMES.SpaceGrid}__columns10`,
    description: "if `SpaceGrid.columns={10}`",
  },
  columns11: {
    className: `${COMPONENT_NAMES.SpaceGrid}__columns11`,
    description: "if `SpaceGrid.columns={11}`",
  },
  columns12: {
    className: `${COMPONENT_NAMES.SpaceGrid}__columns12`,
    description: "if `SpaceGrid.columns={12}`",
  },
} as const;
