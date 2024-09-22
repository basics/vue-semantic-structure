# useContentContainer

::: tip
Optional kann auch die Komponente [`<ContentHeadline>`](../components/content-headlien.md) als Wrapper verwendet werden.  
:::

Das Composable `useContentContainer` wird eingesetzt um die Tiefe der Seitenstruktur abzubilden.

Mit jedem aufruf von `useContentContainer()` in verschachtelten Komponenten wird die steigt das Level der Seitenstruktur um eine Ebene (`level`).

Anhand des `level` wird das passende HTML-Element für die Seitenstruktur ermittelt. (e.g. `main`, `section`, `article`)

```vue
<template>
  <component :is="currentTag">
    <slot />
  </component>
</template>

<script setup>
import { useContentContainer } from 'vue-semantic-structure'

const { currentTag } = useContentHeadline()
</script>

```

## Options

| Property | Type     | Description                    | Default Value |
| -------- | -------- | ------------------------------ | ------------- |
| `tag`    | `String` | DDer Tag für das HTML-Element. | `undefined`   |

## Return

| Property       | Type     | Description           |
| -------------- | -------- | --------------------- |
| `currentTag`   | `String` | Get current html tag. |
| `currentLevel` | `Number` | Get current level.    |
