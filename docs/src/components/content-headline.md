---
title: ContentHeadline
---

# {{$frontmatter.title}}

## Introduction

::: tip
Optionally, the composable [`useContentHeadline`](../composables/use-content-headline) can also be used as a wrapper.  
:::

`ContentHeadline` is used to display the headline structure.

Example: `h1`, `h2`, `h3`, `h4`, `h5`, `h6`

The level of the heading is taken from the `ContentContainer`.

The deeper the nesting, the smaller the heading.

## Properties

### abstract

- Type: `Boolean`
- Default: `false`

If set, the heading is rendered as an abstract heading. (e.g. `<slot />`)

### tag

- Type: `String`
- Default: `null`

Tag for the element.

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
```
