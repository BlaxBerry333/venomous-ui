import { fireEvent, render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { Checkbox, CheckboxGroup } from '@packages/react/Checkbox';
import { FormField } from '@packages/react/FormField';

afterEach(() => {
  vi.restoreAllMocks();
});

describe('Checkbox', () => {
  it('原生 checkbox，文字作为可访问名称；点击切换', () => {
    const ref = createRef<HTMLInputElement>();
    render(
      <Checkbox ref={ref} className="x">
        Accept
      </Checkbox>,
    );
    const box = screen.getByRole('checkbox', { name: 'Accept' }) as HTMLInputElement;
    expect(ref.current).toBe(box);
    expect(box.closest('label')!.className).toBe('venomous--Checkbox x');
    fireEvent.click(box);
    expect(box.checked).toBe(true);
  });

  it('indeterminate 写到 DOM 属性', () => {
    const { rerender } = render(<Checkbox indeterminate aria-label="all" />);
    const box = screen.getByRole('checkbox') as HTMLInputElement;
    expect(box.indeterminate).toBe(true);
    rerender(<Checkbox aria-label="all" />);
    expect(box.indeterminate).toBe(false);
  });

  it('disabled 标在 label 上；没有 children 时不渲染文字容器', () => {
    const { container } = render(<Checkbox disabled aria-label="a" />);
    expect(container.querySelector('label')!.hasAttribute('data-disabled')).toBe(true);
    expect(container.querySelector('.venomous--Checkbox__label')).toBeNull();
  });

  it('在 FormField 内继承错误状态与说明', () => {
    render(
      <FormField error="Required">
        <Checkbox>Accept</Checkbox>
      </FormField>,
    );
    const box = screen.getByRole('checkbox');
    expect(box.getAttribute('aria-invalid')).toBe('true');
    expect(box.getAttribute('aria-describedby')).toBe(screen.getByText('Required').id);
  });
});

describe('CheckboxGroup', () => {
  const options = (
    <>
      <Checkbox value="a">A</Checkbox>
      <Checkbox value="b">B</Checkbox>
      <Checkbox value="c" disabled>
        C
      </Checkbox>
    </>
  );

  it('非受控：勾选 / 取消更新 value 并通知；组内共用 name', () => {
    const onValueChange = vi.fn();
    const onChange = vi.fn();
    render(
      <CheckboxGroup defaultValue={['a']} name="letters" onValueChange={onValueChange}>
        <Checkbox value="a" onChange={onChange}>
          A
        </Checkbox>
        <Checkbox value="b">B</Checkbox>
      </CheckboxGroup>,
    );
    const a = screen.getByRole('checkbox', { name: 'A' }) as HTMLInputElement;
    const b = screen.getByRole('checkbox', { name: 'B' }) as HTMLInputElement;
    expect(a.checked).toBe(true);
    expect(b.name).toBe('letters');
    fireEvent.click(b);
    expect(onValueChange).toHaveBeenLastCalledWith(['a', 'b']);
    expect(b.checked).toBe(true);
    fireEvent.click(a);
    expect(onValueChange).toHaveBeenLastCalledWith(['b']);
    expect(onChange).toHaveBeenCalled();
  });

  it('受控：只通知；没有 value 的 Checkbox 不受组管理', () => {
    const onValueChange = vi.fn();
    render(
      <CheckboxGroup value={[]} onValueChange={onValueChange}>
        <Checkbox value="a">A</Checkbox>
        <Checkbox>free</Checkbox>
      </CheckboxGroup>,
    );
    fireEvent.click(screen.getByRole('checkbox', { name: 'A' }));
    expect(onValueChange).toHaveBeenCalledWith(['a']);
    expect((screen.getByRole('checkbox', { name: 'A' }) as HTMLInputElement).checked).toBe(false);
    fireEvent.click(screen.getByRole('checkbox', { name: 'free' }));
    expect(onValueChange).toHaveBeenCalledTimes(1);
  });

  it('role=group；禁用整组；单项 disabled 优先；方向', () => {
    render(
      <CheckboxGroup disabled orientation="horizontal" aria-label="letters">
        {options}
      </CheckboxGroup>,
    );
    const group = screen.getByRole('group', { name: 'letters' });
    expect(group.getAttribute('aria-disabled')).toBe('true');
    expect(group.getAttribute('data-orientation')).toBe('horizontal');
    expect((screen.getByRole('checkbox', { name: 'A' }) as HTMLInputElement).disabled).toBe(true);
  });

  it('在 FormField 内：标题经 aria-labelledby 关联，不写 required / aria-invalid', () => {
    render(
      <FormField label="Letters" required error="Pick one">
        <CheckboxGroup>{options}</CheckboxGroup>
      </FormField>,
    );
    const group = screen.getByRole('group', { name: 'Letters' });
    expect(group.hasAttribute('required')).toBe(false);
    expect(group.hasAttribute('aria-invalid')).toBe(false);
  });

  it('defaultValue 与 value 同时给：警告', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    render(
      <CheckboxGroup value={[]} defaultValue={['a']}>
        {options}
      </CheckboxGroup>,
    );
    expect(warn).toHaveBeenCalledWith(expect.stringContaining('defaultValue'));
  });
});
