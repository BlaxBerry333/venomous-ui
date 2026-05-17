import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { getAnchorRect, getViewportSize, isEventInsideNodes } from '@packages/utils/helpers/dom';

afterEach(() => {
  vi.unstubAllGlobals();
});

describe('getViewportSize', () => {
  it('SSR（window undefined）返回零尺寸', () => {
    vi.stubGlobal('window', undefined);
    expect(getViewportSize()).toEqual({ width: 0, height: 0 });
  });

  it('读取 window.innerWidth / innerHeight', () => {
    const original = { w: window.innerWidth, h: window.innerHeight };
    Object.defineProperty(window, 'innerWidth', { value: 1280, configurable: true });
    Object.defineProperty(window, 'innerHeight', { value: 720, configurable: true });
    expect(getViewportSize()).toEqual({ width: 1280, height: 720 });
    Object.defineProperty(window, 'innerWidth', { value: original.w, configurable: true });
    Object.defineProperty(window, 'innerHeight', { value: original.h, configurable: true });
  });

  it('innerWidth/innerHeight 为 0 时回退到 documentElement.clientWidth/Height', () => {
    Object.defineProperty(window, 'innerWidth', { value: 0, configurable: true });
    Object.defineProperty(window, 'innerHeight', { value: 0, configurable: true });
    Object.defineProperty(document.documentElement, 'clientWidth', {
      value: 800,
      configurable: true,
    });
    Object.defineProperty(document.documentElement, 'clientHeight', {
      value: 600,
      configurable: true,
    });
    expect(getViewportSize()).toEqual({ width: 800, height: 600 });
  });
});

describe('getAnchorRect', () => {
  it('null / undefined 返回 null', () => {
    expect(getAnchorRect(null)).toBeNull();
    expect(getAnchorRect(undefined)).toBeNull();
  });

  it('真实 HTMLElement 返回其 rect', () => {
    const el = document.createElement('div');
    document.body.appendChild(el);
    const rect = getAnchorRect(el);
    expect(rect).not.toBeNull();
    expect(typeof rect!.left).toBe('number');
    document.body.removeChild(el);
  });

  it('虚拟锚点（仅 getBoundingClientRect）也工作', () => {
    const virtual = {
      getBoundingClientRect: () => ({ x: 1, y: 2, width: 3, height: 4 }) as DOMRect,
    };
    expect(getAnchorRect(virtual)).toEqual({ x: 1, y: 2, width: 3, height: 4 });
  });
});

describe('isEventInsideNodes', () => {
  let outer: HTMLElement;
  let inner: HTMLElement;
  let outside: HTMLElement;

  beforeEach(() => {
    outer = document.createElement('div');
    inner = document.createElement('span');
    outside = document.createElement('p');
    outer.appendChild(inner);
    document.body.appendChild(outer);
    document.body.appendChild(outside);
  });

  afterEach(() => {
    document.body.removeChild(outer);
    document.body.removeChild(outside);
  });

  it('composedPath 命中节点 → true', () => {
    const event = {
      composedPath: () => [inner, outer, document.body],
      target: inner,
    } as unknown as PointerEvent;
    expect(isEventInsideNodes(event, [outer, null])).toBe(true);
  });

  it('composedPath 不含目标节点 → false（含 null 过滤）', () => {
    const event = {
      composedPath: () => [outside, document.body],
      target: outside,
    } as unknown as PointerEvent;
    expect(isEventInsideNodes(event, [outer, null])).toBe(false);
  });

  it('composedPath 为空，退化到 contains 命中', () => {
    const event = {
      composedPath: () => [],
      target: inner,
    } as unknown as PointerEvent;
    expect(isEventInsideNodes(event, [outer, null])).toBe(true);
  });

  it('composedPath 为空，contains 不命中 → false', () => {
    const event = {
      composedPath: () => [],
      target: outside,
    } as unknown as PointerEvent;
    expect(isEventInsideNodes(event, [outer])).toBe(false);
  });

  it('composedPath 不是函数，target 为 null → false', () => {
    const event = { target: null } as unknown as PointerEvent;
    expect(isEventInsideNodes(event, [outer])).toBe(false);
  });

  it('composedPath 不是函数，target 命中 → true', () => {
    const event = { target: inner } as unknown as PointerEvent;
    expect(isEventInsideNodes(event, [outer])).toBe(true);
  });
});
