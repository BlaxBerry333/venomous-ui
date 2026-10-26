import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { describe, expect, it } from 'vitest';
import { Input } from '@packages/react/Input';

describe('Input', () => {
  it('默认 md 尺寸，类名合并，透传原生属性与 ref', () => {
    const ref = createRef<HTMLInputElement>();
    render(<Input ref={ref} className="x" placeholder="p" />);
    const input = screen.getByPlaceholderText('p');
    expect(input.className).toBe('venomous--Input venomous--Input--size-md x');
    expect(ref.current).toBe(input);
  });

  it('size 控制尺寸类名；不在 FormField 内时原样使用 props', () => {
    render(<Input size="lg" id="a" aria-invalid />);
    const input = screen.getByRole('textbox');
    expect(input.classList.contains('venomous--Input--size-lg')).toBe(true);
    expect(input.id).toBe('a');
    expect(input.getAttribute('aria-invalid')).toBe('true');
  });
});
