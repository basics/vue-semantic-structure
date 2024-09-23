# useContentContainer

::: tip
Optional kann auch die Komponente [`<ContentContainer>`](../components/content-container) als Wrapper verwendet werden.  
:::

Das Composable `useContentContainer` wird eingesetzt um die Tiefe der Seitenstruktur abzubilden.

Mit jedem aufruf von `useContentContainer()` in verschachtelten Komponenten wird die steigt das Level der Seitenstruktur um eine Ebene (`level`).

Anhand des `level` wird das passende HTML-Element für die Seitenstruktur ermittelt. (e.g. `main`, `section`, `article`)

```vue
<template>
  <component v-if="currentTag" :is="currentTag">
    <slot />
  </component>
  <slot v-else />
</template>

<script setup>
import { useContentContainer } from 'vue-semantic-structure'

const { currentTag } = useContentContainer()
</script>

```

## Options

| Property      | Type     | Description                                              | Default Value            |
| ------------- | -------- | -------------------------------------------------------- | ------------------------ |
| `tag`         | `String` | Der Tag für das HTML-Element. Optional zu überschreiben. | `undefined`              |
| `contentTags` | `Array`  | Die möglichen contentTags für das HTML-Element.          | `['section', 'article']` |
| `rootTags`    | `Array`  | Die möglichen Tag-Strukturen für das HTML-Element.       | `['main', undefined]`    |
| `level`       | `Number` | Der Level für das HTML-Element.                          | `undefined`              |

## Return

| Property       | Type     | Description           |
| -------------- | -------- | --------------------- |
| `currentTag`   | `String` | Get current html tag. |
| `parentLevel`  | `Number` | Get parent level.     |
| `currentLevel` | `Number` | Get current level.    |
