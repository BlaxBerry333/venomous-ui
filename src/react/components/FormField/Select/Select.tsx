"use client";

import React from "react";

import clsx from "clsx";

import { COMPONENT_NAMES, FORM_FIELD_SELECT_CSS_CLASS_NAMES } from "@/core/constants";
import { generateFormFieldSelectCSS } from "@/core/css";
import { calculateFloatingPosition, getElementRect } from "@/core/tools";
import { Icon } from "@/react/components/Icon";
import { Portal } from "@/react/components/Portal";
import { useComputedStyle, useStyleInjection } from "@/react/hooks";
import type { FormFieldSelectProps, SelectOption, SelectOptionOrGroup } from "./Select.types";
import { isOptionGroup } from "./Select.types";

const Select = React.memo<FormFieldSelectProps>(
  ({
    options,
    value: controlledValue,
    defaultValue,
    placeholder = "Select...",
    variant = "outlined",
    size = "medium",
    disabled = false,
    error = false,
    fullWidth = true,
    clearable = false,
    searchable = false,
    searchPlaceholder = "Search...",
    onChange,
    onOpen,
    onClose,
    className,
    style,
  }) => {
    /**
     * Inject component CSS
     */
    const FORM_FIELD_SELECT_CSS: string = generateFormFieldSelectCSS();
    useStyleInjection(COMPONENT_NAMES.FormFieldSelect, FORM_FIELD_SELECT_CSS);

    /**
     * Get computed style
     */
    const computedStyle = useComputedStyle(style);

    /**
     * Internal state for uncontrolled mode
     */
    const [internalValue, setInternalValue] = React.useState<string | number | undefined>(defaultValue);
    const isControlled = controlledValue !== undefined;
    const currentValue = isControlled ? controlledValue : internalValue;

    /**
     * get component state
     */
    const [isOpen, setIsOpen] = React.useState(false);
    const [searchQuery, setSearchQuery] = React.useState("");
    const [position, setPosition] = React.useState<{ x: number; y: number } | null>(null);

    /**
     * Get wrapper className
     */
    const wrapperClassName: string = clsx(
      FORM_FIELD_SELECT_CSS_CLASS_NAMES.base.className,
      disabled && FORM_FIELD_SELECT_CSS_CLASS_NAMES.disabled.className,
      isOpen && FORM_FIELD_SELECT_CSS_CLASS_NAMES.open.className,
      error && FORM_FIELD_SELECT_CSS_CLASS_NAMES.error.className,
      variant === "outlined" && FORM_FIELD_SELECT_CSS_CLASS_NAMES.variantOutlined.className,
      variant === "filled" && FORM_FIELD_SELECT_CSS_CLASS_NAMES.variantFilled.className,
      size === "small" && FORM_FIELD_SELECT_CSS_CLASS_NAMES.sizeSmall.className,
      size === "medium" && FORM_FIELD_SELECT_CSS_CLASS_NAMES.sizeMedium.className,
      size === "large" && FORM_FIELD_SELECT_CSS_CLASS_NAMES.sizeLarge.className,
      fullWidth && FORM_FIELD_SELECT_CSS_CLASS_NAMES.fullWidth.className,
      className,
    );

    /**
     * Refs
     */
    const triggerRef = React.useRef<HTMLDivElement>(null);
    const dropdownRef = React.useRef<HTMLDivElement>(null);
    const searchInputRef = React.useRef<HTMLInputElement>(null);

    /**
     * Flatten options for searching
     */
    const flatOptions = React.useMemo(() => {
      const result: SelectOption[] = [];
      options.forEach((opt) => {
        if (isOptionGroup(opt)) {
          result.push(...opt.options);
        } else {
          result.push(opt);
        }
      });
      return result;
    }, [options]);

    /**
     * Find selected option
     */
    const selectedOption = React.useMemo(() => {
      return flatOptions.find((opt) => opt.value === currentValue);
    }, [flatOptions, currentValue]);

    /**
     * Filter options based on search
     */
    const filteredOptions = React.useMemo(() => {
      if (!searchQuery) return options;

      const query = searchQuery.toLowerCase();

      return options
        .map((opt): SelectOptionOrGroup | null => {
          if (isOptionGroup(opt)) {
            const filteredGroupOptions = opt.options.filter((o) => String(o.label).toLowerCase().includes(query));
            if (filteredGroupOptions.length === 0) return null;
            return { ...opt, options: filteredGroupOptions };
          }
          if (String(opt.label).toLowerCase().includes(query)) {
            return opt;
          }
          return null;
        })
        .filter((opt): opt is SelectOptionOrGroup => opt !== null);
    }, [options, searchQuery]);

    /**
     * Handle open
     */
    const handleOpen = React.useCallback(() => {
      if (disabled) return;
      setIsOpen(true);
      setSearchQuery("");
      onOpen?.();
    }, [disabled, onOpen]);

    /**
     * Handle close
     */
    const handleClose = React.useCallback(() => {
      setIsOpen(false);
      onClose?.();
    }, [onClose]);

    /**
     * Handle toggle
     */
    const handleToggle = React.useCallback(() => {
      if (isOpen) {
        handleClose();
      } else {
        handleOpen();
      }
    }, [isOpen, handleOpen, handleClose]);

    /**
     * Handle select
     */
    const handleSelect = React.useCallback(
      (opt: SelectOption) => {
        if (opt.disabled) return;

        if (!isControlled) {
          setInternalValue(opt.value);
        }
        onChange?.(opt.value);
        handleClose();
      },
      [isControlled, onChange, handleClose],
    );

    /**
     * Handle clear
     */
    const handleClear = React.useCallback(
      (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!isControlled) {
          setInternalValue(undefined);
        }
        onChange?.(undefined);
      },
      [isControlled, onChange],
    );

    /**
     * Update position
     */
    const updatePosition = React.useCallback(() => {
      if (!triggerRef.current || !dropdownRef.current) return;

      const triggerRect = getElementRect(triggerRef.current);
      const dropdownRect = dropdownRef.current.getBoundingClientRect();

      if (dropdownRect.width === 0 || dropdownRect.height === 0) return;

      const result = calculateFloatingPosition({
        triggerRect,
        floatingRect: { width: dropdownRect.width, height: dropdownRect.height },
        placement: "bottom",
        offset: 4,
      });

      setPosition(result.position);
    }, []);

    /**
     * Update position when open
     */
    React.useEffect(() => {
      if (!isOpen) {
        setPosition(null);
        return;
      }

      let rafId: number;
      let attempts = 0;
      const maxAttempts = 10;

      const tryUpdatePosition = () => {
        if (dropdownRef.current && dropdownRef.current.getBoundingClientRect().width > 0) {
          updatePosition();
          // Focus search input if searchable
          if (searchable && searchInputRef.current) {
            searchInputRef.current.focus();
          }
        } else if (attempts < maxAttempts) {
          attempts++;
          rafId = requestAnimationFrame(tryUpdatePosition);
        }
      };

      rafId = requestAnimationFrame(tryUpdatePosition);

      window.addEventListener("scroll", updatePosition, true);
      window.addEventListener("resize", updatePosition);

      return () => {
        cancelAnimationFrame(rafId);
        window.removeEventListener("scroll", updatePosition, true);
        window.removeEventListener("resize", updatePosition);
      };
    }, [isOpen, updatePosition, searchable]);

    /**
     * Close on outside click
     */
    React.useEffect(() => {
      if (!isOpen) return;

      const handleClickOutside = (e: MouseEvent) => {
        const target = e.target as Node;

        if (
          triggerRef.current &&
          !triggerRef.current.contains(target) &&
          dropdownRef.current &&
          !dropdownRef.current.contains(target)
        ) {
          handleClose();
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [isOpen, handleClose]);

    /**
     * Close on escape
     */
    React.useEffect(() => {
      if (!isOpen) return;

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          handleClose();
        }
      };

      document.addEventListener("keydown", handleKeyDown);
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }, [isOpen, handleClose]);

    /**
     * Get trigger width for dropdown
     */
    const triggerWidth = triggerRef.current?.offsetWidth ?? 0;

    /**
     * Render option
     */
    const renderOption = (opt: SelectOption) => {
      const isSelected = opt.value === currentValue;
      const optionClassName = clsx(
        FORM_FIELD_SELECT_CSS_CLASS_NAMES.option.className,
        isSelected && FORM_FIELD_SELECT_CSS_CLASS_NAMES.optionSelected.className,
        opt.disabled && FORM_FIELD_SELECT_CSS_CLASS_NAMES.optionDisabled.className,
      );

      return (
        <div
          key={String(opt.value)}
          className={optionClassName}
          onClick={() => handleSelect(opt)}
          role="option"
          aria-selected={isSelected}
          aria-disabled={opt.disabled}
        >
          {opt.label}
        </div>
      );
    };

    /**
     * Render options list
     */
    const renderOptions = () => {
      return filteredOptions.map((opt) => {
        if (isOptionGroup(opt)) {
          return (
            <div key={`group-${opt.label}`} className={FORM_FIELD_SELECT_CSS_CLASS_NAMES.group.className}>
              <div className={FORM_FIELD_SELECT_CSS_CLASS_NAMES.groupLabel.className}>{opt.label}</div>
              {opt.options.map(renderOption)}
            </div>
          );
        }
        return renderOption(opt);
      });
    };

    return (
      <div ref={triggerRef} className={wrapperClassName} style={computedStyle}>
        <button
          type="button"
          className={FORM_FIELD_SELECT_CSS_CLASS_NAMES.trigger.className}
          onClick={handleToggle}
          disabled={disabled}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
        >
          {selectedOption ? (
            <span className={FORM_FIELD_SELECT_CSS_CLASS_NAMES.value.className}>{selectedOption.label}</span>
          ) : (
            <span
              className={clsx(
                FORM_FIELD_SELECT_CSS_CLASS_NAMES.value.className,
                FORM_FIELD_SELECT_CSS_CLASS_NAMES.placeholder.className,
              )}
            >
              {placeholder}
            </span>
          )}

          {clearable && currentValue !== undefined && (
            <span
              role="button"
              className={FORM_FIELD_SELECT_CSS_CLASS_NAMES.clearButton.className}
              onClick={handleClear}
              tabIndex={-1}
              aria-label="Clear selection"
            >
              <Icon name="mdi:close" />
            </span>
          )}

          <span className={FORM_FIELD_SELECT_CSS_CLASS_NAMES.arrow.className}>
            <Icon name="mdi:chevron-down" />
          </span>
        </button>

        {isOpen && (
          <Portal>
            <div
              ref={dropdownRef}
              className={FORM_FIELD_SELECT_CSS_CLASS_NAMES.dropdown.className}
              role="listbox"
              style={{
                position: "fixed",
                left: position ? `${position.x}px` : 0,
                top: position ? `${position.y}px` : 0,
                visibility: position ? "visible" : "hidden",
                minWidth: triggerWidth,
              }}
            >
              {searchable && (
                <input
                  ref={searchInputRef}
                  type="text"
                  className={FORM_FIELD_SELECT_CSS_CLASS_NAMES.search.className}
                  placeholder={searchPlaceholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              )}
              <div className={FORM_FIELD_SELECT_CSS_CLASS_NAMES.optionsList.className}>{renderOptions()}</div>
            </div>
          </Portal>
        )}
      </div>
    );
  },
);

Select.displayName = COMPONENT_NAMES.FormFieldSelect;

export default Select;
