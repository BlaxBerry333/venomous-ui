import { describe, expect, it } from 'vitest';

import { COLORS } from '@packages/utils/tokens/colors';
import { FONT } from '@packages/utils/tokens/font';
import { MOTION } from '@packages/utils/tokens/motion';
import { RADIUS } from '@packages/utils/tokens/radius';
import { SHADOW } from '@packages/utils/tokens/shadow';
import { Z_INDEX } from '@packages/utils/tokens/z-index';

const VAR_NAME = /^--venomous-[a-z0-9-]+$/;

const TABLES = {
  COLORS,
  FONT,
  MOTION,
  RADIUS,
  SHADOW,
  Z_INDEX,
} as const;

describe.each(Object.entries(TABLES))('token 表 %s', (name, table) => {
  it('导出非空对象', () => {
    expect(Object.keys(table).length, name).toBeGreaterThan(0);
  });

  it('每个 value 都形如 --venomous-*', () => {
    for (const [key, value] of Object.entries(table)) {
      expect(value, `${name}.${key}`).toMatch(VAR_NAME);
    }
  });

  it('value 互不重复', () => {
    const values = Object.values(table);
    expect(new Set(values).size).toBe(values.length);
  });
});
