/**
 * Shared constants for Storybook stories
 * Values must match the types defined in src/core/types
 */

import type { TColorScheme, TOrientation, TSize, TVariant } from "@/core/types";
import type { TCardVariant } from "@/core/types/card";
import type { TDrawerPlacement, TDrawerSize } from "@/core/types/drawer";
import type { TFormSize, TInputType, TTextareaResize } from "@/core/types/form";
import type { TModalSize } from "@/core/types/modal";
import type { TPopoverPlacement, TPopoverTrigger } from "@/core/types/popover";
import type { TSkeletonAnimation, TSkeletonVariant } from "@/core/types/skeleton";
import type { TTabsUnmountStrategy, TTabsVariant } from "@/core/types/tabs";
import type { TToastPlacement, TToastType } from "@/core/types/toast";
import type { TTooltipPlacement } from "@/core/types/tooltip";

/** Button size options */
export const BUTTON_SIZE_OPTIONS: TSize[] = ["sm", "md", "lg"];

/** Button variant options */
export const BUTTON_VARIANT_OPTIONS: TVariant[] = ["solid", "outline", "ghost", "link"];

/** Button color scheme options */
export const BUTTON_COLOR_SCHEME_OPTIONS: TColorScheme[] = ["theme", "success", "warning", "error", "info"];

/** Card variant options */
export const CARD_VARIANT_OPTIONS: TCardVariant[] = ["elevated", "outline", "filled"];

/** Modal size options */
export const MODAL_SIZE_OPTIONS: TModalSize[] = ["sm", "md", "lg", "xl", "full"];

/** Drawer size options */
export const DRAWER_SIZE_OPTIONS: TDrawerSize[] = ["sm", "md", "lg", "xl", "full"];

/** Drawer placement options */
export const DRAWER_PLACEMENT_OPTIONS: TDrawerPlacement[] = ["left", "right", "top", "bottom"];

/** Tooltip placement options */
export const TOOLTIP_PLACEMENT_OPTIONS: TTooltipPlacement[] = ["top", "bottom", "left", "right"];

/** Popover placement options */
export const POPOVER_PLACEMENT_OPTIONS: TPopoverPlacement[] = ["top", "bottom", "left", "right"];

/** Popover trigger options */
export const POPOVER_TRIGGER_OPTIONS: TPopoverTrigger[] = ["click", "hover"];

/** Tabs orientation options */
export const TABS_ORIENTATION_OPTIONS: TOrientation[] = ["horizontal", "vertical"];

/** Tabs variant options */
export const TABS_VARIANT_OPTIONS: TTabsVariant[] = ["line", "pill"];

/** Tabs unmount strategy options */
export const TABS_UNMOUNT_STRATEGY_OPTIONS: TTabsUnmountStrategy[] = ["keepMounted", "unmountOnHide"];

/** Form size options */
export const FORM_SIZE_OPTIONS: TFormSize[] = ["sm", "md", "lg"];

/** Input type options */
export const INPUT_TYPE_OPTIONS: TInputType[] = ["text", "password", "email", "number", "url"];

/** Textarea resize options */
export const TEXTAREA_RESIZE_OPTIONS: TTextareaResize[] = ["none", "vertical", "horizontal", "both"];

/** Orientation options */
export const ORIENTATION_OPTIONS: TOrientation[] = ["horizontal", "vertical"];

/** Skeleton variant options */
export const SKELETON_VARIANT_OPTIONS: TSkeletonVariant[] = ["rect", "circle", "text"];

/** Skeleton animation options */
export const SKELETON_ANIMATION_OPTIONS: TSkeletonAnimation[] = ["pulse", "wave"];

/** Avatar size options */
export const AVATAR_SIZE_OPTIONS: TSize[] = ["sm", "md", "lg"];

/** Avatar shape options */
export const AVATAR_SHAPE_OPTIONS: ("circle" | "square")[] = ["circle", "square"];

/** Badge color scheme options */
export const BADGE_COLOR_SCHEME_OPTIONS: TColorScheme[] = ["theme", "success", "warning", "error", "info"];

/** Toast type options */
export const TOAST_TYPE_OPTIONS: TToastType[] = ["success", "error", "warning", "info"];

/** Toast placement options */
export const TOAST_PLACEMENT_OPTIONS: TToastPlacement[] = [
  "top",
  "top-start",
  "top-end",
  "bottom",
  "bottom-start",
  "bottom-end",
];

/**
 * Demo data for stories
 */

/** Fruit options for Select, RadioGroup, CheckboxGroup demos */
export const FRUIT_OPTIONS = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "cherry", label: "Cherry" },
];

/** Fruit options with some disabled for demos */
export const FRUIT_OPTIONS_WITH_DISABLED = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana", disabled: true },
  { value: "cherry", label: "Cherry" },
];

/** Extended fruit options for Select demos */
export const FRUIT_OPTIONS_EXTENDED = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "cherry", label: "Cherry" },
  { value: "grape", label: "Grape" },
  { value: "orange", label: "Orange" },
];

/** Extended fruit options with some disabled for Select demos */
export const FRUIT_OPTIONS_EXTENDED_WITH_DISABLED = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana", disabled: true },
  { value: "cherry", label: "Cherry" },
  { value: "grape", label: "Grape", disabled: true },
  { value: "orange", label: "Orange" },
];
