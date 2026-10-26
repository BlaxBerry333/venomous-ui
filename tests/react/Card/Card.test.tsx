import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Badge } from '@packages/react/Badge';
import { Card, CardBody, CardFooter, CardHeader, CardTitle } from '@packages/react/Card';
import { Skeleton } from '@packages/react/Skeleton';

describe('Card', () => {
  it('默认 outlined；子区块带各自类名', () => {
    render(
      <Card data-testid="card" className="x">
        <CardHeader data-testid="h">
          <CardTitle>Plan</CardTitle>
        </CardHeader>
        <CardBody data-testid="b">body</CardBody>
        <CardFooter data-testid="f">footer</CardFooter>
      </Card>,
    );
    expect(screen.getByTestId('card').className).toBe('venomous--Card venomous--Card--outlined x');
    expect(screen.getByRole('heading', { level: 3 }).className).toBe('venomous--Card__title');
    expect(screen.getByTestId('h').className).toBe('venomous--Card__header');
    expect(screen.getByTestId('b').className).toBe('venomous--Card__body');
    expect(screen.getByTestId('f').className).toBe('venomous--Card__footer');
  });

  it('elevated 变体', () => {
    render(<Card variant="elevated" data-testid="card" />);
    expect(screen.getByTestId('card').classList.contains('venomous--Card--elevated')).toBe(true);
  });
});

describe('Badge', () => {
  it('默认 neutral；变体与类名合并', () => {
    const { rerender } = render(<Badge className="x">New</Badge>);
    expect(screen.getByText('New').className).toBe('venomous--Badge venomous--Badge--neutral x');
    rerender(<Badge variant="danger">Failed</Badge>);
    expect(screen.getByText('Failed').className).toBe('venomous--Badge venomous--Badge--danger');
  });
});

describe('Skeleton', () => {
  it('默认 text 形状，对读屏器隐藏；数字尺寸转 px，字符串原样', () => {
    const { container, rerender } = render(<Skeleton width={120} height="2rem" className="x" />);
    const el = container.firstElementChild as HTMLElement;
    expect(el.getAttribute('aria-hidden')).toBe('true');
    expect(el.className).toBe('venomous--Skeleton venomous--Skeleton--text x');
    expect(el.style.width).toBe('120px');
    expect(el.style.height).toBe('2rem');
    rerender(<Skeleton shape="circle" style={{ margin: 4 }} />);
    expect(el.className).toBe('venomous--Skeleton venomous--Skeleton--circle');
    expect(el.style.width).toBe('');
    expect(el.style.margin).toBe('4px');
  });
});
