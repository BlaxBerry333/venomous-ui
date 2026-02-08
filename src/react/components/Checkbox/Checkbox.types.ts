import type { InputHTMLAttributes, ReactNode } from "react";

import type { TCheckboxBaseProps } from "@/core/types";

export interface TCheckboxProps
  extends TCheckboxBaseProps, Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "checked"> {
  /** Label text */
  label?: ReactNode;
  /** Icon to display when checked (enables custom mode) */
  checkedIcon?: ReactNode;
  /** Icon to display when unchecked (enables custom mode) */
  uncheckedIcon?: ReactNode;
  /** Change handler */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
