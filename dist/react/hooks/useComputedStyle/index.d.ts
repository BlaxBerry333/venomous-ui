import React from "react";
import type { ITheme } from "../../../core/theme";
/**
 * Hook to compute style from StyledStyleProp
 *
 * Resolves style prop that can be either a static object or a theme callback function.
 * This hook is used internally by all Styled components.
 *
 * @param style - Style prop (object or theme callback)
 * @returns Computed CSSProperties object
 *
 * @example
 * ```tsx
 * const ButtonStyled = ({ style, ...props }) => {
 *   const computedStyle = useComputedStyle(style);
 *   return <Button style={computedStyle} {...props} />;
 * };
 * ```
 */
export default function useComputedStyle<T = React.CSSProperties>(style?: T | ((theme: ITheme) => T)): T | undefined;
//# sourceMappingURL=index.d.ts.map