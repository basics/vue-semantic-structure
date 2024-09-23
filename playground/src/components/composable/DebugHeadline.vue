<template>
  <component :is="tag" :data-debug="debug ? 'headline' : undefined">
    <slot />
    <pre v-if="debug" :data-debug-current-level="currentLevel" />
  </component>
</template>

<script setup>
import { inject } from 'vue';
import useContentHeadline from '../../../../src/useContentHeadline';

const { tag, currentLevel } = useContentHeadline();
const debug = inject('debugHeadings', false);
</script>
