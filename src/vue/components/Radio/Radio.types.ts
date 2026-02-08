import type { TRadioBaseProps } from "@/core/types";

export interface TRadioProps extends TRadioBaseProps {
  /** Radio value (v-model for RadioGroup) */
  modelValue?: string | number;
  /** Label text */
  label?: string;
}
