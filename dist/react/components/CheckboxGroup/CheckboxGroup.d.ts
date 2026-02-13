import type { TCheckboxGroupProps } from "./CheckboxGroup.types";
/**
 * CheckboxGroup component for React
 *
 * Renders a group of checkboxes from an options array
 *
 * @example
 * ```tsx
 * <CheckboxGroup
 *   options={[
 *     { value: "apple", label: "Apple" },
 *     { value: "banana", label: "Banana" },
 *   ]}
 *   value={selected}
 *   onChange={(value) => setSelected(value)}
 * />
 * ```
 */
export declare function CheckboxGroup({ options, value, orientation, size, disabled, checkedIcon, uncheckedIcon, onChange, className, }: TCheckboxGroupProps): import("react/jsx-runtime").JSX.Element;
export declare namespace CheckboxGroup {
    var displayName: "VenomousUI.CheckboxGroup";
}
//# sourceMappingURL=CheckboxGroup.d.ts.map