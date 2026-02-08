import type { TInputBaseProps } from "@/core/types";

export interface TInputProps extends TInputBaseProps {
  /** Input value (v-model) */
  modelValue?: string | number;
}
