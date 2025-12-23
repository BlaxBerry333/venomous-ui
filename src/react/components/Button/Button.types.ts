import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from "react";

import type { ITheme } from "@/core/theme";
import type { ButtonColor, ButtonSize, ButtonVariant } from "@/core/types";

export type ButtonElement = HTMLButtonElement;

export interface ButtonProps extends Omit<ButtonHTMLAttributes<ButtonElement>, "children" | "color" | "style"> {
  /** Button variant style */
  variant?: ButtonVariant;
  /** Button size */
  size?: ButtonSize;
  /** Color theme */
  color?: ButtonColor;
  /** Whether the button is disabled */
  disabled?: boolean;
  /** Whether the button is in loading state */
  loading?: boolean;
  /** Whether the button should take full width of its container */
  fullWidth?: boolean;
  /** Button text content, displayed between startElement and endElement */
  text?: string;
  /** Element displayed before the text (e.g., icon) */
  StartElement?: ReactNode;
  /** Element displayed after the text (e.g., icon) */
  EndElement?: ReactNode;
  /** Custom content, overrides loading/startElement/text/endElement */
  children?: ReactNode;
  /** Custom class name */
  className?: string;
  /** Custom styles, supports object or theme callback function */
  style?: CSSProperties | ((theme: ITheme) => CSSProperties);
}
