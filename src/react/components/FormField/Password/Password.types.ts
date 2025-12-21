import type { CSSProperties, InputHTMLAttributes } from "react";

import type { ITheme } from "@/core/theme";
import { FormFieldPasswordSize, FormFieldPasswordVariant } from "@/core/types";

export type FormFieldPasswordElement = HTMLInputElement;

export interface FormFieldPasswordProps extends Omit<
  InputHTMLAttributes<FormFieldPasswordElement>,
  "size" | "style" | "type"
> {
  /** Input variant style */
  variant?: FormFieldPasswordVariant;
  /** Input size */
  size?: FormFieldPasswordSize;
  /** Whether the input has an error state */
  error?: boolean;
  /** Whether the input takes the full width of its container */
  fullWidth?: boolean;
  /** Custom class name for the wrapper */
  className?: string;
  /** Custom styles for the wrapper, supports object or theme callback function */
  style?: CSSProperties | ((theme: ITheme) => CSSProperties);
}
