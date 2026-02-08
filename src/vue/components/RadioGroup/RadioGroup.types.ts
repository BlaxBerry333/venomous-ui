import type { TRadioGroupBaseProps } from "@/core/types";

export interface TRadioGroupProps extends TRadioGroupBaseProps {
  /** Selected value (v-model) */
  modelValue?: string | number;
}
