import type { TCheckboxGroupBaseProps } from "@/core/types";

export interface TCheckboxGroupProps extends TCheckboxGroupBaseProps {
  /** Selected values (v-model) */
  modelValue?: (string | number)[];
}
