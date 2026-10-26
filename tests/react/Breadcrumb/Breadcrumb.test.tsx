import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Breadcrumb, BreadcrumbItem } from '@packages/react/Breadcrumb';

const items = ['Home', 'Docs', 'Components', 'Forms', 'Input'];

function Trail(props: { maxItems?: number }) {
  return (
    <Breadcrumb {...props}>
      {items.map((name, i) =>
        i === items.length - 1 ? (
          <BreadcrumbItem key={name} current>
            {name}
          </BreadcrumbItem>
        ) : (
          <BreadcrumbItem key={name} href={`/${name}`}>
            {name}
          </BreadcrumbItem>
        ),
      )}
    </Breadcrumb>
  );
}

describe('Breadcrumb', () => {
  it('nav > ol > li；链接与当前页；分隔符对读屏器隐藏', () => {
    render(<Trail />);
    const nav = screen.getByRole('navigation', { name: 'Breadcrumb' });
    expect(screen.getAllByRole('listitem')).toHaveLength(5);
    expect(screen.getByRole('link', { name: 'Home' }).getAttribute('href')).toBe('/Home');
    expect(screen.getByText('Input').getAttribute('aria-current')).toBe('page');
    const separators = nav.querySelectorAll('.venomous--Breadcrumb__separator');
    expect(separators).toHaveLength(4);
    expect(separators[0]!.getAttribute('aria-hidden')).toBe('true');
  });

  it('maxItems：折叠中间层级，点省略号展开', () => {
    render(<Trail maxItems={3} />);
    expect(screen.getAllByRole('listitem')).toHaveLength(4);
    expect(screen.queryByText('Docs')).toBeNull();
    fireEvent.click(screen.getByRole('button', { name: 'Show all' }));
    expect(screen.getAllByRole('listitem')).toHaveLength(5);
  });

  it('层级数不超过 maxItems 时不折叠；自定义分隔符、名称与类名', () => {
    render(
      <Breadcrumb maxItems={5} separator=">" label="You are here" className="x" expandLabel="More">
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem className="y">Plain</BreadcrumbItem>
      </Breadcrumb>,
    );
    const nav = screen.getByRole('navigation', { name: 'You are here' });
    expect(nav.className).toBe('venomous--Breadcrumb x');
    expect(nav.querySelector('.venomous--Breadcrumb__separator')!.textContent).toBe('>');
    const plain = screen.getByText('Plain');
    expect(plain.tagName).toBe('SPAN');
    expect(plain.hasAttribute('aria-current')).toBe(false);
    expect(plain.className).toBe('venomous--Breadcrumb__current y');
  });
});
