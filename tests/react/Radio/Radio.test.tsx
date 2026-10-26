import { fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { FormField } from '@packages/react/FormField';
import { Radio, RadioGroup } from '@packages/react/Radio';

afterEach(() => {
  vi.restoreAllMocks();
});

const options = (
  <>
    <Radio value="s">Small</Radio>
    <Radio value="m">Medium</Radio>
    <Radio value="l" disabled={false}>
      Large
    </Radio>
  </>
);

describe('Radio', () => {
  it('单独使用：原生 radio', () => {
    const { container } = render(
      <Radio value="x" name="n" className="c" disabled>
        X
      </Radio>,
    );
    const radio = screen.getByRole('radio', { name: 'X' }) as HTMLInputElement;
    expect(radio.name).toBe('n');
    expect(container.querySelector('label')!.className).toBe('venomous--Radio c');
    expect(container.querySelector('label')!.hasAttribute('data-disabled')).toBe(true);
  });

  it('单独使用时点击触发 onChange', () => {
    const onChange = vi.fn();
    render(
      <Radio value="x" onChange={onChange}>
        X
      </Radio>,
    );
    fireEvent.click(screen.getByRole('radio'));
    expect(onChange).toHaveBeenCalled();
  });

  it('无文字时不渲染文字容器', () => {
    const { container } = render(<Radio value="x" aria-label="x" />);
    expect(container.querySelector('.venomous--Radio__label')).toBeNull();
  });
});

describe('RadioGroup', () => {
  it('非受控：选择更新并通知；组内共用自动生成的 name', () => {
    const onValueChange = vi.fn();
    const onChange = vi.fn();
    render(
      <RadioGroup defaultValue="s" onValueChange={onValueChange} aria-label="Size">
        <Radio value="s" onChange={onChange}>
          Small
        </Radio>
        <Radio value="m">Medium</Radio>
      </RadioGroup>,
    );
    const small = screen.getByRole('radio', { name: 'Small' }) as HTMLInputElement;
    const medium = screen.getByRole('radio', { name: 'Medium' }) as HTMLInputElement;
    expect(small.checked).toBe(true);
    expect(small.name).not.toBe('');
    expect(small.name).toBe(medium.name);
    fireEvent.click(medium);
    expect(onValueChange).toHaveBeenCalledWith('m');
    expect(medium.checked).toBe(true);
    fireEvent.click(small);
    expect(onChange).toHaveBeenCalled();
  });

  it('受控：只通知', () => {
    const onValueChange = vi.fn();
    render(
      <RadioGroup value="s" onValueChange={onValueChange} name="size">
        {options}
      </RadioGroup>,
    );
    fireEvent.click(screen.getByRole('radio', { name: 'Medium' }));
    expect(onValueChange).toHaveBeenCalledWith('m');
    expect((screen.getByRole('radio', { name: 'Small' }) as HTMLInputElement).checked).toBe(true);
    expect((screen.getByRole('radio', { name: 'Small' }) as HTMLInputElement).name).toBe('size');
  });

  it('禁用 / 必填整组；单项 disabled 优先；方向', () => {
    render(
      <RadioGroup disabled required orientation="horizontal" aria-label="Size">
        {options}
      </RadioGroup>,
    );
    const group = screen.getByRole('radiogroup', { name: 'Size' });
    expect(group.getAttribute('aria-disabled')).toBe('true');
    expect(group.getAttribute('aria-required')).toBe('true');
    expect(group.getAttribute('data-orientation')).toBe('horizontal');
    expect((screen.getByRole('radio', { name: 'Small' }) as HTMLInputElement).disabled).toBe(true);
    expect((screen.getByRole('radio', { name: 'Large' }) as HTMLInputElement).disabled).toBe(false);
    expect((screen.getByRole('radio', { name: 'Small' }) as HTMLInputElement).required).toBe(true);
  });

  it('在 FormField 内：标题经 aria-labelledby 关联，错误状态写在 radiogroup 上', () => {
    render(
      <FormField label="Size" error="Pick one">
        <RadioGroup>{options}</RadioGroup>
      </FormField>,
    );
    const group = screen.getByRole('radiogroup', { name: 'Size' });
    expect(group.getAttribute('aria-invalid')).toBe('true');
    expect(group.getAttribute('aria-describedby')).toBe(screen.getByText('Pick one').id);
  });

  it('defaultValue 与 value 同时给：警告', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    render(
      <RadioGroup value="s" defaultValue="m">
        {options}
      </RadioGroup>,
    );
    expect(warn).toHaveBeenCalledWith(expect.stringContaining('defaultValue'));
  });
});
