/**
 * @file UsageModes.mdx 用到的代码片段。
 *
 * 可避开 prettier 对 mdx 内嵌 template literal 的已知格式化问题。
 */

export const MODE_A_REACT = `
import { Tabs, TabTitle, TabPanel } from 'venomous-ui/react/components';

export default function Demo() {
  return (
    <Tabs>
      <TabTitle>A</TabTitle>
      <TabTitle>B</TabTitle>

      <TabPanel>AA</TabPanel>
      <TabPanel>BB</TabPanel>
    </Tabs>
  );
}`;

export const MODE_A_VUE = `
<script setup lang="ts">
  import { Tabs, TabTitle, TabPanel } from 'venomous-ui/vue/components';
</script>

<template>
  <Tabs>
    <TabTitle>A</TabTitle>
    <TabTitle>B</TabTitle>

    <TabPanel>AA</TabPanel>
    <TabPanel>BB</TabPanel>
  </Tabs>
</template>`;

export const MODE_B_REACT = `
import { Tabs, TabTitle, TabPanel } from 'venomous-ui/react/components';
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
}`;

export const MODE_B_VUE = `
<script setup lang="ts">
  import { Tabs, TabTitle, TabPanel } from 'venomous-ui/vue/components';
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
</template>`;

export const MODE_C_ASTRO = `
---
import 'venomous-ui/styles/reset.css';
import 'venomous-ui/styles/components/tabs.css';
---

<div class="venomous__Tabs">
  <div class="venomous__TabTitle">A</div>
  <div class="venomous__TabTitle">B</div>

  <div class="venomous__TabPanel">AA</div>
  <div class="venomous__TabPanel">BB</div>
</div>`;
