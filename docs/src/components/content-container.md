---
title: ContentHeadline
---

# {{$frontmatter.title}}

## Introduction

::: tip
Optionally, the composable [`useContentContainer`](../composables/use-content-container) can also be used as a wrapper.  
:::

The `ContentContainer` is used to map the depth of the element structure.

With each nested `ContentContainer` the element structure becomes one level deeper (`level`).

The appropriate HTML element for the page structure is determined based on the `level`. (e.g. `main`, `article`, `section`)

## Type

```ts

declare interface ContentContainerProps {
  tag?: string;
  rootTags?: string[];
  contentTags?: string[];
  level?: number;
  debug?: boolean;
}

declare interface ContentContainerContext extends ContentContainerProps {
  parentLevel: number;
  currentLevel: number;
  currentTag: string;
}
```

## Properties

### tag

- Type: `String`
- Default: `null`

Tag for the element.

### rootTags

- Type: `Array<String>`
- Default: `inject('semanticStructure_rootTags', ['main'])`

Available tags for the root structure.

*If not set, the value is inherited from the parent element.*

### contentTags

- Type: `Array<String>`
- Default: `inject('semanticStructure_contentTags', ['article', 'section'])`

Available tags for the content structure.

*If not set, the value is inherited from the parent element.*

### level

- Type: `Number`
- Default: `undefined`

Can be used to overwrite the level.

### debug

- Type: `Boolean`
- Default: `inject('semanticStructure_debug', false)`

If set, the following attributes are set on the element: `data-current-tag`, `data-current-level` and `data-parent-level`.

## v-slot

### default

| Property       | Type     | Description              |
| -------------- | -------- | ------------------------ |
| `currentTag`   | `String` | Get current element tag. |
| `parentLevel`  | `Number` | Get parent level.        |
| `currentLevel` | `Number` | Get current level.       |

## Example

```vue
<template>
  <ContentContainer>
    <header>
      <ContentHeadline> Primary Headline (h1) </ContentHeadline>
    </header>
    <ContentContainer>
      <ContentHeadline> Secondary Headline (h2) </ContentHeadline>
      <ContentContainer>
        <ContentHeadline> Tertiary Headline (h3) </ContentHeadline>
      </ContentContainer>
    </ContentContainer>
  </ContentContainer>
</template>

<script setup>
import { ContentContainer, ContentHeadline } from 'vue-semantic-structure';
</script>
```

```html
<main>
  <header>
    <h1> Primary Headline (h1) </h1>
  </header>
  <article>
    <h2> Secondary Headline (h2) </h2>
    <section>
      <h3> Tertiary Headline (h3) </h3>
    </section>
  </article>
</main>
