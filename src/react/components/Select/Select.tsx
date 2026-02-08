import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";

import { COMPONENT_NAMES, CSS_CLASSES } from "@/core/constants";
import { useClickOutside, useKeydown } from "@/react/hooks";
import { Portal } from "../Portal";
import type { TSelectProps } from "./Select.types";
import { SelectContext, type TSelectContext } from "./SelectContext";
import { SelectOption } from "./SelectOption";

const classes = CSS_CLASSES.select;

/**
 * Select component for React
 *
 * Supports two modes:
 * 1. Simple mode: Pass options prop for basic usage
 * 2. Custom mode: Pass children for custom rendering (e.g., virtual list)
 *
 * @example Simple mode
 * ```tsx
 * <Select
 *   options={[
 *     { value: "a", label: "Option A" },
 *     { value: "b", label: "Option B" },
 *   ]}
 *   value={selected}
 *   onChange={(value) => setSelected(value)}
 *   placeholder="Select an option"
 * />
 * ```
 *
 * @example Custom mode with virtual list
 * ```tsx
 * <Select value={selected} onChange={(value) => setSelected(value)}>
 *   <VirtualList items={largeOptions}>
 *     {(option) => (
 *       <Select.Option value={option.value} disabled={option.disabled}>
 *         {option.label}
 *       </Select.Option>
 *     )}
 *   </VirtualList>
 * </Select>
 * ```
 */
export function Select({
  name,
  options = [],
  value,
  placeholder = "Select...",
  size = "md",
  disabled = false,
  readOnly = false,
  error,
  maxHeight = 300,
  dropdownIcon,
  selectedIcon,
  onChange,
  className = "",
  children,
}: TSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [customHighlightedValue, setCustomHighlightedValue] = useState<string | number | undefined>(undefined);

  const triggerRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectId = useId();

  // Determine if using custom children mode
  const isCustomMode = !!children;

  // Find selected option (only for simple mode)
  const selectedOption = !isCustomMode ? options.find((opt) => opt.value === value) : undefined;

  // For custom mode, we need to display the value as label if no options provided
  const displayLabel = isCustomMode ? value?.toString() : selectedOption?.label;

  // Get highlighted value: use index-based for simple mode, state-based for custom mode
  const highlightedValue = isCustomMode
    ? customHighlightedValue
    : highlightedIndex >= 0
      ? options[highlightedIndex]?.value
      : undefined;

  // Toggle dropdown
  const toggle = useCallback(() => {
    if (disabled || readOnly) return;
    setIsOpen((prev) => !prev);
    setHighlightedIndex(-1);
    setCustomHighlightedValue(undefined);
  }, [disabled, readOnly]);

  // Close dropdown
  const close = useCallback(() => {
    setIsOpen(false);
    setHighlightedIndex(-1);
    setCustomHighlightedValue(undefined);
  }, []);

  // Handle option selection via context (works for both modes)
  const handleSelect = useCallback(
    (optionValue: string | number) => {
      // Find the option to get label (for simple mode)
      const option = options.find((opt) => opt.value === optionValue);
      onChange?.(optionValue, option || { value: optionValue, label: String(optionValue) });
      close();
      triggerRef.current?.focus();
    },
    [options, onChange, close],
  );

  // Handle highlight via context
  const handleHighlight = useCallback(
    (optionValue: string | number) => {
      if (isCustomMode) {
        // Custom mode: use state directly
        setCustomHighlightedValue(optionValue);
      } else {
        // Simple mode: find the index
        const index = options.findIndex((opt) => opt.value === optionValue);
        if (index >= 0) {
          setHighlightedIndex(index);
        }
      }
    },
    [isCustomMode, options],
  );

  // Dropdown position (left-aligned with trigger, not centered like tooltip)
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (isOpen && triggerRef.current) {
      const updatePosition = () => {
        if (!triggerRef.current) return;
        const rect = triggerRef.current.getBoundingClientRect();
        setDropdownPosition({
          top: rect.bottom + 4, // 4px gap
          left: rect.left,
        });
      };

      // Double rAF for accurate measurement
      let rafId2: number;
      const rafId1 = requestAnimationFrame(() => {
        rafId2 = requestAnimationFrame(updatePosition);
      });

      window.addEventListener("scroll", updatePosition, true);
      window.addEventListener("resize", updatePosition);

      return () => {
        cancelAnimationFrame(rafId1);
        cancelAnimationFrame(rafId2);
        window.removeEventListener("scroll", updatePosition, true);
        window.removeEventListener("resize", updatePosition);
      };
    }
  }, [isOpen]);

  // ESC to close
  useKeydown("Escape", close, isOpen);

  // Click outside to close
  useClickOutside([triggerRef as React.RefObject<HTMLElement>, dropdownRef], close, isOpen);

  // Keyboard navigation (only for simple mode)
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) {
      if (e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setIsOpen(true);
        if (!isCustomMode) {
          setHighlightedIndex(0);
        }
      }
      return;
    }

    // Keyboard navigation only works in simple mode
    if (isCustomMode) {
      if (e.key === "Tab") {
        close();
      }
      return;
    }

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setHighlightedIndex((prev) => {
          const next = prev + 1;
          return next >= options.length ? 0 : next;
        });
        break;
      case "ArrowUp":
        e.preventDefault();
        setHighlightedIndex((prev) => {
          const next = prev - 1;
          return next < 0 ? options.length - 1 : next;
        });
        break;
      case "Enter":
      case " ":
        e.preventDefault();
        if (highlightedIndex >= 0 && options[highlightedIndex]) {
          const option = options[highlightedIndex];
          if (!option.disabled) {
            handleSelect(option.value);
          }
        }
        break;
      case "Tab":
        close();
        break;
    }
  };

  const rootClassNames = [
    classes.root,
    classes.sizes[size],
    isOpen ? classes.states.open : "",
    error ? classes.states.error : "",
    disabled ? classes.states.disabled : "",
    readOnly ? classes.states.readonly : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  // Context value for both modes
  const contextValue = useMemo<TSelectContext>(
    () => ({
      value,
      onSelect: handleSelect,
      highlightedValue,
      onHighlight: handleHighlight,
      selectedIcon,
    }),
    [value, handleSelect, highlightedValue, handleHighlight, selectedIcon],
  );

  return (
    <div className={rootClassNames}>
      {name && <input type="hidden" name={name} value={value ?? ""} />}
      <button
        ref={triggerRef}
        type="button"
        className={classes.trigger}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={isOpen ? selectId : undefined}
        aria-invalid={error || undefined}
        onClick={toggle}
        onKeyDown={handleKeyDown}
      >
        <span className={displayLabel ? classes.value : `${classes.value} ${classes.placeholder}`}>
          {displayLabel || placeholder}
        </span>
        {dropdownIcon && <span className={classes.icon}>{dropdownIcon}</span>}
      </button>

      {isOpen && (
        <Portal>
          <div
            ref={dropdownRef}
            id={selectId}
            role="listbox"
            className={classes.dropdown}
            style={{
              top: dropdownPosition.top,
              left: dropdownPosition.left,
              width: triggerRef.current?.offsetWidth,
              maxHeight: typeof maxHeight === "number" ? `${maxHeight}px` : maxHeight,
            }}
          >
            <SelectContext.Provider value={contextValue}>
              {isCustomMode
                ? children
                : options.map((option) => (
                    <SelectOption key={option.value} value={option.value} disabled={option.disabled}>
                      {option.label}
                    </SelectOption>
                  ))}
            </SelectContext.Provider>
          </div>
        </Portal>
      )}
    </div>
  );
}

Select.displayName = COMPONENT_NAMES.Select;
Select.Option = SelectOption;
