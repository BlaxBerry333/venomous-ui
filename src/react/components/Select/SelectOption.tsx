import type { ReactNode } from "react";

import { CSS_CLASSES } from "@/core/constants";
import type { TSelectOptionBaseProps } from "@/core/types";
import { useSelectContext } from "./SelectContext";

const classes = CSS_CLASSES.select;

export interface TSelectOptionProps extends TSelectOptionBaseProps {
  /** Option content */
  children: ReactNode;
}

/**
 * Select.Option component for custom rendering mode
 *
 * Use this when you need custom option rendering (e.g., with virtual list)
 *
 * @example
 * ```tsx
 * <Select value={value} onChange={setValue}>
 *   <VirtualList items={options}>
 *     {(option) => (
 *       <Select.Option value={option.value} disabled={option.disabled}>
 *         {option.label}
 *       </Select.Option>
 *     )}
 *   </VirtualList>
 * </Select>
 * ```
 */
export function SelectOption({ value, disabled = false, className = "", children }: TSelectOptionProps) {
  const { value: selectedValue, onSelect, highlightedValue, onHighlight, selectedIcon } = useSelectContext();

  const isSelected = value === selectedValue;
  const isHighlighted = value === highlightedValue;

  const optionClassNames = [
    classes.option,
    isSelected ? classes.optionStates.selected : "",
    isHighlighted ? classes.optionStates.highlighted : "",
    disabled ? classes.optionStates.disabled : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const handleClick = () => {
    if (disabled) return;
    onSelect(value);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    // Prevent focus loss from trigger button to avoid border flicker
    e.preventDefault();
  };

  const handleMouseEnter = () => {
    onHighlight(value);
  };

  return (
    <div
      role="option"
      className={optionClassNames}
      aria-selected={isSelected}
      aria-disabled={disabled || undefined}
      onMouseDown={handleMouseDown}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
    >
      <span className={classes.optionLabel}>{children}</span>
      {isSelected && selectedIcon && <span className={classes.optionIcon}>{selectedIcon}</span>}
    </div>
  );
}

SelectOption.displayName = "Select.Option";
