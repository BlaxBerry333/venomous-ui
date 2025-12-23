export type AvatarSize = "small" | "medium" | "large";
export type AvatarVariant = "circular" | "rounded" | "square";

export type ButtonSize = "small" | "medium" | "large";
export type ButtonVariant = "contained" | "outlined" | "text";
export type ButtonColor = "default" | "primary" | "success" | "error" | "warning" | "info";

export type CardVariant = "elevated" | "outlined" | "filled";
export type CardPadding = "none" | "small" | "medium" | "large";
export type CardRadius = "none" | "small" | "medium" | "large";

export type ChipVariant = "filled" | "outlined";
export type ChipSize = "small" | "medium" | "large";
export type ChipColor = "default" | "primary" | "success" | "error" | "warning" | "info";

export type BadgeVariant = "standard" | "dot";
export type BadgeSize = "small" | "medium" | "large";
export type BadgeColor = "default" | "primary" | "success" | "error" | "warning" | "info";
export type BadgeAnchorOrigin = "top-right" | "top-left" | "bottom-right" | "bottom-left";

export type ArrowDirection = "top" | "bottom" | "left" | "right";

export type TooltipPlacement = ArrowDirection;

export type Placement =
  | "top"
  | "top-start"
  | "top-end"
  | "bottom"
  | "bottom-start"
  | "bottom-end"
  | "left"
  | "left-start"
  | "left-end"
  | "right"
  | "right-start"
  | "right-end";

export type PopoverPlacement = Placement;

export type TypographyTitleRenderElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type TypographyTextRenderElement =
  | "span"
  | "small"
  | "strong"
  | "em"
  | "mark"
  | "del"
  | "ins"
  | "sub"
  | "sup"
  | "code"
  | "kbd";

export type FormFieldCheckboxSize = "small" | "medium" | "large";

export type FormFieldNumberSize = "small" | "medium" | "large";
export type FormFieldNumberVariant = "outlined" | "filled";

export type FormFieldPasswordSize = "small" | "medium" | "large";
export type FormFieldPasswordVariant = "outlined" | "filled";

export type FormFieldRadioSize = "small" | "medium" | "large";

export type FormFieldSelectSize = "small" | "medium" | "large";
export type FormFieldSelectVariant = "outlined" | "filled";

export type FormFieldSwitchSize = "small" | "medium" | "large";

export type FormFieldTextSize = "small" | "medium" | "large";
export type FormFieldTextVariant = "outlined" | "filled";

export type FormFieldTextareaSize = "small" | "medium" | "large";
export type FormFieldTextareaVariant = "outlined" | "filled";
export type FormFieldTextareaResize = "none" | "vertical" | "horizontal" | "both";

export type ProgressSize = "small" | "medium" | "large";
export type ProgressPresetColor = "primary" | "success" | "error" | "warning" | "info";
export type ProgressColor = ProgressPresetColor | (string & {});

export type ToastVariant = "success" | "error" | "warning" | "info" | "loading";
export type ToastPlacement = "top-right" | "top-center" | "top-left" | "bottom-right" | "bottom-center" | "bottom-left";
