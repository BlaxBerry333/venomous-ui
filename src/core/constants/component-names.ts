/**
 * Component Names
 * Used for displayName, CSS class prefixes, and debugging
 */

const PREFIX = "VenomousUI" as const;

export const COMPONENT_NAMES = {
  // Buttons
  Button: `${PREFIX}.Button`,

  // Utils
  Portal: `${PREFIX}.Portal`,

  // Layout
  Box: `${PREFIX}.Box`,
  Flex: `${PREFIX}.Flex`,
  Grid: `${PREFIX}.Grid`,

  // Card
  Card: `${PREFIX}.Card`,

  // Modal
  Modal: `${PREFIX}.Modal`,

  // Feedback
  Drawer: `${PREFIX}.Drawer`,
  Toast: `${PREFIX}.Toast`,
  Tooltip: `${PREFIX}.Tooltip`,
  Popover: `${PREFIX}.Popover`,

  // Form
  Input: `${PREFIX}.Input`,
  Textarea: `${PREFIX}.Textarea`,
  Select: `${PREFIX}.Select`,
  Checkbox: `${PREFIX}.Checkbox`,
  Radio: `${PREFIX}.Radio`,
  Switch: `${PREFIX}.Switch`,
  RadioGroup: `${PREFIX}.RadioGroup`,
  CheckboxGroup: `${PREFIX}.CheckboxGroup`,
  FormField: `${PREFIX}.FormField`,

  // Data Display
  Skeleton: `${PREFIX}.Skeleton`,
  Avatar: `${PREFIX}.Avatar`,
  Badge: `${PREFIX}.Badge`,
  List: `${PREFIX}.List`,
  Table: `${PREFIX}.Table`,

  // Navigation
  Tabs: `${PREFIX}.Tabs`,
  Breadcrumb: `${PREFIX}.Breadcrumb`,

  // Typography
  Text: `${PREFIX}.Text`,
  Title: `${PREFIX}.Title`,
  Paragraph: `${PREFIX}.Paragraph`,
} as const;

export type ComponentName = (typeof COMPONENT_NAMES)[keyof typeof COMPONENT_NAMES];
