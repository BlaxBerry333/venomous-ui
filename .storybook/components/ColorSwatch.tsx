export function ColorSwatch({ value }: { value: string }) {
  return (
    <span
      style={{
        display: 'inline-block',
        width: 32,
        height: 32,
        borderRadius: 4,
        background: value,
        border: '1px solid var(--venomous-color-border-default, #e5e7eb)',
        verticalAlign: 'middle',
      }}
    />
  );
}
