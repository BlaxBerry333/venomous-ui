import type { CSSProperties, LabelHTMLAttributes, ReactNode } from "react";

import type { ITheme } from "@/core/theme";

export type FormLabelElement = HTMLLabelElement;

export type FormLabelSize = "small" | "medium" | "large";

export interface FormLabelProps extends Omit<LabelHTMLAttributes<FormLabelElement>, "style"> {
  /** Label text content */
  children: ReactNode;
  /** Whether to show required indicator (*) */
  required?: boolean;
  /** Size of the label */
  size?: FormLabelSize;
  /** Custom class name */
  className?: string;
  /** Custom styles, supports object or theme callback function */
  style?: CSSProperties | ((theme: ITheme) => CSSProperties);
}
