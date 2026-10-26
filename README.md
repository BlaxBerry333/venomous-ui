# venomous-ui

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Storybook](https://img.shields.io/badge/Storybook-Live%20Demo-FF4785?logo=storybook&logoColor=white)](https://blaxberry333.github.io/venomous-ui/?path=/docs/introduction-overview--docs)

A styled React component library with its own visual language.

- **Styled by design** — components ship with venomous styles; importing a component loads its CSS
- **Light / dark themes** — switch with `useTheme`, no flash on load with `ThemeScript`
- **Themeable** — override semantic CSS variables such as `--venomous-color-accent`
- **SSR-ready** — works with Next.js App Router and other SSR frameworks
- **Accessible** — keyboard interaction and ARIA semantics built in

## Installation

Not published to npm yet — install directly from GitHub:

```bash
npm install github:BlaxBerry333/venomous-ui#release
```

Requires React 18 or 19.

## Quick start

```tsx
// app/layout.tsx (Next.js App Router)
import { ThemeScript } from 'venomous-ui/react';
import 'venomous-ui/styles/reset.css';
import 'venomous-ui/styles/themes/light.css';
import 'venomous-ui/styles/themes/dark.css';

export default function RootLayout({ children }) {
  return (
    // ThemeScript sets data-theme on <html> before hydration
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

```tsx
import { Button } from 'venomous-ui/react';

export function Page() {
  return <Button variant="primary">Click me</Button>;
}
```

## Documentation

Component API and examples: [Storybook](https://blaxberry333.github.io/venomous-ui/?path=/docs/introduction-overview--docs)

## License

MIT
