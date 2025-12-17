export const COMPONENT_LIBRARY_NAME = "VENOMOUS_UI" as const;

export const COMPONENT_NAMES = {
  Avatar: `${COMPONENT_LIBRARY_NAME}__Avatar`,

  Box: `${COMPONENT_LIBRARY_NAME}__Box`,

  Button: `${COMPONENT_LIBRARY_NAME}__Button`,

  Card: `${COMPONENT_LIBRARY_NAME}__Card`,

  CssReset: `${COMPONENT_LIBRARY_NAME}__CssReset`,

  Icon: `${COMPONENT_LIBRARY_NAME}__Icon`,

  Portal: `${COMPONENT_LIBRARY_NAME}__Portal`,

  SpaceFlex: `${COMPONENT_LIBRARY_NAME}__SpaceFlex`,
  SpaceGrid: `${COMPONENT_LIBRARY_NAME}__SpaceGrid`,

  ThemeProvider: `${COMPONENT_LIBRARY_NAME}__ThemeProvider`,
  ThemeProviderContext: `${COMPONENT_LIBRARY_NAME}__ThemeProviderContext`,
} as const;

export type IComponentName = keyof typeof COMPONENT_NAMES;
export type IComponentNameValue = (typeof COMPONENT_NAMES)[IComponentName];
