/**
 * | Key    | Value                    | Usage                   |
 * |:-------|:-------------------------|:------------------------|
 * | fast   | all 100ms ease-out       | Quick interactions      |
 * | normal | all 200ms ease-in-out    | Normal animations       |
 * | slow   | all 300ms ease-in-out    | Emphasized animations   |
 */
export const TRANSITIONS: ITransitions = {
  fast: "all 100ms ease-out",
  normal: "all 200ms ease-in-out",
  slow: "all 300ms ease-in-out",
};

export type ITransitions = {
  /** Quick interactions (100ms) */
  fast: string;
  /** Normal animations (200ms) */
  normal: string;
  /** Emphasized animations (300ms) */
  slow: string;
};
