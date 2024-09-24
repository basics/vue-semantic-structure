---
title: Introduction
---

# {{$frontmatter.title}}

## What does Vue Structural Headings do?

It provides two components and optionally compoasables to help you build semantic HTML structure.

| Component | Composable |
| --- | --- |
| [ContentContainer](/components/content-container) | [useContentContainer](/composables/use-content-container) |
| [ContentHeadline](/components/content-headline) | [useContentHeadline](/composables/use-content-headline) |

### ContentContainer

The `ContentContainer` is used to display the depth of the page structure.

With each nested `ContentContainer`, the page structure becomes one level deeper (`level`).

The appropriate HTML element for the page structure is determined based on the `level`.

### ContentHeadline

The `ContentHeadline` is used to display the heading structure.

The `ContentHeadline` takes the level from the `ContentContainer` and sets the appropriate HTML element for the heading.

## Example

If `ContentContainer` is level 2, `ContentHeadline` level 2 is rendered as `h2`.

```vue
<template>
  <div>
    <header>Header</header>
    <ContentContainer>
      <header>
        <ContentHeadline> Primary Headline (h1) </ContentHeadline>
      </header>
      <ContentContainer>
        <ContentHeadline> Secondary Headline 1 (h2) </ContentHeadline>
        <ContentContainer>
          <ContentHeadline> Tertiary Headline 1.1 (h3) </ContentHeadline>
        </ContentContainer>
        <ContentContainer>
          <ContentHeadline> Tertiary Headline 1.2 (h3) </ContentHeadline>
        </ContentContainer>
      </ContentContainer>
      <ContentContainer>
        <ContentHeadline> Secondary Headline 2 (h2) </ContentHeadline>
        <ContentContainer>
          <ContentHeadline> Tertiary Headline 2.1 (h3) </ContentHeadline>
        </ContentContainer>
      </ContentContainer>
    </ContentContainer>
    <footer>Footer</footer>
  </div>
</template>
```

```html
<div>
  <header>Header</header>
  <main>
    <header>
      <h1> Primary Headline (h1) </h1>
    </header>
    <article>
      <h2> Secondary Headline 1 (h2) </h2>
      <section>
        <h3> Tertiary Headline 1.1 (h3) </h3>
      </section>
      <section>
        <h3> Tertiary Headline 1.2 (h3) </h3>
      </section>
    </article>
    <article>
      <h2> Secondary Headline 2 (h2) </h2>
      <section>
        <h3> Tertiary Headline 2.1 (h3) </h3>
      </section>
    </article>
  </main>
  <footer>Footer</footer>
</div>
```
