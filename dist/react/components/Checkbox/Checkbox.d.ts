import type { TCheckboxProps } from "./Checkbox.types";
/**
 * Checkbox component for React
 *
 * Supports two modes:
 * - Native mode (default): Uses browser's native checkbox
 * - Custom mode: Uses custom icons when checkedIcon/uncheckedIcon are provided
 *
 * @example
 * ```tsx
 * // Native mode
 * <Checkbox label="Accept terms" />
 *
 * // Custom mode with icons
 * <Checkbox
 *   label="Accept terms"
 *   checkedIcon={<Icon icon="mdi:checkbox-marked" />}
 *   uncheckedIcon={<Icon icon="mdi:checkbox-blank-outline" />}
 * />
 * ```
 */
export declare const Checkbox: import("react").ForwardRefExoticComponent<TCheckboxProps & import("react").RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=Checkbox.d.ts.map