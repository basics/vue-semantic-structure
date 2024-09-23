# ContentContainer

## Introduction

::: tip
Optionally, the composable [`useContentContainer`](../composables/use-content-container) can also be used as a wrapper.  
:::

The `ContentContainer` is used to map the depth of the element structure.

With each nested `ContentContainer` the element structure becomes one level deeper (`level`).

The appropriate HTML element for the page structure is determined based on the `level`. (e.g. `main`, `section`, `article`)

## Properties

### abstract

- Type: `Boolean`
- Default: `false`

If set, the heading is rendered as an abstract heading. (e.g. `<slot />`)

### tag

- Type: `String`
- Default: `null`

Tag for the element.

### contentTags

- Type: `Array`
- Default: `['section', 'article']`

Available tags for the content structure.

### rootTags

- Type: `Array`
- Default: `['main', null]`

Available tags for the root structure.

### level

- Type: `Number`
- Default: `undefined`

Can be used to overwrite the level.

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
    <div>
      <ContentHeadline> Primary Headline (h1) </ContentHeadline>
    </div>
    <ContentContainer>
      <ContentHeadline> Secondary Headline (h2) </ContentHeadline>
      <ContentContainer>
        <ContentContainer>
          <ContentHeadline> Tertiary Headline (h3) </ContentHeadline>
        </ContentContainer>
      </ContentContainer>
    </ContentContainer>
  </ContentContainer>
</template>
```

```html
<main>
  <div>
    <h1> Primary Headline (h1) </h1>
  </div>
  <article>
    <h2> Secondary Headline (h2) </h2>
    <section>
      <article>
        <h3> Tertiary Headline (h3) </h3>
      </article>
    </section>
  </article>
</main>
