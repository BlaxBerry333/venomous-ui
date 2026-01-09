"use client";

import React from "react";

/**
 * FormControl context value
 */
export interface FormControlContextValue {
  /**
   * ID for helper/error text, used for aria-describedby
   */
  helperTextId?: string;

  /**
   * Whether the form control has an error
   */
  error?: boolean;
}

/**
 * FormControl context
 * Provides accessibility attributes to child form fields
 */
export const FormControlContext = React.createContext<FormControlContextValue | null>(null);

/**
 * Hook to access FormControl context
 * Returns null when used outside of FormControl
 */
export const useFormControlContext = (): FormControlContextValue | null => {
  return React.useContext(FormControlContext);
};
