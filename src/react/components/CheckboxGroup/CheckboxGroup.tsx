import { useCallback } from "react";

import { COMPONENT_NAMES, CSS_CLASSES } from "@/core/constants";
import type { TSelectOption } from "@/core/types";
import { Checkbox } from "../Checkbox";
import type { TCheckboxGroupProps } from "./CheckboxGroup.types";

const classes = CSS_CLASSES.checkboxGroup;

/**
 * CheckboxGroup component for React
 *
 * Renders a group of checkboxes from an options array
 *
 * @example
 * ```tsx
 * <CheckboxGroup
 *   options={[
 *     { value: "apple", label: "Apple" },
 *     { value: "banana", label: "Banana" },
 *   ]}
 *   value={selected}
 *   onChange={(value) => setSelected(value)}
 * />
 * ```
 */
export function CheckboxGroup({
  options,
  value = [],
  orientation = "vertical",
  size = "md",
  disabled = false,
  checkedIcon,
  uncheckedIcon,
  onChange,
  className = "",
}: TCheckboxGroupProps) {
  const handleChange = useCallback(
    (option: TSelectOption, checked: boolean) => {
      const newValue = checked ? [...value, option.value] : value.filter((v) => v !== option.value);
      onChange?.(newValue, option, checked);
    },
    [value, onChange],
  );

  const classNames = [classes.root, classes.orientations[orientation], className].filter(Boolean).join(" ");

  return (
    <div role="group" className={classNames}>
      {options.map((option) => (
        <Checkbox
          key={option.value}
          label={option.label}
          checked={value.includes(option.value)}
          disabled={disabled || option.disabled}
          size={size}
          checkedIcon={checkedIcon}
          uncheckedIcon={uncheckedIcon}
          onChange={(e) => handleChange(option, e.target.checked)}
        />
      ))}
    </div>
  );
}

CheckboxGroup.displayName = COMPONENT_NAMES.CheckboxGroup;
