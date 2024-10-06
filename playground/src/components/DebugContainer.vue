<template>
  <ContentContainer v-slot="{ parentLevel, currentLevel, currentTag }" :data-debug="isDebug ? 'container' : undefined">
    <slot />
    <pre
      v-if="isDebug"
      class="structure-debug"
      :data-debug-parent-level="parentLevel"
      :data-debug-current-level="currentLevel"
      :data-debug-current-tag="currentTag" />
  </ContentContainer>
</template>

<script setup>
import { inject, provide } from 'vue';
import { ContentContainer } from 'vue-semantic-structure';

const props = defineProps({
  debug: {
    type: Boolean,
    default: false
  }
});

const isDebug = props.debug || inject('debugHeadings', props.debug);
provide('debugHeadings', isDebug);
</script>
