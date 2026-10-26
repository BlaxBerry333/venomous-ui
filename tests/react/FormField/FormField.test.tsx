import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { FormField } from '@packages/react/FormField';
import { Input } from '@packages/react/Input';
import { Textarea } from '@packages/react/Textarea';

describe('FormField', () => {
  it('label 关联控件；说明与错误经 aria-describedby 关联；错误时 aria-invalid', () => {
    render(
      <FormField label="Email" description="We never share it." error="Invalid email">
        <Input />
      </FormField>,
    );
    const input = screen.getByRole('textbox', { name: 'Email' });
    const description = screen.getByText('We never share it.');
    const error = screen.getByText('Invalid email');
    expect(input.getAttribute('aria-describedby')).toBe(`${description.id} ${error.id}`);
    expect(input.getAttribute('aria-invalid')).toBe('true');
    expect(input.closest('.venomous--FormField')!.hasAttribute('data-invalid')).toBe(true);
  });

  it('required：控件 required，标题旁有隐藏于读屏的星号', () => {
    render(
      <FormField label="Name" required>
        <Input />
      </FormField>,
    );
    const input = screen.getByRole('textbox', { name: 'Name' }) as HTMLInputElement;
    expect(input.required).toBe(true);
    expect(screen.getByText('*').getAttribute('aria-hidden')).toBe('true');
  });

  it('disabled 传给控件；控件自身 props 优先', () => {
    render(
      <FormField label="A" disabled required>
        <Textarea disabled={false} required={false} aria-invalid="false" />
      </FormField>,
    );
    const textarea = screen.getByRole('textbox') as HTMLTextAreaElement;
    expect(textarea.disabled).toBe(false);
    expect(textarea.required).toBe(false);
    expect(textarea.getAttribute('aria-invalid')).toBe('false');
  });

  it('控件自带 aria-describedby 与 FormField 的拼接；显式 controlId', () => {
    render(
      <FormField label="A" description="d" controlId="my-input">
        <Input aria-describedby="extra" />
      </FormField>,
    );
    const input = screen.getByRole('textbox');
    expect(input.id).toBe('my-input');
    expect(input.getAttribute('aria-describedby')).toBe(`${screen.getByText('d').id} extra`);
  });

  it('无说明 / 错误时不写 aria-describedby / aria-invalid', () => {
    render(
      <FormField className="x">
        <Input />
      </FormField>,
    );
    const input = screen.getByRole('textbox');
    expect(input.hasAttribute('aria-describedby')).toBe(false);
    expect(input.hasAttribute('aria-invalid')).toBe(false);
    expect(input.parentElement!.className).toBe('venomous--FormField x');
  });
});
