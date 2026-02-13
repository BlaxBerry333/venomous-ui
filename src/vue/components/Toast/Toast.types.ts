import type { VNode } from "vue";

import type { TToasterBaseProps, TToastType } from "@/core/types";

/** Icon configuration for toast types and close button */
export type TToastIcons = Partial<Record<TToastType, () => VNode>> & {
  /** Close button icon */
  close?: () => VNode;
};

export interface TToasterProps extends TToasterBaseProps {
  /** Custom icons for each toast type and close button. No icons shown by default. */
  icons?: TToastIcons;
}
