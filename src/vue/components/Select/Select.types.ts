import type { TSelectBaseProps } from "@/core/types";

export interface TSelectProps extends TSelectBaseProps {
  /** Selected value (v-model) */
  modelValue?: string | number;
}
