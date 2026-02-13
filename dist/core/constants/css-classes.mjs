const t = "venomous", e = {
  // Avatar
  avatar: {
    root: `${t}-avatar`,
    sizes: {
      sm: `${t}-avatar--sm`,
      md: `${t}-avatar--md`,
      lg: `${t}-avatar--lg`
    },
    shapes: {
      circle: `${t}-avatar--circle`,
      square: `${t}-avatar--square`
    },
    image: `${t}-avatar__image`,
    text: `${t}-avatar__text`,
    icon: `${t}-avatar__icon`
  },
  // Badge
  badge: {
    wrapper: `${t}-badge-wrapper`,
    root: `${t}-badge`,
    dot: `${t}-badge--dot`,
    colors: {
      theme: `${t}-badge--theme`,
      success: `${t}-badge--success`,
      warning: `${t}-badge--warning`,
      error: `${t}-badge--error`,
      info: `${t}-badge--info`
    }
  },
  // Breadcrumb
  breadcrumb: {
    root: `${t}-breadcrumb`,
    list: `${t}-breadcrumb__list`,
    item: `${t}-breadcrumb__item`,
    separator: `${t}-breadcrumb__separator`,
    link: `${t}-breadcrumb__link`,
    text: `${t}-breadcrumb__text`,
    textCurrent: `${t}-breadcrumb__text--current`,
    ellipsis: `${t}-breadcrumb__ellipsis`,
    itemDisabled: `${t}-breadcrumb__item--disabled`
  },
  // Button
  button: {
    root: `${t}-button`,
    sizes: {
      sm: `${t}-button--sm`,
      md: `${t}-button--md`,
      lg: `${t}-button--lg`
    },
    variants: {
      solid: `${t}-button--solid`,
      outline: `${t}-button--outline`,
      ghost: `${t}-button--ghost`,
      link: `${t}-button--link`
    },
    colors: {
      theme: `${t}-button--theme`,
      success: `${t}-button--success`,
      warning: `${t}-button--warning`,
      error: `${t}-button--error`,
      info: `${t}-button--info`
    },
    states: {
      fullWidth: `${t}-button--full`
    }
  },
  // Card
  card: {
    root: `${t}-card`,
    variants: {
      elevated: `${t}-card--elevated`,
      outline: `${t}-card--outline`,
      filled: `${t}-card--filled`
    },
    states: {
      clickable: `${t}-card--clickable`
    }
  },
  // Drawer
  drawer: {
    backdrop: `${t}-drawer-backdrop`,
    backdropClosing: `${t}-drawer-backdrop--closing`,
    root: `${t}-drawer`,
    closing: `${t}-drawer--closing`,
    header: `${t}-drawer__header`,
    title: `${t}-drawer__title`,
    body: `${t}-drawer__body`,
    footer: `${t}-drawer__footer`,
    close: `${t}-drawer__close`,
    placements: {
      left: `${t}-drawer--left`,
      right: `${t}-drawer--right`,
      top: `${t}-drawer--top`,
      bottom: `${t}-drawer--bottom`
    },
    sizes: {
      sm: `${t}-drawer--sm`,
      md: `${t}-drawer--md`,
      lg: `${t}-drawer--lg`,
      xl: `${t}-drawer--xl`,
      full: `${t}-drawer--full`
    }
  },
  // Modal
  modal: {
    backdrop: `${t}-modal-backdrop`,
    backdropClosing: `${t}-modal-backdrop--closing`,
    root: `${t}-modal`,
    closing: `${t}-modal--closing`,
    header: `${t}-modal__header`,
    title: `${t}-modal__title`,
    body: `${t}-modal__body`,
    footer: `${t}-modal__footer`,
    close: `${t}-modal__close`,
    sizes: {
      sm: `${t}-modal--sm`,
      md: `${t}-modal--md`,
      lg: `${t}-modal--lg`,
      xl: `${t}-modal--xl`,
      full: `${t}-modal--full`
    }
  },
  // Popover
  popover: {
    root: `${t}-popover`,
    arrow: `${t}-popover__arrow`,
    placements: {
      top: `${t}-popover--top`,
      bottom: `${t}-popover--bottom`,
      left: `${t}-popover--left`,
      right: `${t}-popover--right`
    }
  },
  // Tooltip
  tooltip: {
    root: `${t}-tooltip`,
    arrow: `${t}-tooltip__arrow`,
    placements: {
      top: `${t}-tooltip--top`,
      bottom: `${t}-tooltip--bottom`,
      left: `${t}-tooltip--left`,
      right: `${t}-tooltip--right`
    }
  },
  // Input
  input: {
    wrapper: `${t}-input-wrapper`,
    root: `${t}-input`,
    prefix: `${t}-input__prefix`,
    suffix: `${t}-input__suffix`,
    sizes: {
      sm: `${t}-input--sm`,
      md: `${t}-input--md`,
      lg: `${t}-input--lg`
    },
    states: {
      error: `${t}-input--error`,
      disabled: `${t}-input--disabled`,
      readonly: `${t}-input--readonly`
    }
  },
  // Textarea
  textarea: {
    root: `${t}-textarea`,
    sizes: {
      sm: `${t}-textarea--sm`,
      md: `${t}-textarea--md`,
      lg: `${t}-textarea--lg`
    },
    states: {
      error: `${t}-textarea--error`,
      disabled: `${t}-textarea--disabled`,
      readonly: `${t}-textarea--readonly`
    },
    resize: {
      none: `${t}-textarea--resize-none`,
      vertical: `${t}-textarea--resize-vertical`,
      horizontal: `${t}-textarea--resize-horizontal`,
      both: `${t}-textarea--resize-both`
    }
  },
  // Checkbox
  checkbox: {
    root: `${t}-checkbox`,
    input: `${t}-checkbox__input`,
    control: `${t}-checkbox__control`,
    icon: `${t}-checkbox__icon`,
    label: `${t}-checkbox__label`,
    custom: `${t}-checkbox--custom`,
    sizes: {
      sm: `${t}-checkbox--sm`,
      md: `${t}-checkbox--md`,
      lg: `${t}-checkbox--lg`
    },
    states: {
      checked: `${t}-checkbox--checked`,
      disabled: `${t}-checkbox--disabled`
    }
  },
  // Radio
  radio: {
    root: `${t}-radio`,
    input: `${t}-radio__input`,
    control: `${t}-radio__control`,
    icon: `${t}-radio__icon`,
    label: `${t}-radio__label`,
    custom: `${t}-radio--custom`,
    sizes: {
      sm: `${t}-radio--sm`,
      md: `${t}-radio--md`,
      lg: `${t}-radio--lg`
    },
    states: {
      checked: `${t}-radio--checked`,
      disabled: `${t}-radio--disabled`
    }
  },
  // RadioGroup
  radioGroup: {
    root: `${t}-radio-group`,
    orientations: {
      horizontal: `${t}-radio-group--horizontal`,
      vertical: `${t}-radio-group--vertical`
    }
  },
  // CheckboxGroup
  checkboxGroup: {
    root: `${t}-checkbox-group`,
    orientations: {
      horizontal: `${t}-checkbox-group--horizontal`,
      vertical: `${t}-checkbox-group--vertical`
    }
  },
  // Switch
  switch: {
    root: `${t}-switch`,
    track: `${t}-switch__track`,
    thumb: `${t}-switch__thumb`,
    label: `${t}-switch__label`,
    sizes: {
      sm: `${t}-switch--sm`,
      md: `${t}-switch--md`,
      lg: `${t}-switch--lg`
    },
    states: {
      checked: `${t}-switch--checked`,
      disabled: `${t}-switch--disabled`
    }
  },
  // Select
  select: {
    root: `${t}-select`,
    trigger: `${t}-select__trigger`,
    value: `${t}-select__value`,
    placeholder: `${t}-select__placeholder`,
    icon: `${t}-select__icon`,
    dropdown: `${t}-select__dropdown`,
    option: `${t}-select__option`,
    optionLabel: `${t}-select__option-label`,
    optionIcon: `${t}-select__option-icon`,
    sizes: {
      sm: `${t}-select--sm`,
      md: `${t}-select--md`,
      lg: `${t}-select--lg`
    },
    states: {
      open: `${t}-select--open`,
      error: `${t}-select--error`,
      disabled: `${t}-select--disabled`,
      readonly: `${t}-select--readonly`
    },
    optionStates: {
      selected: `${t}-select__option--selected`,
      disabled: `${t}-select__option--disabled`,
      highlighted: `${t}-select__option--highlighted`
    }
  },
  // FormField
  formField: {
    root: `${t}-form-field`,
    labelRow: `${t}-form-field__label-row`,
    label: `${t}-form-field__label`,
    required: `${t}-form-field__required`,
    tooltipTrigger: `${t}-form-field__tooltip-trigger`,
    control: `${t}-form-field__control`,
    error: `${t}-form-field__error`,
    sizes: {
      sm: `${t}-form-field--sm`,
      md: `${t}-form-field--md`,
      lg: `${t}-form-field--lg`
    },
    orientations: {
      vertical: `${t}-form-field--vertical`,
      horizontal: `${t}-form-field--horizontal`
    },
    controlPositions: {
      start: `${t}-form-field--control-start`,
      end: `${t}-form-field--control-end`
    },
    states: {
      error: `${t}-form-field--error`
    }
  },
  // Skeleton
  skeleton: {
    root: `${t}-skeleton`,
    variants: {
      circle: `${t}-skeleton--circle`,
      text: `${t}-skeleton--text`
    },
    animations: {
      pulse: `${t}-skeleton--pulse`,
      wave: `${t}-skeleton--wave`
    }
  },
  // Tabs
  tabs: {
    root: `${t}-tabs`,
    orientations: {
      horizontal: `${t}-tabs--horizontal`,
      vertical: `${t}-tabs--vertical`
    },
    variants: {
      line: `${t}-tabs--line`,
      pill: `${t}-tabs--pill`
    },
    list: `${t}-tabs__list`,
    tab: `${t}-tabs__tab`,
    tabStates: {
      active: `${t}-tabs__tab--active`,
      disabled: `${t}-tabs__tab--disabled`
    },
    panel: `${t}-tabs__panel`
  },
  // Toast
  toast: {
    container: `${t}-toaster`,
    placements: {
      "top-start": `${t}-toaster--top-start`,
      top: `${t}-toaster--top`,
      "top-end": `${t}-toaster--top-end`,
      "bottom-start": `${t}-toaster--bottom-start`,
      bottom: `${t}-toaster--bottom`,
      "bottom-end": `${t}-toaster--bottom-end`
    },
    root: `${t}-toast`,
    closing: `${t}-toast--closing`,
    types: {
      success: `${t}-toast--success`,
      error: `${t}-toast--error`,
      warning: `${t}-toast--warning`,
      info: `${t}-toast--info`
    },
    icon: `${t}-toast__icon`,
    content: `${t}-toast__content`,
    title: `${t}-toast__title`,
    description: `${t}-toast__description`,
    close: `${t}-toast__close`
  }
};
export {
  e as CSS_CLASSES
};
