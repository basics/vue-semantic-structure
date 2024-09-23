<template>
  <component :is="tag" :data-debug="isDebug ? 'container' : undefined">
    <slot />
    <pre
      v-if="isDebug"
      class="structure-debug"
      :data-debug-parent-level="parentLevel"
      :data-debug-level="currentLevel"
      :data-debug-current-tag="currentTag" />
  </component>
</template>

<script setup>
import { inject, provide } from 'vue';
import useContentContainer from '../../../../src/useContentContainer';

const { parentLevel, currentLevel, currentTag } = useContentContainer();
const props = defineProps({
  debug: {
    type: Boolean,
    default: false
  }
});

const isDebug = props.debug || inject('debugHeadings', props.debug);
provide('debugHeadings', isDebug);
</script>
