import type { ReactNode } from "react";

import type { TCheckboxGroupBaseProps, TSelectOption } from "@/core/types";

export interface TCheckboxGroupProps extends TCheckboxGroupBaseProps {
  /** Icon to display when checkbox is checked (enables custom mode) */
  checkedIcon?: ReactNode;
  /** Icon to display when checkbox is unchecked (enables custom mode) */
  uncheckedIcon?: ReactNode;
  /** Called when value changes */
  onChange?: (value: (string | number)[], option: TSelectOption, checked: boolean) => void;
}
