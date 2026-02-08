import type { TTextareaBaseProps } from "@/core/types";

export interface TTextareaProps extends TTextareaBaseProps {
  /** Textarea value (v-model) */
  modelValue?: string;
}
