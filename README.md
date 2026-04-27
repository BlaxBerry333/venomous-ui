# venomous-ui

本项目主要提供 headless 组件与内置样式

## 用法

### 模式 A —— 只用 headless 组件

<details>
  <summary>
    <strong>React</strong>
  </summary>

```tsx
import { Tabs } from 'venomous-ui/react/components';

export default function Demo() {
  return (
    <Tabs>
      <TabTitle>A</TabTitle>
      <TabTitle>B</TabTitle>

      <TabPanel>AA</TabPanel>
      <TabPanel>BB</TabPanel>
    </Tabs>
  );
}
```

</details>

<details>
 <summary>
    <strong>Vue</strong>
  </summary>

```html
<script setup lang="ts">
  import { Tabs } from 'venomous-ui/vue/components';
</script>

<template>
  <Tabs>
    <TabTitle>A</TabTitle>
    <TabTitle>B</TabTitle>

    <TabPanel>AA</TabPanel>
    <TabPanel>BB</TabPanel>
  </Tabs>
</template>
```

</details>

---

### 模式 B —— 使用 headless 组件 + 内置样式

<details>
 <summary>
    <strong>React</strong>
  </summary>

```tsx
import { Tabs } from 'venomous-ui/react/components';
import 'venomous-ui/styles/reset.css';
import 'venomous-ui/styles/components/tabs.css';

export default function Demo() {
  return (
    <Tabs>
      <TabTitle>A</TabTitle>
      <TabTitle>B</TabTitle>

      <TabPanel>AA</TabPanel>
      <TabPanel>BB</TabPanel>
    </Tabs>
  );
}
```

</details>

<details>
 <summary>
    <strong>Vue</strong>
  </summary>

```html
<script setup lang="ts">
  import { Tabs } from 'venomous-ui/vue/components';
  import 'venomous-ui/styles/reset.css';
  import 'venomous-ui/styles/components/tabs.css';
</script>

<template>
  <Tabs>
    <TabTitle>A</TabTitle>
    <TabTitle>B</TabTitle>

    <TabPanel>AA</TabPanel>
    <TabPanel>BB</TabPanel>
  </Tabs>
</template>

<style scoped>
  .venomous__Tabs {
    /* ... */
  }

  .venomous__TabTitle {
    /* ... */
  }

  .venomous__TabPanel {
    /* ... */
  }
</style>
```

</details>

---

### 模式 C —— 只用内置样式

<details>
 <summary>
    <strong>Astro</strong>
  </summary>

```html
---
import 'venomous-ui/styles/reset.css';
import 'venomous-ui/styles/components/tabs.css';
---

<div className="venomous__Tabs">
  <div className="venomous__TabTitle">...</div>
  <div className="venomous__TabPanel">...</div>
</div>
```

</details>
