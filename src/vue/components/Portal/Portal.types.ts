import type { TPortalBaseProps } from "@/core/types";

export interface TPortalProps extends TPortalBaseProps {
  /** Target selector or element */
  to?: string | Element;
}
