import { Bar } from "./Bar";
import { Circle } from "./Circle";
import { PageLoad } from "./PageLoad";
import { ScrollIndicator } from "./ScrollIndicator";

export const Progress = {
  Bar,
  Circle,
  PageLoad,
  ScrollIndicator,
} as const;

export type * from "./Bar/Bar.types";
export type * from "./Circle/Circle.types";
export type * from "./PageLoad/PageLoad.types";
export type * from "./ScrollIndicator/ScrollIndicator.types";
