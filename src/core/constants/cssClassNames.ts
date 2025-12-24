import { COMPONENT_NAMES } from "./componentNames";

/**
 * Arrow
 */
export const ARROW_CSS_CLASS_NAMES = {
  base: {
    className: `${COMPONENT_NAMES.Arrow}__base`,
    description: "Arrow root class",
  },
  directionTop: {
    className: `${COMPONENT_NAMES.Arrow}--direction-top`,
    description: "Arrow pointing up",
  },
  directionBottom: {
    className: `${COMPONENT_NAMES.Arrow}--direction-bottom`,
    description: "Arrow pointing down",
  },
  directionLeft: {
    className: `${COMPONENT_NAMES.Arrow}--direction-left`,
    description: "Arrow pointing left",
  },
  directionRight: {
    className: `${COMPONENT_NAMES.Arrow}--direction-right`,
    description: "Arrow pointing right",
  },
} as const;

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
 * Badge
 */
export const BADGE_CSS_CLASS_NAMES = {
  root: {
    className: `${COMPONENT_NAMES.Badge}__root`,
    description: "Badge root wrapper (contains children)",
  },
  badge: {
    className: `${COMPONENT_NAMES.Badge}__badge`,
    description: "Badge element itself",
  },
  invisible: {
    className: `${COMPONENT_NAMES.Badge}--invisible`,
    description: "Badge invisible state",
  },
  variantStandard: {
    className: `${COMPONENT_NAMES.Badge}--variant-standard`,
    description: "if `Badge.variant='standard'`",
  },
  variantDot: {
    className: `${COMPONENT_NAMES.Badge}--variant-dot`,
    description: "if `Badge.variant='dot'`",
  },
  sizeSmall: {
    className: `${COMPONENT_NAMES.Badge}--size-small`,
    description: "if `Badge.size='small'`",
  },
  sizeMedium: {
    className: `${COMPONENT_NAMES.Badge}--size-medium`,
    description: "if `Badge.size='medium'`",
  },
  sizeLarge: {
    className: `${COMPONENT_NAMES.Badge}--size-large`,
    description: "if `Badge.size='large'`",
  },
  colorDefault: {
    className: `${COMPONENT_NAMES.Badge}--color-default`,
    description: "if `Badge.color='default'`",
  },
  colorPrimary: {
    className: `${COMPONENT_NAMES.Badge}--color-primary`,
    description: "if `Badge.color='primary'`",
  },
  colorSuccess: {
    className: `${COMPONENT_NAMES.Badge}--color-success`,
    description: "if `Badge.color='success'`",
  },
  colorError: {
    className: `${COMPONENT_NAMES.Badge}--color-error`,
    description: "if `Badge.color='error'`",
  },
  colorWarning: {
    className: `${COMPONENT_NAMES.Badge}--color-warning`,
    description: "if `Badge.color='warning'`",
  },
  colorInfo: {
    className: `${COMPONENT_NAMES.Badge}--color-info`,
    description: "if `Badge.color='info'`",
  },
  anchorTopRight: {
    className: `${COMPONENT_NAMES.Badge}--anchor-top-right`,
    description: "if `Badge.anchorOrigin='top-right'`",
  },
  anchorTopLeft: {
    className: `${COMPONENT_NAMES.Badge}--anchor-top-left`,
    description: "if `Badge.anchorOrigin='top-left'`",
  },
  anchorBottomRight: {
    className: `${COMPONENT_NAMES.Badge}--anchor-bottom-right`,
    description: "if `Badge.anchorOrigin='bottom-right'`",
  },
  anchorBottomLeft: {
    className: `${COMPONENT_NAMES.Badge}--anchor-bottom-left`,
    description: "if `Badge.anchorOrigin='bottom-left'`",
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
  colorDefault: {
    className: `${COMPONENT_NAMES.Button}__colorDefault`,
    description: "if `Button.color='default'`",
  },
  colorPrimary: {
    className: `${COMPONENT_NAMES.Button}__colorPrimary`,
    description: "if `Button.color='primary'`",
  },
  colorSuccess: {
    className: `${COMPONENT_NAMES.Button}__colorSuccess`,
    description: "if `Button.color='success'`",
  },
  colorError: {
    className: `${COMPONENT_NAMES.Button}__colorError`,
    description: "if `Button.color='error'`",
  },
  colorWarning: {
    className: `${COMPONENT_NAMES.Button}__colorWarning`,
    description: "if `Button.color='warning'`",
  },
  colorInfo: {
    className: `${COMPONENT_NAMES.Button}__colorInfo`,
    description: "if `Button.color='info'`",
  },
  content: {
    className: `${COMPONENT_NAMES.Button}__content`,
    description: "Button content wrapper",
  },
  loadingIcon: {
    className: `${COMPONENT_NAMES.Button}__loading-icon`,
    description: "Button loading icon (centered overlay)",
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
  content: {
    className: `${COMPONENT_NAMES.Card}__content`,
    description: "Card content wrapper",
  },
  loadingIcon: {
    className: `${COMPONENT_NAMES.Card}__loading-icon`,
    description: "Card loading icon (centered overlay)",
  },
} as const;

/**
 * Chip
 */
export const CHIP_CSS_CLASS_NAMES = {
  base: {
    className: `${COMPONENT_NAMES.Chip}__base`,
    description: "Chip root class",
  },
  disabled: {
    className: `${COMPONENT_NAMES.Chip}--disabled`,
    description: "Chip disabled state",
  },
  selected: {
    className: `${COMPONENT_NAMES.Chip}--selected`,
    description: "Chip selected state",
  },
  clickable: {
    className: `${COMPONENT_NAMES.Chip}--clickable`,
    description: "Chip clickable state",
  },
  variantFilled: {
    className: `${COMPONENT_NAMES.Chip}--variant-filled`,
    description: "if `Chip.variant='filled'`",
  },
  variantOutlined: {
    className: `${COMPONENT_NAMES.Chip}--variant-outlined`,
    description: "if `Chip.variant='outlined'`",
  },
  sizeSmall: {
    className: `${COMPONENT_NAMES.Chip}--size-small`,
    description: "if `Chip.size='small'`",
  },
  sizeMedium: {
    className: `${COMPONENT_NAMES.Chip}--size-medium`,
    description: "if `Chip.size='medium'`",
  },
  sizeLarge: {
    className: `${COMPONENT_NAMES.Chip}--size-large`,
    description: "if `Chip.size='large'`",
  },
  colorDefault: {
    className: `${COMPONENT_NAMES.Chip}--color-default`,
    description: "if `Chip.color='default'`",
  },
  colorPrimary: {
    className: `${COMPONENT_NAMES.Chip}--color-primary`,
    description: "if `Chip.color='primary'`",
  },
  colorSuccess: {
    className: `${COMPONENT_NAMES.Chip}--color-success`,
    description: "if `Chip.color='success'`",
  },
  colorError: {
    className: `${COMPONENT_NAMES.Chip}--color-error`,
    description: "if `Chip.color='error'`",
  },
  colorWarning: {
    className: `${COMPONENT_NAMES.Chip}--color-warning`,
    description: "if `Chip.color='warning'`",
  },
  colorInfo: {
    className: `${COMPONENT_NAMES.Chip}--color-info`,
    description: "if `Chip.color='info'`",
  },
  label: {
    className: `${COMPONENT_NAMES.Chip}__label`,
    description: "Chip label/text",
  },
  deleteIcon: {
    className: `${COMPONENT_NAMES.Chip}__delete-icon`,
    description: "Chip delete icon",
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
  colorInherit: {
    className: `${COMPONENT_NAMES.Icon}--color-inherit`,
    description: "if `Icon.color='inherit'`",
  },
  colorPrimary: {
    className: `${COMPONENT_NAMES.Icon}--color-primary`,
    description: "if `Icon.color='primary'`",
  },
  colorSuccess: {
    className: `${COMPONENT_NAMES.Icon}--color-success`,
    description: "if `Icon.color='success'`",
  },
  colorError: {
    className: `${COMPONENT_NAMES.Icon}--color-error`,
    description: "if `Icon.color='error'`",
  },
  colorWarning: {
    className: `${COMPONENT_NAMES.Icon}--color-warning`,
    description: "if `Icon.color='warning'`",
  },
  colorInfo: {
    className: `${COMPONENT_NAMES.Icon}--color-info`,
    description: "if `Icon.color='info'`",
  },
} as const;

/**
 * Drawer
 */
export const DRAWER_CSS_CLASS_NAMES = {
  base: {
    className: `${COMPONENT_NAMES.Drawer}__base`,
    description: "Drawer root class (content container)",
  },
  anchorLeft: {
    className: `${COMPONENT_NAMES.Drawer}--anchor-left`,
    description: "Drawer anchored to left edge",
  },
  anchorRight: {
    className: `${COMPONENT_NAMES.Drawer}--anchor-right`,
    description: "Drawer anchored to right edge",
  },
  anchorTop: {
    className: `${COMPONENT_NAMES.Drawer}--anchor-top`,
    description: "Drawer anchored to top edge",
  },
  anchorBottom: {
    className: `${COMPONENT_NAMES.Drawer}--anchor-bottom`,
    description: "Drawer anchored to bottom edge",
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
 * Popover
 */
export const POPOVER_CSS_CLASS_NAMES = {
  base: {
    className: `${COMPONENT_NAMES.Popover}__base`,
    description: "Popover content container",
  },
  trigger: {
    className: `${COMPONENT_NAMES.Popover}__trigger`,
    description: "Popover trigger wrapper",
  },
} as const;

/**
 * Tooltip
 */
export const TOOLTIP_CSS_CLASS_NAMES = {
  base: {
    className: `${COMPONENT_NAMES.Tooltip}__base`,
    description: "Tooltip content container",
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
 * Typography.Paragraph
 */
export const TYPOGRAPHY_PARAGRAPH_CSS_CLASS_NAMES = {
  base: {
    className: `${COMPONENT_NAMES.TypographyParagraph}__base`,
    description: "Typography.Paragraph root class",
  },
  ellipsis: {
    className: `${COMPONENT_NAMES.TypographyParagraph}--ellipsis`,
    description: "Typography.Paragraph with ellipsis enabled",
  },
} as const;

/**
 * Typography.Title
 */
export const TYPOGRAPHY_TITLE_CSS_CLASS_NAMES = {
  base: {
    className: `${COMPONENT_NAMES.TypographyTitle}__base`,
    description: "Typography.Title root class",
  },
  levelH1: {
    className: `${COMPONENT_NAMES.TypographyTitle}--h1`,
    description: "Typography.Title as h1",
  },
  levelH2: {
    className: `${COMPONENT_NAMES.TypographyTitle}--h2`,
    description: "Typography.Title as h2",
  },
  levelH3: {
    className: `${COMPONENT_NAMES.TypographyTitle}--h3`,
    description: "Typography.Title as h3",
  },
  levelH4: {
    className: `${COMPONENT_NAMES.TypographyTitle}--h4`,
    description: "Typography.Title as h4",
  },
  levelH5: {
    className: `${COMPONENT_NAMES.TypographyTitle}--h5`,
    description: "Typography.Title as h5",
  },
  levelH6: {
    className: `${COMPONENT_NAMES.TypographyTitle}--h6`,
    description: "Typography.Title as h6",
  },
} as const;

/**
 * Typography.Text
 */
export const TYPOGRAPHY_TEXT_CSS_CLASS_NAMES = {
  base: {
    className: `${COMPONENT_NAMES.TypographyText}__base`,
    description: "Typography.Text root class",
  },
  asCode: {
    className: `${COMPONENT_NAMES.TypographyText}--code`,
    description: "Typography.Text as code element",
  },
  asKbd: {
    className: `${COMPONENT_NAMES.TypographyText}--kbd`,
    description: "Typography.Text as kbd element",
  },
  asMark: {
    className: `${COMPONENT_NAMES.TypographyText}--mark`,
    description: "Typography.Text as mark element",
  },
  asDel: {
    className: `${COMPONENT_NAMES.TypographyText}--del`,
    description: "Typography.Text as del element",
  },
  asIns: {
    className: `${COMPONENT_NAMES.TypographyText}--ins`,
    description: "Typography.Text as ins element",
  },
  asSmall: {
    className: `${COMPONENT_NAMES.TypographyText}--small`,
    description: "Typography.Text as small element",
  },
  asStrong: {
    className: `${COMPONENT_NAMES.TypographyText}--strong`,
    description: "Typography.Text as strong element",
  },
  asEm: {
    className: `${COMPONENT_NAMES.TypographyText}--em`,
    description: "Typography.Text as em element",
  },
  asSub: {
    className: `${COMPONENT_NAMES.TypographyText}--sub`,
    description: "Typography.Text as sub element",
  },
  asSup: {
    className: `${COMPONENT_NAMES.TypographyText}--sup`,
    description: "Typography.Text as sup element",
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

/**
 * FormControl
 */
export const FORM_CONTROL_CSS_CLASS_NAMES = {
  base: {
    className: `${COMPONENT_NAMES.FormControl}__base`,
    description: "FormControl root class",
  },
  row: {
    className: `${COMPONENT_NAMES.FormControl}--row`,
    description: "FormControl horizontal layout",
  },
  labelWrapper: {
    className: `${COMPONENT_NAMES.FormControl}__label-wrapper`,
    description: "FormControl label wrapper",
  },
  labelTooltip: {
    className: `${COMPONENT_NAMES.FormControl}__label-tooltip`,
    description: "FormControl label tooltip icon",
  },
  content: {
    className: `${COMPONENT_NAMES.FormControl}__content`,
    description: "FormControl content wrapper (for row layout)",
  },
  field: {
    className: `${COMPONENT_NAMES.FormControl}__field`,
    description: "FormControl field wrapper",
  },
  helperText: {
    className: `${COMPONENT_NAMES.FormControl}__helper-text`,
    description: "FormControl helper/error text",
  },
  error: {
    className: `${COMPONENT_NAMES.FormControl}--error`,
    description: "FormControl error state",
  },
  sizeSmall: {
    className: `${COMPONENT_NAMES.FormControl}--size-small`,
    description: "if `FormControl.size='small'`",
  },
  sizeMedium: {
    className: `${COMPONENT_NAMES.FormControl}--size-medium`,
    description: "if `FormControl.size='medium'`",
  },
  sizeLarge: {
    className: `${COMPONENT_NAMES.FormControl}--size-large`,
    description: "if `FormControl.size='large'`",
  },
} as const;

/**
 * FormLabel
 */
export const FORM_LABEL_CSS_CLASS_NAMES = {
  base: {
    className: `${COMPONENT_NAMES.FormLabel}__base`,
    description: "FormLabel root class",
  },
  required: {
    className: `${COMPONENT_NAMES.FormLabel}--required`,
    description: "FormLabel with required indicator",
  },
  tooltip: {
    className: `${COMPONENT_NAMES.FormLabel}__tooltip`,
    description: "FormLabel tooltip icon wrapper",
  },
  sizeSmall: {
    className: `${COMPONENT_NAMES.FormLabel}--size-small`,
    description: "if `FormLabel.size='small'`",
  },
  sizeMedium: {
    className: `${COMPONENT_NAMES.FormLabel}--size-medium`,
    description: "if `FormLabel.size='medium'`",
  },
  sizeLarge: {
    className: `${COMPONENT_NAMES.FormLabel}--size-large`,
    description: "if `FormLabel.size='large'`",
  },
} as const;

/**
 * FormField.Text
 */
export const FORM_FIELD_TEXT_CSS_CLASS_NAMES = {
  base: {
    className: `${COMPONENT_NAMES.FormFieldText}__base`,
    description: "FormField.Text root class (wrapper)",
  },
  input: {
    className: `${COMPONENT_NAMES.FormFieldText}__input`,
    description: "FormField.Text input element",
  },
  prefix: {
    className: `${COMPONENT_NAMES.FormFieldText}__prefix`,
    description: "FormField.Text prefix element",
  },
  suffix: {
    className: `${COMPONENT_NAMES.FormFieldText}__suffix`,
    description: "FormField.Text suffix element",
  },
  disabled: {
    className: `${COMPONENT_NAMES.FormFieldText}--disabled`,
    description: "FormField.Text disabled state",
  },
  focused: {
    className: `${COMPONENT_NAMES.FormFieldText}--focused`,
    description: "FormField.Text focused state",
  },
  error: {
    className: `${COMPONENT_NAMES.FormFieldText}--error`,
    description: "FormField.Text error state",
  },
  variantOutlined: {
    className: `${COMPONENT_NAMES.FormFieldText}--variant-outlined`,
    description: "if `FormField.Text.variant='outlined'`",
  },
  variantFilled: {
    className: `${COMPONENT_NAMES.FormFieldText}--variant-filled`,
    description: "if `FormField.Text.variant='filled'`",
  },
  sizeSmall: {
    className: `${COMPONENT_NAMES.FormFieldText}--size-small`,
    description: "if `FormField.Text.size='small'`",
  },
  sizeMedium: {
    className: `${COMPONENT_NAMES.FormFieldText}--size-medium`,
    description: "if `FormField.Text.size='medium'`",
  },
  sizeLarge: {
    className: `${COMPONENT_NAMES.FormFieldText}--size-large`,
    description: "if `FormField.Text.size='large'`",
  },
  fullWidth: {
    className: `${COMPONENT_NAMES.FormFieldText}--full-width`,
    description: "if `FormField.Text.fullWidth=true`",
  },
} as const;

/**
 * FormField.Number
 */
export const FORM_FIELD_NUMBER_CSS_CLASS_NAMES = {
  base: {
    className: `${COMPONENT_NAMES.FormFieldNumber}__base`,
    description: "FormField.Number root class (wrapper)",
  },
  input: {
    className: `${COMPONENT_NAMES.FormFieldNumber}__input`,
    description: "FormField.Number input element",
  },
  controls: {
    className: `${COMPONENT_NAMES.FormFieldNumber}__controls`,
    description: "FormField.Number controls container",
  },
  controlButton: {
    className: `${COMPONENT_NAMES.FormFieldNumber}__control-button`,
    description: "FormField.Number control button (+/-)",
  },
  disabled: {
    className: `${COMPONENT_NAMES.FormFieldNumber}--disabled`,
    description: "FormField.Number disabled state",
  },
  focused: {
    className: `${COMPONENT_NAMES.FormFieldNumber}--focused`,
    description: "FormField.Number focused state",
  },
  error: {
    className: `${COMPONENT_NAMES.FormFieldNumber}--error`,
    description: "FormField.Number error state",
  },
  variantOutlined: {
    className: `${COMPONENT_NAMES.FormFieldNumber}--variant-outlined`,
    description: "if `FormField.Number.variant='outlined'`",
  },
  variantFilled: {
    className: `${COMPONENT_NAMES.FormFieldNumber}--variant-filled`,
    description: "if `FormField.Number.variant='filled'`",
  },
  sizeSmall: {
    className: `${COMPONENT_NAMES.FormFieldNumber}--size-small`,
    description: "if `FormField.Number.size='small'`",
  },
  sizeMedium: {
    className: `${COMPONENT_NAMES.FormFieldNumber}--size-medium`,
    description: "if `FormField.Number.size='medium'`",
  },
  sizeLarge: {
    className: `${COMPONENT_NAMES.FormFieldNumber}--size-large`,
    description: "if `FormField.Number.size='large'`",
  },
  fullWidth: {
    className: `${COMPONENT_NAMES.FormFieldNumber}--full-width`,
    description: "if `FormField.Number.fullWidth=true`",
  },
} as const;

/**
 * FormField.Password
 */
export const FORM_FIELD_PASSWORD_CSS_CLASS_NAMES = {
  base: {
    className: `${COMPONENT_NAMES.FormFieldPassword}__base`,
    description: "FormField.Password root class (wrapper)",
  },
  input: {
    className: `${COMPONENT_NAMES.FormFieldPassword}__input`,
    description: "FormField.Password input element",
  },
  toggle: {
    className: `${COMPONENT_NAMES.FormFieldPassword}__toggle`,
    description: "FormField.Password visibility toggle button",
  },
  disabled: {
    className: `${COMPONENT_NAMES.FormFieldPassword}--disabled`,
    description: "FormField.Password disabled state",
  },
  focused: {
    className: `${COMPONENT_NAMES.FormFieldPassword}--focused`,
    description: "FormField.Password focused state",
  },
  error: {
    className: `${COMPONENT_NAMES.FormFieldPassword}--error`,
    description: "FormField.Password error state",
  },
  variantOutlined: {
    className: `${COMPONENT_NAMES.FormFieldPassword}--variant-outlined`,
    description: "if `FormField.Password.variant='outlined'`",
  },
  variantFilled: {
    className: `${COMPONENT_NAMES.FormFieldPassword}--variant-filled`,
    description: "if `FormField.Password.variant='filled'`",
  },
  sizeSmall: {
    className: `${COMPONENT_NAMES.FormFieldPassword}--size-small`,
    description: "if `FormField.Password.size='small'`",
  },
  sizeMedium: {
    className: `${COMPONENT_NAMES.FormFieldPassword}--size-medium`,
    description: "if `FormField.Password.size='medium'`",
  },
  sizeLarge: {
    className: `${COMPONENT_NAMES.FormFieldPassword}--size-large`,
    description: "if `FormField.Password.size='large'`",
  },
  fullWidth: {
    className: `${COMPONENT_NAMES.FormFieldPassword}--full-width`,
    description: "if `FormField.Password.fullWidth=true`",
  },
} as const;

/**
 * FormField.Textarea
 */
export const FORM_FIELD_TEXTAREA_CSS_CLASS_NAMES = {
  base: {
    className: `${COMPONENT_NAMES.FormFieldTextarea}__base`,
    description: "FormField.Textarea root class (wrapper)",
  },
  textarea: {
    className: `${COMPONENT_NAMES.FormFieldTextarea}__textarea`,
    description: "FormField.Textarea textarea element",
  },
  disabled: {
    className: `${COMPONENT_NAMES.FormFieldTextarea}--disabled`,
    description: "FormField.Textarea disabled state",
  },
  focused: {
    className: `${COMPONENT_NAMES.FormFieldTextarea}--focused`,
    description: "FormField.Textarea focused state",
  },
  error: {
    className: `${COMPONENT_NAMES.FormFieldTextarea}--error`,
    description: "FormField.Textarea error state",
  },
  variantOutlined: {
    className: `${COMPONENT_NAMES.FormFieldTextarea}--variant-outlined`,
    description: "if `FormField.Textarea.variant='outlined'`",
  },
  variantFilled: {
    className: `${COMPONENT_NAMES.FormFieldTextarea}--variant-filled`,
    description: "if `FormField.Textarea.variant='filled'`",
  },
  sizeSmall: {
    className: `${COMPONENT_NAMES.FormFieldTextarea}--size-small`,
    description: "if `FormField.Textarea.size='small'`",
  },
  sizeMedium: {
    className: `${COMPONENT_NAMES.FormFieldTextarea}--size-medium`,
    description: "if `FormField.Textarea.size='medium'`",
  },
  sizeLarge: {
    className: `${COMPONENT_NAMES.FormFieldTextarea}--size-large`,
    description: "if `FormField.Textarea.size='large'`",
  },
  resizeNone: {
    className: `${COMPONENT_NAMES.FormFieldTextarea}--resize-none`,
    description: "if `FormField.Textarea.resize='none'`",
  },
  resizeVertical: {
    className: `${COMPONENT_NAMES.FormFieldTextarea}--resize-vertical`,
    description: "if `FormField.Textarea.resize='vertical'`",
  },
  resizeHorizontal: {
    className: `${COMPONENT_NAMES.FormFieldTextarea}--resize-horizontal`,
    description: "if `FormField.Textarea.resize='horizontal'`",
  },
  resizeBoth: {
    className: `${COMPONENT_NAMES.FormFieldTextarea}--resize-both`,
    description: "if `FormField.Textarea.resize='both'`",
  },
  fullWidth: {
    className: `${COMPONENT_NAMES.FormFieldTextarea}--full-width`,
    description: "if `FormField.Textarea.fullWidth=true`",
  },
} as const;

/**
 * FormField.Select
 */
export const FORM_FIELD_SELECT_CSS_CLASS_NAMES = {
  base: {
    className: `${COMPONENT_NAMES.FormFieldSelect}__base`,
    description: "FormField.Select root class (trigger wrapper)",
  },
  trigger: {
    className: `${COMPONENT_NAMES.FormFieldSelect}__trigger`,
    description: "FormField.Select trigger button",
  },
  value: {
    className: `${COMPONENT_NAMES.FormFieldSelect}__value`,
    description: "FormField.Select selected value display",
  },
  placeholder: {
    className: `${COMPONENT_NAMES.FormFieldSelect}__placeholder`,
    description: "FormField.Select placeholder text",
  },
  arrow: {
    className: `${COMPONENT_NAMES.FormFieldSelect}__arrow`,
    description: "FormField.Select dropdown arrow",
  },
  dropdown: {
    className: `${COMPONENT_NAMES.FormFieldSelect}__dropdown`,
    description: "FormField.Select dropdown container",
  },
  search: {
    className: `${COMPONENT_NAMES.FormFieldSelect}__search`,
    description: "FormField.Select search input",
  },
  optionsList: {
    className: `${COMPONENT_NAMES.FormFieldSelect}__options-list`,
    description: "FormField.Select options list",
  },
  option: {
    className: `${COMPONENT_NAMES.FormFieldSelect}__option`,
    description: "FormField.Select option item",
  },
  optionSelected: {
    className: `${COMPONENT_NAMES.FormFieldSelect}__option--selected`,
    description: "FormField.Select selected option",
  },
  optionDisabled: {
    className: `${COMPONENT_NAMES.FormFieldSelect}__option--disabled`,
    description: "FormField.Select disabled option",
  },
  group: {
    className: `${COMPONENT_NAMES.FormFieldSelect}__group`,
    description: "FormField.Select option group",
  },
  groupLabel: {
    className: `${COMPONENT_NAMES.FormFieldSelect}__group-label`,
    description: "FormField.Select group label",
  },
  clearButton: {
    className: `${COMPONENT_NAMES.FormFieldSelect}__clear-button`,
    description: "FormField.Select clear button",
  },
  disabled: {
    className: `${COMPONENT_NAMES.FormFieldSelect}--disabled`,
    description: "FormField.Select disabled state",
  },
  open: {
    className: `${COMPONENT_NAMES.FormFieldSelect}--open`,
    description: "FormField.Select open state",
  },
  error: {
    className: `${COMPONENT_NAMES.FormFieldSelect}--error`,
    description: "FormField.Select error state",
  },
  variantOutlined: {
    className: `${COMPONENT_NAMES.FormFieldSelect}--variant-outlined`,
    description: "if `FormField.Select.variant='outlined'`",
  },
  variantFilled: {
    className: `${COMPONENT_NAMES.FormFieldSelect}--variant-filled`,
    description: "if `FormField.Select.variant='filled'`",
  },
  sizeSmall: {
    className: `${COMPONENT_NAMES.FormFieldSelect}--size-small`,
    description: "if `FormField.Select.size='small'`",
  },
  sizeMedium: {
    className: `${COMPONENT_NAMES.FormFieldSelect}--size-medium`,
    description: "if `FormField.Select.size='medium'`",
  },
  sizeLarge: {
    className: `${COMPONENT_NAMES.FormFieldSelect}--size-large`,
    description: "if `FormField.Select.size='large'`",
  },
  fullWidth: {
    className: `${COMPONENT_NAMES.FormFieldSelect}--full-width`,
    description: "if `FormField.Select.fullWidth=true`",
  },
} as const;

/**
 * FormField.Checkbox
 */
export const FORM_FIELD_CHECKBOX_CSS_CLASS_NAMES = {
  base: {
    className: `${COMPONENT_NAMES.FormFieldCheckbox}__base`,
    description: "FormField.Checkbox root class (wrapper)",
  },
  input: {
    className: `${COMPONENT_NAMES.FormFieldCheckbox}__input`,
    description: "FormField.Checkbox hidden input element",
  },
  box: {
    className: `${COMPONENT_NAMES.FormFieldCheckbox}__box`,
    description: "FormField.Checkbox visual box",
  },
  icon: {
    className: `${COMPONENT_NAMES.FormFieldCheckbox}__icon`,
    description: "FormField.Checkbox check icon",
  },
  label: {
    className: `${COMPONENT_NAMES.FormFieldCheckbox}__label`,
    description: "FormField.Checkbox label text",
  },
  checked: {
    className: `${COMPONENT_NAMES.FormFieldCheckbox}--checked`,
    description: "FormField.Checkbox checked state",
  },
  disabled: {
    className: `${COMPONENT_NAMES.FormFieldCheckbox}--disabled`,
    description: "FormField.Checkbox disabled state",
  },
  error: {
    className: `${COMPONENT_NAMES.FormFieldCheckbox}--error`,
    description: "FormField.Checkbox error state",
  },
  sizeSmall: {
    className: `${COMPONENT_NAMES.FormFieldCheckbox}--size-small`,
    description: "if `FormField.Checkbox.size='small'`",
  },
  sizeMedium: {
    className: `${COMPONENT_NAMES.FormFieldCheckbox}--size-medium`,
    description: "if `FormField.Checkbox.size='medium'`",
  },
  sizeLarge: {
    className: `${COMPONENT_NAMES.FormFieldCheckbox}--size-large`,
    description: "if `FormField.Checkbox.size='large'`",
  },
} as const;

/**
 * FormField.Switch
 */
export const FORM_FIELD_SWITCH_CSS_CLASS_NAMES = {
  base: {
    className: `${COMPONENT_NAMES.FormFieldSwitch}__base`,
    description: "FormField.Switch root class (wrapper)",
  },
  input: {
    className: `${COMPONENT_NAMES.FormFieldSwitch}__input`,
    description: "FormField.Switch hidden input element",
  },
  track: {
    className: `${COMPONENT_NAMES.FormFieldSwitch}__track`,
    description: "FormField.Switch track (background)",
  },
  thumb: {
    className: `${COMPONENT_NAMES.FormFieldSwitch}__thumb`,
    description: "FormField.Switch thumb (knob)",
  },
  checked: {
    className: `${COMPONENT_NAMES.FormFieldSwitch}--checked`,
    description: "FormField.Switch checked state",
  },
  disabled: {
    className: `${COMPONENT_NAMES.FormFieldSwitch}--disabled`,
    description: "FormField.Switch disabled state",
  },
  error: {
    className: `${COMPONENT_NAMES.FormFieldSwitch}--error`,
    description: "FormField.Switch error state",
  },
  sizeSmall: {
    className: `${COMPONENT_NAMES.FormFieldSwitch}--size-small`,
    description: "if `FormField.Switch.size='small'`",
  },
  sizeMedium: {
    className: `${COMPONENT_NAMES.FormFieldSwitch}--size-medium`,
    description: "if `FormField.Switch.size='medium'`",
  },
  sizeLarge: {
    className: `${COMPONENT_NAMES.FormFieldSwitch}--size-large`,
    description: "if `FormField.Switch.size='large'`",
  },
} as const;

/**
 * FormField.Radio
 */
export const FORM_FIELD_RADIO_CSS_CLASS_NAMES = {
  group: {
    className: `${COMPONENT_NAMES.FormFieldRadio}__group`,
    description: "FormField.Radio group container",
  },
  base: {
    className: `${COMPONENT_NAMES.FormFieldRadio}__base`,
    description: "FormField.Radio item root class (wrapper)",
  },
  input: {
    className: `${COMPONENT_NAMES.FormFieldRadio}__input`,
    description: "FormField.Radio hidden input element",
  },
  circle: {
    className: `${COMPONENT_NAMES.FormFieldRadio}__circle`,
    description: "FormField.Radio visual circle",
  },
  dot: {
    className: `${COMPONENT_NAMES.FormFieldRadio}__dot`,
    description: "FormField.Radio inner dot",
  },
  label: {
    className: `${COMPONENT_NAMES.FormFieldRadio}__label`,
    description: "FormField.Radio label text",
  },
  checked: {
    className: `${COMPONENT_NAMES.FormFieldRadio}--checked`,
    description: "FormField.Radio checked state",
  },
  disabled: {
    className: `${COMPONENT_NAMES.FormFieldRadio}--disabled`,
    description: "FormField.Radio disabled state",
  },
  error: {
    className: `${COMPONENT_NAMES.FormFieldRadio}--error`,
    description: "FormField.Radio error state",
  },
  horizontal: {
    className: `${COMPONENT_NAMES.FormFieldRadio}--horizontal`,
    description: "FormField.Radio group horizontal layout",
  },
  vertical: {
    className: `${COMPONENT_NAMES.FormFieldRadio}--vertical`,
    description: "FormField.Radio group vertical layout",
  },
  sizeSmall: {
    className: `${COMPONENT_NAMES.FormFieldRadio}--size-small`,
    description: "if `FormField.Radio.size='small'`",
  },
  sizeMedium: {
    className: `${COMPONENT_NAMES.FormFieldRadio}--size-medium`,
    description: "if `FormField.Radio.size='medium'`",
  },
  sizeLarge: {
    className: `${COMPONENT_NAMES.FormFieldRadio}--size-large`,
    description: "if `FormField.Radio.size='large'`",
  },
} as const;

/**
 * Progress.Bar CSS class names
 */
export const PROGRESS_BAR_CSS_CLASS_NAMES = {
  base: {
    className: `${COMPONENT_NAMES.ProgressBar}__base`,
    description: "Progress.Bar root class",
  },
  track: {
    className: `${COMPONENT_NAMES.ProgressBar}__track`,
    description: "Progress.Bar track/background",
  },
  fill: {
    className: `${COMPONENT_NAMES.ProgressBar}__fill`,
    description: "Progress.Bar filled portion",
  },
  animated: {
    className: `${COMPONENT_NAMES.ProgressBar}--animated`,
    description: "Progress.Bar animated/indeterminate state",
  },
  sizeSmall: {
    className: `${COMPONENT_NAMES.ProgressBar}--size-small`,
    description: "if `Progress.Bar.size='small'`",
  },
  sizeMedium: {
    className: `${COMPONENT_NAMES.ProgressBar}--size-medium`,
    description: "if `Progress.Bar.size='medium'`",
  },
  sizeLarge: {
    className: `${COMPONENT_NAMES.ProgressBar}--size-large`,
    description: "if `Progress.Bar.size='large'`",
  },
  colorPrimary: {
    className: `${COMPONENT_NAMES.ProgressBar}--color-primary`,
    description: "if `Progress.Bar.color='primary'`",
  },
  colorSuccess: {
    className: `${COMPONENT_NAMES.ProgressBar}--color-success`,
    description: "if `Progress.Bar.color='success'`",
  },
  colorError: {
    className: `${COMPONENT_NAMES.ProgressBar}--color-error`,
    description: "if `Progress.Bar.color='error'`",
  },
  colorWarning: {
    className: `${COMPONENT_NAMES.ProgressBar}--color-warning`,
    description: "if `Progress.Bar.color='warning'`",
  },
  colorInfo: {
    className: `${COMPONENT_NAMES.ProgressBar}--color-info`,
    description: "if `Progress.Bar.color='info'`",
  },
} as const;

/**
 * Progress.Circle CSS class names
 */
export const PROGRESS_CIRCLE_CSS_CLASS_NAMES = {
  base: {
    className: `${COMPONENT_NAMES.ProgressCircle}__base`,
    description: "Progress.Circle root class",
  },
  svg: {
    className: `${COMPONENT_NAMES.ProgressCircle}__svg`,
    description: "Progress.Circle SVG element",
  },
  track: {
    className: `${COMPONENT_NAMES.ProgressCircle}__track`,
    description: "Progress.Circle track circle",
  },
  fill: {
    className: `${COMPONENT_NAMES.ProgressCircle}__fill`,
    description: "Progress.Circle filled arc",
  },
  label: {
    className: `${COMPONENT_NAMES.ProgressCircle}__label`,
    description: "Progress.Circle center label",
  },
  animated: {
    className: `${COMPONENT_NAMES.ProgressCircle}--animated`,
    description: "Progress.Circle animated/indeterminate state",
  },
  sizeSmall: {
    className: `${COMPONENT_NAMES.ProgressCircle}--size-small`,
    description: "if `Progress.Circle.size='small'`",
  },
  sizeMedium: {
    className: `${COMPONENT_NAMES.ProgressCircle}--size-medium`,
    description: "if `Progress.Circle.size='medium'`",
  },
  sizeLarge: {
    className: `${COMPONENT_NAMES.ProgressCircle}--size-large`,
    description: "if `Progress.Circle.size='large'`",
  },
  colorPrimary: {
    className: `${COMPONENT_NAMES.ProgressCircle}--color-primary`,
    description: "if `Progress.Circle.color='primary'`",
  },
  colorSuccess: {
    className: `${COMPONENT_NAMES.ProgressCircle}--color-success`,
    description: "if `Progress.Circle.color='success'`",
  },
  colorError: {
    className: `${COMPONENT_NAMES.ProgressCircle}--color-error`,
    description: "if `Progress.Circle.color='error'`",
  },
  colorWarning: {
    className: `${COMPONENT_NAMES.ProgressCircle}--color-warning`,
    description: "if `Progress.Circle.color='warning'`",
  },
  colorInfo: {
    className: `${COMPONENT_NAMES.ProgressCircle}--color-info`,
    description: "if `Progress.Circle.color='info'`",
  },
} as const;

/**
 * Progress.PageLoad CSS class names
 */
export const PROGRESS_PAGE_LOAD_CSS_CLASS_NAMES = {
  base: {
    className: `${COMPONENT_NAMES.ProgressPageLoad}__base`,
    description: "Progress.PageLoad root class",
  },
  bar: {
    className: `${COMPONENT_NAMES.ProgressPageLoad}__bar`,
    description: "Progress.PageLoad progress bar",
  },
  active: {
    className: `${COMPONENT_NAMES.ProgressPageLoad}--active`,
    description: "Progress.PageLoad visible/active state",
  },
} as const;

/**
 * Progress.ScrollIndicator CSS class names
 */
export const PROGRESS_SCROLL_INDICATOR_CSS_CLASS_NAMES = {
  base: {
    className: `${COMPONENT_NAMES.ProgressScrollIndicator}__base`,
    description: "Progress.ScrollIndicator root class",
  },
  bar: {
    className: `${COMPONENT_NAMES.ProgressScrollIndicator}__bar`,
    description: "Progress.ScrollIndicator progress bar",
  },
} as const;

/**
 * Toast
 */
export const TOAST_CSS_CLASS_NAMES = {
  // Container (viewport)
  container: {
    className: `${COMPONENT_NAMES.ToastProvider}__container`,
    description: "Toast container/viewport",
  },
  // Single toast
  root: {
    className: `${COMPONENT_NAMES.Toast}__root`,
    description: "Toast root element",
  },
  icon: {
    className: `${COMPONENT_NAMES.Toast}__icon`,
    description: "Toast icon container",
  },
  content: {
    className: `${COMPONENT_NAMES.Toast}__content`,
    description: "Toast content wrapper",
  },
  title: {
    className: `${COMPONENT_NAMES.Toast}__title`,
    description: "Toast title",
  },
  description: {
    className: `${COMPONENT_NAMES.Toast}__description`,
    description: "Toast description",
  },
  action: {
    className: `${COMPONENT_NAMES.Toast}__action`,
    description: "Toast action area",
  },
  closeButton: {
    className: `${COMPONENT_NAMES.Toast}__close-button`,
    description: "Toast close button",
  },
  // Variants
  variantSuccess: {
    className: `${COMPONENT_NAMES.Toast}--variant-success`,
    description: "if `Toast.variant='success'`",
  },
  variantError: {
    className: `${COMPONENT_NAMES.Toast}--variant-error`,
    description: "if `Toast.variant='error'`",
  },
  variantWarning: {
    className: `${COMPONENT_NAMES.Toast}--variant-warning`,
    description: "if `Toast.variant='warning'`",
  },
  variantInfo: {
    className: `${COMPONENT_NAMES.Toast}--variant-info`,
    description: "if `Toast.variant='info'`",
  },
  variantLoading: {
    className: `${COMPONENT_NAMES.Toast}--variant-loading`,
    description: "if `Toast.variant='loading'`",
  },
  // Placements
  placementTopRight: {
    className: `${COMPONENT_NAMES.ToastProvider}--placement-top-right`,
    description: "if `ToastProvider.placement='top-right'`",
  },
  placementTopCenter: {
    className: `${COMPONENT_NAMES.ToastProvider}--placement-top-center`,
    description: "if `ToastProvider.placement='top-center'`",
  },
  placementTopLeft: {
    className: `${COMPONENT_NAMES.ToastProvider}--placement-top-left`,
    description: "if `ToastProvider.placement='top-left'`",
  },
  placementBottomRight: {
    className: `${COMPONENT_NAMES.ToastProvider}--placement-bottom-right`,
    description: "if `ToastProvider.placement='bottom-right'`",
  },
  placementBottomCenter: {
    className: `${COMPONENT_NAMES.ToastProvider}--placement-bottom-center`,
    description: "if `ToastProvider.placement='bottom-center'`",
  },
  placementBottomLeft: {
    className: `${COMPONENT_NAMES.ToastProvider}--placement-bottom-left`,
    description: "if `ToastProvider.placement='bottom-left'`",
  },
  // States
  entering: {
    className: `${COMPONENT_NAMES.Toast}--entering`,
    description: "Toast entering animation",
  },
  exiting: {
    className: `${COMPONENT_NAMES.Toast}--exiting`,
    description: "Toast exiting animation",
  },
} as const;

/**
 * Tabs
 */
export const TABS_CSS_CLASS_NAMES = {
  // Root
  root: {
    className: `${COMPONENT_NAMES.Tabs}__root`,
    description: "Tabs root container",
  },
  // List
  list: {
    className: `${COMPONENT_NAMES.Tabs}__list`,
    description: "Tabs list container",
  },
  // Tab
  tab: {
    className: `${COMPONENT_NAMES.Tabs}__tab`,
    description: "Individual tab button",
  },
  tabActive: {
    className: `${COMPONENT_NAMES.Tabs}__tab--active`,
    description: "Active tab state",
  },
  tabDisabled: {
    className: `${COMPONENT_NAMES.Tabs}__tab--disabled`,
    description: "Disabled tab state",
  },
  tabIcon: {
    className: `${COMPONENT_NAMES.Tabs}__tab-icon`,
    description: "Tab icon container",
  },
  // Panel
  panel: {
    className: `${COMPONENT_NAMES.Tabs}__panel`,
    description: "Tab panel content",
  },
  panelHidden: {
    className: `${COMPONENT_NAMES.Tabs}__panel--hidden`,
    description: "Hidden panel state",
  },
  // Variants
  variantUnderline: {
    className: `${COMPONENT_NAMES.Tabs}--variant-underline`,
    description: "Underline variant",
  },
  variantEnclosed: {
    className: `${COMPONENT_NAMES.Tabs}--variant-enclosed`,
    description: "Enclosed/boxed variant",
  },
  variantPills: {
    className: `${COMPONENT_NAMES.Tabs}--variant-pills`,
    description: "Pills/rounded variant",
  },
  // Sizes
  sizeSmall: {
    className: `${COMPONENT_NAMES.Tabs}--size-small`,
    description: "Small size",
  },
  sizeMedium: {
    className: `${COMPONENT_NAMES.Tabs}--size-medium`,
    description: "Medium size",
  },
  sizeLarge: {
    className: `${COMPONENT_NAMES.Tabs}--size-large`,
    description: "Large size",
  },
  // Orientation
  horizontal: {
    className: `${COMPONENT_NAMES.Tabs}--horizontal`,
    description: "Horizontal orientation",
  },
  vertical: {
    className: `${COMPONENT_NAMES.Tabs}--vertical`,
    description: "Vertical orientation",
  },
  // Full width
  fullWidth: {
    className: `${COMPONENT_NAMES.Tabs}--full-width`,
    description: "Full width tabs",
  },
  // Disabled (root level)
  disabled: {
    className: `${COMPONENT_NAMES.Tabs}--disabled`,
    description: "All tabs disabled",
  },
} as const;

/**
 * List
 */
export const LIST_CSS_CLASS_NAMES = {
  // List root
  root: {
    className: `${COMPONENT_NAMES.List}__root`,
    description: "List root container",
  },
  divider: {
    className: `${COMPONENT_NAMES.List}--divider`,
    description: "List with dividers between items",
  },
  spacingNone: {
    className: `${COMPONENT_NAMES.List}--spacing-none`,
    description: "if `List.spacing='none'`",
  },
  spacingSmall: {
    className: `${COMPONENT_NAMES.List}--spacing-small`,
    description: "if `List.spacing='small'`",
  },
  spacingMedium: {
    className: `${COMPONENT_NAMES.List}--spacing-medium`,
    description: "if `List.spacing='medium'`",
  },
  spacingLarge: {
    className: `${COMPONENT_NAMES.List}--spacing-large`,
    description: "if `List.spacing='large'`",
  },
  // List.Item
  item: {
    className: `${COMPONENT_NAMES.List}__item`,
    description: "List item",
  },
  itemInteractive: {
    className: `${COMPONENT_NAMES.List}__item--interactive`,
    description: "Interactive list item (has onClick)",
  },
  itemSelected: {
    className: `${COMPONENT_NAMES.List}__item--selected`,
    description: "Selected list item",
  },
  itemDisabled: {
    className: `${COMPONENT_NAMES.List}__item--disabled`,
    description: "Disabled list item",
  },
  itemStartElement: {
    className: `${COMPONENT_NAMES.List}__item-start-element`,
    description: "List item start element container",
  },
  itemEndElement: {
    className: `${COMPONENT_NAMES.List}__item-end-element`,
    description: "List item end element container",
  },
  itemContent: {
    className: `${COMPONENT_NAMES.List}__item-content`,
    description: "List item content wrapper",
  },
  // List.ItemText
  itemText: {
    className: `${COMPONENT_NAMES.List}__item-text`,
    description: "List item text container",
  },
  itemTextPrimary: {
    className: `${COMPONENT_NAMES.List}__item-text-primary`,
    description: "List item primary text",
  },
  itemTextSecondary: {
    className: `${COMPONENT_NAMES.List}__item-text-secondary`,
    description: "List item secondary text",
  },
  itemTextEllipsis: {
    className: `${COMPONENT_NAMES.List}__item-text--ellipsis`,
    description: "List item text with ellipsis",
  },
} as const;
