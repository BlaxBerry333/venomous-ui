import { commonZh } from './common.zh';
import { componentsZh } from './components.zh';
import type { Schema } from './index';
import type { en } from './translations.en';

export const zh = {
  ...commonZh,
  ...componentsZh,
} as const satisfies Schema<typeof en>;
