import type { TSwitchBaseProps } from "@/core/types";

export interface TSwitchProps extends TSwitchBaseProps {
  /** Switch state (v-model) */
  modelValue?: boolean;
}
