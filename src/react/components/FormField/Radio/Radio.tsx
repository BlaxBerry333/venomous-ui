"use client";

import React from "react";

import clsx from "clsx";

import { COMPONENT_NAMES, FORM_FIELD_RADIO_CSS_CLASS_NAMES } from "@/core/constants";
import { generateFormFieldRadioCSS } from "@/core/css";
import { useFormControlContext } from "@/react/components/FormControl";
import { useComputedStyle, useStyleInjection } from "@/react/hooks";
import type { FormFieldRadioProps, RadioOption } from "./Radio.types";

const Radio = React.memo<FormFieldRadioProps>(
  ({
    options,
    value: controlledValue,
    defaultValue,
    size = "medium",
    column = true,
    error = false,
    disabled = false,
    name,
    onChange,
    className,
    style,
  }) => {
    /**
     * Inject component CSS
     */
    const FORM_FIELD_RADIO_CSS: string = generateFormFieldRadioCSS();
    useStyleInjection(COMPONENT_NAMES.FormFieldRadio, FORM_FIELD_RADIO_CSS);

    /**
     * Get computed style
     */
    const computedStyle = useComputedStyle(style);

    /**
     * Get FormControl context for a11y attributes
     */
    const formControl = useFormControlContext();

    /**
     * Internal state for uncontrolled mode
     */
    const [internalValue, setInternalValue] = React.useState<string | number | undefined>(defaultValue);
    const isControlled = controlledValue !== undefined;
    const currentValue = isControlled ? controlledValue : internalValue;

    /**
     * Get group className
     */
    const groupClassName: string = clsx(
      FORM_FIELD_RADIO_CSS_CLASS_NAMES.group.className,
      column
        ? FORM_FIELD_RADIO_CSS_CLASS_NAMES.vertical.className
        : FORM_FIELD_RADIO_CSS_CLASS_NAMES.horizontal.className,
      size === "small" && FORM_FIELD_RADIO_CSS_CLASS_NAMES.sizeSmall.className,
      size === "medium" && FORM_FIELD_RADIO_CSS_CLASS_NAMES.sizeMedium.className,
      size === "large" && FORM_FIELD_RADIO_CSS_CLASS_NAMES.sizeLarge.className,
      className,
    );

    /**
     * Generate unique name if not provided
     */
    const groupName = React.useMemo(() => name ?? `radio-group-${Math.random().toString(36).slice(2, 9)}`, [name]);

    /**
     * Handle change
     */
    const handleChange = React.useCallback(
      (opt: RadioOption) => {
        if (opt.disabled || disabled) return;

        if (!isControlled) {
          setInternalValue(opt.value);
        }
        onChange?.(opt.value);
      },
      [isControlled, disabled, onChange],
    );

    /**
     * Render radio option
     */
    const renderOption = (opt: RadioOption) => {
      const isChecked = opt.value === currentValue;
      const isDisabled = disabled || opt.disabled;

      const optionClassName = clsx(
        FORM_FIELD_RADIO_CSS_CLASS_NAMES.base.className,
        isChecked && FORM_FIELD_RADIO_CSS_CLASS_NAMES.checked.className,
        isDisabled && FORM_FIELD_RADIO_CSS_CLASS_NAMES.disabled.className,
        error && FORM_FIELD_RADIO_CSS_CLASS_NAMES.error.className,
      );

      return (
        <label key={String(opt.value)} className={optionClassName}>
          <input
            type="radio"
            name={groupName}
            value={opt.value}
            checked={isChecked}
            disabled={isDisabled}
            onChange={() => handleChange(opt)}
            className={FORM_FIELD_RADIO_CSS_CLASS_NAMES.input.className}
          />
          <span className={FORM_FIELD_RADIO_CSS_CLASS_NAMES.circle.className}>
            <span className={FORM_FIELD_RADIO_CSS_CLASS_NAMES.dot.className} />
          </span>
          {opt.label && <span className={FORM_FIELD_RADIO_CSS_CLASS_NAMES.label.className}>{opt.label}</span>}
        </label>
      );
    };

    return (
      <div
        role="radiogroup"
        className={groupClassName}
        style={computedStyle}
        aria-invalid={error || undefined}
        aria-describedby={formControl?.helperTextId}
      >
        {options.map(renderOption)}
      </div>
    );
  },
);

Radio.displayName = COMPONENT_NAMES.FormFieldRadio;

export default Radio;
