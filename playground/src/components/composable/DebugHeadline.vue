<template>
  <component :is="tag" :data-debug="debug ? 'headline' : undefined">
    <slot />
    <pre v-if="debug" :data-debug-context-level="level" />
  </component>
</template>

<script setup>
import { inject } from 'vue';
import useCOntentHeadline from '../../../../src/useContentHeadline';

const { tag, level } = useCOntentHeadline();
const debug = inject('debugHeadings', false);
</script>
