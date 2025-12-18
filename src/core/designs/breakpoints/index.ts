/**
 * | Key | Min     | Max     | Usage                     |
 * |:----|:--------|:--------|:--------------------------|
 * | xs  | 0px     | 639px   | Extra small devices       |
 * | sm  | 640px   | 767px   | Small devices (mobile)    |
 * | md  | 768px   | 1023px  | Medium devices (tablet)   |
 * | lg  | 1024px  | 1279px  | Large devices (desktop)   |
 * | xl  | 1280px  | 1536px  | Extra large devices       |
 */
export const BREAKPOINTS: IBreakpoints = {
  xs: { min: "0px", max: "639px" },
  sm: { min: "640px", max: "767px" },
  md: { min: "768px", max: "1023px" },
  lg: { min: "1024px", max: "1279px" },
  xl: { min: "1280px", max: "1536px" },
};

export type IBreakpointValue = {
  /** Range start - use for min-width media queries */
  min: string;
  /** Range end - use for max-width constraints */
  max: string;
};

export type IBreakpoints = {
  xs: IBreakpointValue;
  sm: IBreakpointValue;
  md: IBreakpointValue;
  lg: IBreakpointValue;
  xl: IBreakpointValue;
};
