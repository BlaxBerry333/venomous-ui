import { act, fireEvent, render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { TabList, TabPanel, Tabs, TabTitle, type TabsProps } from '@packages/react/Tabs';

function Basic(props: Partial<TabsProps> & { disabledB?: boolean; keepMounted?: boolean }) {
  const { disabledB = false, keepMounted = false, ...rest } = props;
  return (
    <Tabs {...rest}>
      <TabList aria-label="Sections" className="list-x">
        <TabTitle value="a">A</TabTitle>
        <TabTitle value="b" disabled={disabledB}>
          B
        </TabTitle>
        <TabTitle value="c">C</TabTitle>
      </TabList>
      <TabPanel value="a">panel a</TabPanel>
      <TabPanel value="b">panel b</TabPanel>
      <TabPanel value="c" keepMounted={keepMounted} data-testid="panel-c">
        panel c
      </TabPanel>
    </Tabs>
  );
}

const tab = (name: string) => screen.getByRole('tab', { name });

afterEach(() => {
  vi.restoreAllMocks();
});

describe('Tabs - 结构与 ARIA', () => {
  it('tablist 只包 tab；tab 与 panel 互相关联；类名', () => {
    render(<Basic defaultValue="a" className="root-x" />);
    const list = screen.getByRole('tablist', { name: 'Sections' });
    expect(list.className).toBe('venomous--Tabs__list list-x');
    expect(list.parentElement!.className).toBe('venomous--Tabs root-x');
    expect(list.querySelectorAll('[role=tab]')).toHaveLength(3);
    expect(list.querySelector('[role=tabpanel]')).toBeNull();

    const panel = screen.getByRole('tabpanel');
    expect(tab('A').getAttribute('aria-selected')).toBe('true');
    expect(tab('A').getAttribute('aria-controls')).toBe(panel.id);
    expect(panel.getAttribute('aria-labelledby')).toBe(tab('A').id);
    expect(tab('A').className).toBe('venomous--Tabs__title');
    expect(panel.className).toBe('venomous--Tabs__panel');
  });

  it('roving tabindex：只有选中项可被 Tab 键聚焦', () => {
    render(<Basic defaultValue="b" />);
    expect(tab('A').tabIndex).toBe(-1);
    expect(tab('B').tabIndex).toBe(0);
  });
});

describe('Tabs - 选中', () => {
  it('非受控：点击切换', () => {
    render(<Basic defaultValue="a" />);
    fireEvent.click(tab('B'));
    expect(screen.getByRole('tabpanel').textContent).toBe('panel b');
  });

  it('没给 defaultValue：挂载后选中第一个未禁用的 tab', () => {
    render(
      <Tabs>
        <TabList>
          <TabTitle value="x" disabled>
            X
          </TabTitle>
          <TabTitle value="y">Y</TabTitle>
        </TabList>
        <TabPanel value="x">panel x</TabPanel>
        <TabPanel value="y">panel y</TabPanel>
      </Tabs>,
    );
    expect(tab('Y').getAttribute('aria-selected')).toBe('true');
    expect(screen.getByRole('tabpanel').textContent).toBe('panel y');
  });

  it('全部禁用：不选中任何项', () => {
    render(
      <Tabs>
        <TabList>
          <TabTitle value="x" disabled>
            X
          </TabTitle>
        </TabList>
        <TabPanel value="x">panel x</TabPanel>
      </Tabs>,
    );
    expect(screen.queryByRole('tabpanel')).toBeNull();
  });

  it('受控：只通知，等外部回传', () => {
    const onValueChange = vi.fn();
    const { rerender } = render(<Basic value="a" onValueChange={onValueChange} />);
    fireEvent.click(tab('C'));
    expect(onValueChange).toHaveBeenCalledWith('c');
    expect(screen.getByRole('tabpanel').textContent).toBe('panel a');
    rerender(<Basic value="c" onValueChange={onValueChange} />);
    expect(screen.getByRole('tabpanel').textContent).toBe('panel c');
  });

  it('方向键切换并跳过禁用项；activationMode / loop 透传', () => {
    render(<Basic defaultValue="a" disabledB loop={false} activationMode="automatic" />);
    act(() => tab('A').focus());
    fireEvent.keyDown(tab('A'), { key: 'ArrowRight' });
    expect(document.activeElement).toBe(tab('C'));
    expect(tab('C').getAttribute('aria-selected')).toBe('true');
    fireEvent.keyDown(tab('C'), { key: 'ArrowRight' });
    expect(document.activeElement).toBe(tab('C'));
  });

  it('disabled：原生 disabled + aria-disabled', () => {
    render(<Basic defaultValue="a" disabledB />);
    expect((tab('B') as HTMLButtonElement).disabled).toBe(true);
    expect(tab('B').getAttribute('aria-disabled')).toBe('true');
  });
});

describe('Tabs - 面板挂载', () => {
  it('默认未激活面板不在 DOM；keepMounted 时保留并 hidden', () => {
    const { rerender } = render(<Basic defaultValue="a" />);
    expect(screen.queryByTestId('panel-c')).toBeNull();
    rerender(<Basic defaultValue="a" keepMounted />);
    expect((screen.getByTestId('panel-c') as HTMLElement).hidden).toBe(true);
  });
});

describe('Tabs - ref 与用法错误', () => {
  it('ref 指向各自的 DOM', () => {
    const root = createRef<HTMLDivElement>();
    const list = createRef<HTMLDivElement>();
    const title = createRef<HTMLButtonElement>();
    const panel = createRef<HTMLDivElement>();
    render(
      <Tabs ref={root} defaultValue="a">
        <TabList ref={list}>
          <TabTitle ref={title} value="a">
            A
          </TabTitle>
        </TabList>
        <TabPanel ref={panel} value="a">
          a
        </TabPanel>
      </Tabs>,
    );
    expect(root.current!.className).toBe('venomous--Tabs');
    expect(list.current!.getAttribute('role')).toBe('tablist');
    expect(title.current).toBe(tab('A'));
    expect(panel.current).toBe(screen.getByRole('tabpanel'));
  });

  it.each([
    ['TabList', <TabList key="l" />],
    ['TabTitle', <TabTitle key="t" value="a" />],
    ['TabPanel', <TabPanel key="p" value="a" />],
  ])('%s 在 Tabs 外使用：抛错', (name, element) => {
    vi.spyOn(console, 'error').mockImplementation(() => {});
    expect(() => render(element)).toThrow(new RegExp(`<${name}> must be used inside <Tabs>`));
  });
});
