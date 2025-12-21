import type { CSSProperties, TextareaHTMLAttributes } from "react";

import type { ITheme } from "@/core/theme";
import { FormFieldTextareaResize, FormFieldTextareaSize, FormFieldTextareaVariant } from "@/core/types";

export type FormFieldTextareaElement = HTMLTextAreaElement;

export interface FormFieldTextareaProps extends Omit<TextareaHTMLAttributes<FormFieldTextareaElement>, "style"> {
  /** Textarea variant style */
  variant?: FormFieldTextareaVariant;
  /** Textarea size */
  size?: FormFieldTextareaSize;
  /** Whether the textarea has an error state */
  error?: boolean;
  /** Whether the textarea takes the full width of its container */
  fullWidth?: boolean;
  /** Resize behavior */
  resize?: FormFieldTextareaResize;
  /** Minimum number of rows */
  minRows?: number;
  /** Maximum number of rows */
  maxRows?: number;
  /** Whether to auto-resize based on content */
  autoHeight?: boolean;
  /** Custom class name for the wrapper */
  className?: string;
  /** Custom styles for the wrapper, supports object or theme callback function */
  style?: CSSProperties | ((theme: ITheme) => CSSProperties);
}
