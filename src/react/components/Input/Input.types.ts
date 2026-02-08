import type { InputHTMLAttributes, ReactNode } from "react";

import type { TInputBaseProps } from "@/core/types";

export interface TInputProps
  extends TInputBaseProps, Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "prefix" | "type"> {
  /** Content to display before the input */
  prefix?: ReactNode;
  /** Content to display after the input */
  suffix?: ReactNode;
}
