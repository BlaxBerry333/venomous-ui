/**
 * | Key | Value   | Usage                     |
 * |:----|:--------|:--------------------------|
 * | xs  | 0px     | Extra small devices       |
 * | sm  | 640px   | Small devices (mobile)    |
 * | md  | 768px   | Medium devices (tablet)   |
 * | lg  | 1024px  | Large devices (desktop)   |
 * | xl  | 1280px  | Extra large devices        |
 */
export const BREAKPOINTS: IBreakpoints = {
  xs: "0px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
};

export type IBreakpoints = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
};
