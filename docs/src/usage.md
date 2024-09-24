---
title: Usage
---

# {{$frontmatter.title}}

The standard behavior of `vue-semantic-structure` defines the most common approach for the use of HTML structure components.

In this structure, the main content contains different modules *(example: Stage (Hero), Text-Image, Gallery, etc.)*.

The main structure is in the `<main>` tag, which contains the main components.

::: code-group

```vue [Vue]
<template>
  <ContentContainer>
    <header class="hero">…</header>
    <ContentContainer class="text-image">…</ContentContainer>
    <ContentContainer class="gallery">…</ContentContainer>
  </ContentContainer>
</template>
```

```html [HTML]
<main>
  <header class="hero">…</header>
  <section class="text-image">…</section>
  <section class="gallery">…</section>
</main>
```

:::

## Extended example

The behavior of the `ContentContainer` can also be adapted for blog article pages.

Here, an `<article>` is often used in the `<main>` tag, for which the `ContentContainer` must be adapted.

The `rootTags` property must be extended by an `<article>` (e.g. `['main', 'article']`).

It is recommended to create a separate component that extends the `ContentContainer`.

### `CustomContentContainer.vue`

```vue
<template>
  <ContentContainer :root-tags="['main', 'article']">
    <slot />
  </ContentContainer>
</template>

<script setup>
import { ContentContainer } from 'vue-semantic-structure';
</script>
```

In comparison to the basic application, the entire content is enclosed in another `CustomContentContainer` (e.g. `ContentContainer`), which represents the `<article>` tag.

::: code-group

```vue [Vue]
<template>
  <CustomContentContainer>
    <CustomContentContainer>
      <header class="hero">…</header>
      <CustomContentContainer class="text-image">…</CustomContentContainer>
      <CustomContentContainer class="gallery">…</CustomContentContainer>
    </CustomContentContainer>
  </CustomContentContainer>
</template>
```

```html [HTML]
<main>
  <article>
    <header class="hero">…</header>
    <section class="text-image">…</section>
    <section class="gallery">…</section>
  </article>
</main>
```

:::
