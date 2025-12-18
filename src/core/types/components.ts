export type AvatarSize = "small" | "medium" | "large";
export type AvatarVariant = "circular" | "rounded" | "square";

export type ButtonSize = "small" | "medium" | "large";
export type ButtonVariant = "contained" | "outlined" | "text";

export type CardVariant = "elevated" | "outlined" | "filled";
export type CardPadding = "none" | "small" | "medium" | "large";
export type CardRadius = "none" | "small" | "medium" | "large";

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
