import React from "react";

export interface UseFormFieldFocusOptions<T extends HTMLElement> {
  onFocus?: (e: React.FocusEvent<T>) => void;
  onBlur?: (e: React.FocusEvent<T>) => void;
}

export interface UseFormFieldFocusReturn<T extends HTMLElement> {
  isFocused: boolean;
  handleFocus: (e: React.FocusEvent<T>) => void;
  handleBlur: (e: React.FocusEvent<T>) => void;
}

/**
 * Hook for managing form field focus state
 * Provides consistent focus/blur handling across form components
 */
function useFormFieldFocus<T extends HTMLElement = HTMLInputElement>({
  onFocus,
  onBlur,
}: UseFormFieldFocusOptions<T> = {}): UseFormFieldFocusReturn<T> {
  const [isFocused, setIsFocused] = React.useState(false);

  const handleFocus = React.useCallback(
    (e: React.FocusEvent<T>) => {
      setIsFocused(true);
      onFocus?.(e);
    },
    [onFocus],
  );

  const handleBlur = React.useCallback(
    (e: React.FocusEvent<T>) => {
      setIsFocused(false);
      onBlur?.(e);
    },
    [onBlur],
  );

  return { isFocused, handleFocus, handleBlur };
}

export default useFormFieldFocus;
