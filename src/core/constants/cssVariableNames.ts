import { COMPONENT_LIBRARY_NAME } from "@/core/constants";

export const CSS_VARIABLE_NAMES = {
  bg: {
    body: `--${COMPONENT_LIBRARY_NAME}-bg-body`,
    normal: `--${COMPONENT_LIBRARY_NAME}-bg-normal`,
    float: `--${COMPONENT_LIBRARY_NAME}-bg-float`,
    active: `--${COMPONENT_LIBRARY_NAME}-bg-active`,
    disabled: `--${COMPONENT_LIBRARY_NAME}-bg-disabled`,
  },
  text: {
    primary: `--${COMPONENT_LIBRARY_NAME}-text-primary`,
    secondary: `--${COMPONENT_LIBRARY_NAME}-text-secondary`,
    tertiary: `--${COMPONENT_LIBRARY_NAME}-text-tertiary`,
    disabled: `--${COMPONENT_LIBRARY_NAME}-text-disabled`,
  },
  border: {
    primary: `--${COMPONENT_LIBRARY_NAME}-border-primary`,
    secondary: `--${COMPONENT_LIBRARY_NAME}-border-secondary`,
    tertiary: `--${COMPONENT_LIBRARY_NAME}-border-tertiary`,
    disabled: `--${COMPONENT_LIBRARY_NAME}-border-disabled`,
  },
  shadow: {
    none: `--${COMPONENT_LIBRARY_NAME}-shadow-none`,
    small: `--${COMPONENT_LIBRARY_NAME}-shadow-small`,
    medium: `--${COMPONENT_LIBRARY_NAME}-shadow-medium`,
    large: `--${COMPONENT_LIBRARY_NAME}-shadow-large`,
  },
  palette: {
    light: `--${COMPONENT_LIBRARY_NAME}-palette-light`,
    main: `--${COMPONENT_LIBRARY_NAME}-palette-main`,
    dark: `--${COMPONENT_LIBRARY_NAME}-palette-dark`,
  },
  semantic: {
    primary: {
      light: `--${COMPONENT_LIBRARY_NAME}-semantic-primary-light`,
      main: `--${COMPONENT_LIBRARY_NAME}-semantic-primary-main`,
      dark: `--${COMPONENT_LIBRARY_NAME}-semantic-primary-dark`,
    },
    success: {
      light: `--${COMPONENT_LIBRARY_NAME}-semantic-success-light`,
      main: `--${COMPONENT_LIBRARY_NAME}-semantic-success-main`,
      dark: `--${COMPONENT_LIBRARY_NAME}-semantic-success-dark`,
    },
    warning: {
      light: `--${COMPONENT_LIBRARY_NAME}-semantic-warning-light`,
      main: `--${COMPONENT_LIBRARY_NAME}-semantic-warning-main`,
      dark: `--${COMPONENT_LIBRARY_NAME}-semantic-warning-dark`,
    },
    danger: {
      light: `--${COMPONENT_LIBRARY_NAME}-semantic-danger-light`,
      main: `--${COMPONENT_LIBRARY_NAME}-semantic-danger-main`,
      dark: `--${COMPONENT_LIBRARY_NAME}-semantic-danger-dark`,
    },
    info: {
      light: `--${COMPONENT_LIBRARY_NAME}-semantic-info-light`,
      main: `--${COMPONENT_LIBRARY_NAME}-semantic-info-main`,
      dark: `--${COMPONENT_LIBRARY_NAME}-semantic-info-dark`,
    },
  },
} as const;

export type ICssVariableNames = typeof CSS_VARIABLE_NAMES;
