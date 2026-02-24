# Venomous UI

A lightweight, cross-framework UI component library with **Zero Runtime CSS** and **Unstyled by Default** design.

## Features

- **Zero Runtime CSS** - Pure CSS, no runtime style computation
- **Cross-framework** - Same API for React and Vue
- **Unstyled by Default** - Components output semantic class names, styles provided via separate CSS files
- **Tree-shakeable** - Import only what you need
- **TypeScript First** - Full type safety and IntelliSense
- **Debug Friendly** - Semantic class names like `venomous-button--solid`

## Installation

```bash
npm install github:BlaxBerry333/venomous-ui#release
```

## Quick Start

### React

```tsx
import { Button } from "venomous-ui/react/components";
import "venomous-ui/core/styles/variables/index.css";
import "venomous-ui/core/styles/components/button.css";

function App() {
  return <Button variant="solid">Click me</Button>;
}
```

### Vue

```vue
<script setup>
import { Button } from "venomous-ui/vue/components";
import "venomous-ui/core/styles/variables/index.css";
import "venomous-ui/core/styles/components/button.css";
</script>

<template>
  <Button variant="solid">Click me</Button>
</template>
```

## Documentation

Visit the [Storybook documentation](https://blaxberry333.github.io/venomous-ui/) for detailed component API and examples.

## License

MIT
