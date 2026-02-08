import { createContext, useContext } from "react";

export interface TSelectContext {
  /** Currently selected value */
  value?: string | number;
  /** Called when an option is selected */
  onSelect: (value: string | number) => void;
  /** Currently highlighted index (for keyboard navigation) */
  highlightedValue?: string | number;
  /** Called when an option is hovered */
  onHighlight: (value: string | number) => void;
  /** Icon to show for selected option */
  selectedIcon?: React.ReactNode;
}

export const SelectContext = createContext<TSelectContext | null>(null);

export function useSelectContext() {
  const context = useContext(SelectContext);
  if (!context) {
    throw new Error("Select.Option must be used within a Select component with children");
  }
  return context;
}
