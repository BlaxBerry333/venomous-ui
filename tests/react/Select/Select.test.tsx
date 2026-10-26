import { fireEvent, render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { describe, expect, it } from 'vitest';
import { FormField } from '@packages/react/FormField';
import { Select } from '@packages/react/Select';

describe('Select', () => {
  it('原生 select；包裹层带尺寸类名；ref 指向 select', () => {
    const ref = createRef<HTMLSelectElement>();
    const { container } = render(
      <Select ref={ref} className="x" aria-label="Fruit">
        <option value="a">Apple</option>
        <option value="b">Banana</option>
      </Select>,
    );
    const select = screen.getByRole('combobox', { name: 'Fruit' }) as HTMLSelectElement;
    expect(ref.current).toBe(select);
    expect(container.firstElementChild!.className).toBe(
      'venomous--Select venomous--Select--size-md x',
    );
    fireEvent.change(select, { target: { value: 'b' } });
    expect(select.value).toBe('b');
  });

  it('placeholder：非受控且无 defaultValue 时默认显示，选项不可再选', () => {
    render(
      <Select placeholder="Choose…" aria-label="Fruit">
        <option value="a">Apple</option>
      </Select>,
    );
    const select = screen.getByRole('combobox') as HTMLSelectElement;
    expect(select.value).toBe('');
    const placeholder = select.options[0]!;
    expect(placeholder.textContent).toBe('Choose…');
    expect(placeholder.disabled).toBe(true);
  });

  it('placeholder 与 defaultValue 同时给：以 defaultValue 为准', () => {
    render(
      <Select placeholder="Choose…" defaultValue="a" size="lg" aria-label="Fruit">
        <option value="a">Apple</option>
      </Select>,
    );
    expect((screen.getByRole('combobox') as HTMLSelectElement).value).toBe('a');
  });

  it('在 FormField 内关联标题与错误；禁用标在包裹层', () => {
    const { container } = render(
      <FormField label="Fruit" error="Required" disabled>
        <Select>
          <option value="a">Apple</option>
        </Select>
      </FormField>,
    );
    const select = screen.getByRole('combobox', { name: 'Fruit' });
    expect(select.getAttribute('aria-invalid')).toBe('true');
    expect(container.querySelector('.venomous--Select')!.hasAttribute('data-disabled')).toBe(true);
  });
});
