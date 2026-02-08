import type { ReactNode } from "react";

import type { TSelectBaseProps, TSelectOption } from "@/core/types";

export interface TSelectProps extends TSelectBaseProps {
  /** Dropdown icon (displayed at right of trigger) */
  dropdownIcon?: ReactNode;
  /** Icon to show for selected option */
  selectedIcon?: ReactNode;
  /** Called when value changes */
  onChange?: (value: string | number, option: TSelectOption) => void;
  /**
   * Custom children for dropdown content (enables custom mode)
   * When provided, the options prop is ignored and children are rendered in the dropdown.
   * Use this with Select.Option for custom rendering (e.g., virtual list)
   */
  children?: ReactNode;
}
