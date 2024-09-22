<template>
  <component v-if="!abstract" :is="currentTag" v-bind="$attrs">
    <slot :level="level" :parentLevel="parentLevel" :currentTag="currentTag" />
  </component>
  <slot v-else :currentTag="currentTag" :parentLevel="parentLevel" :level="level" />
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
    const { parentLevel, level, currentTag } = useContentHeadline();
    return { parentLevel, level, currentTag };
  }
};
</script>
