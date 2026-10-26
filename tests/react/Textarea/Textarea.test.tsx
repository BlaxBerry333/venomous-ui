import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Textarea } from '@packages/react/Textarea';

describe('Textarea', () => {
  it('默认 3 行、可纵向拉伸', () => {
    render(<Textarea />);
    const textarea = screen.getByRole('textbox') as HTMLTextAreaElement;
    expect(textarea.getAttribute('rows')).toBe('3');
    expect(textarea.className).toBe('venomous--Textarea venomous--Textarea--resize-vertical');
  });

  it('rows / resize / className 可覆盖', () => {
    render(<Textarea rows={5} resize="none" className="x" />);
    const textarea = screen.getByRole('textbox') as HTMLTextAreaElement;
    expect(textarea.getAttribute('rows')).toBe('5');
    expect(textarea.className).toBe('venomous--Textarea venomous--Textarea--resize-none x');
  });
});
