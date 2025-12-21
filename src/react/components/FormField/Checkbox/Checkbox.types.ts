import type { CSSProperties, InputHTMLAttributes, ReactNode } from "react";

import type { ITheme } from "@/core/theme";
import { FormFieldCheckboxSize } from "@/core/types";

export type FormFieldCheckboxElement = HTMLInputElement;

export interface FormFieldCheckboxProps extends Omit<
  InputHTMLAttributes<FormFieldCheckboxElement>,
  "size" | "style" | "type"
> {
  /** Checkbox size */
  size?: FormFieldCheckboxSize;
  /** Whether the checkbox has an error state */
  error?: boolean;
  /** Label text */
  label?: ReactNode;
  /** Custom class name for the wrapper */
  className?: string;
  /** Custom styles for the wrapper, supports object or theme callback function */
  style?: CSSProperties | ((theme: ITheme) => CSSProperties);
}
