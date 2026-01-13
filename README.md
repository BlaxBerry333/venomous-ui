# Venomous UI

`venomous-ui` is a lightweight UI component library that supports multiple front-end frameworks.

- Supports multiple front-end frameworks such as `React` and `Vue` etc.
- Tree-shakeable: Import only what you need
- TypeScript First: Full type safety and IntelliSense support

<br/>

## Documentation

Visit the [Storybook documentation](https://blaxberry333.github.io/venomous-ui/) for detailed component API and examples.

<br/>

## Installation

```bash
# npm
npm install github:BlaxBerry333/venomous-ui#release

# yarn
yarn add github:BlaxBerry333/venomous-ui#release

# pnpm
pnpm add github:BlaxBerry333/venomous-ui#release
```

<br/>

## Quick Start

### React

```tsx
"use client";

import { ThemeProvider, Button } from "venomous-ui/react/components";

function App() {
  return (
    <ThemeProvider>
      <Button text="Click me" onClick={() => console.log("Clicked!")} />
    </ThemeProvider>
  );
}
```

### Vue

```html
Coming soon...
```

<br/>

## License

MIT
