import { commonJa } from './common.ja';
import { componentsJa } from './components.ja';
import type { Schema } from './index';
import type { en } from './translations.en';

export const ja = {
  ...commonJa,
  ...componentsJa,
} as const satisfies Schema<typeof en>;
