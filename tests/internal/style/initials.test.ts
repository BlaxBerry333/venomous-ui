import { describe, expect, it } from 'vitest';
import { getInitials } from '@internal/style';

describe('getInitials', () => {
  it.each([
    ['Ada Lovelace', 'AL'],
    ['ada', 'A'],
    ['  grace   brewster  hopper ', 'GH'],
    ['', ''],
    ['   ', ''],
    ['陈 家旭', '陈家'],
  ])('%j → %j', (name, expected) => {
    expect(getInitials(name)).toBe(expected);
  });
});
