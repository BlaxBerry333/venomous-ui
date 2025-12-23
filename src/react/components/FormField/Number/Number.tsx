"use client";

import React from "react";

import clsx from "clsx";

import { COMPONENT_NAMES, FORM_FIELD_NUMBER_CSS_CLASS_NAMES } from "@/core/constants";
import { generateFormFieldNumberCSS } from "@/core/css";
import { Icon } from "@/react/components/Icon";
import { useComputedStyle, useFormFieldFocus, useStyleInjection } from "@/react/hooks";
import type { FormFieldNumberElement, FormFieldNumberProps } from "./Number.types";

const Number = React.memo(
  React.forwardRef<FormFieldNumberElement, FormFieldNumberProps>(
    (
      {
        variant = "outlined",
        size = "medium",
        error = false,
        disabled = false,
        fullWidth = true,
        min,
        max,
        step = 1,
        value,
        defaultValue,
        className,
        style,
        onChange,
        onFocus,
        onBlur,
        ...restProps
      },
      ref,
    ) => {
      /**
       * inject component css
       */
      useStyleInjection(COMPONENT_NAMES.FormFieldNumber, generateFormFieldNumberCSS());

      /**
       * get component style
       */
      const computedStyle = useComputedStyle(style);

      /**
       * get component status
       */
      const { isFocused, handleFocus, handleBlur } = useFormFieldFocus({ onFocus, onBlur });

      /**
       * get component className
       */
      const wrapperClassName = clsx(
        FORM_FIELD_NUMBER_CSS_CLASS_NAMES.base.className,
        disabled && FORM_FIELD_NUMBER_CSS_CLASS_NAMES.disabled.className,
        isFocused && FORM_FIELD_NUMBER_CSS_CLASS_NAMES.focused.className,
        error && FORM_FIELD_NUMBER_CSS_CLASS_NAMES.error.className,
        variant === "outlined" && FORM_FIELD_NUMBER_CSS_CLASS_NAMES.variantOutlined.className,
        variant === "filled" && FORM_FIELD_NUMBER_CSS_CLASS_NAMES.variantFilled.className,
        size === "small" && FORM_FIELD_NUMBER_CSS_CLASS_NAMES.sizeSmall.className,
        size === "medium" && FORM_FIELD_NUMBER_CSS_CLASS_NAMES.sizeMedium.className,
        size === "large" && FORM_FIELD_NUMBER_CSS_CLASS_NAMES.sizeLarge.className,
        fullWidth && FORM_FIELD_NUMBER_CSS_CLASS_NAMES.fullWidth.className,
        className,
      );

      const inputRef = React.useRef<HTMLInputElement>(null);

      React.useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

      const getPrecision = React.useCallback((num: number): number => {
        const str = String(num);
        const decimalIndex = str.indexOf(".");
        if (decimalIndex === -1) return 0;
        return str.length - decimalIndex - 1;
      }, []);

      const roundToPrecision = React.useCallback(
        (num: number): number => {
          const precision = getPrecision(step);
          if (precision === 0) return Math.round(num);
          const factor = Math.pow(10, precision);
          return Math.round(num * factor) / factor;
        },
        [step, getPrecision],
      );

      const getCurrentValue = React.useCallback((): number => {
        const inputValue = inputRef.current?.value;
        if (inputValue === "" || inputValue === undefined) return 0;
        return parseFloat(inputValue) || 0;
      }, []);

      const clampValue = React.useCallback(
        (val: number): number => {
          let result = val;
          if (min !== undefined && result < min) result = min;
          if (max !== undefined && result > max) result = max;
          return result;
        },
        [min, max],
      );

      const handleIncrement = React.useCallback(() => {
        if (!inputRef.current) return;
        const currentValue = getCurrentValue();
        const newValue = clampValue(roundToPrecision(currentValue + step));
        inputRef.current.value = String(newValue);
        const event = new Event("input", { bubbles: true });
        inputRef.current.dispatchEvent(event);
      }, [getCurrentValue, clampValue, roundToPrecision, step]);

      const handleDecrement = React.useCallback(() => {
        if (!inputRef.current) return;
        const currentValue = getCurrentValue();
        const newValue = clampValue(roundToPrecision(currentValue - step));
        inputRef.current.value = String(newValue);
        const event = new Event("input", { bubbles: true });
        inputRef.current.dispatchEvent(event);
      }, [getCurrentValue, clampValue, roundToPrecision, step]);

      const isAtMin = React.useMemo(() => {
        if (min === undefined) return false;
        const currentValue = value !== undefined ? parseFloat(String(value)) : getCurrentValue();
        return currentValue <= min;
      }, [min, value, getCurrentValue]);

      const isAtMax = React.useMemo(() => {
        if (max === undefined) return false;
        const currentValue = value !== undefined ? parseFloat(String(value)) : getCurrentValue();
        return currentValue >= max;
      }, [max, value, getCurrentValue]);

      return (
        <div className={wrapperClassName} style={computedStyle}>
          <input
            ref={inputRef}
            type="number"
            className={FORM_FIELD_NUMBER_CSS_CLASS_NAMES.input.className}
            disabled={disabled}
            min={min}
            max={max}
            step={step}
            value={value}
            defaultValue={defaultValue}
            onChange={onChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...restProps}
          />
          <div className={FORM_FIELD_NUMBER_CSS_CLASS_NAMES.controls.className}>
            <button
              type="button"
              className={FORM_FIELD_NUMBER_CSS_CLASS_NAMES.controlButton.className}
              onClick={handleIncrement}
              disabled={disabled || isAtMax}
              tabIndex={-1}
              aria-label="Increase value"
            >
              <Icon name="mdi:chevron-up" />
            </button>
            <button
              type="button"
              className={FORM_FIELD_NUMBER_CSS_CLASS_NAMES.controlButton.className}
              onClick={handleDecrement}
              disabled={disabled || isAtMin}
              tabIndex={-1}
              aria-label="Decrease value"
            >
              <Icon name="mdi:chevron-down" />
            </button>
          </div>
        </div>
      );
    },
  ),
);

Number.displayName = COMPONENT_NAMES.FormFieldNumber;

export default Number;
