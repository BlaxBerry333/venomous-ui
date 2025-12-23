export const COMPONENT_LIBRARY_NAME = "VENOMOUS_UI" as const;

export const COMPONENT_NAMES = {
  Arrow: `${COMPONENT_LIBRARY_NAME}__Arrow`,

  Avatar: `${COMPONENT_LIBRARY_NAME}__Avatar`,

  Badge: `${COMPONENT_LIBRARY_NAME}__Badge`,

  Backdrop: `${COMPONENT_LIBRARY_NAME}__Backdrop`,

  Box: `${COMPONENT_LIBRARY_NAME}__Box`,

  Button: `${COMPONENT_LIBRARY_NAME}__Button`,

  Card: `${COMPONENT_LIBRARY_NAME}__Card`,

  Chip: `${COMPONENT_LIBRARY_NAME}__Chip`,

  CssReset: `${COMPONENT_LIBRARY_NAME}__CssReset`,

  Drawer: `${COMPONENT_LIBRARY_NAME}__Drawer`,

  Icon: `${COMPONENT_LIBRARY_NAME}__Icon`,

  Modal: `${COMPONENT_LIBRARY_NAME}__Modal`,

  Popover: `${COMPONENT_LIBRARY_NAME}__Popover`,

  Portal: `${COMPONENT_LIBRARY_NAME}__Portal`,

  SpaceFlex: `${COMPONENT_LIBRARY_NAME}__SpaceFlex`,
  SpaceGrid: `${COMPONENT_LIBRARY_NAME}__SpaceGrid`,

  ThemeProvider: `${COMPONENT_LIBRARY_NAME}__ThemeProvider`,
  ThemeProviderContext: `${COMPONENT_LIBRARY_NAME}__ThemeProviderContext`,

  Tooltip: `${COMPONENT_LIBRARY_NAME}__Tooltip`,

  TypographyParagraph: `${COMPONENT_LIBRARY_NAME}__TypographyParagraph`,
  TypographyTitle: `${COMPONENT_LIBRARY_NAME}__TypographyTitle`,
  TypographyText: `${COMPONENT_LIBRARY_NAME}__TypographyText`,

  FormControl: `${COMPONENT_LIBRARY_NAME}__FormControl`,
  FormLabel: `${COMPONENT_LIBRARY_NAME}__FormLabel`,
  FormFieldText: `${COMPONENT_LIBRARY_NAME}__FormFieldText`,
  FormFieldNumber: `${COMPONENT_LIBRARY_NAME}__FormFieldNumber`,
  FormFieldPassword: `${COMPONENT_LIBRARY_NAME}__FormFieldPassword`,
  FormFieldTextarea: `${COMPONENT_LIBRARY_NAME}__FormFieldTextarea`,
  FormFieldSelect: `${COMPONENT_LIBRARY_NAME}__FormFieldSelect`,
  FormFieldCheckbox: `${COMPONENT_LIBRARY_NAME}__FormFieldCheckbox`,
  FormFieldSwitch: `${COMPONENT_LIBRARY_NAME}__FormFieldSwitch`,
  FormFieldRadio: `${COMPONENT_LIBRARY_NAME}__FormFieldRadio`,

  ProgressBar: `${COMPONENT_LIBRARY_NAME}__ProgressBar`,
  ProgressCircle: `${COMPONENT_LIBRARY_NAME}__ProgressCircle`,
  ProgressPageLoad: `${COMPONENT_LIBRARY_NAME}__ProgressPageLoad`,
  ProgressScrollIndicator: `${COMPONENT_LIBRARY_NAME}__ProgressScrollIndicator`,
} as const;

export type IComponentName = keyof typeof COMPONENT_NAMES;
export type IComponentNameValue = (typeof COMPONENT_NAMES)[IComponentName];
