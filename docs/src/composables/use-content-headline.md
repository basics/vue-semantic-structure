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

## Options

| Property | Type     | Description         | Default Value |
| -------- | -------- | ------------------- | ------------- |
| `tag`    | `String` | Tag for the element | `undefined`   |

## Return

| Property       | Type     | Description           |
| -------------- | -------- | --------------------- |
| `currentTag`   | `String` | Get current html tag. |
| `currentLevel` | `Number` | Get current level.    |
