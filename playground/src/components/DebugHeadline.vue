<template>
  <ContentHeadline v-slot="{ currentLevel }" :data-debug="debug ? 'headline' : undefined">
    <slot />
    <pre v-if="debug" :data-debug-current-level="currentLevel" />
  </ContentHeadline>
</template>

<script setup>
import { inject } from 'vue';
import { ContentHeadline } from 'vue-semantic-structure';

const debug = inject('debugHeadings', false);
</script>
