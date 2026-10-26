import { describe, expect, it } from 'vitest';

import {
  computeFloatingPosition,
  floatingPlacementToPositionArea,
  joinFloatingPlacement,
  parseFloatingPlacement,
  type FloatingComputeInput,
} from '@internal/dom/floating';

function makeRect(over: Partial<DOMRect>): DOMRect {
  const r = {
    x: 0,
    y: 0,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: 0,
    height: 0,
    toJSON: () => ({}),
    ...over,
  } as DOMRect;
  return r;
}

function baseInput(over: Partial<FloatingComputeInput> = {}): FloatingComputeInput {
  return {
    anchorRect: makeRect({ top: 100, bottom: 120, left: 100, right: 200, width: 100, height: 20 }),
    contentWidth: 80,
    contentHeight: 40,
    viewportWidth: 1000,
    viewportHeight: 800,
    placement: 'bottom',
    offset: 8,
    collisionPadding: 8,
    flip: true,
    shift: true,
    ...over,
  };
}

describe('parseFloatingPlacement / joinFloatingPlacement', () => {
  it('parse 无后缀视为 center', () => {
    expect(parseFloatingPlacement('top')).toEqual({ side: 'top', align: 'center' });
  });

  it('parse start / end 后缀', () => {
    expect(parseFloatingPlacement('bottom-start')).toEqual({ side: 'bottom', align: 'start' });
    expect(parseFloatingPlacement('left-end')).toEqual({ side: 'left', align: 'end' });
  });

  it('join center 省略后缀', () => {
    expect(joinFloatingPlacement('top', 'center')).toBe('top');
  });

  it('join start / end 保留后缀', () => {
    expect(joinFloatingPlacement('right', 'start')).toBe('right-start');
    expect(joinFloatingPlacement('bottom', 'end')).toBe('bottom-end');
  });
});

describe('computeFloatingPosition', () => {
  it('bottom + center 主轴 y=anchor.bottom+offset、副轴居中', () => {
    const { x, y, resolvedPlacement } = computeFloatingPosition(baseInput({ placement: 'bottom' }));
    expect(y).toBe(120 + 8);
    expect(x).toBe(100 + (100 - 80) / 2);
    expect(resolvedPlacement).toBe('bottom');
  });

  it('bottom-start 副轴贴左', () => {
    const { x } = computeFloatingPosition(baseInput({ placement: 'bottom-start' }));
    expect(x).toBe(100);
  });

  it('bottom-end 副轴贴右', () => {
    const { x } = computeFloatingPosition(baseInput({ placement: 'bottom-end' }));
    expect(x).toBe(200 - 80);
  });

  it('top 主轴 y=anchor.top-content-offset', () => {
    const { y, resolvedPlacement } = computeFloatingPosition(
      baseInput({ placement: 'top', flip: false }),
    );
    expect(y).toBe(100 - 40 - 8);
    expect(resolvedPlacement).toBe('top');
  });

  it('left + start 主轴 x=anchor.left-content-offset，副轴 y=anchor.top', () => {
    const r = computeFloatingPosition(
      baseInput({
        placement: 'left-start',
        anchorRect: makeRect({
          top: 200,
          bottom: 240,
          left: 400,
          right: 500,
          width: 100,
          height: 40,
        }),
        flip: false,
      }),
    );
    expect(r.x).toBe(400 - 80 - 8);
    expect(r.y).toBe(200);
  });

  it('right + end 主轴 x=anchor.right+offset，副轴 y=anchor.bottom-content', () => {
    const r = computeFloatingPosition(
      baseInput({
        placement: 'right-end',
        anchorRect: makeRect({
          top: 200,
          bottom: 240,
          left: 400,
          right: 500,
          width: 100,
          height: 40,
        }),
        flip: false,
      }),
    );
    expect(r.x).toBe(500 + 8);
    expect(r.y).toBe(240 - 40);
  });

  it('left + center 副轴 y 居中', () => {
    const r = computeFloatingPosition(
      baseInput({
        placement: 'left',
        anchorRect: makeRect({
          top: 200,
          bottom: 240,
          left: 400,
          right: 500,
          width: 100,
          height: 40,
        }),
        flip: false,
      }),
    );
    expect(r.y).toBe(200 + (40 - 40) / 2);
  });

  it('flip：bottom 空间不足且 top 更宽裕 → 翻到 top', () => {
    const r = computeFloatingPosition(
      baseInput({
        placement: 'bottom',
        anchorRect: makeRect({
          top: 700,
          bottom: 760,
          left: 100,
          right: 200,
          width: 100,
          height: 60,
        }),
        viewportHeight: 780,
        contentHeight: 100,
      }),
    );
    expect(r.resolvedPlacement.startsWith('top')).toBe(true);
    expect(r.y).toBe(700 - 100 - 8);
  });

  it('flip：right 空间不足且 left 更宽裕 → 翻到 left', () => {
    const r = computeFloatingPosition(
      baseInput({
        placement: 'right',
        anchorRect: makeRect({
          top: 100,
          bottom: 140,
          left: 800,
          right: 900,
          width: 100,
          height: 40,
        }),
        viewportWidth: 920,
        contentWidth: 200,
      }),
    );
    expect(r.resolvedPlacement.startsWith('left')).toBe(true);
  });

  it('flip：双侧都不够时不翻面（对侧空间不更大）', () => {
    const r = computeFloatingPosition(
      baseInput({
        placement: 'bottom',
        anchorRect: makeRect({
          top: 380,
          bottom: 420,
          left: 100,
          right: 200,
          width: 100,
          height: 40,
        }),
        viewportHeight: 800,
        contentHeight: 1000,
      }),
    );
    expect(r.resolvedPlacement.startsWith('bottom')).toBe(true);
  });

  it('shift：bottom 副轴 x 超左边界 → clamp 到 minX', () => {
    const r = computeFloatingPosition(
      baseInput({
        placement: 'bottom-end',
        anchorRect: makeRect({
          top: 100,
          bottom: 120,
          left: 0,
          right: 20,
          width: 20,
          height: 20,
        }),
        contentWidth: 80,
        collisionPadding: 8,
      }),
    );
    expect(r.x).toBe(8);
  });

  it('shift：bottom 副轴 x 超右边界 → clamp 到 maxX', () => {
    const r = computeFloatingPosition(
      baseInput({
        placement: 'bottom-start',
        anchorRect: makeRect({
          top: 100,
          bottom: 120,
          left: 980,
          right: 999,
          width: 19,
          height: 20,
        }),
        viewportWidth: 1000,
        contentWidth: 80,
        collisionPadding: 8,
      }),
    );
    expect(r.x).toBe(1000 - 80 - 8);
  });

  it('shift：left/right 副轴 y 超上边界 → clamp 到 minY', () => {
    const r = computeFloatingPosition(
      baseInput({
        placement: 'right-end',
        anchorRect: makeRect({
          top: 0,
          bottom: 20,
          left: 100,
          right: 200,
          width: 100,
          height: 20,
        }),
        contentHeight: 60,
        collisionPadding: 8,
        flip: false,
      }),
    );
    expect(r.y).toBe(8);
  });

  it('shift：left/right 副轴 y 超下边界 → clamp 到 maxY', () => {
    const r = computeFloatingPosition(
      baseInput({
        placement: 'right-start',
        anchorRect: makeRect({
          top: 780,
          bottom: 800,
          left: 100,
          right: 200,
          width: 100,
          height: 20,
        }),
        viewportHeight: 800,
        contentHeight: 60,
        collisionPadding: 8,
        flip: false,
      }),
    );
    expect(r.y).toBe(800 - 60 - 8);
  });

  it('shift：content 比可用空间还宽时跳过 clamp（maxX<minX）', () => {
    const r = computeFloatingPosition(
      baseInput({
        placement: 'bottom',
        anchorRect: makeRect({
          top: 100,
          bottom: 120,
          left: 100,
          right: 200,
          width: 100,
          height: 20,
        }),
        viewportWidth: 50,
        contentWidth: 80,
        collisionPadding: 8,
        flip: false,
      }),
    );
    // x = 100 + (100-80)/2 = 110，未被 clamp
    expect(r.x).toBe(110);
  });

  it('shift：left/right content 比可用高还高时跳过 clamp（maxY<minY）', () => {
    const r = computeFloatingPosition(
      baseInput({
        placement: 'right',
        anchorRect: makeRect({
          top: 100,
          bottom: 140,
          left: 100,
          right: 200,
          width: 100,
          height: 40,
        }),
        viewportHeight: 50,
        contentHeight: 80,
        collisionPadding: 8,
        flip: false,
      }),
    );
    // y = 100 + (40-80)/2 = 80，未被 clamp
    expect(r.y).toBe(80);
  });

  it('shift=false：超界不 clamp', () => {
    const r = computeFloatingPosition(
      baseInput({
        placement: 'bottom-end',
        anchorRect: makeRect({
          top: 100,
          bottom: 120,
          left: 0,
          right: 20,
          width: 20,
          height: 20,
        }),
        contentWidth: 80,
        shift: false,
      }),
    );
    expect(r.x).toBe(20 - 80);
  });
});

describe('floatingPlacementToPositionArea', () => {
  it('top / bottom + center → side', () => {
    expect(floatingPlacementToPositionArea('top')).toBe('top');
    expect(floatingPlacementToPositionArea('bottom')).toBe('bottom');
  });

  it('top / bottom + start/end → span-right / span-left', () => {
    expect(floatingPlacementToPositionArea('top-start')).toBe('top span-right');
    expect(floatingPlacementToPositionArea('top-end')).toBe('top span-left');
    expect(floatingPlacementToPositionArea('bottom-start')).toBe('bottom span-right');
    expect(floatingPlacementToPositionArea('bottom-end')).toBe('bottom span-left');
  });

  it('left / right + center → side', () => {
    expect(floatingPlacementToPositionArea('left')).toBe('left');
    expect(floatingPlacementToPositionArea('right')).toBe('right');
  });

  it('left / right + start/end → span-bottom / span-top', () => {
    expect(floatingPlacementToPositionArea('left-start')).toBe('left span-bottom');
    expect(floatingPlacementToPositionArea('left-end')).toBe('left span-top');
    expect(floatingPlacementToPositionArea('right-start')).toBe('right span-bottom');
    expect(floatingPlacementToPositionArea('right-end')).toBe('right span-top');
  });
});
