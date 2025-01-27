---
title: Nuxt 3 Integration
---

# {{$frontmatter.title}}

The integration in Nuxt is done in a few steps.

The following settings must be adjusted:

- Layout
- Page Component

## Layout

In the layout, the component `ContentContainer` must be placed around the respective page slot.
The `ContentContainer` defined there represents the `main` of the page.

::: code-group

```vue [layouts/default.vue]
<template>
  <div>
    <!-- main -->
    <ContentContainer>
      <slot />
    </ContentContainer>
  </div>
</template>

<script setup>
import { ContentContainer } from 'vue-semantic-structure'
</script>
```

:::

## Page Component

With the exception of the first component, each additional component must contain a `ContentContainer`.

::: code-group

```vue[pages/index.vue]
<template>
  <div>
    <FirstComponent />
    <OtherComponentA />
    <OtherComponentB />
  </div>
</template>

<script setup>
import FirstComponent from '~/components/FirstComponent.vue'
import OtherComponentA from '~/components/OtherComponentA.vue'
import OtherComponentB from '~/components/OtherComponentB.vue'

```

```vue[FirstComponent.vue]
<template>
  <header>
    <!-- h1 -->
    <ContentHeadline>Headline</ContentHeadline>
  </header>
</template>

<script setup>
import { ContentHeadline } from 'vue-semantic-structure'
</script>
```

```vue[OtherComponentA.vue]
<template>
  <!-- article -->
  <ContentContainer>
    <!-- h2 -->
    <ContentHeadline>Headline</ContentHeadline>
  </ContentContainer>
</template>

<script setup>
import { ContentContainer, ContentHeadline } from 'vue-semantic-structure'
</script>
```

```vue[OtherComponentB.vue]
<template>
  <!-- article -->
  <ContentContainer>
    <!-- h2 -->
    <ContentHeadline>Headline</ContentHeadline>
  </ContentContainer>
</template>

<script setup>
import { ContentContainer, ContentHeadline } from 'vue-semantic-structure'
</script>
```

:::

## Register Global

`ContentHeadline` and `ContentContainer` can also be defined globally.

Only one plugin needs to be created for this.

::: code-group

```js[Nuxt 3: plugin/vue-semantic-structure.js]
import { defineNuxtPlugin } from 'nuxt/app';
import { ContentHeadline, ContentContainer } from 'vue-semantic-structure';

export default defineNuxtPlugin({
  async setup(nuxtApp) {
    nuxtApp.vueApp.component('ContentHeadline', ContentHeadline);
    nuxtApp.vueApp.component('ContentContainer', ContentContainer);
  }
});
```

:::
