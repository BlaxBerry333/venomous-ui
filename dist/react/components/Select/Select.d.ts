import type { TSelectProps } from "./Select.types";
import { SelectOption } from "./SelectOption";
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
export declare function Select({ name, options, value, placeholder, size, disabled, readOnly, error, maxHeight, dropdownIcon, selectedIcon, onChange, className, children, }: TSelectProps): import("react/jsx-runtime").JSX.Element;
export declare namespace Select {
    var displayName: "VenomousUI.Select";
    var Option: typeof SelectOption;
}
//# sourceMappingURL=Select.d.ts.map