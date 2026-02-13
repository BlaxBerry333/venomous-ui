/**
 * CSS Class Names
 * All CSS class identifiers are defined here for consistency
 */

const CLASS_PREFIX = "venomous" as const;

/**
 * CSS class names for components and utilities
 * Use in className/class attributes
 *
 * @example
 * ```ts
 * import { CSS_CLASSES } from "venomous-ui/core";
 *
 * <button className={CSS_CLASSES.button.root}>Click me</button>
 * <h1 className={`${CSS_CLASSES.typography.title} ${CSS_CLASSES.typography.titleSizes[1]}`}>Title</h1>
 * ```
 */

export const CSS_CLASSES = {
  // Avatar
  avatar: {
    root: `${CLASS_PREFIX}-avatar`,
    sizes: {
      sm: `${CLASS_PREFIX}-avatar--sm`,
      md: `${CLASS_PREFIX}-avatar--md`,
      lg: `${CLASS_PREFIX}-avatar--lg`,
    },
    shapes: {
      circle: `${CLASS_PREFIX}-avatar--circle`,
      square: `${CLASS_PREFIX}-avatar--square`,
    },
    image: `${CLASS_PREFIX}-avatar__image`,
    text: `${CLASS_PREFIX}-avatar__text`,
    icon: `${CLASS_PREFIX}-avatar__icon`,
  },

  // Badge
  badge: {
    wrapper: `${CLASS_PREFIX}-badge-wrapper`,
    root: `${CLASS_PREFIX}-badge`,
    dot: `${CLASS_PREFIX}-badge--dot`,
    colors: {
      theme: `${CLASS_PREFIX}-badge--theme`,
      success: `${CLASS_PREFIX}-badge--success`,
      warning: `${CLASS_PREFIX}-badge--warning`,
      error: `${CLASS_PREFIX}-badge--error`,
      info: `${CLASS_PREFIX}-badge--info`,
    },
  },

  // Breadcrumb
  breadcrumb: {
    root: `${CLASS_PREFIX}-breadcrumb`,
    list: `${CLASS_PREFIX}-breadcrumb__list`,
    item: `${CLASS_PREFIX}-breadcrumb__item`,
    separator: `${CLASS_PREFIX}-breadcrumb__separator`,
    link: `${CLASS_PREFIX}-breadcrumb__link`,
    text: `${CLASS_PREFIX}-breadcrumb__text`,
    textCurrent: `${CLASS_PREFIX}-breadcrumb__text--current`,
    ellipsis: `${CLASS_PREFIX}-breadcrumb__ellipsis`,
    itemDisabled: `${CLASS_PREFIX}-breadcrumb__item--disabled`,
  },

  // Button
  button: {
    root: `${CLASS_PREFIX}-button`,
    sizes: {
      sm: `${CLASS_PREFIX}-button--sm`,
      md: `${CLASS_PREFIX}-button--md`,
      lg: `${CLASS_PREFIX}-button--lg`,
    },
    variants: {
      solid: `${CLASS_PREFIX}-button--solid`,
      outline: `${CLASS_PREFIX}-button--outline`,
      ghost: `${CLASS_PREFIX}-button--ghost`,
      link: `${CLASS_PREFIX}-button--link`,
    },
    colors: {
      theme: `${CLASS_PREFIX}-button--theme`,
      success: `${CLASS_PREFIX}-button--success`,
      warning: `${CLASS_PREFIX}-button--warning`,
      error: `${CLASS_PREFIX}-button--error`,
      info: `${CLASS_PREFIX}-button--info`,
    },
    states: {
      disabled: `${CLASS_PREFIX}-button--disabled`,
      loading: `${CLASS_PREFIX}-button--loading`,
      fullWidth: `${CLASS_PREFIX}-button--full`,
    },
  },

  // Card
  card: {
    root: `${CLASS_PREFIX}-card`,
    variants: {
      elevated: `${CLASS_PREFIX}-card--elevated`,
      outline: `${CLASS_PREFIX}-card--outline`,
      filled: `${CLASS_PREFIX}-card--filled`,
    },
    states: {
      clickable: `${CLASS_PREFIX}-card--clickable`,
    },
  },

  // Drawer
  drawer: {
    backdrop: `${CLASS_PREFIX}-drawer-backdrop`,
    backdropClosing: `${CLASS_PREFIX}-drawer-backdrop--closing`,
    root: `${CLASS_PREFIX}-drawer`,
    closing: `${CLASS_PREFIX}-drawer--closing`,
    header: `${CLASS_PREFIX}-drawer__header`,
    title: `${CLASS_PREFIX}-drawer__title`,
    body: `${CLASS_PREFIX}-drawer__body`,
    footer: `${CLASS_PREFIX}-drawer__footer`,
    close: `${CLASS_PREFIX}-drawer__close`,
    placements: {
      left: `${CLASS_PREFIX}-drawer--left`,
      right: `${CLASS_PREFIX}-drawer--right`,
      top: `${CLASS_PREFIX}-drawer--top`,
      bottom: `${CLASS_PREFIX}-drawer--bottom`,
    },
    sizes: {
      sm: `${CLASS_PREFIX}-drawer--sm`,
      md: `${CLASS_PREFIX}-drawer--md`,
      lg: `${CLASS_PREFIX}-drawer--lg`,
      xl: `${CLASS_PREFIX}-drawer--xl`,
      full: `${CLASS_PREFIX}-drawer--full`,
    },
  },

  // Modal
  modal: {
    backdrop: `${CLASS_PREFIX}-modal-backdrop`,
    backdropClosing: `${CLASS_PREFIX}-modal-backdrop--closing`,
    root: `${CLASS_PREFIX}-modal`,
    closing: `${CLASS_PREFIX}-modal--closing`,
    header: `${CLASS_PREFIX}-modal__header`,
    title: `${CLASS_PREFIX}-modal__title`,
    body: `${CLASS_PREFIX}-modal__body`,
    footer: `${CLASS_PREFIX}-modal__footer`,
    close: `${CLASS_PREFIX}-modal__close`,
    sizes: {
      sm: `${CLASS_PREFIX}-modal--sm`,
      md: `${CLASS_PREFIX}-modal--md`,
      lg: `${CLASS_PREFIX}-modal--lg`,
      xl: `${CLASS_PREFIX}-modal--xl`,
      full: `${CLASS_PREFIX}-modal--full`,
    },
  },

  // Popover
  popover: {
    root: `${CLASS_PREFIX}-popover`,
    arrow: `${CLASS_PREFIX}-popover__arrow`,
    placements: {
      top: `${CLASS_PREFIX}-popover--top`,
      bottom: `${CLASS_PREFIX}-popover--bottom`,
      left: `${CLASS_PREFIX}-popover--left`,
      right: `${CLASS_PREFIX}-popover--right`,
    },
  },

  // Tooltip
  tooltip: {
    root: `${CLASS_PREFIX}-tooltip`,
    arrow: `${CLASS_PREFIX}-tooltip__arrow`,
    placements: {
      top: `${CLASS_PREFIX}-tooltip--top`,
      bottom: `${CLASS_PREFIX}-tooltip--bottom`,
      left: `${CLASS_PREFIX}-tooltip--left`,
      right: `${CLASS_PREFIX}-tooltip--right`,
    },
  },

  // Input
  input: {
    wrapper: `${CLASS_PREFIX}-input-wrapper`,
    root: `${CLASS_PREFIX}-input`,
    prefix: `${CLASS_PREFIX}-input__prefix`,
    suffix: `${CLASS_PREFIX}-input__suffix`,
    sizes: {
      sm: `${CLASS_PREFIX}-input--sm`,
      md: `${CLASS_PREFIX}-input--md`,
      lg: `${CLASS_PREFIX}-input--lg`,
    },
    states: {
      error: `${CLASS_PREFIX}-input--error`,
      disabled: `${CLASS_PREFIX}-input--disabled`,
      readonly: `${CLASS_PREFIX}-input--readonly`,
    },
  },

  // Textarea
  textarea: {
    root: `${CLASS_PREFIX}-textarea`,
    sizes: {
      sm: `${CLASS_PREFIX}-textarea--sm`,
      md: `${CLASS_PREFIX}-textarea--md`,
      lg: `${CLASS_PREFIX}-textarea--lg`,
    },
    states: {
      error: `${CLASS_PREFIX}-textarea--error`,
      disabled: `${CLASS_PREFIX}-textarea--disabled`,
      readonly: `${CLASS_PREFIX}-textarea--readonly`,
    },
    resize: {
      none: `${CLASS_PREFIX}-textarea--resize-none`,
      vertical: `${CLASS_PREFIX}-textarea--resize-vertical`,
      horizontal: `${CLASS_PREFIX}-textarea--resize-horizontal`,
      both: `${CLASS_PREFIX}-textarea--resize-both`,
    },
  },

  // Checkbox
  checkbox: {
    root: `${CLASS_PREFIX}-checkbox`,
    input: `${CLASS_PREFIX}-checkbox__input`,
    control: `${CLASS_PREFIX}-checkbox__control`,
    icon: `${CLASS_PREFIX}-checkbox__icon`,
    label: `${CLASS_PREFIX}-checkbox__label`,
    custom: `${CLASS_PREFIX}-checkbox--custom`,
    sizes: {
      sm: `${CLASS_PREFIX}-checkbox--sm`,
      md: `${CLASS_PREFIX}-checkbox--md`,
      lg: `${CLASS_PREFIX}-checkbox--lg`,
    },
    states: {
      checked: `${CLASS_PREFIX}-checkbox--checked`,
      disabled: `${CLASS_PREFIX}-checkbox--disabled`,
    },
  },

  // Radio
  radio: {
    root: `${CLASS_PREFIX}-radio`,
    input: `${CLASS_PREFIX}-radio__input`,
    control: `${CLASS_PREFIX}-radio__control`,
    icon: `${CLASS_PREFIX}-radio__icon`,
    label: `${CLASS_PREFIX}-radio__label`,
    custom: `${CLASS_PREFIX}-radio--custom`,
    sizes: {
      sm: `${CLASS_PREFIX}-radio--sm`,
      md: `${CLASS_PREFIX}-radio--md`,
      lg: `${CLASS_PREFIX}-radio--lg`,
    },
    states: {
      checked: `${CLASS_PREFIX}-radio--checked`,
      disabled: `${CLASS_PREFIX}-radio--disabled`,
    },
  },

  // RadioGroup
  radioGroup: {
    root: `${CLASS_PREFIX}-radio-group`,
    orientations: {
      horizontal: `${CLASS_PREFIX}-radio-group--horizontal`,
      vertical: `${CLASS_PREFIX}-radio-group--vertical`,
    },
  },

  // CheckboxGroup
  checkboxGroup: {
    root: `${CLASS_PREFIX}-checkbox-group`,
    orientations: {
      horizontal: `${CLASS_PREFIX}-checkbox-group--horizontal`,
      vertical: `${CLASS_PREFIX}-checkbox-group--vertical`,
    },
  },

  // Switch
  switch: {
    root: `${CLASS_PREFIX}-switch`,
    track: `${CLASS_PREFIX}-switch__track`,
    thumb: `${CLASS_PREFIX}-switch__thumb`,
    label: `${CLASS_PREFIX}-switch__label`,
    sizes: {
      sm: `${CLASS_PREFIX}-switch--sm`,
      md: `${CLASS_PREFIX}-switch--md`,
      lg: `${CLASS_PREFIX}-switch--lg`,
    },
    states: {
      checked: `${CLASS_PREFIX}-switch--checked`,
      disabled: `${CLASS_PREFIX}-switch--disabled`,
    },
  },

  // Select
  select: {
    root: `${CLASS_PREFIX}-select`,
    trigger: `${CLASS_PREFIX}-select__trigger`,
    value: `${CLASS_PREFIX}-select__value`,
    placeholder: `${CLASS_PREFIX}-select__placeholder`,
    icon: `${CLASS_PREFIX}-select__icon`,
    dropdown: `${CLASS_PREFIX}-select__dropdown`,
    option: `${CLASS_PREFIX}-select__option`,
    optionLabel: `${CLASS_PREFIX}-select__option-label`,
    optionIcon: `${CLASS_PREFIX}-select__option-icon`,
    sizes: {
      sm: `${CLASS_PREFIX}-select--sm`,
      md: `${CLASS_PREFIX}-select--md`,
      lg: `${CLASS_PREFIX}-select--lg`,
    },
    states: {
      open: `${CLASS_PREFIX}-select--open`,
      error: `${CLASS_PREFIX}-select--error`,
      disabled: `${CLASS_PREFIX}-select--disabled`,
      readonly: `${CLASS_PREFIX}-select--readonly`,
    },
    optionStates: {
      selected: `${CLASS_PREFIX}-select__option--selected`,
      disabled: `${CLASS_PREFIX}-select__option--disabled`,
      highlighted: `${CLASS_PREFIX}-select__option--highlighted`,
    },
  },

  // FormField
  formField: {
    root: `${CLASS_PREFIX}-form-field`,
    labelRow: `${CLASS_PREFIX}-form-field__label-row`,
    label: `${CLASS_PREFIX}-form-field__label`,
    required: `${CLASS_PREFIX}-form-field__required`,
    tooltipTrigger: `${CLASS_PREFIX}-form-field__tooltip-trigger`,
    control: `${CLASS_PREFIX}-form-field__control`,
    error: `${CLASS_PREFIX}-form-field__error`,
    sizes: {
      sm: `${CLASS_PREFIX}-form-field--sm`,
      md: `${CLASS_PREFIX}-form-field--md`,
      lg: `${CLASS_PREFIX}-form-field--lg`,
    },
    orientations: {
      vertical: `${CLASS_PREFIX}-form-field--vertical`,
      horizontal: `${CLASS_PREFIX}-form-field--horizontal`,
    },
    controlPositions: {
      start: `${CLASS_PREFIX}-form-field--control-start`,
      end: `${CLASS_PREFIX}-form-field--control-end`,
    },
    states: {
      error: `${CLASS_PREFIX}-form-field--error`,
    },
  },

  // Skeleton
  skeleton: {
    root: `${CLASS_PREFIX}-skeleton`,
    variants: {
      circle: `${CLASS_PREFIX}-skeleton--circle`,
      text: `${CLASS_PREFIX}-skeleton--text`,
    },
    animations: {
      pulse: `${CLASS_PREFIX}-skeleton--pulse`,
      wave: `${CLASS_PREFIX}-skeleton--wave`,
    },
  },

  // Tabs
  tabs: {
    root: `${CLASS_PREFIX}-tabs`,
    orientations: {
      horizontal: `${CLASS_PREFIX}-tabs--horizontal`,
      vertical: `${CLASS_PREFIX}-tabs--vertical`,
    },
    variants: {
      line: `${CLASS_PREFIX}-tabs--line`,
      pill: `${CLASS_PREFIX}-tabs--pill`,
    },
    list: `${CLASS_PREFIX}-tabs__list`,
    tab: `${CLASS_PREFIX}-tabs__tab`,
    tabStates: {
      active: `${CLASS_PREFIX}-tabs__tab--active`,
      disabled: `${CLASS_PREFIX}-tabs__tab--disabled`,
    },
    panel: `${CLASS_PREFIX}-tabs__panel`,
  },

  // Toast
  toast: {
    container: `${CLASS_PREFIX}-toaster`,
    placements: {
      "top-start": `${CLASS_PREFIX}-toaster--top-start`,
      top: `${CLASS_PREFIX}-toaster--top`,
      "top-end": `${CLASS_PREFIX}-toaster--top-end`,
      "bottom-start": `${CLASS_PREFIX}-toaster--bottom-start`,
      bottom: `${CLASS_PREFIX}-toaster--bottom`,
      "bottom-end": `${CLASS_PREFIX}-toaster--bottom-end`,
    },
    root: `${CLASS_PREFIX}-toast`,
    closing: `${CLASS_PREFIX}-toast--closing`,
    types: {
      success: `${CLASS_PREFIX}-toast--success`,
      error: `${CLASS_PREFIX}-toast--error`,
      warning: `${CLASS_PREFIX}-toast--warning`,
      info: `${CLASS_PREFIX}-toast--info`,
    },
    icon: `${CLASS_PREFIX}-toast__icon`,
    content: `${CLASS_PREFIX}-toast__content`,
    title: `${CLASS_PREFIX}-toast__title`,
    description: `${CLASS_PREFIX}-toast__description`,
    close: `${CLASS_PREFIX}-toast__close`,
  },

  // Typography (utility classes)
  typography: {
    title: `${CLASS_PREFIX}-title`,
    titleSizes: {
      1: `${CLASS_PREFIX}-title--1`,
      2: `${CLASS_PREFIX}-title--2`,
      3: `${CLASS_PREFIX}-title--3`,
      4: `${CLASS_PREFIX}-title--4`,
      5: `${CLASS_PREFIX}-title--5`,
      6: `${CLASS_PREFIX}-title--6`,
    },
    text: `${CLASS_PREFIX}-text`,
    textSizes: {
      xs: `${CLASS_PREFIX}-text--xs`,
      sm: `${CLASS_PREFIX}-text--sm`,
      md: `${CLASS_PREFIX}-text--md`,
      lg: `${CLASS_PREFIX}-text--lg`,
    },
    textColors: {
      primary: `${CLASS_PREFIX}-text--primary`,
      secondary: `${CLASS_PREFIX}-text--secondary`,
      tertiary: `${CLASS_PREFIX}-text--tertiary`,
      theme: `${CLASS_PREFIX}-text--theme`,
      success: `${CLASS_PREFIX}-text--success`,
      warning: `${CLASS_PREFIX}-text--warning`,
      error: `${CLASS_PREFIX}-text--error`,
      info: `${CLASS_PREFIX}-text--info`,
    },
    fontWeights: {
      normal: `${CLASS_PREFIX}-font--normal`,
      medium: `${CLASS_PREFIX}-font--medium`,
      semibold: `${CLASS_PREFIX}-font--semibold`,
      bold: `${CLASS_PREFIX}-font--bold`,
    },
    alignments: {
      left: `${CLASS_PREFIX}-text--left`,
      center: `${CLASS_PREFIX}-text--center`,
      right: `${CLASS_PREFIX}-text--right`,
      justify: `${CLASS_PREFIX}-text--justify`,
    },
    ellipsis: `${CLASS_PREFIX}-ellipsis`,
    lineClamp: `${CLASS_PREFIX}-line-clamp`,
    lineClampPresets: {
      2: `${CLASS_PREFIX}-line-clamp--2`,
      3: `${CLASS_PREFIX}-line-clamp--3`,
      4: `${CLASS_PREFIX}-line-clamp--4`,
      5: `${CLASS_PREFIX}-line-clamp--5`,
    },
    lineHeights: {
      tight: `${CLASS_PREFIX}-leading--tight`,
      normal: `${CLASS_PREFIX}-leading--normal`,
      relaxed: `${CLASS_PREFIX}-leading--relaxed`,
    },
    mono: `${CLASS_PREFIX}-text--mono`,
  },

  // Spacing (utility classes)
  spacing: {
    gap: {
      0: `${CLASS_PREFIX}-gap-0`,
      xs: `${CLASS_PREFIX}-gap-xs`,
      sm: `${CLASS_PREFIX}-gap-sm`,
      md: `${CLASS_PREFIX}-gap-md`,
      lg: `${CLASS_PREFIX}-gap-lg`,
      xl: `${CLASS_PREFIX}-gap-xl`,
      "2xl": `${CLASS_PREFIX}-gap-2xl`,
      "3xl": `${CLASS_PREFIX}-gap-3xl`,
    },
    gapX: {
      0: `${CLASS_PREFIX}-gap-x-0`,
      xs: `${CLASS_PREFIX}-gap-x-xs`,
      sm: `${CLASS_PREFIX}-gap-x-sm`,
      md: `${CLASS_PREFIX}-gap-x-md`,
      lg: `${CLASS_PREFIX}-gap-x-lg`,
      xl: `${CLASS_PREFIX}-gap-x-xl`,
    },
    gapY: {
      0: `${CLASS_PREFIX}-gap-y-0`,
      xs: `${CLASS_PREFIX}-gap-y-xs`,
      sm: `${CLASS_PREFIX}-gap-y-sm`,
      md: `${CLASS_PREFIX}-gap-y-md`,
      lg: `${CLASS_PREFIX}-gap-y-lg`,
      xl: `${CLASS_PREFIX}-gap-y-xl`,
    },
  },
} as const;
