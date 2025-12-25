import { COMPONENT_LIBRARY_NAME as a } from "./componentNames.mjs";
import "./cssClassNames.mjs";
const e = {
  bg: {
    body: `--${a}-bg-body`,
    normal: `--${a}-bg-normal`,
    float: `--${a}-bg-float`,
    active: `--${a}-bg-active`,
    disabled: `--${a}-bg-disabled`
  },
  text: {
    primary: `--${a}-text-primary`,
    secondary: `--${a}-text-secondary`,
    tertiary: `--${a}-text-tertiary`,
    disabled: `--${a}-text-disabled`
  },
  border: {
    primary: `--${a}-border-primary`,
    secondary: `--${a}-border-secondary`,
    tertiary: `--${a}-border-tertiary`,
    disabled: `--${a}-border-disabled`
  },
  shadow: {
    none: `--${a}-shadow-none`,
    small: `--${a}-shadow-small`,
    medium: `--${a}-shadow-medium`,
    large: `--${a}-shadow-large`
  },
  palette: {
    light: `--${a}-palette-light`,
    main: `--${a}-palette-main`,
    dark: `--${a}-palette-dark`
  },
  semantic: {
    primary: {
      light: `--${a}-semantic-primary-light`,
      main: `--${a}-semantic-primary-main`,
      dark: `--${a}-semantic-primary-dark`
    },
    success: {
      light: `--${a}-semantic-success-light`,
      main: `--${a}-semantic-success-main`,
      dark: `--${a}-semantic-success-dark`
    },
    warning: {
      light: `--${a}-semantic-warning-light`,
      main: `--${a}-semantic-warning-main`,
      dark: `--${a}-semantic-warning-dark`
    },
    error: {
      light: `--${a}-semantic-error-light`,
      main: `--${a}-semantic-error-main`,
      dark: `--${a}-semantic-error-dark`
    },
    info: {
      light: `--${a}-semantic-info-light`,
      main: `--${a}-semantic-info-main`,
      dark: `--${a}-semantic-info-dark`
    }
  }
};
export {
  e as CSS_VARIABLE_NAMES
};
