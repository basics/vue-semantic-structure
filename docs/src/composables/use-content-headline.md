---
title: useContentHeadline
---

# {{$frontmatter.title}}

## Introduction

::: tip
Optionally, the component [`<ContentHeadline>`](../components/content-headline) can also be used as a wrapper.  
:::

`useContentHeadline()` is used to display the headline structure.

Example: `h1`, `h2`, `h3`, `h4`, `h5`, `h6`

The level of the heading is taken from `useContentContainer()` or `ContentContainer`.

The deeper the nesting, the smaller the heading.

```vue
<template>
  <component :is="currentTag">
    <slot />
  </component>
</template>

<script setup>
import { useContentHeadline } from 'vue-semantic-structure';

const { currentTag } = useContentHeadline();
</script>

```

## Type

```ts
function useContentHeadline(options?: ContentHeadlineOptions): ContentHeadlineReturn;

declare interface ContentHeadlineOptions {
  tag?: string;
}

declare interface ContentHeadlineReturn {
  parentLevel: ComputedRef<number>;
  currentLevel: ComputedRef<number>;
  currentTag: ComputedRef<string>;
}
```

## Options

| Property | Type                  | Description         | Default Value |
| -------- | --------------------- | ------------------- | ------------- |
| `tag`    | `String`\|`undefined` | Tag for the element | `undefined`   |

## Result

| Property       | Type                   | Description           |
| -------------- | ---------------------- | --------------------- |
| `parentLevel`  | `ComputedRef<Number>;` | Get parent level.     |
| `currentLevel` | `ComputedRef<Number>`  | Get current level.    |
| `currentTag`   | `ComputedRef<String>`  | Get current html tag. |
