import type { TRadioGroupProps } from "./RadioGroup.types";
/**
 * RadioGroup component for React
 *
 * Renders a group of radio buttons from an options array
 *
 * @example
 * ```tsx
 * <RadioGroup
 *   name="fruit"
 *   options={[
 *     { value: "apple", label: "Apple" },
 *     { value: "banana", label: "Banana" },
 *   ]}
 *   value={selected}
 *   onChange={(value) => setSelected(value)}
 * />
 * ```
 */
export declare function RadioGroup({ options, value, name, orientation, size, disabled, checkedIcon, uncheckedIcon, onChange, className, }: TRadioGroupProps): import("react/jsx-runtime").JSX.Element;
export declare namespace RadioGroup {
    var displayName: "VenomousUI.RadioGroup";
}
//# sourceMappingURL=RadioGroup.d.ts.map