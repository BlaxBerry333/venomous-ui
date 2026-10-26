import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { FormField } from '@packages/react/FormField';
import { Switch } from '@packages/react/Switch';

describe('Switch', () => {
  it('role=switch 的原生 checkbox；点击切换', () => {
    render(<Switch className="x">Wi-Fi</Switch>);
    const sw = screen.getByRole('switch', { name: 'Wi-Fi' }) as HTMLInputElement;
    expect(sw.type).toBe('checkbox');
    expect(sw.closest('label')!.className).toBe('venomous--Switch venomous--Switch--size-md x');
    fireEvent.click(sw);
    expect(sw.checked).toBe(true);
  });

  it('尺寸；禁用；无文字', () => {
    const { container } = render(<Switch size="sm" disabled aria-label="a" />);
    const label = container.querySelector('label')!;
    expect(label.classList.contains('venomous--Switch--size-sm')).toBe(true);
    expect(label.hasAttribute('data-disabled')).toBe(true);
    expect(container.querySelector('.venomous--Switch__label')).toBeNull();
  });

  it('在 FormField 内继承禁用', () => {
    render(
      <FormField label="Notifications" disabled>
        <Switch />
      </FormField>,
    );
    expect(
      (screen.getByRole('switch', { name: 'Notifications' }) as HTMLInputElement).disabled,
    ).toBe(true);
  });
});
