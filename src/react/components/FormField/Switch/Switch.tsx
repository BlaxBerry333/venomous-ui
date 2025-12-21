"use client";

import React from "react";

import clsx from "clsx";

import { COMPONENT_NAMES, FORM_FIELD_SWITCH_CSS_CLASS_NAMES } from "@/core/constants";
import { generateFormFieldSwitchCSS } from "@/core/css";
import { useComputedStyle, useControlledState, useStyleInjection } from "@/react/hooks";
import type { FormFieldSwitchElement, FormFieldSwitchProps } from "./Switch.types";

const Switch = React.memo(
  React.forwardRef<FormFieldSwitchElement, FormFieldSwitchProps>(
    (
      {
        size = "medium",
        error = false,
        disabled = false,
        checked,
        defaultChecked,
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
      useStyleInjection(COMPONENT_NAMES.FormFieldSwitch, generateFormFieldSwitchCSS());

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
        FORM_FIELD_SWITCH_CSS_CLASS_NAMES.base.className,
        disabled && FORM_FIELD_SWITCH_CSS_CLASS_NAMES.disabled.className,
        error && FORM_FIELD_SWITCH_CSS_CLASS_NAMES.error.className,
        isChecked && FORM_FIELD_SWITCH_CSS_CLASS_NAMES.checked.className,
        size === "small" && FORM_FIELD_SWITCH_CSS_CLASS_NAMES.sizeSmall.className,
        size === "medium" && FORM_FIELD_SWITCH_CSS_CLASS_NAMES.sizeMedium.className,
        size === "large" && FORM_FIELD_SWITCH_CSS_CLASS_NAMES.sizeLarge.className,
        className,
      );

      const handleChange = React.useCallback(
        (e: React.ChangeEvent<FormFieldSwitchElement>) => {
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
            role="switch"
            className={FORM_FIELD_SWITCH_CSS_CLASS_NAMES.input.className}
            checked={isChecked}
            disabled={disabled}
            onChange={handleChange}
            aria-checked={isChecked}
            {...restProps}
          />
          <span className={FORM_FIELD_SWITCH_CSS_CLASS_NAMES.track.className}>
            <span className={FORM_FIELD_SWITCH_CSS_CLASS_NAMES.thumb.className} />
          </span>
        </label>
      );
    },
  ),
);

Switch.displayName = COMPONENT_NAMES.FormFieldSwitch;

export default Switch;
