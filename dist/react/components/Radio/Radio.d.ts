import type { TRadioProps } from "./Radio.types";
/**
 * Radio component for React
 *
 * Supports two modes:
 * - Native mode (default): Uses browser's native radio
 * - Custom mode: Uses custom icons when checkedIcon/uncheckedIcon are provided
 *
 * @example
 * ```tsx
 * // Native mode
 * <Radio name="option" value="a" label="Option A" />
 *
 * // Custom mode with icons
 * <Radio
 *   name="option"
 *   value="a"
 *   label="Option A"
 *   checkedIcon={<Icon icon="mdi:radiobox-marked" />}
 *   uncheckedIcon={<Icon icon="mdi:radiobox-blank" />}
 * />
 * ```
 */
export declare const Radio: import("react").ForwardRefExoticComponent<TRadioProps & import("react").RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=Radio.d.ts.map