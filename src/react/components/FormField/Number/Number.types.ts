import type { CSSProperties, InputHTMLAttributes } from "react";

import type { ITheme } from "@/core/theme";
import { FormFieldNumberSize, FormFieldNumberVariant } from "@/core/types";

export type FormFieldNumberElement = HTMLInputElement;

export interface FormFieldNumberProps extends Omit<
  InputHTMLAttributes<FormFieldNumberElement>,
  "size" | "style" | "type"
> {
  /** Input variant style */
  variant?: FormFieldNumberVariant;
  /** Input size */
  size?: FormFieldNumberSize;
  /** Whether the input has an error state */
  error?: boolean;
  /** Whether the input takes the full width of its container */
  fullWidth?: boolean;
  /** Minimum value */
  min?: number;
  /** Maximum value */
  max?: number;
  /** Step value for increment/decrement */
  step?: number;
  /** Custom class name for the wrapper */
  className?: string;
  /** Custom styles for the wrapper, supports object or theme callback function */
  style?: CSSProperties | ((theme: ITheme) => CSSProperties);
}
