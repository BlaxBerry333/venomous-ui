import type { TSkeletonBaseProps } from "@/core/types";
import type { HTMLAttributes } from "react";

export interface TSkeletonProps
  extends TSkeletonBaseProps, Omit<HTMLAttributes<HTMLSpanElement>, keyof TSkeletonBaseProps> {}
