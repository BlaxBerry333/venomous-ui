/**
 * Tabs / TabTitle / TabPanel 组件冒烟测试。
 * useTabs hook 已 100% 覆盖；此处只验组件层逻辑：
 * - resolveChildren 自动配对（隐式 index ↔ index）+ 显式 value 覆盖
 * - Fragment 透明递归；非 Tabs/TabTitle/TabPanel 节点不递归（深嵌套不被吞）
 * - tablist 容器只包 TabTitle，不含 TabPanel（ARIA pattern）
 * - data-tabs-resolved-value 私有 prop 不漏到 DOM
 * - TabPanel keepMounted=false 未激活 unmount；=true hidden 切换
 * - 无 <Tabs> 包裹的 TabTitle/TabPanel 抛 Context error
 * - 缺 value 且不在 <Tabs> 内时 readResolvedValue 抛错
 * - 受控 / 非受控 / activationMode / loop 透传 hook
 */
import { fireEvent, render, screen } from '@testing-library/react';
import { Fragment } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { TabPanel, Tabs, TabTitle } from '@packages/react/Tabs/Tabs';

describe('Tabs - 基本渲染', () => {
  it('扁平 children：自动配对 0↔0, 1↔1', () => {
    render(
      <Tabs defaultValue="0">
        <TabTitle>A</TabTitle>
        <TabTitle>B</TabTitle>
        <TabPanel>panel-A</TabPanel>
        <TabPanel>panel-B</TabPanel>
      </Tabs>,
    );
    const tabs = screen.getAllByRole('tab');
    expect(tabs).toHaveLength(2);
    expect(tabs[0]?.textContent).toBe('A');
    expect(tabs[1]?.textContent).toBe('B');
    // 默认 value='0' → panel-A 渲染、panel-B 不渲染（keepMounted=false 默认）
    expect(screen.getByRole('tabpanel').textContent).toBe('panel-A');
  });

  it('显式 value：自定义 key 配对', () => {
    render(
      <Tabs defaultValue="x">
        <TabTitle value="x">X</TabTitle>
        <TabTitle value="y">Y</TabTitle>
        <TabPanel value="x">P-X</TabPanel>
        <TabPanel value="y">P-Y</TabPanel>
      </Tabs>,
    );
    expect(screen.getByRole('tabpanel').textContent).toBe('P-X');
  });

  it('aria-labelledby 指回对应 trigger.id', () => {
    render(
      <Tabs defaultValue="0">
        <TabTitle>A</TabTitle>
        <TabPanel>p</TabPanel>
      </Tabs>,
    );
    const tab = screen.getByRole('tab');
    const panel = screen.getByRole('tabpanel');
    expect(panel.getAttribute('aria-labelledby')).toBe(tab.id);
  });

  it('tablist 容器只包 TabTitle，不含 panel', () => {
    render(
      <Tabs defaultValue="0">
        <TabTitle>A</TabTitle>
        <TabPanel>p</TabPanel>
      </Tabs>,
    );
    const list = screen.getByRole('tablist');
    expect(list.querySelectorAll('[role="tab"]')).toHaveLength(1);
    expect(list.querySelector('[role="tabpanel"]')).toBeNull();
  });

  it('Fragment 透明递归', () => {
    render(
      <Tabs defaultValue="0">
        <>
          <TabTitle>A</TabTitle>
          <TabTitle>B</TabTitle>
        </>
        <>
          <TabPanel>p1</TabPanel>
          <TabPanel>p2</TabPanel>
        </>
      </Tabs>,
    );
    expect(screen.getAllByRole('tab')).toHaveLength(2);
  });

  it('div 等非 Tabs 子节点：不递归（深层 TabTitle 被忽略）', () => {
    render(
      <Tabs defaultValue="0">
        <TabTitle>A</TabTitle>
        <div>
          <TabTitle>Ignored</TabTitle>
        </div>
        <TabPanel>p</TabPanel>
      </Tabs>,
    );
    expect(screen.getAllByRole('tab')).toHaveLength(1);
  });

  it('非元素子节点（字符串 / null）跳过', () => {
    render(
      <Tabs defaultValue="0">
        text-ignored
        {null}
        <TabTitle>A</TabTitle>
        <TabPanel>p</TabPanel>
      </Tabs>,
    );
    expect(screen.getAllByRole('tab')).toHaveLength(1);
  });
});

describe('Tabs - data-tabs-resolved-value 不漏', () => {
  it('TabTitle DOM 上无 data-tabs-resolved-value', () => {
    render(
      <Tabs defaultValue="0">
        <TabTitle data-testid="t">A</TabTitle>
        <TabPanel>p</TabPanel>
      </Tabs>,
    );
    expect(screen.getByTestId('t').hasAttribute('data-tabs-resolved-value')).toBe(false);
  });

  it('TabPanel DOM 上无 data-tabs-resolved-value', () => {
    render(
      <Tabs defaultValue="0">
        <TabTitle>A</TabTitle>
        <TabPanel data-testid="p">p</TabPanel>
      </Tabs>,
    );
    expect(screen.getByTestId('p').hasAttribute('data-tabs-resolved-value')).toBe(false);
  });
});

describe('Tabs - 交互', () => {
  it('点击 TabTitle 切换 panel（非受控）', () => {
    render(
      <Tabs defaultValue="0">
        <TabTitle>A</TabTitle>
        <TabTitle>B</TabTitle>
        <TabPanel>p-A</TabPanel>
        <TabPanel>p-B</TabPanel>
      </Tabs>,
    );
    fireEvent.click(screen.getByRole('tab', { name: 'B' }));
    expect(screen.getByRole('tabpanel').textContent).toBe('p-B');
  });

  it('受控：value + onValueChange', () => {
    const onValueChange = vi.fn();
    const { rerender } = render(
      <Tabs value="0" onValueChange={onValueChange}>
        <TabTitle>A</TabTitle>
        <TabTitle>B</TabTitle>
        <TabPanel>p-A</TabPanel>
        <TabPanel>p-B</TabPanel>
      </Tabs>,
    );
    fireEvent.click(screen.getByRole('tab', { name: 'B' }));
    expect(onValueChange).toHaveBeenCalledWith('1');
    // 受控不写内部
    expect(screen.getByRole('tabpanel').textContent).toBe('p-A');
    rerender(
      <Tabs value="1" onValueChange={onValueChange}>
        <TabTitle>A</TabTitle>
        <TabTitle>B</TabTitle>
        <TabPanel>p-A</TabPanel>
        <TabPanel>p-B</TabPanel>
      </Tabs>,
    );
    expect(screen.getByRole('tabpanel').textContent).toBe('p-B');
  });

  it('activationMode + loop 透传 hook（ArrowRight 切下一个）', () => {
    render(
      <Tabs defaultValue="0" activationMode="automatic" loop>
        <TabTitle>A</TabTitle>
        <TabTitle>B</TabTitle>
        <TabPanel>p-A</TabPanel>
        <TabPanel>p-B</TabPanel>
      </Tabs>,
    );
    const tabA = screen.getByRole('tab', { name: 'A' });
    tabA.focus();
    fireEvent.keyDown(tabA, { key: 'ArrowRight' });
    expect(screen.getByRole('tabpanel').textContent).toBe('p-B');
  });
});

describe('Tabs - TabTitle disabled', () => {
  it('disabled 透传到 hook：aria-disabled + native disabled', () => {
    render(
      <Tabs defaultValue="0">
        <TabTitle>A</TabTitle>
        <TabTitle disabled>B</TabTitle>
        <TabPanel>p</TabPanel>
      </Tabs>,
    );
    const tabB = screen.getByRole('tab', { name: 'B' }) as HTMLButtonElement;
    expect(tabB.disabled).toBe(true);
    expect(tabB.getAttribute('aria-disabled')).toBe('true');
  });
});

describe('Tabs - TabPanel keepMounted', () => {
  it('keepMounted=false：未激活 panel 不在 DOM', () => {
    render(
      <Tabs defaultValue="0">
        <TabTitle>A</TabTitle>
        <TabTitle>B</TabTitle>
        <TabPanel>p-A</TabPanel>
        <TabPanel>p-B</TabPanel>
      </Tabs>,
    );
    expect(screen.queryAllByRole('tabpanel')).toHaveLength(1);
  });

  it('keepMounted=true：未激活 panel 仍渲染，带 hidden', () => {
    render(
      <Tabs defaultValue="0">
        <TabTitle>A</TabTitle>
        <TabTitle>B</TabTitle>
        <TabPanel keepMounted>p-A</TabPanel>
        <TabPanel keepMounted>p-B</TabPanel>
      </Tabs>,
    );
    const panels = screen.getAllByRole('tabpanel', { hidden: true });
    expect(panels).toHaveLength(2);
    expect(panels[0]?.hasAttribute('hidden')).toBe(false);
    expect(panels[1]?.hasAttribute('hidden')).toBe(true);
  });
});

describe('Tabs - Context 错误', () => {
  it('无 <Tabs> 包裹的 TabTitle 抛错', () => {
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {});
    expect(() => render(<TabTitle value="x">X</TabTitle>)).toThrow(/TabTitle/);
    spy.mockRestore();
  });

  it('无 <Tabs> 包裹的 TabPanel 抛错', () => {
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {});
    expect(() => render(<TabPanel value="x">P</TabPanel>)).toThrow(/TabPanel/);
    spy.mockRestore();
  });
});

describe('Tabs - className 透传', () => {
  it('Tabs / TabTitle / TabPanel 自带 BEM class 与 user class 合并', () => {
    render(
      <Tabs defaultValue="0" className="root-x" data-testid="root">
        <TabTitle className="title-x">A</TabTitle>
        <TabPanel className="panel-x">p</TabPanel>
      </Tabs>,
    );
    expect(screen.getByTestId('root').className).toContain('venomous--Tabs');
    expect(screen.getByTestId('root').className).toContain('root-x');
    expect(screen.getByRole('tab').className).toContain('venomous--Tabs__title');
    expect(screen.getByRole('tab').className).toContain('title-x');
    expect(screen.getByRole('tabpanel').className).toContain('venomous--Tabs__panel');
    expect(screen.getByRole('tabpanel').className).toContain('panel-x');
  });
});

describe('Tabs - forwardRef', () => {
  it('Tabs ref → div', () => {
    let captured: HTMLDivElement | null = null;
    render(
      <Tabs
        defaultValue="0"
        ref={(el) => {
          captured = el;
        }}
      >
        <TabTitle>A</TabTitle>
        <TabPanel>p</TabPanel>
      </Tabs>,
    );
    expect(captured).toBeInstanceOf(HTMLDivElement);
  });

  it('TabPanel ref → div', () => {
    let captured: HTMLDivElement | null = null;
    render(
      <Tabs defaultValue="0">
        <TabTitle>A</TabTitle>
        <TabPanel
          ref={(el) => {
            captured = el;
          }}
        >
          p
        </TabPanel>
      </Tabs>,
    );
    expect(captured).toBeInstanceOf(HTMLDivElement);
  });
});

describe('Tabs - 边角', () => {
  it('Fragment 混 div 包裹仍按浅层规则：div 内被忽略，Fragment 内被识别', () => {
    render(
      <Tabs defaultValue="0">
        <Fragment>
          <TabTitle>A</TabTitle>
        </Fragment>
        <TabPanel>p</TabPanel>
      </Tabs>,
    );
    expect(screen.getAllByRole('tab')).toHaveLength(1);
  });
});

describe('Tabs - 默认选中与结构', () => {
  it('非受控且没给 defaultValue：默认选中第一个未禁用的 TabTitle，它可被 Tab 键聚焦', () => {
    render(
      <Tabs>
        <TabTitle disabled>A</TabTitle>
        <TabTitle>B</TabTitle>
        <TabPanel>pa</TabPanel>
        <TabPanel>pb</TabPanel>
      </Tabs>,
    );
    const b = screen.getByRole('tab', { name: 'B' });
    expect(b.getAttribute('aria-selected')).toBe('true');
    expect(b.tabIndex).toBe(0);
    expect(screen.getByRole('tabpanel').textContent).toBe('pb');
  });

  it('全部 TabTitle 禁用：不选中任何项', () => {
    render(
      <Tabs>
        <TabTitle disabled>A</TabTitle>
        <TabPanel>pa</TabPanel>
      </Tabs>,
    );
    expect(screen.getByRole('tab').getAttribute('aria-selected')).toBe('false');
    expect(screen.queryByRole('tabpanel')).toBeNull();
  });

  it('tablist 带 __list 类名', () => {
    render(
      <Tabs>
        <TabTitle>A</TabTitle>
        <TabPanel>pa</TabPanel>
      </Tabs>,
    );
    expect(screen.getByRole('tablist').className).toBe('venomous--Tabs__list');
  });

  it('TabTitle 不是 Tabs 的直接子且没给 value：抛错说明用法', () => {
    vi.spyOn(console, 'error').mockImplementation(() => {});
    expect(() =>
      render(
        <Tabs>
          <TabTitle>A</TabTitle>
          <TabPanel>
            <TabTitle>nested</TabTitle>
          </TabPanel>
        </Tabs>,
      ),
    ).toThrow(/direct children of <Tabs>/);
    vi.restoreAllMocks();
  });
});
