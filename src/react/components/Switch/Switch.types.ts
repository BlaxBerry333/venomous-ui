import type { InputHTMLAttributes } from "react";

import type { TSwitchBaseProps } from "@/core/types";

export interface TSwitchProps
  extends TSwitchBaseProps, Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "checked"> {
  /** Change handler */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
