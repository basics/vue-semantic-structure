---
title: useContentContainer
---

# {{$frontmatter.title}}

## Introduction

::: tip
Optionally, the component [`<ContentContainer>`](../components/content-container) can also be used as a wrapper.  
:::

The composable `useContentContainer()` is used to map the depth of the page structure.

With each call of `useContentContainer()` in nested components, the `level` of the element structure is increased by one `level`.

The appropriate HTML element for the page structure is determined based on the `level`. (e.g. `main`, `section`, `article`)

```vue
<template>
  <component v-if="currentTag" :is="currentTag">
    <slot />
  </component>
  <slot v-else />
</template>

<script setup>
import { useContentContainer } from 'vue-semantic-structure';

const { currentTag } = useContentContainer();
</script>

```

## Type

```ts
function useContentContainer(options?: ContentContainerOptions): ContentContainerReturn;

declare interface ContentContainerOptions {
  tag?: string;
  contentTags?: Array<string>;
  rootTags?: Array<string>;
  level?: number;
}

declare interface ContentContainerReturn {
  parentLevel: ComputedRef<number>;
  currentLevel: ComputedRef<number>;
  currentTag: ComputedRef<string>;
}
```

## Options

| Property      | Type     | Description                               | Default Value                                                   |
| ------------- | -------- | ----------------------------------------- | --------------------------------------------------------------- |
| `tag`         | `String` | Can be used to overwrite the tag.         | `undefined`                                                     |
| `contentTags` | `Array`  | Available tags for the content structure. | `inject('semanticStructure_contentTags', ['article', 'section'])` |
| `rootTags`    | `Array`  | Available tags for the root structure.    | `inject('semanticStructure_rootTags', ['main'])`                  |
| `level`       | `Number` | Can be used to overwrite the level.       | `undefined`                                                     |

## Result

| Property       | Type                   | Description           |
| -------------- | ---------------------- | --------------------- |
| `parentLevel`  | `ComputedRef<Number>;` | Get parent level.     |
| `currentLevel` | `ComputedRef<Number>`  | Get current level.    |
| `currentTag`   | `ComputedRef<String>`  | Get current html tag. |
