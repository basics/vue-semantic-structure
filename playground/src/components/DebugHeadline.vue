<template>
  <ContentHeadline v-slot="{ level }" :data-debug="debug ? 'headline' : undefined">
    <slot />
    <pre v-if="debug" :data-debug-context-level="level" />
  </ContentHeadline>
</template>

<script setup>
import { inject } from 'vue';
import { ContentHeadline } from 'vue-structural-headings';

const debug = inject('debugHeadings', false);
</script>
