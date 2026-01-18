import { COMPONENT_NAMES as e } from "./componentNames.mjs";
const a = {
  base: {
    className: `${e.Arrow}__base`,
    description: "Arrow root class"
  },
  directionTop: {
    className: `${e.Arrow}--direction-top`,
    description: "Arrow pointing up"
  },
  directionBottom: {
    className: `${e.Arrow}--direction-bottom`,
    description: "Arrow pointing down"
  },
  directionLeft: {
    className: `${e.Arrow}--direction-left`,
    description: "Arrow pointing left"
  },
  directionRight: {
    className: `${e.Arrow}--direction-right`,
    description: "Arrow pointing right"
  }
}, s = {
  base: {
    className: `${e.Avatar}__base`,
    description: "Avatar root class"
  },
  sizeSmall: {
    className: `${e.Avatar}__sizeSmall`,
    description: "if `Avatar.size='small'`"
  },
  sizeMedium: {
    className: `${e.Avatar}__sizeMedium`,
    description: "if `Avatar.size='medium'`"
  },
  sizeLarge: {
    className: `${e.Avatar}__sizeLarge`,
    description: "if `Avatar.size='large'`"
  },
  variantCircular: {
    className: `${e.Avatar}__variantCircular`,
    description: "if `Avatar.variant='circular'`"
  },
  variantRounded: {
    className: `${e.Avatar}__variantRounded`,
    description: "if `Avatar.variant='rounded'`"
  },
  variantSquare: {
    className: `${e.Avatar}__variantSquare`,
    description: "if `Avatar.variant='square'`"
  },
  hasImage: {
    className: `${e.Avatar}__hasImage`,
    description: "if Avatar has valid image"
  },
  image: {
    className: `${e.Avatar}__image`,
    description: "Avatar image element"
  },
  fallback: {
    className: `${e.Avatar}__fallback`,
    description: "Avatar fallback content (text or icon)"
  }
}, r = {
  root: {
    className: `${e.Badge}__root`,
    description: "Badge root wrapper (contains children)"
  },
  badge: {
    className: `${e.Badge}__badge`,
    description: "Badge element itself"
  },
  invisible: {
    className: `${e.Badge}--invisible`,
    description: "Badge invisible state"
  },
  variantStandard: {
    className: `${e.Badge}--variant-standard`,
    description: "if `Badge.variant='standard'`"
  },
  variantDot: {
    className: `${e.Badge}--variant-dot`,
    description: "if `Badge.variant='dot'`"
  },
  sizeSmall: {
    className: `${e.Badge}--size-small`,
    description: "if `Badge.size='small'`"
  },
  sizeMedium: {
    className: `${e.Badge}--size-medium`,
    description: "if `Badge.size='medium'`"
  },
  sizeLarge: {
    className: `${e.Badge}--size-large`,
    description: "if `Badge.size='large'`"
  },
  colorDefault: {
    className: `${e.Badge}--color-default`,
    description: "if `Badge.color='default'`"
  },
  colorPrimary: {
    className: `${e.Badge}--color-primary`,
    description: "if `Badge.color='primary'`"
  },
  colorSuccess: {
    className: `${e.Badge}--color-success`,
    description: "if `Badge.color='success'`"
  },
  colorError: {
    className: `${e.Badge}--color-error`,
    description: "if `Badge.color='error'`"
  },
  colorWarning: {
    className: `${e.Badge}--color-warning`,
    description: "if `Badge.color='warning'`"
  },
  colorInfo: {
    className: `${e.Badge}--color-info`,
    description: "if `Badge.color='info'`"
  },
  anchorTopRight: {
    className: `${e.Badge}--anchor-top-right`,
    description: "if `Badge.anchorOrigin='top-right'`"
  },
  anchorTopLeft: {
    className: `${e.Badge}--anchor-top-left`,
    description: "if `Badge.anchorOrigin='top-left'`"
  },
  anchorBottomRight: {
    className: `${e.Badge}--anchor-bottom-right`,
    description: "if `Badge.anchorOrigin='bottom-right'`"
  },
  anchorBottomLeft: {
    className: `${e.Badge}--anchor-bottom-left`,
    description: "if `Badge.anchorOrigin='bottom-left'`"
  }
}, o = {
  base: {
    className: `${e.Backdrop}__base`,
    description: "Backdrop root class"
  },
  open: {
    className: `${e.Backdrop}--open`,
    description: "Backdrop open state"
  }
}, t = {
  base: {
    className: `${e.Box}__base`,
    description: "Box root class"
  }
}, c = {
  base: {
    className: `${e.Button}__base`,
    description: "Button root class"
  },
  disabled: {
    className: `${e.Button}__disabled`,
    description: "if `Button.disabled={true}`"
  },
  loading: {
    className: `${e.Button}__loading`,
    description: "if `Button.loading={true}`"
  },
  fullWidth: {
    className: `${e.Button}__fullwidth`,
    description: "if `Button.fullWidth={true}`"
  },
  variantContained: {
    className: `${e.Button}__variantContained`,
    description: "if `Button.variant='contained'`"
  },
  variantOutlined: {
    className: `${e.Button}__variantOutlined`,
    description: "if `Button.variant='outlined'`"
  },
  variantText: {
    className: `${e.Button}__variantText`,
    description: "if `Button.variant='text'`"
  },
  sizeSmall: {
    className: `${e.Button}__sizeSmall`,
    description: "if `Button.size='small'`"
  },
  sizeMedium: {
    className: `${e.Button}__sizeMedium`,
    description: "if `Button.size='medium'`"
  },
  sizeLarge: {
    className: `${e.Button}__sizeLarge`,
    description: "if `Button.size='large'`"
  },
  colorDefault: {
    className: `${e.Button}__colorDefault`,
    description: "if `Button.color='default'`"
  },
  colorPrimary: {
    className: `${e.Button}__colorPrimary`,
    description: "if `Button.color='primary'`"
  },
  colorSuccess: {
    className: `${e.Button}__colorSuccess`,
    description: "if `Button.color='success'`"
  },
  colorError: {
    className: `${e.Button}__colorError`,
    description: "if `Button.color='error'`"
  },
  colorWarning: {
    className: `${e.Button}__colorWarning`,
    description: "if `Button.color='warning'`"
  },
  colorInfo: {
    className: `${e.Button}__colorInfo`,
    description: "if `Button.color='info'`"
  },
  content: {
    className: `${e.Button}__content`,
    description: "Button content wrapper"
  },
  loadingIcon: {
    className: `${e.Button}__loading-icon`,
    description: "Button loading icon (centered overlay)"
  }
}, l = {
  base: {
    className: `${e.Card}__base`,
    description: "Card root class"
  },
  disabled: {
    className: `${e.Card}__disabled`,
    description: "if `Card.disabled={true}`"
  },
  loading: {
    className: `${e.Card}__loading`,
    description: "if `Card.loading={true}`"
  },
  clickable: {
    className: `${e.Card}__clickable`,
    description: "if `Card.clickable={true}`"
  },
  variantElevated: {
    className: `${e.Card}__variantElevated`,
    description: "if `Card.variant='elevated'`"
  },
  variantOutlined: {
    className: `${e.Card}__variantOutlined`,
    description: "if `Card.variant='outlined'`"
  },
  variantFilled: {
    className: `${e.Card}__variantFilled`,
    description: "if `Card.variant='filled'`"
  },
  paddingNone: {
    className: `${e.Card}__paddingNone`,
    description: "if `Card.padding='none'`"
  },
  paddingSmall: {
    className: `${e.Card}__paddingSmall`,
    description: "if `Card.padding='small'`"
  },
  paddingMedium: {
    className: `${e.Card}__paddingMedium`,
    description: "if `Card.padding='medium'`"
  },
  paddingLarge: {
    className: `${e.Card}__paddingLarge`,
    description: "if `Card.padding='large'`"
  },
  radiusNone: {
    className: `${e.Card}__radiusNone`,
    description: "if `Card.radius='none'`"
  },
  radiusSmall: {
    className: `${e.Card}__radiusSmall`,
    description: "if `Card.radius='small'`"
  },
  radiusMedium: {
    className: `${e.Card}__radiusMedium`,
    description: "if `Card.radius='medium'`"
  },
  radiusLarge: {
    className: `${e.Card}__radiusLarge`,
    description: "if `Card.radius='large'`"
  },
  content: {
    className: `${e.Card}__content`,
    description: "Card content wrapper"
  },
  loadingIcon: {
    className: `${e.Card}__loading-icon`,
    description: "Card loading icon (centered overlay)"
  }
}, n = {
  base: {
    className: `${e.Chip}__base`,
    description: "Chip root class"
  },
  disabled: {
    className: `${e.Chip}--disabled`,
    description: "Chip disabled state"
  },
  selected: {
    className: `${e.Chip}--selected`,
    description: "Chip selected state"
  },
  clickable: {
    className: `${e.Chip}--clickable`,
    description: "Chip clickable state"
  },
  variantFilled: {
    className: `${e.Chip}--variant-filled`,
    description: "if `Chip.variant='filled'`"
  },
  variantOutlined: {
    className: `${e.Chip}--variant-outlined`,
    description: "if `Chip.variant='outlined'`"
  },
  sizeSmall: {
    className: `${e.Chip}--size-small`,
    description: "if `Chip.size='small'`"
  },
  sizeMedium: {
    className: `${e.Chip}--size-medium`,
    description: "if `Chip.size='medium'`"
  },
  sizeLarge: {
    className: `${e.Chip}--size-large`,
    description: "if `Chip.size='large'`"
  },
  colorDefault: {
    className: `${e.Chip}--color-default`,
    description: "if `Chip.color='default'`"
  },
  colorPrimary: {
    className: `${e.Chip}--color-primary`,
    description: "if `Chip.color='primary'`"
  },
  colorSuccess: {
    className: `${e.Chip}--color-success`,
    description: "if `Chip.color='success'`"
  },
  colorError: {
    className: `${e.Chip}--color-error`,
    description: "if `Chip.color='error'`"
  },
  colorWarning: {
    className: `${e.Chip}--color-warning`,
    description: "if `Chip.color='warning'`"
  },
  colorInfo: {
    className: `${e.Chip}--color-info`,
    description: "if `Chip.color='info'`"
  },
  label: {
    className: `${e.Chip}__label`,
    description: "Chip label/text"
  },
  deleteIcon: {
    className: `${e.Chip}__delete-icon`,
    description: "Chip delete icon"
  }
}, d = {
  base: {
    className: `${e.Icon}__base`,
    description: "Icon root class"
  },
  colorInherit: {
    className: `${e.Icon}--color-inherit`,
    description: "if `Icon.color='inherit'`"
  },
  colorPrimary: {
    className: `${e.Icon}--color-primary`,
    description: "if `Icon.color='primary'`"
  },
  colorSuccess: {
    className: `${e.Icon}--color-success`,
    description: "if `Icon.color='success'`"
  },
  colorError: {
    className: `${e.Icon}--color-error`,
    description: "if `Icon.color='error'`"
  },
  colorWarning: {
    className: `${e.Icon}--color-warning`,
    description: "if `Icon.color='warning'`"
  },
  colorInfo: {
    className: `${e.Icon}--color-info`,
    description: "if `Icon.color='info'`"
  }
}, m = {
  base: {
    className: `${e.Drawer}__base`,
    description: "Drawer root class (content container)"
  },
  anchorLeft: {
    className: `${e.Drawer}--anchor-left`,
    description: "Drawer anchored to left edge"
  },
  anchorRight: {
    className: `${e.Drawer}--anchor-right`,
    description: "Drawer anchored to right edge"
  },
  anchorTop: {
    className: `${e.Drawer}--anchor-top`,
    description: "Drawer anchored to top edge"
  },
  anchorBottom: {
    className: `${e.Drawer}--anchor-bottom`,
    description: "Drawer anchored to bottom edge"
  }
}, p = {
  base: {
    className: `${e.Modal}__base`,
    description: "Modal root class (content container)"
  },
  open: {
    className: `${e.Modal}--open`,
    description: "Modal open state (visible with animation)"
  }
}, _ = {
  base: {
    className: `${e.Popover}__base`,
    description: "Popover content container"
  },
  trigger: {
    className: `${e.Popover}__trigger`,
    description: "Popover trigger wrapper"
  }
}, F = {
  base: {
    className: `${e.Tooltip}__base`,
    description: "Tooltip content container"
  }
}, N = {
  base: {
    className: `${e.SpaceFlex}__base`,
    description: "Space.Flex root class"
  },
  column: {
    className: `${e.SpaceFlex}__column`,
    description: "if `SpaceFlex.column={true}`"
  },
  spacing0: {
    className: `${e.SpaceFlex}__spacing0`,
    description: "if `SpaceFlex.spacing={0}`"
  },
  spacing1: {
    className: `${e.SpaceFlex}__spacing1`,
    description: "if `SpaceFlex.spacing={1}`"
  },
  spacing2: {
    className: `${e.SpaceFlex}__spacing2`,
    description: "if `SpaceFlex.spacing={2}`"
  },
  spacing3: {
    className: `${e.SpaceFlex}__spacing3`,
    description: "if `SpaceFlex.spacing={3}`"
  },
  spacing4: {
    className: `${e.SpaceFlex}__spacing4`,
    description: "if `SpaceFlex.spacing={4}`"
  },
  spacing5: {
    className: `${e.SpaceFlex}__spacing5`,
    description: "if `SpaceFlex.spacing={5}`"
  },
  spacing6: {
    className: `${e.SpaceFlex}__spacing6`,
    description: "if `SpaceFlex.spacing={6}`"
  },
  spacing7: {
    className: `${e.SpaceFlex}__spacing7`,
    description: "if `SpaceFlex.spacing={7}`"
  },
  spacing8: {
    className: `${e.SpaceFlex}__spacing8`,
    description: "if `SpaceFlex.spacing={8}`"
  },
  spacing9: {
    className: `${e.SpaceFlex}__spacing9`,
    description: "if `SpaceFlex.spacing={9}`"
  },
  spacing10: {
    className: `${e.SpaceFlex}__spacing10`,
    description: "if `SpaceFlex.spacing={10}`"
  }
}, g = {
  base: {
    className: `${e.TypographyParagraph}__base`,
    description: "Typography.Paragraph root class"
  },
  ellipsis: {
    className: `${e.TypographyParagraph}--ellipsis`,
    description: "Typography.Paragraph with ellipsis enabled"
  }
}, S = {
  base: {
    className: `${e.TypographyTitle}__base`,
    description: "Typography.Title root class"
  },
  levelH1: {
    className: `${e.TypographyTitle}--h1`,
    description: "Typography.Title as h1"
  },
  levelH2: {
    className: `${e.TypographyTitle}--h2`,
    description: "Typography.Title as h2"
  },
  levelH3: {
    className: `${e.TypographyTitle}--h3`,
    description: "Typography.Title as h3"
  },
  levelH4: {
    className: `${e.TypographyTitle}--h4`,
    description: "Typography.Title as h4"
  },
  levelH5: {
    className: `${e.TypographyTitle}--h5`,
    description: "Typography.Title as h5"
  },
  levelH6: {
    className: `${e.TypographyTitle}--h6`,
    description: "Typography.Title as h6"
  }
}, $ = {
  base: {
    className: `${e.TypographyText}__base`,
    description: "Typography.Text root class"
  },
  asCode: {
    className: `${e.TypographyText}--code`,
    description: "Typography.Text as code element"
  },
  asKbd: {
    className: `${e.TypographyText}--kbd`,
    description: "Typography.Text as kbd element"
  },
  asMark: {
    className: `${e.TypographyText}--mark`,
    description: "Typography.Text as mark element"
  },
  asDel: {
    className: `${e.TypographyText}--del`,
    description: "Typography.Text as del element"
  },
  asIns: {
    className: `${e.TypographyText}--ins`,
    description: "Typography.Text as ins element"
  },
  asSmall: {
    className: `${e.TypographyText}--small`,
    description: "Typography.Text as small element"
  },
  asStrong: {
    className: `${e.TypographyText}--strong`,
    description: "Typography.Text as strong element"
  },
  asEm: {
    className: `${e.TypographyText}--em`,
    description: "Typography.Text as em element"
  },
  asSub: {
    className: `${e.TypographyText}--sub`,
    description: "Typography.Text as sub element"
  },
  asSup: {
    className: `${e.TypographyText}--sup`,
    description: "Typography.Text as sup element"
  }
}, u = {
  base: {
    className: `${e.SpaceGrid}__base`,
    description: "Space.Grid root class"
  },
  spacing0: {
    className: `${e.SpaceGrid}__spacing0`,
    description: "if `SpaceGrid.spacing={0}`"
  },
  spacing1: {
    className: `${e.SpaceGrid}__spacing1`,
    description: "if `SpaceGrid.spacing={1}`"
  },
  spacing2: {
    className: `${e.SpaceGrid}__spacing2`,
    description: "if `SpaceGrid.spacing={2}`"
  },
  spacing3: {
    className: `${e.SpaceGrid}__spacing3`,
    description: "if `SpaceGrid.spacing={3}`"
  },
  spacing4: {
    className: `${e.SpaceGrid}__spacing4`,
    description: "if `SpaceGrid.spacing={4}`"
  },
  spacing5: {
    className: `${e.SpaceGrid}__spacing5`,
    description: "if `SpaceGrid.spacing={5}`"
  },
  spacing6: {
    className: `${e.SpaceGrid}__spacing6`,
    description: "if `SpaceGrid.spacing={6}`"
  },
  spacing7: {
    className: `${e.SpaceGrid}__spacing7`,
    description: "if `SpaceGrid.spacing={7}`"
  },
  spacing8: {
    className: `${e.SpaceGrid}__spacing8`,
    description: "if `SpaceGrid.spacing={8}`"
  },
  spacing9: {
    className: `${e.SpaceGrid}__spacing9`,
    description: "if `SpaceGrid.spacing={9}`"
  },
  spacing10: {
    className: `${e.SpaceGrid}__spacing10`,
    description: "if `SpaceGrid.spacing={10}`"
  },
  columns1: {
    className: `${e.SpaceGrid}__columns1`,
    description: "if `SpaceGrid.columns={1}`"
  },
  columns2: {
    className: `${e.SpaceGrid}__columns2`,
    description: "if `SpaceGrid.columns={2}`"
  },
  columns3: {
    className: `${e.SpaceGrid}__columns3`,
    description: "if `SpaceGrid.columns={3}`"
  },
  columns4: {
    className: `${e.SpaceGrid}__columns4`,
    description: "if `SpaceGrid.columns={4}`"
  },
  columns5: {
    className: `${e.SpaceGrid}__columns5`,
    description: "if `SpaceGrid.columns={5}`"
  },
  columns6: {
    className: `${e.SpaceGrid}__columns6`,
    description: "if `SpaceGrid.columns={6}`"
  },
  columns7: {
    className: `${e.SpaceGrid}__columns7`,
    description: "if `SpaceGrid.columns={7}`"
  },
  columns8: {
    className: `${e.SpaceGrid}__columns8`,
    description: "if `SpaceGrid.columns={8}`"
  },
  columns9: {
    className: `${e.SpaceGrid}__columns9`,
    description: "if `SpaceGrid.columns={9}`"
  },
  columns10: {
    className: `${e.SpaceGrid}__columns10`,
    description: "if `SpaceGrid.columns={10}`"
  },
  columns11: {
    className: `${e.SpaceGrid}__columns11`,
    description: "if `SpaceGrid.columns={11}`"
  },
  columns12: {
    className: `${e.SpaceGrid}__columns12`,
    description: "if `SpaceGrid.columns={12}`"
  }
}, b = {
  base: {
    className: `${e.FormControl}__base`,
    description: "FormControl root class"
  },
  row: {
    className: `${e.FormControl}--row`,
    description: "FormControl horizontal layout"
  },
  labelWrapper: {
    className: `${e.FormControl}__label-wrapper`,
    description: "FormControl label wrapper"
  },
  labelTooltip: {
    className: `${e.FormControl}__label-tooltip`,
    description: "FormControl label tooltip icon"
  },
  content: {
    className: `${e.FormControl}__content`,
    description: "FormControl content wrapper (for row layout)"
  },
  field: {
    className: `${e.FormControl}__field`,
    description: "FormControl field wrapper"
  },
  helperText: {
    className: `${e.FormControl}__helper-text`,
    description: "FormControl helper/error text"
  },
  error: {
    className: `${e.FormControl}--error`,
    description: "FormControl error state"
  },
  sizeSmall: {
    className: `${e.FormControl}--size-small`,
    description: "if `FormControl.size='small'`"
  },
  sizeMedium: {
    className: `${e.FormControl}--size-medium`,
    description: "if `FormControl.size='medium'`"
  },
  sizeLarge: {
    className: `${e.FormControl}--size-large`,
    description: "if `FormControl.size='large'`"
  }
}, f = {
  base: {
    className: `${e.FormLabel}__base`,
    description: "FormLabel root class"
  },
  required: {
    className: `${e.FormLabel}--required`,
    description: "FormLabel with required indicator"
  },
  tooltip: {
    className: `${e.FormLabel}__tooltip`,
    description: "FormLabel tooltip icon wrapper"
  },
  sizeSmall: {
    className: `${e.FormLabel}--size-small`,
    description: "if `FormLabel.size='small'`"
  },
  sizeMedium: {
    className: `${e.FormLabel}--size-medium`,
    description: "if `FormLabel.size='medium'`"
  },
  sizeLarge: {
    className: `${e.FormLabel}--size-large`,
    description: "if `FormLabel.size='large'`"
  }
}, T = {
  base: {
    className: `${e.FormFieldText}__base`,
    description: "FormField.Text root class (wrapper)"
  },
  input: {
    className: `${e.FormFieldText}__input`,
    description: "FormField.Text input element"
  },
  prefix: {
    className: `${e.FormFieldText}__prefix`,
    description: "FormField.Text prefix element"
  },
  suffix: {
    className: `${e.FormFieldText}__suffix`,
    description: "FormField.Text suffix element"
  },
  disabled: {
    className: `${e.FormFieldText}--disabled`,
    description: "FormField.Text disabled state"
  },
  focused: {
    className: `${e.FormFieldText}--focused`,
    description: "FormField.Text focused state"
  },
  error: {
    className: `${e.FormFieldText}--error`,
    description: "FormField.Text error state"
  },
  variantOutlined: {
    className: `${e.FormFieldText}--variant-outlined`,
    description: "if `FormField.Text.variant='outlined'`"
  },
  variantFilled: {
    className: `${e.FormFieldText}--variant-filled`,
    description: "if `FormField.Text.variant='filled'`"
  },
  sizeSmall: {
    className: `${e.FormFieldText}--size-small`,
    description: "if `FormField.Text.size='small'`"
  },
  sizeMedium: {
    className: `${e.FormFieldText}--size-medium`,
    description: "if `FormField.Text.size='medium'`"
  },
  sizeLarge: {
    className: `${e.FormFieldText}--size-large`,
    description: "if `FormField.Text.size='large'`"
  },
  fullWidth: {
    className: `${e.FormFieldText}--full-width`,
    description: "if `FormField.Text.fullWidth=true`"
  }
}, C = {
  base: {
    className: `${e.FormFieldNumber}__base`,
    description: "FormField.Number root class (wrapper)"
  },
  input: {
    className: `${e.FormFieldNumber}__input`,
    description: "FormField.Number input element"
  },
  controls: {
    className: `${e.FormFieldNumber}__controls`,
    description: "FormField.Number controls container"
  },
  controlButton: {
    className: `${e.FormFieldNumber}__control-button`,
    description: "FormField.Number control button (+/-)"
  },
  disabled: {
    className: `${e.FormFieldNumber}--disabled`,
    description: "FormField.Number disabled state"
  },
  focused: {
    className: `${e.FormFieldNumber}--focused`,
    description: "FormField.Number focused state"
  },
  error: {
    className: `${e.FormFieldNumber}--error`,
    description: "FormField.Number error state"
  },
  variantOutlined: {
    className: `${e.FormFieldNumber}--variant-outlined`,
    description: "if `FormField.Number.variant='outlined'`"
  },
  variantFilled: {
    className: `${e.FormFieldNumber}--variant-filled`,
    description: "if `FormField.Number.variant='filled'`"
  },
  sizeSmall: {
    className: `${e.FormFieldNumber}--size-small`,
    description: "if `FormField.Number.size='small'`"
  },
  sizeMedium: {
    className: `${e.FormFieldNumber}--size-medium`,
    description: "if `FormField.Number.size='medium'`"
  },
  sizeLarge: {
    className: `${e.FormFieldNumber}--size-large`,
    description: "if `FormField.Number.size='large'`"
  },
  fullWidth: {
    className: `${e.FormFieldNumber}--full-width`,
    description: "if `FormField.Number.fullWidth=true`"
  }
}, h = {
  base: {
    className: `${e.FormFieldPassword}__base`,
    description: "FormField.Password root class (wrapper)"
  },
  input: {
    className: `${e.FormFieldPassword}__input`,
    description: "FormField.Password input element"
  },
  toggle: {
    className: `${e.FormFieldPassword}__toggle`,
    description: "FormField.Password visibility toggle button"
  },
  disabled: {
    className: `${e.FormFieldPassword}--disabled`,
    description: "FormField.Password disabled state"
  },
  focused: {
    className: `${e.FormFieldPassword}--focused`,
    description: "FormField.Password focused state"
  },
  error: {
    className: `${e.FormFieldPassword}--error`,
    description: "FormField.Password error state"
  },
  variantOutlined: {
    className: `${e.FormFieldPassword}--variant-outlined`,
    description: "if `FormField.Password.variant='outlined'`"
  },
  variantFilled: {
    className: `${e.FormFieldPassword}--variant-filled`,
    description: "if `FormField.Password.variant='filled'`"
  },
  sizeSmall: {
    className: `${e.FormFieldPassword}--size-small`,
    description: "if `FormField.Password.size='small'`"
  },
  sizeMedium: {
    className: `${e.FormFieldPassword}--size-medium`,
    description: "if `FormField.Password.size='medium'`"
  },
  sizeLarge: {
    className: `${e.FormFieldPassword}--size-large`,
    description: "if `FormField.Password.size='large'`"
  },
  fullWidth: {
    className: `${e.FormFieldPassword}--full-width`,
    description: "if `FormField.Password.fullWidth=true`"
  }
}, v = {
  base: {
    className: `${e.FormFieldTextarea}__base`,
    description: "FormField.Textarea root class (wrapper)"
  },
  textarea: {
    className: `${e.FormFieldTextarea}__textarea`,
    description: "FormField.Textarea textarea element"
  },
  disabled: {
    className: `${e.FormFieldTextarea}--disabled`,
    description: "FormField.Textarea disabled state"
  },
  focused: {
    className: `${e.FormFieldTextarea}--focused`,
    description: "FormField.Textarea focused state"
  },
  error: {
    className: `${e.FormFieldTextarea}--error`,
    description: "FormField.Textarea error state"
  },
  variantOutlined: {
    className: `${e.FormFieldTextarea}--variant-outlined`,
    description: "if `FormField.Textarea.variant='outlined'`"
  },
  variantFilled: {
    className: `${e.FormFieldTextarea}--variant-filled`,
    description: "if `FormField.Textarea.variant='filled'`"
  },
  sizeSmall: {
    className: `${e.FormFieldTextarea}--size-small`,
    description: "if `FormField.Textarea.size='small'`"
  },
  sizeMedium: {
    className: `${e.FormFieldTextarea}--size-medium`,
    description: "if `FormField.Textarea.size='medium'`"
  },
  sizeLarge: {
    className: `${e.FormFieldTextarea}--size-large`,
    description: "if `FormField.Textarea.size='large'`"
  },
  resizeNone: {
    className: `${e.FormFieldTextarea}--resize-none`,
    description: "if `FormField.Textarea.resize='none'`"
  },
  resizeVertical: {
    className: `${e.FormFieldTextarea}--resize-vertical`,
    description: "if `FormField.Textarea.resize='vertical'`"
  },
  resizeHorizontal: {
    className: `${e.FormFieldTextarea}--resize-horizontal`,
    description: "if `FormField.Textarea.resize='horizontal'`"
  },
  resizeBoth: {
    className: `${e.FormFieldTextarea}--resize-both`,
    description: "if `FormField.Textarea.resize='both'`"
  },
  fullWidth: {
    className: `${e.FormFieldTextarea}--full-width`,
    description: "if `FormField.Textarea.fullWidth=true`"
  }
}, z = {
  base: {
    className: `${e.FormFieldSelect}__base`,
    description: "FormField.Select root class (trigger wrapper)"
  },
  trigger: {
    className: `${e.FormFieldSelect}__trigger`,
    description: "FormField.Select trigger button"
  },
  value: {
    className: `${e.FormFieldSelect}__value`,
    description: "FormField.Select selected value display"
  },
  placeholder: {
    className: `${e.FormFieldSelect}__placeholder`,
    description: "FormField.Select placeholder text"
  },
  arrow: {
    className: `${e.FormFieldSelect}__arrow`,
    description: "FormField.Select dropdown arrow"
  },
  dropdown: {
    className: `${e.FormFieldSelect}__dropdown`,
    description: "FormField.Select dropdown container"
  },
  search: {
    className: `${e.FormFieldSelect}__search`,
    description: "FormField.Select search input"
  },
  optionsList: {
    className: `${e.FormFieldSelect}__options-list`,
    description: "FormField.Select options list"
  },
  option: {
    className: `${e.FormFieldSelect}__option`,
    description: "FormField.Select option item"
  },
  optionSelected: {
    className: `${e.FormFieldSelect}__option--selected`,
    description: "FormField.Select selected option"
  },
  optionDisabled: {
    className: `${e.FormFieldSelect}__option--disabled`,
    description: "FormField.Select disabled option"
  },
  group: {
    className: `${e.FormFieldSelect}__group`,
    description: "FormField.Select option group"
  },
  groupLabel: {
    className: `${e.FormFieldSelect}__group-label`,
    description: "FormField.Select group label"
  },
  clearButton: {
    className: `${e.FormFieldSelect}__clear-button`,
    description: "FormField.Select clear button"
  },
  disabled: {
    className: `${e.FormFieldSelect}--disabled`,
    description: "FormField.Select disabled state"
  },
  open: {
    className: `${e.FormFieldSelect}--open`,
    description: "FormField.Select open state"
  },
  error: {
    className: `${e.FormFieldSelect}--error`,
    description: "FormField.Select error state"
  },
  variantOutlined: {
    className: `${e.FormFieldSelect}--variant-outlined`,
    description: "if `FormField.Select.variant='outlined'`"
  },
  variantFilled: {
    className: `${e.FormFieldSelect}--variant-filled`,
    description: "if `FormField.Select.variant='filled'`"
  },
  sizeSmall: {
    className: `${e.FormFieldSelect}--size-small`,
    description: "if `FormField.Select.size='small'`"
  },
  sizeMedium: {
    className: `${e.FormFieldSelect}--size-medium`,
    description: "if `FormField.Select.size='medium'`"
  },
  sizeLarge: {
    className: `${e.FormFieldSelect}--size-large`,
    description: "if `FormField.Select.size='large'`"
  },
  fullWidth: {
    className: `${e.FormFieldSelect}--full-width`,
    description: "if `FormField.Select.fullWidth=true`"
  }
}, x = {
  base: {
    className: `${e.FormFieldCheckbox}__base`,
    description: "FormField.Checkbox root class (wrapper)"
  },
  input: {
    className: `${e.FormFieldCheckbox}__input`,
    description: "FormField.Checkbox hidden input element"
  },
  box: {
    className: `${e.FormFieldCheckbox}__box`,
    description: "FormField.Checkbox visual box"
  },
  icon: {
    className: `${e.FormFieldCheckbox}__icon`,
    description: "FormField.Checkbox check icon"
  },
  label: {
    className: `${e.FormFieldCheckbox}__label`,
    description: "FormField.Checkbox label text"
  },
  checked: {
    className: `${e.FormFieldCheckbox}--checked`,
    description: "FormField.Checkbox checked state"
  },
  disabled: {
    className: `${e.FormFieldCheckbox}--disabled`,
    description: "FormField.Checkbox disabled state"
  },
  error: {
    className: `${e.FormFieldCheckbox}--error`,
    description: "FormField.Checkbox error state"
  },
  sizeSmall: {
    className: `${e.FormFieldCheckbox}--size-small`,
    description: "if `FormField.Checkbox.size='small'`"
  },
  sizeMedium: {
    className: `${e.FormFieldCheckbox}--size-medium`,
    description: "if `FormField.Checkbox.size='medium'`"
  },
  sizeLarge: {
    className: `${e.FormFieldCheckbox}--size-large`,
    description: "if `FormField.Checkbox.size='large'`"
  }
}, P = {
  base: {
    className: `${e.FormFieldSwitch}__base`,
    description: "FormField.Switch root class (wrapper)"
  },
  input: {
    className: `${e.FormFieldSwitch}__input`,
    description: "FormField.Switch hidden input element"
  },
  track: {
    className: `${e.FormFieldSwitch}__track`,
    description: "FormField.Switch track (background)"
  },
  thumb: {
    className: `${e.FormFieldSwitch}__thumb`,
    description: "FormField.Switch thumb (knob)"
  },
  checked: {
    className: `${e.FormFieldSwitch}--checked`,
    description: "FormField.Switch checked state"
  },
  disabled: {
    className: `${e.FormFieldSwitch}--disabled`,
    description: "FormField.Switch disabled state"
  },
  error: {
    className: `${e.FormFieldSwitch}--error`,
    description: "FormField.Switch error state"
  },
  sizeSmall: {
    className: `${e.FormFieldSwitch}--size-small`,
    description: "if `FormField.Switch.size='small'`"
  },
  sizeMedium: {
    className: `${e.FormFieldSwitch}--size-medium`,
    description: "if `FormField.Switch.size='medium'`"
  },
  sizeLarge: {
    className: `${e.FormFieldSwitch}--size-large`,
    description: "if `FormField.Switch.size='large'`"
  }
}, A = {
  group: {
    className: `${e.FormFieldRadio}__group`,
    description: "FormField.Radio group container"
  },
  base: {
    className: `${e.FormFieldRadio}__base`,
    description: "FormField.Radio item root class (wrapper)"
  },
  input: {
    className: `${e.FormFieldRadio}__input`,
    description: "FormField.Radio hidden input element"
  },
  circle: {
    className: `${e.FormFieldRadio}__circle`,
    description: "FormField.Radio visual circle"
  },
  dot: {
    className: `${e.FormFieldRadio}__dot`,
    description: "FormField.Radio inner dot"
  },
  label: {
    className: `${e.FormFieldRadio}__label`,
    description: "FormField.Radio label text"
  },
  checked: {
    className: `${e.FormFieldRadio}--checked`,
    description: "FormField.Radio checked state"
  },
  disabled: {
    className: `${e.FormFieldRadio}--disabled`,
    description: "FormField.Radio disabled state"
  },
  error: {
    className: `${e.FormFieldRadio}--error`,
    description: "FormField.Radio error state"
  },
  horizontal: {
    className: `${e.FormFieldRadio}--horizontal`,
    description: "FormField.Radio group horizontal layout"
  },
  vertical: {
    className: `${e.FormFieldRadio}--vertical`,
    description: "FormField.Radio group vertical layout"
  },
  sizeSmall: {
    className: `${e.FormFieldRadio}--size-small`,
    description: "if `FormField.Radio.size='small'`"
  },
  sizeMedium: {
    className: `${e.FormFieldRadio}--size-medium`,
    description: "if `FormField.Radio.size='medium'`"
  },
  sizeLarge: {
    className: `${e.FormFieldRadio}--size-large`,
    description: "if `FormField.Radio.size='large'`"
  }
}, L = {
  base: {
    className: `${e.ProgressBar}__base`,
    description: "Progress.Bar root class"
  },
  track: {
    className: `${e.ProgressBar}__track`,
    description: "Progress.Bar track/background"
  },
  fill: {
    className: `${e.ProgressBar}__fill`,
    description: "Progress.Bar filled portion"
  },
  animated: {
    className: `${e.ProgressBar}--animated`,
    description: "Progress.Bar animated/indeterminate state"
  },
  sizeSmall: {
    className: `${e.ProgressBar}--size-small`,
    description: "if `Progress.Bar.size='small'`"
  },
  sizeMedium: {
    className: `${e.ProgressBar}--size-medium`,
    description: "if `Progress.Bar.size='medium'`"
  },
  sizeLarge: {
    className: `${e.ProgressBar}--size-large`,
    description: "if `Progress.Bar.size='large'`"
  },
  colorPrimary: {
    className: `${e.ProgressBar}--color-primary`,
    description: "if `Progress.Bar.color='primary'`"
  },
  colorSuccess: {
    className: `${e.ProgressBar}--color-success`,
    description: "if `Progress.Bar.color='success'`"
  },
  colorError: {
    className: `${e.ProgressBar}--color-error`,
    description: "if `Progress.Bar.color='error'`"
  },
  colorWarning: {
    className: `${e.ProgressBar}--color-warning`,
    description: "if `Progress.Bar.color='warning'`"
  },
  colorInfo: {
    className: `${e.ProgressBar}--color-info`,
    description: "if `Progress.Bar.color='info'`"
  }
}, B = {
  base: {
    className: `${e.ProgressCircle}__base`,
    description: "Progress.Circle root class"
  },
  svg: {
    className: `${e.ProgressCircle}__svg`,
    description: "Progress.Circle SVG element"
  },
  track: {
    className: `${e.ProgressCircle}__track`,
    description: "Progress.Circle track circle"
  },
  fill: {
    className: `${e.ProgressCircle}__fill`,
    description: "Progress.Circle filled arc"
  },
  label: {
    className: `${e.ProgressCircle}__label`,
    description: "Progress.Circle center label"
  },
  animated: {
    className: `${e.ProgressCircle}--animated`,
    description: "Progress.Circle animated/indeterminate state"
  },
  sizeSmall: {
    className: `${e.ProgressCircle}--size-small`,
    description: "if `Progress.Circle.size='small'`"
  },
  sizeMedium: {
    className: `${e.ProgressCircle}--size-medium`,
    description: "if `Progress.Circle.size='medium'`"
  },
  sizeLarge: {
    className: `${e.ProgressCircle}--size-large`,
    description: "if `Progress.Circle.size='large'`"
  },
  colorPrimary: {
    className: `${e.ProgressCircle}--color-primary`,
    description: "if `Progress.Circle.color='primary'`"
  },
  colorSuccess: {
    className: `${e.ProgressCircle}--color-success`,
    description: "if `Progress.Circle.color='success'`"
  },
  colorError: {
    className: `${e.ProgressCircle}--color-error`,
    description: "if `Progress.Circle.color='error'`"
  },
  colorWarning: {
    className: `${e.ProgressCircle}--color-warning`,
    description: "if `Progress.Circle.color='warning'`"
  },
  colorInfo: {
    className: `${e.ProgressCircle}--color-info`,
    description: "if `Progress.Circle.color='info'`"
  }
}, w = {
  base: {
    className: `${e.ProgressPageLoad}__base`,
    description: "Progress.PageLoad root class"
  },
  bar: {
    className: `${e.ProgressPageLoad}__bar`,
    description: "Progress.PageLoad progress bar"
  },
  active: {
    className: `${e.ProgressPageLoad}--active`,
    description: "Progress.PageLoad visible/active state"
  }
}, y = {
  base: {
    className: `${e.ProgressScrollIndicator}__base`,
    description: "Progress.ScrollIndicator root class"
  },
  bar: {
    className: `${e.ProgressScrollIndicator}__bar`,
    description: "Progress.ScrollIndicator progress bar"
  }
}, E = {
  // Container (viewport)
  container: {
    className: `${e.ToastProvider}__container`,
    description: "Toast container/viewport"
  },
  // Single toast
  root: {
    className: `${e.Toast}__root`,
    description: "Toast root element"
  },
  icon: {
    className: `${e.Toast}__icon`,
    description: "Toast icon container"
  },
  content: {
    className: `${e.Toast}__content`,
    description: "Toast content wrapper"
  },
  title: {
    className: `${e.Toast}__title`,
    description: "Toast title"
  },
  description: {
    className: `${e.Toast}__description`,
    description: "Toast description"
  },
  action: {
    className: `${e.Toast}__action`,
    description: "Toast action area"
  },
  closeButton: {
    className: `${e.Toast}__close-button`,
    description: "Toast close button"
  },
  // Variants
  variantSuccess: {
    className: `${e.Toast}--variant-success`,
    description: "if `Toast.variant='success'`"
  },
  variantError: {
    className: `${e.Toast}--variant-error`,
    description: "if `Toast.variant='error'`"
  },
  variantWarning: {
    className: `${e.Toast}--variant-warning`,
    description: "if `Toast.variant='warning'`"
  },
  variantInfo: {
    className: `${e.Toast}--variant-info`,
    description: "if `Toast.variant='info'`"
  },
  variantLoading: {
    className: `${e.Toast}--variant-loading`,
    description: "if `Toast.variant='loading'`"
  },
  // Placements
  placementTopRight: {
    className: `${e.ToastProvider}--placement-top-right`,
    description: "if `ToastProvider.placement='top-right'`"
  },
  placementTopCenter: {
    className: `${e.ToastProvider}--placement-top-center`,
    description: "if `ToastProvider.placement='top-center'`"
  },
  placementTopLeft: {
    className: `${e.ToastProvider}--placement-top-left`,
    description: "if `ToastProvider.placement='top-left'`"
  },
  placementBottomRight: {
    className: `${e.ToastProvider}--placement-bottom-right`,
    description: "if `ToastProvider.placement='bottom-right'`"
  },
  placementBottomCenter: {
    className: `${e.ToastProvider}--placement-bottom-center`,
    description: "if `ToastProvider.placement='bottom-center'`"
  },
  placementBottomLeft: {
    className: `${e.ToastProvider}--placement-bottom-left`,
    description: "if `ToastProvider.placement='bottom-left'`"
  },
  // States
  entering: {
    className: `${e.Toast}--entering`,
    description: "Toast entering animation"
  },
  exiting: {
    className: `${e.Toast}--exiting`,
    description: "Toast exiting animation"
  }
}, M = {
  // Root
  root: {
    className: `${e.Tabs}__root`,
    description: "Tabs root container"
  },
  // List
  list: {
    className: `${e.Tabs}__list`,
    description: "Tabs list container"
  },
  // Tab
  tab: {
    className: `${e.Tabs}__tab`,
    description: "Individual tab button"
  },
  tabActive: {
    className: `${e.Tabs}__tab--active`,
    description: "Active tab state"
  },
  tabDisabled: {
    className: `${e.Tabs}__tab--disabled`,
    description: "Disabled tab state"
  },
  tabIcon: {
    className: `${e.Tabs}__tab-icon`,
    description: "Tab icon container"
  },
  // Panel
  panel: {
    className: `${e.Tabs}__panel`,
    description: "Tab panel content"
  },
  panelHidden: {
    className: `${e.Tabs}__panel--hidden`,
    description: "Hidden panel state"
  },
  // Variants
  variantUnderline: {
    className: `${e.Tabs}--variant-underline`,
    description: "Underline variant"
  },
  variantEnclosed: {
    className: `${e.Tabs}--variant-enclosed`,
    description: "Enclosed/boxed variant"
  },
  variantPills: {
    className: `${e.Tabs}--variant-pills`,
    description: "Pills/rounded variant"
  },
  // Sizes
  sizeSmall: {
    className: `${e.Tabs}--size-small`,
    description: "Small size"
  },
  sizeMedium: {
    className: `${e.Tabs}--size-medium`,
    description: "Medium size"
  },
  sizeLarge: {
    className: `${e.Tabs}--size-large`,
    description: "Large size"
  },
  // Orientation
  horizontal: {
    className: `${e.Tabs}--horizontal`,
    description: "Horizontal orientation"
  },
  vertical: {
    className: `${e.Tabs}--vertical`,
    description: "Vertical orientation"
  },
  // Full width
  fullWidth: {
    className: `${e.Tabs}--full-width`,
    description: "Full width tabs"
  },
  // Disabled (root level)
  disabled: {
    className: `${e.Tabs}--disabled`,
    description: "All tabs disabled"
  }
}, R = {
  // List root
  root: {
    className: `${e.List}__root`,
    description: "List root container"
  },
  divider: {
    className: `${e.List}--divider`,
    description: "List with dividers between items"
  },
  spacingNone: {
    className: `${e.List}--spacing-none`,
    description: "if `List.spacing='none'`"
  },
  spacingSmall: {
    className: `${e.List}--spacing-small`,
    description: "if `List.spacing='small'`"
  },
  spacingMedium: {
    className: `${e.List}--spacing-medium`,
    description: "if `List.spacing='medium'`"
  },
  spacingLarge: {
    className: `${e.List}--spacing-large`,
    description: "if `List.spacing='large'`"
  },
  // List.Item
  item: {
    className: `${e.List}__item`,
    description: "List item"
  },
  itemInteractive: {
    className: `${e.List}__item--interactive`,
    description: "Interactive list item (has onClick)"
  },
  itemSelected: {
    className: `${e.List}__item--selected`,
    description: "Selected list item"
  },
  itemDisabled: {
    className: `${e.List}__item--disabled`,
    description: "Disabled list item"
  },
  itemStartElement: {
    className: `${e.List}__item-start-element`,
    description: "List item start element container"
  },
  itemEndElement: {
    className: `${e.List}__item-end-element`,
    description: "List item end element container"
  },
  itemContent: {
    className: `${e.List}__item-content`,
    description: "List item content wrapper"
  },
  // List.ItemText
  itemText: {
    className: `${e.List}__item-text`,
    description: "List item text container"
  },
  itemTextPrimary: {
    className: `${e.List}__item-text-primary`,
    description: "List item primary text"
  },
  itemTextSecondary: {
    className: `${e.List}__item-text-secondary`,
    description: "List item secondary text"
  },
  itemTextEllipsis: {
    className: `${e.List}__item-text--ellipsis`,
    description: "List item text with ellipsis"
  }
}, k = {
  // Root container
  root: {
    className: `${e.Breadcrumb}__root`,
    description: "Breadcrumb root container (nav element)"
  },
  // List
  list: {
    className: `${e.Breadcrumb}__list`,
    description: "Breadcrumb ordered list"
  },
  // Item wrapper (li)
  item: {
    className: `${e.Breadcrumb}__item`,
    description: "Breadcrumb item wrapper"
  },
  // Link element inside item
  link: {
    className: `${e.Breadcrumb}__link`,
    description: "Breadcrumb link element"
  },
  // States
  itemActive: {
    className: `${e.Breadcrumb}__item--active`,
    description: "Current/active breadcrumb item"
  },
  itemDisabled: {
    className: `${e.Breadcrumb}__item--disabled`,
    description: "Disabled breadcrumb item"
  },
  // Icon
  icon: {
    className: `${e.Breadcrumb}__icon`,
    description: "Breadcrumb item icon"
  },
  // Separator
  separator: {
    className: `${e.Breadcrumb}__separator`,
    description: "Separator between breadcrumb items"
  },
  // Collapsed ellipsis
  collapsed: {
    className: `${e.Breadcrumb}__collapsed`,
    description: "Collapsed items indicator (ellipsis)"
  }
}, G = {
  base: {
    className: `${e.TransitionCollapse}__base`,
    description: "Transition.Collapse root class"
  },
  open: {
    className: `${e.TransitionCollapse}--open`,
    description: "Transition.Collapse open state"
  },
  content: {
    className: `${e.TransitionCollapse}__content`,
    description: "Transition.Collapse inner content wrapper"
  }
}, I = {
  base: {
    className: `${e.TransitionFade}__base`,
    description: "Transition.Fade root class"
  },
  open: {
    className: `${e.TransitionFade}--open`,
    description: "Transition.Fade open state (visible)"
  }
};
export {
  a as ARROW_CSS_CLASS_NAMES,
  s as AVATAR_CSS_CLASS_NAMES,
  o as BACKDROP_CSS_CLASS_NAMES,
  r as BADGE_CSS_CLASS_NAMES,
  t as BOX_CSS_CLASS_NAMES,
  k as BREADCRUMB_CSS_CLASS_NAMES,
  c as BUTTON_CSS_CLASS_NAMES,
  l as CARD_CSS_CLASS_NAMES,
  n as CHIP_CSS_CLASS_NAMES,
  m as DRAWER_CSS_CLASS_NAMES,
  b as FORM_CONTROL_CSS_CLASS_NAMES,
  x as FORM_FIELD_CHECKBOX_CSS_CLASS_NAMES,
  C as FORM_FIELD_NUMBER_CSS_CLASS_NAMES,
  h as FORM_FIELD_PASSWORD_CSS_CLASS_NAMES,
  A as FORM_FIELD_RADIO_CSS_CLASS_NAMES,
  z as FORM_FIELD_SELECT_CSS_CLASS_NAMES,
  P as FORM_FIELD_SWITCH_CSS_CLASS_NAMES,
  v as FORM_FIELD_TEXTAREA_CSS_CLASS_NAMES,
  T as FORM_FIELD_TEXT_CSS_CLASS_NAMES,
  f as FORM_LABEL_CSS_CLASS_NAMES,
  d as ICON_CSS_CLASS_NAMES,
  R as LIST_CSS_CLASS_NAMES,
  p as MODAL_CSS_CLASS_NAMES,
  _ as POPOVER_CSS_CLASS_NAMES,
  L as PROGRESS_BAR_CSS_CLASS_NAMES,
  B as PROGRESS_CIRCLE_CSS_CLASS_NAMES,
  w as PROGRESS_PAGE_LOAD_CSS_CLASS_NAMES,
  y as PROGRESS_SCROLL_INDICATOR_CSS_CLASS_NAMES,
  N as SPACE_FLEX_CSS_CLASS_NAMES,
  u as SPACE_GRID_CSS_CLASS_NAMES,
  M as TABS_CSS_CLASS_NAMES,
  E as TOAST_CSS_CLASS_NAMES,
  F as TOOLTIP_CSS_CLASS_NAMES,
  G as TRANSITION_COLLAPSE_CSS_CLASS_NAMES,
  I as TRANSITION_FADE_CSS_CLASS_NAMES,
  g as TYPOGRAPHY_PARAGRAPH_CSS_CLASS_NAMES,
  $ as TYPOGRAPHY_TEXT_CSS_CLASS_NAMES,
  S as TYPOGRAPHY_TITLE_CSS_CLASS_NAMES
};
