import type { TextareaHTMLAttributes } from "react";

import type { TTextareaBaseProps } from "@/core/types";

export interface TTextareaProps extends TTextareaBaseProps, Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "size"> {}
