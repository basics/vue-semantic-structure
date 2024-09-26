<template>
  <component v-if="!abstract" :is="currentTag" v-bind="$attrs">
    <slot :currentTag="currentTag" :parentLevel="parentLevel" :currentLevel="currentLevel" />
  </component>
  <slot v-else :currentTag="currentTag" :parentLevel="parentLevel" :currentLevel="currentLevel" />
</template>

<script>
import useContentHeadline from './useContentHeadline';

export default {
  inheritAttrs: false,

  props: {
    abstract: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: null
    }
  },

  setup() {
    const { parentLevel, currentLevel, currentTag } = useContentHeadline();
    return { parentLevel, currentLevel, currentTag };
  }
};
</script>
