import { useId } from "react";

import { COMPONENT_NAMES, CSS_CLASSES } from "@/core/constants";
import { Radio } from "../Radio";
import type { TRadioGroupProps } from "./RadioGroup.types";

const classes = CSS_CLASSES.radioGroup;

/**
 * RadioGroup component for React
 *
 * Renders a group of radio buttons from an options array
 *
 * @example
 * ```tsx
 * <RadioGroup
 *   name="fruit"
 *   options={[
 *     { value: "apple", label: "Apple" },
 *     { value: "banana", label: "Banana" },
 *   ]}
 *   value={selected}
 *   onChange={(value) => setSelected(value)}
 * />
 * ```
 */
export function RadioGroup({
  options,
  value,
  name,
  orientation = "vertical",
  size = "md",
  disabled = false,
  checkedIcon,
  uncheckedIcon,
  onChange,
  className = "",
}: TRadioGroupProps) {
  const groupId = useId();
  const groupName = name || groupId;

  const classNames = [classes.root, classes.orientations[orientation], className].filter(Boolean).join(" ");

  return (
    <div role="radiogroup" className={classNames}>
      {options.map((option) => (
        <Radio
          key={option.value}
          name={groupName}
          value={option.value}
          label={option.label}
          checked={option.value === value}
          disabled={disabled || option.disabled}
          size={size}
          checkedIcon={checkedIcon}
          uncheckedIcon={uncheckedIcon}
          onChange={() => onChange?.(option.value, option)}
        />
      ))}
    </div>
  );
}

RadioGroup.displayName = COMPONENT_NAMES.RadioGroup;
