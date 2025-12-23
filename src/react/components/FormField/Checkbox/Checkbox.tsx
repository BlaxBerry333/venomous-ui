"use client";

import React from "react";

import clsx from "clsx";

import { COMPONENT_NAMES, FORM_FIELD_CHECKBOX_CSS_CLASS_NAMES } from "@/core/constants";
import { generateFormFieldCheckboxCSS } from "@/core/css";
import { Icon } from "@/react/components/Icon";
import { useComputedStyle, useControlledState, useStyleInjection } from "@/react/hooks";
import type { FormFieldCheckboxElement, FormFieldCheckboxProps } from "./Checkbox.types";

const Checkbox = React.memo(
  React.forwardRef<FormFieldCheckboxElement, FormFieldCheckboxProps>(
    (
      {
        size = "medium",
        error = false,
        disabled = false,
        checked,
        defaultChecked,
        label,
        className,
        style,
        onChange,
        ...restProps
      },
      ref,
    ) => {
      /**
       * inject component css
       */
      useStyleInjection(COMPONENT_NAMES.FormFieldCheckbox, generateFormFieldCheckboxCSS());

      /**
       * get component style
       */
      const computedStyle = useComputedStyle(style);

      /**
       * get component status
       */
      const { currentValue: isChecked, setValue: setChecked } = useControlledState({
        value: checked,
        defaultValue: defaultChecked ?? false,
      });

      /**
       * get component className
       */
      const wrapperClassName = clsx(
        FORM_FIELD_CHECKBOX_CSS_CLASS_NAMES.base.className,
        disabled && FORM_FIELD_CHECKBOX_CSS_CLASS_NAMES.disabled.className,
        error && FORM_FIELD_CHECKBOX_CSS_CLASS_NAMES.error.className,
        isChecked && FORM_FIELD_CHECKBOX_CSS_CLASS_NAMES.checked.className,
        size === "small" && FORM_FIELD_CHECKBOX_CSS_CLASS_NAMES.sizeSmall.className,
        size === "medium" && FORM_FIELD_CHECKBOX_CSS_CLASS_NAMES.sizeMedium.className,
        size === "large" && FORM_FIELD_CHECKBOX_CSS_CLASS_NAMES.sizeLarge.className,
        className,
      );

      const handleChange = React.useCallback(
        (e: React.ChangeEvent<FormFieldCheckboxElement>) => {
          setChecked(e.target.checked);
          onChange?.(e);
        },
        [setChecked, onChange],
      );

      return (
        <label className={wrapperClassName} style={computedStyle}>
          <input
            ref={ref}
            type="checkbox"
            className={FORM_FIELD_CHECKBOX_CSS_CLASS_NAMES.input.className}
            checked={isChecked}
            disabled={disabled}
            onChange={handleChange}
            {...restProps}
          />
          <span className={FORM_FIELD_CHECKBOX_CSS_CLASS_NAMES.box.className}>
            <span className={FORM_FIELD_CHECKBOX_CSS_CLASS_NAMES.icon.className}>
              <Icon name="mdi:check" />
            </span>
          </span>
          {label && <span className={FORM_FIELD_CHECKBOX_CSS_CLASS_NAMES.label.className}>{label}</span>}
        </label>
      );
    },
  ),
);

Checkbox.displayName = COMPONENT_NAMES.FormFieldCheckbox;

export default Checkbox;
