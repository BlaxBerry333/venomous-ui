import type { CSSProperties, ReactNode } from "react";

import type { ITheme } from "@/core/theme";
import { FormFieldSelectSize, FormFieldSelectVariant } from "@/core/types";

export type FormFieldSelectElement = HTMLDivElement;

export interface SelectOption {
  /** Option value */
  value: string | number;
  /** Option display label */
  label: ReactNode;
  /** Whether the option is disabled */
  disabled?: boolean;
}

export interface SelectOptionGroup {
  /** Group label */
  label: string;
  /** Options in this group */
  options: SelectOption[];
}

export type SelectOptionOrGroup = SelectOption | SelectOptionGroup;

export interface FormFieldSelectProps {
  /** Options to display */
  options: SelectOptionOrGroup[];
  /** Current selected value (controlled) */
  value?: string | number;
  /** Default selected value (uncontrolled) */
  defaultValue?: string | number;
  /** Placeholder text when no value is selected */
  placeholder?: string;
  /** Select variant style */
  variant?: FormFieldSelectVariant;
  /** Select size */
  size?: FormFieldSelectSize;
  /** Whether the select is disabled */
  disabled?: boolean;
  /** Whether the select has an error state */
  error?: boolean;
  /** Whether the select takes the full width of its container */
  fullWidth?: boolean;
  /** Whether to show a clear button */
  clearable?: boolean;
  /** Whether to enable search/filter */
  searchable?: boolean;
  /** Search placeholder */
  searchPlaceholder?: string;
  /** Callback when value changes */
  onChange?: (value: string | number | undefined) => void;
  /** Callback when dropdown opens */
  onOpen?: () => void;
  /** Callback when dropdown closes */
  onClose?: () => void;
  /** Custom class name for the trigger */
  className?: string;
  /** Custom styles for the trigger, supports object or theme callback function */
  style?: CSSProperties | ((theme: ITheme) => CSSProperties);
}

export function isOptionGroup(option: SelectOptionOrGroup): option is SelectOptionGroup {
  return "options" in option;
}
