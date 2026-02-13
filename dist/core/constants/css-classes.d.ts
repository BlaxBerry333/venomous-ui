/**
 * CSS Class Names
 * All CSS class identifiers are defined here for consistency
 */
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
export declare const CSS_CLASSES: {
    readonly avatar: {
        readonly root: "venomous-avatar";
        readonly sizes: {
            readonly sm: "venomous-avatar--sm";
            readonly md: "venomous-avatar--md";
            readonly lg: "venomous-avatar--lg";
        };
        readonly shapes: {
            readonly circle: "venomous-avatar--circle";
            readonly square: "venomous-avatar--square";
        };
        readonly image: "venomous-avatar__image";
        readonly text: "venomous-avatar__text";
        readonly icon: "venomous-avatar__icon";
    };
    readonly badge: {
        readonly wrapper: "venomous-badge-wrapper";
        readonly root: "venomous-badge";
        readonly dot: "venomous-badge--dot";
        readonly colors: {
            readonly theme: "venomous-badge--theme";
            readonly success: "venomous-badge--success";
            readonly warning: "venomous-badge--warning";
            readonly error: "venomous-badge--error";
            readonly info: "venomous-badge--info";
        };
    };
    readonly breadcrumb: {
        readonly root: "venomous-breadcrumb";
        readonly list: "venomous-breadcrumb__list";
        readonly item: "venomous-breadcrumb__item";
        readonly separator: "venomous-breadcrumb__separator";
        readonly link: "venomous-breadcrumb__link";
        readonly text: "venomous-breadcrumb__text";
        readonly textCurrent: "venomous-breadcrumb__text--current";
        readonly ellipsis: "venomous-breadcrumb__ellipsis";
        readonly itemDisabled: "venomous-breadcrumb__item--disabled";
    };
    readonly button: {
        readonly root: "venomous-button";
        readonly sizes: {
            readonly sm: "venomous-button--sm";
            readonly md: "venomous-button--md";
            readonly lg: "venomous-button--lg";
        };
        readonly variants: {
            readonly solid: "venomous-button--solid";
            readonly outline: "venomous-button--outline";
            readonly ghost: "venomous-button--ghost";
            readonly link: "venomous-button--link";
        };
        readonly colors: {
            readonly theme: "venomous-button--theme";
            readonly success: "venomous-button--success";
            readonly warning: "venomous-button--warning";
            readonly error: "venomous-button--error";
            readonly info: "venomous-button--info";
        };
        readonly states: {
            readonly disabled: "venomous-button--disabled";
            readonly loading: "venomous-button--loading";
            readonly fullWidth: "venomous-button--full";
        };
    };
    readonly card: {
        readonly root: "venomous-card";
        readonly variants: {
            readonly elevated: "venomous-card--elevated";
            readonly outline: "venomous-card--outline";
            readonly filled: "venomous-card--filled";
        };
        readonly states: {
            readonly clickable: "venomous-card--clickable";
        };
    };
    readonly drawer: {
        readonly backdrop: "venomous-drawer-backdrop";
        readonly backdropClosing: "venomous-drawer-backdrop--closing";
        readonly root: "venomous-drawer";
        readonly closing: "venomous-drawer--closing";
        readonly header: "venomous-drawer__header";
        readonly title: "venomous-drawer__title";
        readonly body: "venomous-drawer__body";
        readonly footer: "venomous-drawer__footer";
        readonly close: "venomous-drawer__close";
        readonly placements: {
            readonly left: "venomous-drawer--left";
            readonly right: "venomous-drawer--right";
            readonly top: "venomous-drawer--top";
            readonly bottom: "venomous-drawer--bottom";
        };
        readonly sizes: {
            readonly sm: "venomous-drawer--sm";
            readonly md: "venomous-drawer--md";
            readonly lg: "venomous-drawer--lg";
            readonly xl: "venomous-drawer--xl";
            readonly full: "venomous-drawer--full";
        };
    };
    readonly modal: {
        readonly backdrop: "venomous-modal-backdrop";
        readonly backdropClosing: "venomous-modal-backdrop--closing";
        readonly root: "venomous-modal";
        readonly closing: "venomous-modal--closing";
        readonly header: "venomous-modal__header";
        readonly title: "venomous-modal__title";
        readonly body: "venomous-modal__body";
        readonly footer: "venomous-modal__footer";
        readonly close: "venomous-modal__close";
        readonly sizes: {
            readonly sm: "venomous-modal--sm";
            readonly md: "venomous-modal--md";
            readonly lg: "venomous-modal--lg";
            readonly xl: "venomous-modal--xl";
            readonly full: "venomous-modal--full";
        };
    };
    readonly popover: {
        readonly root: "venomous-popover";
        readonly arrow: "venomous-popover__arrow";
        readonly placements: {
            readonly top: "venomous-popover--top";
            readonly bottom: "venomous-popover--bottom";
            readonly left: "venomous-popover--left";
            readonly right: "venomous-popover--right";
        };
    };
    readonly tooltip: {
        readonly root: "venomous-tooltip";
        readonly arrow: "venomous-tooltip__arrow";
        readonly placements: {
            readonly top: "venomous-tooltip--top";
            readonly bottom: "venomous-tooltip--bottom";
            readonly left: "venomous-tooltip--left";
            readonly right: "venomous-tooltip--right";
        };
    };
    readonly input: {
        readonly wrapper: "venomous-input-wrapper";
        readonly root: "venomous-input";
        readonly prefix: "venomous-input__prefix";
        readonly suffix: "venomous-input__suffix";
        readonly sizes: {
            readonly sm: "venomous-input--sm";
            readonly md: "venomous-input--md";
            readonly lg: "venomous-input--lg";
        };
        readonly states: {
            readonly error: "venomous-input--error";
            readonly disabled: "venomous-input--disabled";
            readonly readonly: "venomous-input--readonly";
        };
    };
    readonly textarea: {
        readonly root: "venomous-textarea";
        readonly sizes: {
            readonly sm: "venomous-textarea--sm";
            readonly md: "venomous-textarea--md";
            readonly lg: "venomous-textarea--lg";
        };
        readonly states: {
            readonly error: "venomous-textarea--error";
            readonly disabled: "venomous-textarea--disabled";
            readonly readonly: "venomous-textarea--readonly";
        };
        readonly resize: {
            readonly none: "venomous-textarea--resize-none";
            readonly vertical: "venomous-textarea--resize-vertical";
            readonly horizontal: "venomous-textarea--resize-horizontal";
            readonly both: "venomous-textarea--resize-both";
        };
    };
    readonly checkbox: {
        readonly root: "venomous-checkbox";
        readonly input: "venomous-checkbox__input";
        readonly control: "venomous-checkbox__control";
        readonly icon: "venomous-checkbox__icon";
        readonly label: "venomous-checkbox__label";
        readonly custom: "venomous-checkbox--custom";
        readonly sizes: {
            readonly sm: "venomous-checkbox--sm";
            readonly md: "venomous-checkbox--md";
            readonly lg: "venomous-checkbox--lg";
        };
        readonly states: {
            readonly checked: "venomous-checkbox--checked";
            readonly disabled: "venomous-checkbox--disabled";
        };
    };
    readonly radio: {
        readonly root: "venomous-radio";
        readonly input: "venomous-radio__input";
        readonly control: "venomous-radio__control";
        readonly icon: "venomous-radio__icon";
        readonly label: "venomous-radio__label";
        readonly custom: "venomous-radio--custom";
        readonly sizes: {
            readonly sm: "venomous-radio--sm";
            readonly md: "venomous-radio--md";
            readonly lg: "venomous-radio--lg";
        };
        readonly states: {
            readonly checked: "venomous-radio--checked";
            readonly disabled: "venomous-radio--disabled";
        };
    };
    readonly radioGroup: {
        readonly root: "venomous-radio-group";
        readonly orientations: {
            readonly horizontal: "venomous-radio-group--horizontal";
            readonly vertical: "venomous-radio-group--vertical";
        };
    };
    readonly checkboxGroup: {
        readonly root: "venomous-checkbox-group";
        readonly orientations: {
            readonly horizontal: "venomous-checkbox-group--horizontal";
            readonly vertical: "venomous-checkbox-group--vertical";
        };
    };
    readonly switch: {
        readonly root: "venomous-switch";
        readonly track: "venomous-switch__track";
        readonly thumb: "venomous-switch__thumb";
        readonly label: "venomous-switch__label";
        readonly sizes: {
            readonly sm: "venomous-switch--sm";
            readonly md: "venomous-switch--md";
            readonly lg: "venomous-switch--lg";
        };
        readonly states: {
            readonly checked: "venomous-switch--checked";
            readonly disabled: "venomous-switch--disabled";
        };
    };
    readonly select: {
        readonly root: "venomous-select";
        readonly trigger: "venomous-select__trigger";
        readonly value: "venomous-select__value";
        readonly placeholder: "venomous-select__placeholder";
        readonly icon: "venomous-select__icon";
        readonly dropdown: "venomous-select__dropdown";
        readonly option: "venomous-select__option";
        readonly optionLabel: "venomous-select__option-label";
        readonly optionIcon: "venomous-select__option-icon";
        readonly sizes: {
            readonly sm: "venomous-select--sm";
            readonly md: "venomous-select--md";
            readonly lg: "venomous-select--lg";
        };
        readonly states: {
            readonly open: "venomous-select--open";
            readonly error: "venomous-select--error";
            readonly disabled: "venomous-select--disabled";
            readonly readonly: "venomous-select--readonly";
        };
        readonly optionStates: {
            readonly selected: "venomous-select__option--selected";
            readonly disabled: "venomous-select__option--disabled";
            readonly highlighted: "venomous-select__option--highlighted";
        };
    };
    readonly formField: {
        readonly root: "venomous-form-field";
        readonly labelRow: "venomous-form-field__label-row";
        readonly label: "venomous-form-field__label";
        readonly required: "venomous-form-field__required";
        readonly tooltipTrigger: "venomous-form-field__tooltip-trigger";
        readonly control: "venomous-form-field__control";
        readonly error: "venomous-form-field__error";
        readonly sizes: {
            readonly sm: "venomous-form-field--sm";
            readonly md: "venomous-form-field--md";
            readonly lg: "venomous-form-field--lg";
        };
        readonly orientations: {
            readonly vertical: "venomous-form-field--vertical";
            readonly horizontal: "venomous-form-field--horizontal";
        };
        readonly controlPositions: {
            readonly start: "venomous-form-field--control-start";
            readonly end: "venomous-form-field--control-end";
        };
        readonly states: {
            readonly error: "venomous-form-field--error";
        };
    };
    readonly skeleton: {
        readonly root: "venomous-skeleton";
        readonly variants: {
            readonly circle: "venomous-skeleton--circle";
            readonly text: "venomous-skeleton--text";
        };
        readonly animations: {
            readonly pulse: "venomous-skeleton--pulse";
            readonly wave: "venomous-skeleton--wave";
        };
    };
    readonly tabs: {
        readonly root: "venomous-tabs";
        readonly orientations: {
            readonly horizontal: "venomous-tabs--horizontal";
            readonly vertical: "venomous-tabs--vertical";
        };
        readonly variants: {
            readonly line: "venomous-tabs--line";
            readonly pill: "venomous-tabs--pill";
        };
        readonly list: "venomous-tabs__list";
        readonly tab: "venomous-tabs__tab";
        readonly tabStates: {
            readonly active: "venomous-tabs__tab--active";
            readonly disabled: "venomous-tabs__tab--disabled";
        };
        readonly panel: "venomous-tabs__panel";
    };
    readonly toast: {
        readonly container: "venomous-toaster";
        readonly placements: {
            readonly "top-start": "venomous-toaster--top-start";
            readonly top: "venomous-toaster--top";
            readonly "top-end": "venomous-toaster--top-end";
            readonly "bottom-start": "venomous-toaster--bottom-start";
            readonly bottom: "venomous-toaster--bottom";
            readonly "bottom-end": "venomous-toaster--bottom-end";
        };
        readonly root: "venomous-toast";
        readonly closing: "venomous-toast--closing";
        readonly types: {
            readonly success: "venomous-toast--success";
            readonly error: "venomous-toast--error";
            readonly warning: "venomous-toast--warning";
            readonly info: "venomous-toast--info";
        };
        readonly icon: "venomous-toast__icon";
        readonly content: "venomous-toast__content";
        readonly title: "venomous-toast__title";
        readonly description: "venomous-toast__description";
        readonly close: "venomous-toast__close";
    };
    readonly typography: {
        readonly title: "venomous-title";
        readonly titleSizes: {
            readonly 1: "venomous-title--1";
            readonly 2: "venomous-title--2";
            readonly 3: "venomous-title--3";
            readonly 4: "venomous-title--4";
            readonly 5: "venomous-title--5";
            readonly 6: "venomous-title--6";
        };
        readonly text: "venomous-text";
        readonly textSizes: {
            readonly xs: "venomous-text--xs";
            readonly sm: "venomous-text--sm";
            readonly md: "venomous-text--md";
            readonly lg: "venomous-text--lg";
        };
        readonly textColors: {
            readonly primary: "venomous-text--primary";
            readonly secondary: "venomous-text--secondary";
            readonly tertiary: "venomous-text--tertiary";
            readonly theme: "venomous-text--theme";
            readonly success: "venomous-text--success";
            readonly warning: "venomous-text--warning";
            readonly error: "venomous-text--error";
            readonly info: "venomous-text--info";
        };
        readonly fontWeights: {
            readonly normal: "venomous-font--normal";
            readonly medium: "venomous-font--medium";
            readonly semibold: "venomous-font--semibold";
            readonly bold: "venomous-font--bold";
        };
        readonly alignments: {
            readonly left: "venomous-text--left";
            readonly center: "venomous-text--center";
            readonly right: "venomous-text--right";
            readonly justify: "venomous-text--justify";
        };
        readonly ellipsis: "venomous-ellipsis";
        readonly lineClamp: "venomous-line-clamp";
        readonly lineClampPresets: {
            readonly 2: "venomous-line-clamp--2";
            readonly 3: "venomous-line-clamp--3";
            readonly 4: "venomous-line-clamp--4";
            readonly 5: "venomous-line-clamp--5";
        };
        readonly lineHeights: {
            readonly tight: "venomous-leading--tight";
            readonly normal: "venomous-leading--normal";
            readonly relaxed: "venomous-leading--relaxed";
        };
        readonly mono: "venomous-text--mono";
    };
    readonly spacing: {
        readonly gap: {
            readonly 0: "venomous-gap-0";
            readonly xs: "venomous-gap-xs";
            readonly sm: "venomous-gap-sm";
            readonly md: "venomous-gap-md";
            readonly lg: "venomous-gap-lg";
            readonly xl: "venomous-gap-xl";
            readonly "2xl": "venomous-gap-2xl";
            readonly "3xl": "venomous-gap-3xl";
        };
        readonly gapX: {
            readonly 0: "venomous-gap-x-0";
            readonly xs: "venomous-gap-x-xs";
            readonly sm: "venomous-gap-x-sm";
            readonly md: "venomous-gap-x-md";
            readonly lg: "venomous-gap-x-lg";
            readonly xl: "venomous-gap-x-xl";
        };
        readonly gapY: {
            readonly 0: "venomous-gap-y-0";
            readonly xs: "venomous-gap-y-xs";
            readonly sm: "venomous-gap-y-sm";
            readonly md: "venomous-gap-y-md";
            readonly lg: "venomous-gap-y-lg";
            readonly xl: "venomous-gap-y-xl";
        };
    };
};
//# sourceMappingURL=css-classes.d.ts.map