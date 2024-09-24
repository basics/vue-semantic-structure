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
import { useContentContainer } from 'vue-semantic-structure'

const { currentTag } = useContentContainer()
</script>

```

## Options

| Property      | Type     | Description                               | Default Value            |
| ------------- | -------- | ----------------------------------------- | ------------------------ |
| `tag`         | `String` | Can be used to overwrite the tag.         | `undefined`              |
| `contentTags` | `Array`  | Available tags for the content structure. | `['section', 'article']` |
| `rootTags`    | `Array`  | Available tags for the root structure.    | `['main', undefined]`    |
| `level`       | `Number` | Can be used to overwrite the level.       | `undefined`              |

## Return

| Property       | Type     | Description           |
| -------------- | -------- | --------------------- |
| `currentTag`   | `String` | Get current html tag. |
| `parentLevel`  | `Number` | Get parent level.     |
| `currentLevel` | `Number` | Get current level.    |
