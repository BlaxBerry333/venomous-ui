import type { InputHTMLAttributes, ReactNode } from "react";

import type { TRadioBaseProps } from "@/core/types";

export interface TRadioProps
  extends TRadioBaseProps, Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "checked" | "value"> {
  /** Label text */
  label?: ReactNode;
  /** Icon to display when checked (enables custom mode) */
  checkedIcon?: ReactNode;
  /** Icon to display when unchecked (enables custom mode) */
  uncheckedIcon?: ReactNode;
  /** Change handler */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
