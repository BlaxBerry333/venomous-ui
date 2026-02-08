/**
 * Form Component Types
 * Shared types for form controls across React and Vue
 */

import type { TOrientation } from "./common";

/** Form control sizes */
export type TFormSize = "sm" | "md" | "lg";

/**
 * Base props shared by all form controls
 */
export interface TFormControlBaseProps {
  /** Control size */
  size?: TFormSize;
  /** Whether the control is disabled */
  disabled?: boolean;
  /** Whether the control is read-only */
  readOnly?: boolean;
  /** Whether the control is in an error state */
  error?: boolean;
  /** Custom class name */
  className?: string;
}

/**
 * Input types supported by the Input component
 */
export type TInputType = "text" | "password" | "email" | "number" | "tel" | "url" | "search";

/**
 * Base props for Input component
 */
export interface TInputBaseProps extends TFormControlBaseProps {
  /** Input type */
  type?: TInputType;
  /** Placeholder text */
  placeholder?: string;
}

/**
 * Textarea resize behavior
 */
export type TTextareaResize = "none" | "vertical" | "horizontal" | "both";

/**
 * Base props for Textarea component
 */
export interface TTextareaBaseProps extends TFormControlBaseProps {
  /** Placeholder text */
  placeholder?: string;
  /** Number of visible text lines */
  rows?: number;
  /** Resize behavior */
  resize?: TTextareaResize;
  /** Whether to auto-resize based on content */
  autoResize?: boolean;
}

/**
 * Base props for Checkbox component
 * Note: Checkbox doesn't have error/readOnly state - use FormField for error handling
 */
export interface TCheckboxBaseProps extends Omit<TFormControlBaseProps, "error" | "readOnly"> {
  /** Whether the checkbox is checked */
  checked?: boolean;
}

/**
 * Base props for Radio component
 * Note: Radio doesn't have error state - use FormField for error handling
 */
export interface TRadioBaseProps extends Omit<TFormControlBaseProps, "error"> {
  /** Whether the radio is checked */
  checked?: boolean;
  /** Radio group name */
  name?: string;
  /** Radio value */
  value?: string | number;
}

/**
 * Base props for Switch component
 * Note: Switch doesn't have error/readOnly state - use FormField for error handling
 */
export interface TSwitchBaseProps extends Omit<TFormControlBaseProps, "error" | "readOnly"> {
  /** Whether the switch is on */
  checked?: boolean;
  /** Label text */
  label?: string;
}

/**
 * Option type for Select, RadioGroup, CheckboxGroup
 */
export interface TSelectOption<T = string | number> {
  /** Option value */
  value: T;
  /** Display label */
  label: string;
  /** Whether the option is disabled */
  disabled?: boolean;
}

/**
 * Base props for Select component
 */
export interface TSelectBaseProps extends TFormControlBaseProps {
  /** Form field name */
  name?: string;
  /** Available options (ignored when using custom children) */
  options?: TSelectOption[];
  /** Currently selected value */
  value?: string | number;
  /** Placeholder text when no value is selected */
  placeholder?: string;
  /** Maximum height of the dropdown */
  maxHeight?: number | string;
}

/**
 * Base props for Select.Option component
 */
export interface TSelectOptionBaseProps {
  /** Option value */
  value: string | number;
  /** Whether the option is disabled */
  disabled?: boolean;
  /** Custom class name */
  className?: string;
}

/**
 * Base props for RadioGroup component
 * Note: RadioGroup doesn't have error state - use FormField for error handling
 */
export interface TRadioGroupBaseProps extends Omit<TFormControlBaseProps, "error"> {
  /** Available options */
  options: TSelectOption[];
  /** Currently selected value */
  value?: string | number;
  /** Layout orientation */
  orientation?: TOrientation;
  /** Radio group name */
  name?: string;
}

/**
 * Base props for CheckboxGroup component
 * Note: CheckboxGroup doesn't have error state - use FormField for error handling
 */
export interface TCheckboxGroupBaseProps extends Omit<TFormControlBaseProps, "error"> {
  /** Available options */
  options: TSelectOption[];
  /** Currently selected values */
  value?: (string | number)[];
  /** Layout orientation */
  orientation?: TOrientation;
}

/**
 * FormField orientation
 * @deprecated Use TOrientation from common.ts instead
 */
export type TFormFieldOrientation = TOrientation;

/**
 * Control position in horizontal FormField
 */
export type TFormFieldControlPosition = "start" | "end";
