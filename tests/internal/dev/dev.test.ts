import { afterEach, describe, expect, it, vi } from 'vitest';
import { devWarn } from '@internal/dev';

afterEach(() => {
  vi.unstubAllEnvs();
  vi.restoreAllMocks();
});

describe('devWarn', () => {
  it('非生产模式输出带组件名前缀的警告', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    devWarn('Dialog', 'hello');
    expect(warn).toHaveBeenCalledWith('[venomous-ui Dialog] hello');
  });

  it('生产模式静默', () => {
    vi.stubEnv('NODE_ENV', 'production');
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    devWarn('Dialog', 'hello');
    expect(warn).not.toHaveBeenCalled();
  });
});
