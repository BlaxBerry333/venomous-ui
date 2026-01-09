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
declare function useFormFieldFocus<T extends HTMLElement = HTMLInputElement>({ onFocus, onBlur, }?: UseFormFieldFocusOptions<T>): UseFormFieldFocusReturn<T>;
export default useFormFieldFocus;
//# sourceMappingURL=index.d.ts.map