import type { ComputedRef, InjectionKey, Ref } from "vue";

export interface TSelectContext {
  /** Currently selected value */
  value: Ref<string | number | undefined>;
  /** Called when an option is selected */
  onSelect: (value: string | number) => void;
  /** Currently highlighted value (for keyboard navigation and hover) */
  highlightedValue: Ref<string | number | undefined> | ComputedRef<string | number | undefined>;
  /** Called when an option is hovered */
  onHighlight: (value: string | number) => void;
}

export const SELECT_INJECTION_KEY: InjectionKey<TSelectContext> = Symbol("SelectContext");
