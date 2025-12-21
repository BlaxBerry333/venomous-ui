import React from "react";

export interface UseControlledStateOptions<T> {
  /** Controlled value from props */
  value?: T;
  /** Default value for uncontrolled mode */
  defaultValue: T;
  /** Callback when value changes */
  onChange?: (value: T) => void;
}

export interface UseControlledStateReturn<T> {
  /** Current value (either controlled or internal) */
  currentValue: T;
  /** Whether the component is in controlled mode */
  isControlled: boolean;
  /** Function to update the value */
  setValue: (value: T) => void;
}

/**
 * Hook for managing controlled/uncontrolled component state
 * Provides a unified API for components that support both modes
 */
function useControlledState<T>({
  value,
  defaultValue,
  onChange,
}: UseControlledStateOptions<T>): UseControlledStateReturn<T> {
  const [internalValue, setInternalValue] = React.useState<T>(defaultValue);
  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : internalValue;

  const setValue = React.useCallback(
    (newValue: T) => {
      if (!isControlled) {
        setInternalValue(newValue);
      }
      onChange?.(newValue);
    },
    [isControlled, onChange],
  );

  return { currentValue, isControlled, setValue };
}

export default useControlledState;
